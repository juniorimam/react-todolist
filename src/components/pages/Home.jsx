import { useEffect, useState } from "react";
import { Header } from "../Header";
import { Todo } from "../Todo";
import { NotFound } from "./NotFound";

const TODO_LISTS_ITEMS = "TODO_LISTS_ITEMS";

export function Home({ username, toggleTheme, theme, onLogin }) {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  const loadStorage = () => {
    const savedData = localStorage.getItem(TODO_LISTS_ITEMS);
    if (savedData) {
      setTasks(JSON.parse(savedData));
    }
  };

  useEffect(() => {
    loadStorage();
    onLogin();
  }, []);

  const saveTasksStorage = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem(TODO_LISTS_ITEMS, JSON.stringify(newTasks));
  };

  const addTask = (taskTitle, taskDescription) => {
    saveTasksStorage([
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

    saveTasksStorage(newTasks);
  };

  const onDeleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    saveTasksStorage(newTasks);
  };

  return (
    <>
      <div className="flex xs:flex-col xl:flex-row gap-x-8 min-h-screen bg-gray-100 dark:bg-neutral-800">
        <Header
          onAddTask={addTask}
          tasks={tasks}
          username={username}
          toggleTheme={toggleTheme}
          theme={theme}
        />
        <section className="container mx-auto py-10 pr-10 flex flex-col gap-y-5 lg:basis-11/12 md:basis-6/12 xs:px-3 xs:py-6 xs:justify-center">
          {tasks.length <= 0 ? (
            <NotFound />
          ) : (
            tasks.map((task) => (
              <Todo
                key={task.id}
                tasks={task}
                onTaskCompleted={onTaskCompleted}
                onDeleteTask={onDeleteTask}
              />
            ))
          )}
        </section>
      </div>
    </>
  );
}
