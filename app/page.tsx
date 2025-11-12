import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b border-gray-200 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold">ServeSync</span>

            {/* Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#" className="text-gray-700 hover:text-indigo-600">
                Home
              </Link>
              <Link href="#" className="text-gray-700 hover:text-indigo-600">
                About us
              </Link>
              <Link href="#" className="text-gray-700 hover:text-indigo-600">
                Features
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-indigo-600">
                Contact
              </Link>
            </div>

            {/* Buttons */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-4">
                <Link
                  href="/auth/login"
                  className="text-gray-700 hover:text-indigo-600"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-20 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT: Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Simplify your workflow, <br />
                <span className="text-indigo-600">Maximize your productivity</span>
              </h1>
              <p className="text-lg text-gray-600">
                Streamline your tasks, collaborate seamlessly, and get more done — all in one intuitive platform.
              </p>

              <div className="flex gap-4 mt-8">
                <Link href="/auth/register" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition cursor-pointer">
                  Get Started
                </Link>
                
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-4 h-96 flex items-center justify-center overflow-hidden">
                <img
                  src="/dashboard-preview.png" 
                  alt="Dashboard Preview"
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>

              {/* Optional floating accents */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-indigo-100 rounded-full blur-2xl opacity-70"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-70"></div>
            </div>
          </div>
        </div>
      </section>
    </div>  
  );
}
