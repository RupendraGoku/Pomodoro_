const Settings = ({ workDuration, breakDuration, setWorkDuration, setBreakDuration }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <label className="text-gray-700">Work Duration (min)</label>
        <input
          type="number"
          value={workDuration}
          onChange={(e) => setWorkDuration(Number(e.target.value))}
          min="1"
          className="border p-1 w-20 rounded"
        />
      </div>
      <div className="flex items-center justify-between">
        <label className="text-gray-700">Break Duration (min)</label>
        <input
          type="number"
          value={breakDuration}
          onChange={(e) => setBreakDuration(Number(e.target.value))}
          min="1"
          className="border p-1 w-20 rounded"
        />
      </div>
    </div>
  );
};

export default Settings;