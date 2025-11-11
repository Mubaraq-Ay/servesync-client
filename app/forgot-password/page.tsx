"use client";
import { useState } from "react";
import Button from "../components/Button"

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <form action="">
      <div className="min-h-screen bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center p-4">
        {/* the main container */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          {/* logo */}
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-indigo-600 rounded transform -skew-x-12"></div>
              <span className="text-xl font-bold text-gray-800">ServeSync</span>
            </div>
          </div>

          {/* Forgot password header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Forgot Password
            </h1>
            <p className="text-gray-600 text-sm">
              Enter your email, we would send a verification link to you.
            </p>
          </div>

          {/* Email input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            />
          </div>

          {/* send button  */}

           <Button text='Send Verification Link' />
        </div>
      </div>
    </form>
  );
}
