const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={toggleTheme}
        className={`transition-colors duration-300 px-4 py-2 rounded-lg shadow-md text-sm font-semibold ${
          darkMode
            ? "bg-white text-gray-900 hover:bg-gray-200"
            : "bg-gray-900 text-white hover:bg-gray-700"
        }`}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeToggle;
