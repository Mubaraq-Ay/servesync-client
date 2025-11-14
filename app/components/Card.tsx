'use client';

export default function Card() {
    return (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16  mb-6 flex items-center justify-center">
                <span className="text-2xl"></span>
              </div>
            
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Reminders That Actually Work
              </h3>

              <p className="text-gray-600">
                Never forget important tasks again with intelligent reminders
                that adapt to your schedule and priorities.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <span className="text-2xl"></span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                See How Far You've Come
              </h3>
              <p className="text-gray-600">
                Stay motivated by keeping track of your completed tasks and
                celebrate your progress every step of the way.
              </p>
            </div>
            </div>
    )
}
