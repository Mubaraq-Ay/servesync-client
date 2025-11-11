"use client";
import { useState } from "react";
import ResetPasswordInput from "../components/ResetPasswordInput"; // rename import
import Button from "../components/Button";

export default function ResetPasswordPage() { // rename component

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Password reset", { password, confirmPassword });
  };

  return (
    <form onSubmit={handleReset}>
      <div className="min-h-screen bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          {/* Logo */}
          <div className="mb-8 flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded transform -skew-x-12"></div>
            <span className="text-xl font-bold text-gray-800">ServeSync</span>
          </div>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Reset Password</h1>
            <p className="text-gray-600">Reset your password</p>
          </div>

          {/* Password */}
          <ResetPasswordInput
            label="Password"
            value={password}
            onChange={setPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          {/* Confirm Password */}
          <ResetPasswordInput
            label="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          <Button text="Reset Password" />
        </div>
      </div>
    </form>
  );
}
