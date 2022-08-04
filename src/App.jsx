import { useEffect, useState } from "react";
import { Login } from "./components/pages/Login";
import { Home } from "./components/pages/Home";

const USERNAME_DATA = "USERNAME_DATA";
const THEME_DATA = "THEME_DATA";

function App() {
  const [username, setUsername] = useState("");
  const [theme, setTheme] = useState("light");

  function loadTheme() {
    const savedTheme = localStorage.getItem(THEME_DATA);
    if (savedTheme) {
      if (savedTheme === "dark") {
        const html = document.querySelector("html");
        html.classList.remove;
        html.classList.add("dark");
      }
      setTheme(savedTheme);
    }
  }

  function loadUsername() {
    const savedUsername = localStorage.getItem(USERNAME_DATA);
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }

  useEffect(() => {
    loadUsername();
    loadTheme();
  }, []);

  function saveUsername(user) {
    localStorage.setItem(USERNAME_DATA, user);
  }

  function onLogin(user) {
    setUsername(user);
    saveUsername(user);
  }

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem(THEME_DATA, "dark");
    } else {
      setTheme("light");
      localStorage.setItem(THEME_DATA, "light");
    }

    const html = document.querySelector("html");
    html.classList.toggle("dark");
  }

  return (
    <>
      {username === "" || username === " " ? (
        <Login onLogin={onLogin} toggleTheme={toggleTheme} theme={theme} />
      ) : (
        <Home
          username={username}
          toggleTheme={toggleTheme}
          theme={theme}
          onLogin={loadUsername}
        />
      )}
    </>
  );
}

export default App;
