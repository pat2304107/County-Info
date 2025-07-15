function Sidebar() {
  return (
    <aside className="bg-primary-light w-60 h-screen p-6 flex flex-col border-r border-secondary fixed left-0 top-0">
      <div className="mb-8">
        <a href="/" className="text-2xl font-bold text-white mb-2">
          南投縣
        </a>
        <div className="text-sm text-secondary">青年夢想方舟</div>
      </div>
      <nav className="flex-1 space-y-4">
        <a href="/map" className="flex items-center text-white hover:text-secondary transition">
          <span className="material-icons mr-2">map</span>參訪體驗地圖
        </a>
        <a href="/school" className="flex items-center text-white hover:text-secondary transition">
          <span className="material-icons mr-2">search</span>高職科系查詢
        </a>
        <a href="/company" className="flex items-center text-white hover:text-secondary transition">
          <span className="material-icons mr-2">star</span>企業參訪查詢
        </a>
        <a href="/expert" className="flex items-center text-white hover:text-secondary transition">
          <span className="material-icons mr-2">boy</span>職場達人查詢
        </a>
        <a href="/explore" className="flex items-center text-white hover:text-secondary transition">
          <span className="material-icons mr-2">info</span>職探課程列表
        </a>
        <a
          href="/technical-education"
          className="flex items-center text-white hover:text-secondary transition"
        >
          <span className="material-icons mr-2">school</span>國中技藝教育
        </a>
        <a
          href="/experience"
          className="flex items-center text-white hover:text-secondary transition"
        >
          <span className="material-icons mr-2">mail</span>參訪體驗心得
        </a>
      </nav>
      <div className="mt-8 text-xs text-secondary">© 2024 南投縣青年方舟</div>
    </aside>
  );
}

export default Sidebar;
