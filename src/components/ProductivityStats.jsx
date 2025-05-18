const ProductivityStats = ({ cycles }) => {
  return (
    <div className="text-center text-sm text-gray-600 mt-4">
      <p>Pomodoro sessions completed today: {cycles}</p>
    </div>
  );
};

export default ProductivityStats;