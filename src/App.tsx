import { useState } from "react";
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
    <div className="min-h-screen flex flex-col md:flex-row overflow-auto">
      <div className="md:w-1/2 flex flex-col items-center justify-center relative p-4 min-h-screen m-4">
        <img
          src="/src/assets/Background.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 overflow-auto">
          <div className="mb-8">
            <img src="/src/assets/Logo.png" alt="logo" className="mx-auto" />
          </div>
          <div className="flex justify-center items-center w-full mb-8">
            <img
              src="/src/assets/Charts.png"
              alt="charts"
              className="w-full max-w-xs md:max-w-md mx-auto"
            />
          </div>
          <p className="text-2xl md:text-4xl text-white font-normal text-center mb-4">
            AI built for sales
          </p>
          <p className="text-white text-center">© CommanderAl, Inc. 2024</p>
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
              <a href="#" className="text-blue-500">Forgot Your Password?</a>
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
            <span
              onClick={toggleMode}
              className="text-blue-500 cursor-pointer"
            >
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
