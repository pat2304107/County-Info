function Header() {
  return (
    <header className="py-8 px-8 border-b border-secondary bg-white/80 backdrop-blur sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-primary-dark mb-2">
          南投縣
        </a>
        <button className="px-6 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition">
          登入
        </button>
      </div>
    </header>
  );
}

export default Header;
