"use client";
import { useState } from "react";
import DashboardNav from '../components/DashboardNav';
import Content from '../components/Content';

export default function DashboardPage() {
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
    <>
      <DashboardNav />
      <Content 
        tasks={tasks} 
        onCreateTask={handleCreateTask}  
      />
    </>
  );
}