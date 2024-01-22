import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import { useEffect } from "react";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

export default function App() {
  const [themeMode, setThemeMode] = useState("light");

  // While initialzing the below two methods we had not given any functionality, however by using the ame name here and by defining any functionality it automatically takes it to the empty methods.

  function lightMode() {
    setThemeMode("light");
  }
  function darkMode() {
    setThemeMode("dark");
  }

  // actual Theme change
  useEffect(() => {
    const selector = document.querySelector("html");
    selector.classList.remove("light", "dark");
    selector.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
