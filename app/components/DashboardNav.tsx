'use client';
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
import CreateTaskModal from '../components/CreateTaskModal';

export default function DashboardNav() {
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
            href="/dashboard/tasks"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition"
          >
            <FiCheckSquare className="w-5 h-5" />
            <span className="font-medium">Tasks</span>
          </a>

          <a
            href="/dashboard/calendar"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition"
          >
            <FiCalendar className="w-5 h-5" />
            <span className="font-medium">Calendar</span>
          </a>

          <a
            href="/dashboard/projects"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition"
          >
            <FiFolderPlus className="w-5 h-5" />
            <span className="font-medium">Projects</span>
          </a>

          <a
            href="/dashboard/team"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition"
          >
            <FiUsers className="w-5 h-5" />
            <span className="font-medium">Team</span>
          </a>

         <a 
            href="/dashboard/settings"
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

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-8">
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

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <FiBell className="w-5 h-5 text-gray-600 cursor-pointer" />
            </button>
          </div>
        </header>

        {/* CONTINUE WITH YOUR MAIN CONTENT AND MODAL HERE */}

      </div>

      {/* Create Task Modal */}
      <CreateTaskModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleCreateTask}
      />
    </div>
  );
}