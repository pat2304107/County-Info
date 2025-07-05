function Tabs() {
  return (
    <div className="flex space-x-4 px-8 py-4 bg-secondary/10 border-b border-secondary">
      <button className="px-4 py-2 rounded-full bg-secondary text-primary font-semibold shadow-sm">
        高中職學校
      </button>
      <button className="px-4 py-2 rounded-full text-primary hover:bg-secondary/20 transition">
        行程列表
      </button>
    </div>
  );
}

export default Tabs;
