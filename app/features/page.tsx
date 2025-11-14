'use client';

export default function () {
    return (
        
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-indigo-600 font-semibold mb-2">
              No Card Details
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Effortless scheduling with ServeSync
              <br />
              for every task in your day
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Stay organized, hit deadlines, and collaborate effortlessly with
              powerful scheduling tools designed for modern teams.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Reminders That Actually Work
              </h3>

              {/* Description */}
              <p className="text-gray-600">
                Never forget important tasks again with intelligent reminders
                that adapt to your schedule and priorities.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                See How Far You've Come
              </h3>
              <p className="text-gray-600">
                Stay motivated by keeping track of your completed tasks and
                celebrate your progress every step of the way.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Team Up and Get Things Done
              </h3>
              <p className="text-gray-600">
                Collaborate seamlessly with your team. Assign tasks, share
                updates, and keep everyone on the same page.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">🗓️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                One Calendar to Rule Them All
              </h3>
              <p className="text-gray-600">
                Bring all your tasks and deadlines together in one beautifully
                organized calendar that syncs across all your devices.
              </p>
            </div>
          </div>
        </div>
      </section>

    )
}

   