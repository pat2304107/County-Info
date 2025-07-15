import { Link } from 'react-router-dom';

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <header className="py-8 px-8 border-b border-secondary bg-white/80 backdrop-blur sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary-dark mb-2">
          南投縣青年方舟
        </Link>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          <span className="material-icons">menu</span>
        </button>
        <Link
          to="/login"
          className="px-6 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition hidden md:block"
        >
          登入
        </Link>
      </div>
    </header>
  );
}

export default Header;
