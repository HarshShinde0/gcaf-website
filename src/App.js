import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import EventsPage from "./Pages/EventsPage";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import MainLayout from "./Layouts/MainLayout";

import { FaSun, FaMoon } from "react-icons/fa";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LeaderboardPage from "./Pages/LeaderboardPage";
import LeaderboardAboutPage from "./Pages/LeaderboardAboutPage";
import GCAFPage from "./Pages/GCAFPage";
import ContributorsPage from "./Pages/ContributorsPage";
import ScrollToTop from "./Components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {

  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(storedDarkMode === "true");

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <HelmetProvider>
      <div className={`App relative Background z-0 ${darkMode ? "dark-theme" : "light-theme"}`}>
        <Helmet>
          <title>Google Cloud Arcade Facilitator Program</title>
          <meta
            name="description"
            content="Google Cloud Arcade Facilitator Program - A comprehensive training initiative to empower individuals in cloud computing through hands-on learning and mentorship."
            data-react-helmet={true}
          />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage theme={darkMode} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              <Route path="/leaderboard/about" element={<LeaderboardAboutPage />} />
              <Route path="/gcaf" element={<GCAFPage />} />
              <Route path="/contributors" element={<ContributorsPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </Router>
        <button
          className="switch btn hover:bg-gray-200 border-2 bg-[--bg-color] shadow-lg rounded-lg h-12 aspect-square fixed bottom-0 right-0 flex justify-center items-center m-4 mx-4"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <FaSun className="text-2xl" />
          ) : (
            <FaMoon className="text-2xl" />
          )}
        </button>
        <Analytics />
        <SpeedInsights />
      </div>
    </HelmetProvider>
  );
}

export default App;
