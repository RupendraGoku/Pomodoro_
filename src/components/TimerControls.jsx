const TimerControls = ({ isRunning, onStartPause, onReset }) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={onStartPause}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={onReset}
        className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
      >
        Reset
      </button>
    </div>
  );
};

export default TimerControls;

