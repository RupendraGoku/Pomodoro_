const MotivationalText = ({ mode }) => {
  return (
    <p className="text-sm text-gray-600 text-center">
      {mode === "work"
        ? "Stay focused and productive!"
        : "Relax and refresh your mind."}
    </p>
  );
};

export default MotivationalText;
