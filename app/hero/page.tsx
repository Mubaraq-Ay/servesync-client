'use client';
import Link from "next/link";

export default function Hero() {
    return (
         
              <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-20 text-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                        Simplify your workflow, <br />
                        <span className="text-indigo-600">
                          Maximize your productivity
                        </span>
                      </h1>
                      <p className="text-lg text-gray-600">
                        Streamline your tasks, collaborate seamlessly, and get more done
                        — all in one intuitive platform.
                      </p>
        
                      <div className="flex gap-4 mt-8">
                        <Link
                          href="/auth/register"
                          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition cursor-pointer"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
        
                    <div className="relative">
                      <div className="bg-white rounded-2xl shadow-xl p-4 h-96 flex items-center justify-center overflow-hidden">
                        <img
                          src="./assets/test.png"
                          alt="Dashboard Preview"
                          className="rounded-xl object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        
    )
}