import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-white">
      <Sidebar isMenuOpen={isMenuOpen} onLinkClick={() => setIsMenuOpen(false)} />
      <main className="flex-1 flex flex-col min-h-screen md:ml-60">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="flex-1 p-8  container mx-auto">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
