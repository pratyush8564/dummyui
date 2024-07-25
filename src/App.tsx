import  { useState } from "react";
import useAuthStore from "./useAuthStore";
import { useNavigate } from "react-router-dom";

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

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    if (isSignUp && password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      if (isSignUp) {
        await handleSignUp(email, password, confirmPassword);
        // After successful sign-up, you might navigate somewhere else if needed
      } else {
        await handleSignIn(email, password);
        // After successful sign-in, redirect to onboarding screen
        navigate("/onboarding");
      }
    } catch (error) {
      console.error("Authentication Error:", error);
      // Handle error states or feedback to the user
    }
  };

  return (
    <>
      <div className="flex">
        <div>
          <img
            src="/src/assets/Background.png"
            alt="background"
            width="622px"
            height="200px"
            className="mt-8 ml-8 rounded-xl"
          />
        </div>
        <div className="absolute ">
          <div className="flex justify-center mt-16 ml-24">
            <img src="/src/assets/Logo.png" alt="logo" className="" />
          </div>
          <div>
            <img
              src="/src/assets/Charts.png"
              width="500"
              height="263"
              className="flex justify-center items-center ml-16  mt-24"
            />
          </div>
          <div>
            <p className="flex justify-center items-center text-4xl text-white font-normal mt-8 ml-24">
              {isSignUp ? "AI built for sales" : "Welcome Back!"}
            </p>
            <p className="flex justify-center text-white mt-8 ml-24">
              © CommanderAl, Inc. 2024
            </p>
          </div>
        </div>
        <div className="mt-32 ml-64 flex flex-col">
          <p className="text-2xl flex justify-center mb-2">
            {isSignUp ? "Hello!" : "Welcome Back!"}
          </p>
          <span className="mb-2">
            {isSignUp
              ? "Enter your e-mail and password"
              : "Sign into your account"}
          </span>
          <form onSubmit={handleFormSubmit}>
            <div className="mt-2">
              <label>E-mail</label>
              <br />
              <input
                className="border-gray-800 border-2 rounded-lg w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <label>Password</label>
              <br />
              <input
                type="password"
                className="border-gray-800 border-2 rounded-lg w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Confirm Password field for signup */}
            {isSignUp && (
              <div className="mt-2">
                <label>Confirm Password</label>
                <br />
                <input
                  type="password"
                  className="border-gray-800 border-2 rounded-lg w-full"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            )}
            {/* Forgot Password link for signin */}
            {!isSignUp && (
              <span className="ml-16 text-blue-500">Forgot Your Password?</span>
            )}
            <div className="mt-4">
              <button
                type="submit"
                className="bg-[#08736D] p-2 rounded-xl text-white w-full"
                disabled={loading}
              >
                {loading
                  ? isSignUp
                    ? "Signing Up..."
                    : "Signing In..."
                  : isSignUp
                  ? "SignUp"
                  : "SignIn"}
              </button>
            </div>
          </form>
          <div className="flex flex-col mt-2">
            <p>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <span
                onClick={toggleMode}
                className="text-blue-500 cursor-pointer"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </span>
            </p>
            <p className="text-center mb-2">or</p>
            {/* Sign Up with Google */}
            <p className="flex items-center justify-center border-[#08736D] border-2 rounded-lg mb-2 gap-2 p-1">
              <img
                src="/src/assets/lead-icon-google.png"
                alt="google-logo"
                className="ml-4"
              />{" "}
              Sign Up with Google
            </p>
            {/* Sign Up with Outlook */}
            <p>
              <img
                src="/src/assets/lead-icon.png"
                alt="outlook-logo"
                className="ml-4"
              />{" "}
              Sign Up with Outlook
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
