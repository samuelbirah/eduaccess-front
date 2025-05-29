import { Link } from 'react-router-dom';
import { Bell, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <img src="/assets/logo.svg" alt="Logo" className="h-6 w-6" />
          EduAccess
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:underline">Accueil</Link>
          <Link to="/results" className="hover:underline">Résultats</Link>
          <Link to="/fees" className="hover:underline">Frais</Link>
          <Link to="/resources" className="hover:underline">Ressources</Link>
        </nav>

        <div className="flex items-center gap-4">
          <span className="bg-green-500 text-xs px-2 py-1 rounded-full">Admin</span>
          <Mail className="w-5 h-5 cursor-pointer" />
          <Bell className="w-5 h-5 cursor-pointer" />
          <span className="hidden sm:block font-medium">Samuel Bir</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
