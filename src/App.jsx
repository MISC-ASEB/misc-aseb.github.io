import { useState, useEffect } from "react";
import "./App.css";
import {
  FluentProvider,
  webDarkTheme,
  webLightTheme,
} from "@fluentui/react-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import PastEvents from "./components/PastEvents";
import Team from "./components/Team";
import UpcomingEvents from "./components/UpcomingEvents";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const userTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(userTheme || "light");

  // Sync Tailwind dark mode class with Fluent UI theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <FluentProvider theme={theme === "light" ? webLightTheme : webDarkTheme}>
      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none transition-colors duration-700">
        <div
          className={`absolute inset-0 ${theme === "dark" ? "bg-misc-darker" : "bg-slate-50"}`}
        ></div>

        {/* Animated Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-misc-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:opacity-30 dark:mix-blend-screen"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-misc-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:opacity-30 dark:mix-blend-screen"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-misc-lightBlue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 dark:opacity-30 dark:mix-blend-screen"></div>
      </div>

      <div className="relative z-0 min-h-screen flex flex-col">
        <Header theme={theme} setTheme={setTheme} />
        <main className="flex-grow">
          <Hero />
          <About />
          <PastEvents />
          <UpcomingEvents />
          <Team />
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </FluentProvider>
  );
}

export default App;
