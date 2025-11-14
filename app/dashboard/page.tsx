"use client";
import { useState } from "react";
import {
  FiHome,
  FiCheckSquare,
  FiCalendar,
  FiFolderPlus,
  FiUsers,
  FiSettings,
  FiBell,
} from "react-icons/fi";
import CreateTaskModal from "../components/CreateTaskModal";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete project proposal",
      dueDate: "Today, 5:00 PM",
      priority: "high",
      completed: false,
    },
  ]);

  const handleCreateTask = (task: any) => {
    const newTask = {
      id: Date.now(),
      ...task,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <aside
        className={`
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        fixed md:relative
        z-40
        w-64 
        bg-white 
        border-r 
        border-gray-200 
        flex 
        flex-col
        h-screen
        transition-transform
        duration-300
      `}
      >
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <span className="text-xl font-bold text-indigo-600">ServeSync</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition"
          >
            <FiCheckSquare className="w-5 h-5" />
            <span className="font-medium">Tasks</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition"
          >
            <FiCalendar className="w-5 h-5" />
            <span className="font-medium">Calendar</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition"
          >
            <FiFolderPlus className="w-5 h-5" />
            <span className="font-medium">Projects</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition"
          >
            <FiUsers className="w-5 h-5" />
            <span className="font-medium">Team</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition"
          >
            <FiSettings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </a>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">john@email.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay - Only shows when sidebar is open on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8">
          {/* Left: Hamburger + Title */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              Dashboard
            </h1>
          </div>

          {/* Right: Notifications */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <FiBell className="w-5 h-5 text-gray-600 cursor-pointer" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 md:p-8">
          {/* Welcome Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Welcome back, John!
              </h2>
              <p className="text-gray-600 mt-1">
                Here's what's happening with your tasks today
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
            >
              <span>+</span>
              <span>New Task</span>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Total Tasks */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">
                    Total Tasks
                  </p>
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

          {/* Task List Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Recent Tasks
            </h3>

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
        </main>
      </div>

      <CreateTaskModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleCreateTask}
      />
    </div>
  );
}


