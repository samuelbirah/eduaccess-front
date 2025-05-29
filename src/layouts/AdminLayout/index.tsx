import { ReactNode, useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  School,
  Wallet,
  Bell,
  LogOut,
  Menu,
  UserCircle,
  Mail,
  Settings,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


type Props = {
  children: ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
        setMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { label: "Mon école", icon: LayoutDashboard, path: "/admin" },
    { label: "Mes classes", icon: School, path: "/admin/classes" },
    { label: "Mes enseignants", icon: BookOpen, path: "/admin/teachers" },
    { label: "Mes élèves", icon: Users, path: "/admin/students" },
    { label: "Ma caisse", icon: Wallet, path: "/admin/caisse" },
    { label: "Mes utilisateurs", icon: UserCircle, path: "/admin/users" },
    { label: "Notifications", icon: Bell, path: "/admin/notifications" },
  ];

  const SidebarContent = (
    <div className="h-full flex flex-col bg-blue-900 text-white p-4">
      <div className="flex items-center justify-between mb-8">
        {sidebarOpen && <h1 className="text-xl font-bold">EduAccess</h1>}
        {isMobile && (
          <X className="cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map(({ label, icon: Icon, path }) => (
          <button
            key={label}
            onClick={() => {
              navigate(path);
              if (isMobile) setMobileMenuOpen(false);
            }}
            className={`group flex items-center ${
              sidebarOpen ? "justify-start gap-4 px-3" : "justify-center"
            } w-full text-left hover:bg-blue-700 rounded py-2 transition`}
          >
            <div className="relative flex items-center">
              <Icon size={22} />
              {!sidebarOpen && (
                <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-200 z-50 shadow">
                  {label}
                </span>
              )}
            </div>
            {sidebarOpen && <span>{label}</span>}
          </button>
        ))}
      </nav>

      <button
        onClick={logout}
        className={`flex items-center ${
          sidebarOpen ? "justify-start gap-3 px-3" : "justify-center"
        } mt-6 py-2 bg-red-600 hover:bg-red-700 rounded group relative w-full`}
      >
        <div className="relative flex items-center">
          <LogOut size={18} />
          {!sidebarOpen && (
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-200 z-50 shadow">
              Déconnexion
            </span>
          )}
        </div>
        {sidebarOpen && <span>Déconnexion</span>}
      </button>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Desktop */}
      {!isMobile && (
        <aside
          className={`transition-all duration-300 ease-in-out bg-blue-900 text-white fixed top-0 left-0 h-full z-20 ${
            sidebarOpen ? "w-64" : "w-16"
          }`}
        >
          {SidebarContent}
        </aside>
      )}

      {/* Sidebar Mobile */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Sidebar */}
          <div className="w-64 h-full bg-blue-900 text-white p-4 shadow-lg z-50 transform transition-transform duration-300 translate-x-0 animate-slide-in">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-xl font-bold">EduAccess</h1>
              <X className="cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
            </div>
            <nav className="flex flex-col gap-2">
              {menuItems.map(({ label, icon: Icon, path }) => (
                <button
                  key={label}
                  onClick={() => {
                    navigate(path);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 w-full text-left hover:bg-blue-700 rounded px-3 py-2 transition"
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </button>
              ))}
            </nav>

            <button
              onClick={logout}
              className="flex items-center gap-2 mt-6 px-3 py-2 bg-red-600 hover:bg-red-700 rounded"
            >
              <LogOut size={18} />
              <span>Déconnexion</span>
            </button>
          </div>

          {/* Overlay semi-transparent flou */}
          <div
            className="flex-1 backdrop-blur-sm bg-black/30 transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />
        </div>
      )}

      {/* Main Content Area */}
      <div
  className={`flex flex-col flex-1 h-screen transition-all duration-300 ease-in-out ${
    !isMobile ? (sidebarOpen ? "ml-64" : "ml-16") : ""
  }`}
>
  {/* Header - Sticky fonctionne ici */}
  <header className="sticky top-0 z-10 bg-white shadow flex justify-between items-center px-6 py-4 border-b">
    <div className="flex items-center gap-2">
      <Menu
        className="text-gray-600 cursor-pointer"
        onClick={() =>
          isMobile
            ? setMobileMenuOpen(true)
            : setSidebarOpen((prev) => !prev)
        }
      />
      <h2 className="font-semibold text-lg">Tableau de bord</h2>
    </div>
    <div className="flex items-center gap-4">
      <Mail className="text-gray-600 hover:text-blue-600 cursor-pointer" />
      <Settings className="text-gray-600 hover:text-blue-600 cursor-pointer" />
      <div className="flex items-center gap-2">
        <UserCircle size={28} className="text-blue-700" />
        <span className="text-sm font-medium">{user?.name}</span>
      </div>
    </div>
  </header>

  {/* Page Content - Scrollable ici */}
  <div className="flex flex-col flex-grow overflow-y-auto px-6 py-6">
    <main className="flex-grow">{children}</main>

    <footer className="bg-white border-t text-center text-sm text-gray-500 py-4 mt-4">
      © {new Date().getFullYear()} EduAccess - Tous droits réservés.
    </footer>
  </div>
</div>

    </div>
  );
};

export default AdminLayout;
