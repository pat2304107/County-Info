import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex min-h-screen w-full bg-white">
      <Sidebar />
      <main className="flex-1 flex flex-col min-h-screen ml-60">
        <Header />
        <div className="flex-1 p-8  container mx-auto">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
