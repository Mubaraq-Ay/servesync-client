"use client";

import { FiCheckSquare, FiCalendar } from "react-icons/fi";

export default function TaskCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Total Tasks */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Total Tasks</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
          </div>
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
            <FiCheckSquare className="text-indigo-600 w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Completed */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Completed</p>
            <p className="text-3xl font-bold text-green-600 mt-2">18</p>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <FiCheckSquare className="text-green-600 w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Pending */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Pending</p>
            <p className="text-3xl font-bold text-orange-600 mt-2">6</p>
          </div>
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <FiCalendar className="text-orange-600 w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
