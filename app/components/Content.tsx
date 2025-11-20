"use client";
import { useState } from "react";
import CreateTaskModal from "./CreateTaskModal";
import TaskCard from "./TaskCard";

interface ContentProps {
  tasks: any[];
  onCreateTask: (task: any) => void;   
}

export default function Content({ tasks, onCreateTask }: ContentProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <div className="flex h-screen bg-gray-100">
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

        <TaskCard />

        {/* Task List Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Recent Tasks
          </h3>

          <div className="space-y-3">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition border border-gray-100">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-gray-300"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{task.title}</p>
                    <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  task.priority === 'high' ? 'bg-red-100 text-red-600' :
                  task.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-green-100 text-green-600'
                }`}>
                  {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* MODAL */}
      <CreateTaskModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={onCreateTask}  // ← Use the prop here!
      />
    </div>
    </>
  );
}