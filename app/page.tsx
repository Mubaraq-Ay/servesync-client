import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* navbar */}
      <nav className="border-b border-gray-200 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold">ServeSync</span>

            {/* links  */}
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
              <Link href="#" className="text-gray-700 hover:text-indigo-600">
                Support
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {/* button  */}
              <div className="flex items-center gap-4">
                <Link
                  href="/auth/login"
                  className="text-gray-700 hover:text-indigo-600"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-20 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT: Text Content */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Simplify your workflow, Maximize your productivity
              </h1>
            </div>

            {/* RIGHT: Image */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 h-96">
              <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                <p className="text-gray-500 text-lg">img go dey here, like dashboard preview sha</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
