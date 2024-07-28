import { useState } from "react";

import useAuthStore from "./useAuthStore";

import { Link, useNavigate } from "react-router-dom";
// wastenot@commanderai.com
// pass: 12345
// https://app-stg.commanderai.com/onboarding
function App() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const isSignUp = useAuthStore((state) => state.isSignUp);

  const loading = useAuthStore((state) => state.loading);

  const toggleMode = useAuthStore((state) => state.toggleMode);

  const handleSignUp = useAuthStore((state) => state.handleSignUp);

  const handleSignIn = useAuthStore((state) => state.handleSignIn);

  const navigate = useNavigate();

  const handleFormSubmit = async (e:any) => {
    e.preventDefault();

    if (isSignUp && password !== confirmPassword) {
      alert("Passwords don't match");

      return;
    }

    try {
      if (isSignUp) {
        await handleSignUp(email, password, confirmPassword);
      } else {
        await handleSignIn(email, password);

        navigate("/onboarding");
      }
    } catch (error) {
      console.error("Authentication Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row overflow-auto ">
          <div className="w-full lg:min-h-dvh lg:w-6/12 md:p-2  lg:block">
              <div
                className="min-h-full block md:flex flex-col justify-between rounded-lg"
                style={{
                  backgroundImage: 'url("src/assets/Background.png")',

                  backgroundSize: "cover",

                  backgroundPosition: "center center",
                }}
              >
                <div className="px-5 py-5 flex flex-col items-center justify-center">
                  <span className="p-[19.50px]">
                    {" "}
                    <img
                      src="/src/assets/Logo.png"
                      alt="logo"
                      className=""
                    />{" "}
                  </span>
                </div>

                <div className="flex w-full items-center justify-center md:max-w-md xl:max-w-xl mx-auto">
                  <img
                    src="/src/assets/Charts.png"
                    alt="FeatureGraphCard"
                    className="w-full"
                  />
                </div>

                <div className="flex items-center justify-center md:text-[2rem] lg:text-[2.625rem] text-[#FFFFFF]">
                  <p className="mt-auto">AI built for sales</p>
                </div>

                <div className="flex items-center justify-center text-xs text-[#ffffff] pb-[20px]">
                  <span>© CommanderAl, Inc. 2024</span>
                </div>
              </div>
            </div>

      <div className="md:w-1/2 flex flex-col items-center justify-center p-4">
        <p className="text-xl md:text-2xl mb-2">
          {isSignUp ? "Hello!" : "Welcome Back!"}
        </p>

        <span className="mb-4 text-center">
          {isSignUp
            ? "Enter your e-mail and password"
            : "Sign into your account"}
        </span>

        <form onSubmit={handleFormSubmit} className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block">E-mail</label>

            <input
              className="border-gray-800 border-2 rounded-lg w-full p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block">Password</label>

            <input
              type="password"
              className="border-gray-800 border-2 rounded-lg w-full p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {isSignUp && (
            <div className="mb-4">
              <label className="block">Confirm Password</label>

              <input
                type="password"
                className="border-gray-800 border-2 rounded-lg w-full p-2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}

          {!isSignUp && (
            <div className="text-right mb-4">
             <Link to="/forgot-password" className="text-blue-500">
          Forgot Your Password?
        </Link>
            </div>
          )}

          <button
            type="submit"
            className="bg-[#08736D] p-2 rounded-xl text-white w-full mb-4"
            disabled={loading}
          >
            {loading
              ? isSignUp
                ? "Signing Up..."
                : "Signing In..."
              : isSignUp
              ? "Sign Up"
              : "Sign In"}
          </button>

          <p className="text-center mb-2">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <span onClick={toggleMode} className="text-blue-500 cursor-pointer">
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </p>

          <p className="text-center mb-2">or</p>

          {/* Sign Up with Google */}

          <button
            type="button"
            className="flex items-center justify-center border-[#08736D] border-2 rounded-lg mb-2 gap-2 p-2 w-full"
          >
            <img
              src="/src/assets/lead-icon-google.png"
              alt="google-logo"
              className="ml-4"
            />
            Sign Up with Google
          </button>

          {/* Sign Up with Outlook */}

          <button
            type="button"
            className="flex items-center justify-center border-[#08736D] border-2 rounded-lg mb-2 gap-2 p-2 w-full"
          >
            <img
              src="/src/assets/lead-icon.png"
              alt="outlook-logo"
              className="ml-4"
            />
            Sign Up with Outlook
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
