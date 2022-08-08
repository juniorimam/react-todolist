export function Todo({ tasks, onTaskCompleted, onDeleteTask }) {
  return (
    <div
      className={`${
        tasks.isCompleted ? "opacity-60" : ""
      } p-6 rounded-lg bg-white flex flex-row justify-between items-center duration-300 dark:bg-neutral-700/50 dark:ring-1 dark:ring-neutral-600/80 dark:hover:ring-sky-600/80 hover:ring-1 hover:ring-gray-300 xs:py-4 xs:px-5 xs:text-sm`}
    >
      <div className="flex gap-x-4 items-center">
        <input
          type="checkbox"
          className="w-4 h-4 cursor-pointer"
          onChange={() => onTaskCompleted(tasks.id)}
          checked={tasks.isCompleted ? "checked" : ""}
        />
        <div>
          <h4
            className={`${
              tasks.isCompleted ? "line-through text-gray-400" : ""
            } font-semibold pb-1 dark:text-neutral-300`}
          >
            {tasks.title}
          </h4>
          <p
            className={`${
              tasks.isCompleted ? "line-through text-gray-400" : ""
            } text-secondary`}
          >
            {tasks.description}
          </p>
        </div>
      </div>
      <button onClick={() => onDeleteTask(tasks.id)} title="Delete task">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 stroke-gray-400 hover:stroke-red-500 duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
}
