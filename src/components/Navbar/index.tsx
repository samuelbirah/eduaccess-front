import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

const Navbar = () => {
    const { user, logout } = useAuth()
  
    return (
      <header className="bg-blue-700 text-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white-600">EduAccess</h1>
        <nav className="space-x-4 flex items-center">
          {!user ? (
            <>
              <Link to="/" className="text-white-700 hover:text-blue-300">Accueil</Link>
              <Link to="/login" className="text-white-700 hover:text-blue-300">Connexion</Link>
            </>
          ) : (
            <>
              <span className="text-white-700">{user.email}</span>
              <span className="text-sm bg-blue-700 text-blue-300 px-2 py-1 rounded">{user.role}</span>
              <button 
                onClick={logout} 
                className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded">
                Déconnexion
              </button>
            </>
          )}
        </nav>
      </header>
    )
  }

export default Navbar
