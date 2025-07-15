import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="bg-primary-light w-60 h-screen p-6 flex flex-col border-r border-secondary fixed left-0 top-0">
      <div className="mb-8">
        <Link to="/" className="text-2xl font-bold text-white mb-2">
          南投縣
        </Link>
        <div className="text-sm text-secondary">青年夢想方舟</div>
      </div>
      <nav className="flex-1 space-y-4">
        <Link to="/map" className="flex items-center text-white hover:text-secondary transition">
          <span className="material-icons mr-2">map</span>參訪體驗地圖
        </Link>
        <Link to="/school" className="flex items-center text-white hover:text-secondary transition">
          <span className="material-icons mr-2">search</span>高職科系查詢
        </Link>
        <Link
          to="/company"
          className="flex items-center text-white hover:text-secondary transition"
        >
          <span className="material-icons mr-2">star</span>企業參訪查詢
        </Link>
        <Link to="/expert" className="flex items-center text-white hover:text-secondary transition">
          <span className="material-icons mr-2">boy</span>職場達人查詢
        </Link>
        <Link
          to="/explore"
          className="flex items-center text-white hover:text-secondary transition"
        >
          <span className="material-icons mr-2">info</span>職探課程列表
        </Link>
        <Link
          to="/technical-education"
          className="flex items-center text-white hover:text-secondary transition"
        >
          <span className="material-icons mr-2">school</span>國中技藝教育
        </Link>
        <Link
          to="/experience"
          className="flex items-center text-white hover:text-secondary transition"
        >
          <span className="material-icons mr-2">mail</span>參訪體驗心得
        </Link>
      </nav>
      <div className="mt-8 text-xs text-secondary">© 2024 南投縣青年方舟</div>
    </aside>
  );
}

export default Sidebar;
