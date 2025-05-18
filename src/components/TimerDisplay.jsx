import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TimerDisplay = ({ timeLeft, mode, percentage }) => {
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="w-48 h-48">
      <CircularProgressbar
        value={percentage}
        text={formatTime(timeLeft)}
        styles={buildStyles({
          textColor: "#4B5563",
          pathColor: mode === "work" ? "#10B981" : "#3B82F6",
          trailColor: "#E5E7EB",
        })}
      />
    </div>
  );
};

export default TimerDisplay;
