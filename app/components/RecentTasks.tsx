'use client';

export default function RecentTasks() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Tasks</h3>

      {/* Task Items */}
      <div className="space-y-3">
        <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition border border-gray-100">
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-gray-300"
            />
            <div>
              <p className="font-medium text-gray-900">
                Complete project proposal
              </p>
              <p className="text-sm text-gray-500">Due: Today, 5:00 PM</p>
            </div>
          </div>

          <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
            High Priority
          </span>
        </div>
      </div>
    </div>
  );
}
