import { useEffect, useState } from "react";

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
      <header className="bg-gray-200/50 dark:bg-neutral-900/80 md:basis-6/12">
        <div className="container mx-auto flex flex-col p-10 sticky top-0 justify-between h-screen xs:static xs:h-fit xs:py-8 xs:px-3">
          <div>
            <h1 className="text-2xl font-extrabold pb-3 dark:text-sky-500">
              Welcome back, {username}
            </h1>
            <p className="text-gray-500 text-[15px] dark:text-neutral-500">
              You've got {tasks.length} tasks. <br /> And you've completed{" "}
              {completedTask} of {tasks.length} tasks.
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
          <div className="flex flex-row items-center gap-x-4 xs:mt-4 xs:justify-between">
            <button
              onClick={toggleTheme}
              className="bg-gray-300 rounded-lg flex flex-row justify-center items-center gap-x-3 p-3 w-fit text-left dark:bg-neutral-800 duration-300 xs:basis-1/2 hover:scale-105"
              title={theme === "light" ? "Dark Mode" : "Light Mode"}
            >
              {theme === "light" ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 fill-gray-800"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  <span className="text-sm">Dark Mode</span>
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
                  <span className="dark:text-neutral-300 text-sm">
                    Light Mode
                  </span>
                </>
              )}
            </button>
            <a
              href="https://github.com/juniorimam"
              target="_blank"
              className="bg-gray-300 rounded-lg flex flex-row justify-center items-center gap-x-3 p-3 w-fit dark:bg-neutral-800 duration-300 xs:basis-1/2 hover:scale-105"
              title="Github"
            >
              <svg
                role="img"
                className={
                  theme === "light" ? "fill-gray-800" : "dark:fill-neutral-300"
                }
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span
                className={`${
                  theme === "light" ? "" : "dark:text-neutral-300"
                } text-sm`}
              >
                Github
              </span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
