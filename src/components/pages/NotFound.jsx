export function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-center h-full xs:-mt-8">
      <img src="/empty.gif" alt="Empty Todo List" className="w-96 xs:w-64" />
      <h1 className="font-bold text-4xl text-red-400 xs:text-3xl">Oops !</h1>
      <p className="text-gray-400 mt-3 xs:text-sm">
        You don't have any activity todo. <br />
        Are you bored? take it easy, chill on{" "}
        <a href="https://youtube.com/" target="_blank" className="text-sky-500">
          Youtube
        </a>{" "}
        or{" "}
        <a href="https://netflix.com/" target="_blank" className="text-sky-500">
          Netflix
        </a>
        .
      </p>
    </div>
  );
}
