function Pagination() {
  return (
    <div className="flex justify-center items-center space-x-2 py-6">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          className="w-8 h-8 rounded bg-secondary text-primary font-semibold hover:bg-primary/20 transition"
        >
          {n}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
