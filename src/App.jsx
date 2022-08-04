import { useState } from "react";
import { Login } from "./components/pages/Login";
import { Home } from "./components/pages/Home";

function App() {
  const [username, setUsername] = useState("");
  const [theme, setTheme] = useState("light");

  function onLogin(user) {
    setUsername(user);
  }

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
    const html = document.querySelector("html");
    html.classList.toggle("dark");
  }

  return (
    <>
      {username === "" || username === " " ? (
        <Login onLogin={onLogin} toggleTheme={toggleTheme} theme={theme} />
      ) : (
        <Home username={username} toggleTheme={toggleTheme} theme={theme} />
      )}
    </>
  );
}

export default App;
