import { useState } from "react";
import { Header } from "../Header";
import { Todo } from "../Todo";

export function Home({ username, toggleTheme, theme }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskTitle, taskDescription) => {
    setTasks([
      ...tasks,
      {
        id: +new Date(),
        title: taskTitle,
        description: taskDescription,
        isCompleted: false,
      },
    ]);
  };

  const onTaskCompleted = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTasks(newTasks);
  };

  const onDeleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <>
      <div className="flex flex-row gap-x-8 min-h-screen bg-gray-100 dark:bg-neutral-800">
        <Header
          onAddTask={addTask}
          tasks={tasks}
          username={username}
          toggleTheme={toggleTheme}
          theme={theme}
        />
        <section className="container mx-auto py-10 pr-10 flex flex-col gap-y-5 lg:basis-11/12 md:basis-6/12">
          {tasks.map((task) => (
            <Todo
              key={task.id}
              tasks={task}
              onTaskCompleted={onTaskCompleted}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </section>
      </div>
    </>
  );
}
