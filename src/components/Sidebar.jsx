function Sidebar() {
  return (
    <aside className="bg-primary-light w-60 min-h-screen p-6 flex flex-col border-r border-secondary">
      <div className="mb-8">
        <a href="/" className="text-2xl font-bold text-white mb-2">
          南投縣
        </a>
        <div className="text-sm text-secondary">青年夢想方舟</div>
      </div>
      <nav className="flex-1 space-y-4">
        <a href="/map" className="flex items-center text-white hover:text-secondary transition">
          <span className="material-icons mr-2">map</span>參訪地圖
        </a>
        <a href="/school" className="flex items-center text-white hover:text-secondary transition">
          <span className="material-icons mr-2">search</span>學校查詢
        </a>
        <a href="" className="flex items-center text-white hover:text-secondary transition">
          <span className="material-icons mr-2">star</span>熱門科系
        </a>
        <a href="" className="flex items-center text-white hover:text-secondary transition">
          <span className="material-icons mr-2">info</span>關於我們
        </a>
        <a href="" className="flex items-center text-white hover:text-secondary transition">
          <span className="material-icons mr-2">mail</span>聯絡方式
        </a>
      </nav>
      <div className="mt-8 text-xs text-secondary">© 2024 南投縣青年方舟</div>
    </aside>
  );
}

export default Sidebar;
