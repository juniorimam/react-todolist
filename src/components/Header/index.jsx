import { useState } from "react";

export function Header({
  username = "Guest",
  onAddTask,
  tasks,
  toggleTheme,
  theme,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const completedTask = tasks.filter(
    (task) => task.isCompleted === true
  ).length;

  function handleSubmit(e) {
    e.preventDefault();
    onAddTask(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <>
      <header className="bg-gray-200/50 md:basis-6/12 dark:bg-neutral-900/80">
        <div className="flex flex-col p-10 sticky top-0 justify-between h-screen">
          <div>
            <h1 className="text-2xl font-bold pb-3 dark:text-sky-500">
              Welcome back,
              <br /> {username}
            </h1>
            <p className="text-gray-500 text-[15px] dark:text-neutral-500">
              You've got {tasks.length} tasks. <br /> And you've completed{" "}
              {completedTask} of {tasks.length} tasks. <br />
              {completedTask > 0 ? " Great Job !" : ""}
            </p>
            <form
              className="flex flex-col gap-y-4 mt-5"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Task title"
                className="py-2 px-4 rounded-md font-medium text-gray-500 placeholder:text-sm placeholder:text-gray-400/80 bg-gray-200/60 hover:bg-gray-300/50 hover:placeholder:text-gray-400 focus:bg-white focus:outline-sky-500 duration-300 dark:bg-neutral-800 dark:placeholder:text-neutral-500 dark:text-neutral-200 dark:focus:outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                title="Insert your task title"
                required
              />
              <input
                type="text"
                placeholder="Task description"
                className="py-2 px-4 rounded-md font-medium text-gray-500 placeholder:text-sm placeholder:text-gray-400/80 bg-gray-200/60 hover:bg-gray-300/50 hover:placeholder:text-gray-400 focus:bg-white focus:outline-sky-500 duration-300 dark:bg-neutral-800 dark:placeholder:text-neutral-500 dark:text-neutral-200 dark:focus:outline-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                title="Insert your task description"
                required
              />
              <button className="font-medium w-full self-start px-6 py-2.5 rounded-md bg-sky-600/80 text-white text-sm hover:bg-sky-600 duration-300 active:scale-[.98]">
                Add Task
              </button>
            </form>
          </div>
          <button
            onClick={toggleTheme}
            className="bg-gray-300 rounded-lg flex flex-row justify-center items-center gap-x-3 p-3 w-fit dark:bg-neutral-800 duration-300"
          >
            {theme === "light" ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 dark:text-neutral-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      </header>
    </>
  );
}
