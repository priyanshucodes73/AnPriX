"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { FaGoogle, FaApple, FaTwitch, FaDiscord } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const emailError = touched.email && !email;
  const passwordError = touched.password && !password;
  const isFormValid = email && password;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setLoading(true);
    setSuccess(false);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar fixed on left */}
      <div className="hidden md:block fixed left-0 top-0 h-full w-20 z-40 bg-black/90 border-r border-purple-500">
        <Sidebar />
      </div>
      {/* Main content (login form) */}
      <div className="flex-1 flex items-center justify-center min-h-screen w-full md:ml-20">
        <div className="w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-2xl flex flex-col gap-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Login</h1>
            <p className="text-gray-500 mt-1">Sign in to your AnPriX account</p>
          </div>
          {/* Social login row */}
          <div className="flex justify-center gap-4">
            <button className="bg-black text-white rounded-xl w-12 h-12 flex items-center justify-center hover:bg-gray-800 transition">
              <FaGoogle size={22} />
            </button>
            <button className="bg-black text-white rounded-xl w-12 h-12 flex items-center justify-center hover:bg-gray-800 transition">
              <FaApple size={22} />
            </button>
            <button className="bg-black text-white rounded-xl w-12 h-12 flex items-center justify-center hover:bg-gray-800 transition">
              <FaTwitch size={22} />
            </button>
            <button className="bg-black text-white rounded-xl w-12 h-12 flex items-center justify-center hover:bg-gray-800 transition">
              <FaDiscord size={22} />
            </button>
          </div>
          {/* Divider */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-xs text-gray-400">or continue with</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
          {/* Email input */}
          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="Email"
              className={`px-4 py-3 rounded-lg border text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50 ${
                emailError ? "border-red-500" : "border-gray-300"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              autoComplete="email"
            />
            {emailError && (
              <span className="text-xs text-red-500">Email is required</span>
            )}
          </div>
          {/* Password input */}
          <div className="flex flex-col gap-1">
            <input
              type="password"
              placeholder="Password"
              className={`px-4 py-3 rounded-lg border text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50 ${
                passwordError ? "border-red-500" : "border-gray-300"
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, password: true }))}
              autoComplete="current-password"
            />
            {passwordError && (
              <span className="text-xs text-red-500">Password is required</span>
            )}
          </div>
          {/* Login button */}
          <button
            className={`w-full py-3 rounded-lg font-semibold text-white transition flex items-center justify-center gap-2 ${
              isFormValid && !loading
                ? "bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/30"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!isFormValid || loading}
            onClick={handleLogin}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            )}
            {loading ? "Logging in..." : "Login"}
          </button>
          {success && (
            <div className="w-full text-center text-green-600 font-semibold">
              Login successful! (demo)
            </div>
          )}
          {/* Create account button */}
          <button className="w-full py-3 rounded-lg font-semibold bg-gray-100 text-purple-700 hover:bg-purple-50 border border-purple-200 transition">
            Create a Free AnPrix Account
          </button>
          {/* Forgot password */}
          <div className="text-center text-xs text-gray-400 mt-2">
            Can’t remember your password?{" "}
            <a
              href="#"
              className="text-purple-600 font-semibold hover:underline"
            >
              Recover now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
