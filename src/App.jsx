import { useState } from "react";
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

  return (
    <FluentProvider theme={theme === "light" ? webLightTheme : webDarkTheme}>
      <Header theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <PastEvents />
      <UpcomingEvents />
      <Team />
      <ScrollToTop />
      <Footer />
    </FluentProvider>
  );
}

export default App;
