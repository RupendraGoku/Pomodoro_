import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TimerDisplay from "../components/TimerDisplay";
import TimerControls from "../components/TimerControls";
import MotivationalText from "../components/MotivationalText";
import Settings from "../components/Settings";
import ThemeToggle from "../components/ThemeToggle";
import ProductivityStats from "../components/ProductivityStats";


const Home = () => {
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [timeLeft, setTimeLeft] = useState(workDuration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("work");
  const [cycle, setCycle] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setTimeLeft((mode === "work" ? workDuration : breakDuration) * 60);
  }, [workDuration, breakDuration, mode]);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          switchMode();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const switchMode = () => {
    if (mode === "work") {
      setMode("break");
      setCycle((prev) => prev + 1);
    } else {
      setMode("work");
    }
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMode("work");
    setTimeLeft(workDuration * 60);
    setCycle(0);
  };

  const percentage =
    mode === "work"
      ? ((workDuration * 60 - timeLeft) / (workDuration * 60)) * 100
      : ((breakDuration * 60 - timeLeft) / (breakDuration * 60)) * 100;

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      new Audio("/notification.mp3").play();
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification("Time's up!", { body: `Switch to ${mode === "work" ? "break" : "work"} mode.` });
      }
    }
  }, [timeLeft]);

  useEffect(() => {
    if ("Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen flex items-center justify-center transition-all p-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-purple-500 to-indigo-600"
      }`}
    >
      <div className="relative w-full max-w-md p-6 shadow-xl rounded-2xl bg-white dark:bg-gray-800 backdrop-blur">
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-3xl font-bold text-center">
            {mode === "work" ? "Focus Time" : "Break Time"} - Cycle {cycle}
          </h1>

          <TimerDisplay timeLeft={timeLeft} mode={mode} percentage={percentage} />

          <TimerControls
            isRunning={isRunning}
            onStartPause={() => setIsRunning(!isRunning)}
            onReset={resetTimer}
          />

          <Settings
            workDuration={workDuration}
            breakDuration={breakDuration}
            setWorkDuration={setWorkDuration}
            setBreakDuration={setBreakDuration}
          />

          <MotivationalText mode={mode} />

          <ProductivityStats cycles={cycle} />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;