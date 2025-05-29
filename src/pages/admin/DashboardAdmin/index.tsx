import AdminLayout from "../../../layouts/AdminLayout";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import {
  School,
  BookOpen,
  Users,
  Wallet,
  UserCircle,
  Bell,
  User
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardAdmin = () => {
  const navigate = useNavigate();

  // Données fictives pour la section statistique
  const stats = [
    {
      label: "Élèves",
      value: 1245,
      icon: <Users size={20} />,
      bg: "bg-blue-100",
      text: "text-blue-700",
    },
    {
      label: "Enseignants",
      value: 75,
      icon: <BookOpen size={20} />,
      bg: "bg-green-100",
      text: "text-green-700",
    },
    {
      label: "Total payé",
      value: "12.450$",
      icon: <Wallet size={20} />,
      bg: "bg-yellow-100",
      text: "text-yellow-700",
    },
    {
      label: "Utilisateurs",
      value: 38,
      icon: <UserCircle size={20} />,
      bg: "bg-red-100",
      text: "text-red-700",
    },
  ];

  const cards = [
    {
      title: "Classes",
      description: "Voir comment se présentent mes classes",
      icon: <School size={40} />,
      bgColor: "bg-white",
      textColor: "text-blue-700",
      link: "/admin/classes",
    },
    {
      title: "Enseignements",
      description: "Gérer l'ensemble des enseignants",
      icon: <BookOpen size={40} />,
      bgColor: "bg-white",
      textColor: "text-green-600",
      link: "/admin/teachers",
    },
    {
      title: "Élèves",
      description: "Gérer les élèves",
      icon: <Users size={40} />,
      bgColor: "bg-white",
      textColor: "text-gray-600",
      link: "/admin/students",
    },
    {
      title: "Caisse",
      description: "Gérer ma caisse",
      icon: <Wallet size={40} />,
      bgColor: "bg-white",
      textColor: "text-yellow-600",
      link: "/admin/caisse",
    },
    {
      title: "Utilisateurs",
      description: "Gérer tous les utilisateurs",
      icon: <UserCircle size={40} />,
      bgColor: "bg-white",
      textColor: "text-purple-600",
      link: "/admin/users",
    },
  ];

  const data = [
  { name: "6ème Scientifique", value: 35 },
  { name: "5ème Commercial", value: 25 },
  { name: "4ème Littéraire", value: 20 },
  { name: "3ème Commercial", value: 15 },
  { name: "2ème Scientifique", value: 5 },
];

const COLORS = ["#2563eb", "#22c55e", "#facc15", "#a855f7", "#f87171"];

  return (
    <AdminLayout>
      <div>
        <h2 className="text-2xl font-semibold mb-6">Mon école</h2>

        {/* Statistiques principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-4 rounded-xl shadow flex items-center gap-4"
            >
              <div className={`p-3 rounded-full ${stat.bg} ${stat.text}`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-lg font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cards de navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              onClick={() => navigate(card.link)}
              className={`cursor-pointer rounded-xl shadow p-6 ${card.bgColor} hover:shadow-lg transition`}
            >
              <div
                className={`flex flex-col items-center text-center ${card.textColor}`}
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-sm mt-1 text-gray-500">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
{/* Section 5 derniers élèves inscrits */}
<div className="mt-10">
  <h3 className="text-xl font-semibold mb-4">🧑‍🎓 5 derniers élèves inscrits</h3>
  <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
    <table className="min-w-full table-auto">
      <thead>
        <tr className="text-left text-gray-600 border-b">
          <th className="py-2">Élève</th>
          <th className="py-2">Classe</th>
          <th className="py-2">Date d’inscription</th>
        </tr>
      </thead>
      <tbody>
        {[
          { name: "Kalonji Grâce", classe: "6ème Scientifique", date: "2025-05-15", isNew: true },
          { name: "Mbuyi David", classe: "5ème Commercial", date: "2025-05-14" },
          { name: "Kabeya Sarah", classe: "6ème Littéraire", date: "2025-05-13" },
          { name: "Ngoy Alain", classe: "4ème Scientifique", date: "2025-05-12" },
          { name: "Ilunga Esther", classe: "3ème Commercial", date: "2025-05-11" },
        ].map((eleve, index) => (
          <tr key={index} className="border-b hover:bg-gray-50 transition">
            <td className="py-3 flex items-center gap-3">
              <div className="bg-blue-100 text-blue-700 rounded-full p-2">
                <User size={18} />
              </div>
              <div>
                <p className="font-medium">{eleve.name}</p>
                {eleve.isNew && (
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    Nouveau
                  </span>
                )}
              </div>
            </td>
            <td className="py-3">{eleve.classe}</td>
            <td className="py-3">{eleve.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

<div className="mt-4 text-right">
  <button
    className="text-sm text-blue-600 hover:underline font-medium"
    onClick={() => navigate('/admin/eleves')} // ou '/admin/notifications'
  >
    Voir plus →
  </button>
</div>


{/* Section Notifications récentes */}
<div className="mt-10">
  <h3 className="text-xl font-semibold mb-4">🔔 Notifications récentes</h3>
  <div className="bg-white rounded-xl shadow divide-y">
    {[
      { message: "Nouvel élève ajouté dans la classe de 6ème.", date: "Il y a 2 heures" },
      { message: "Paiement reçu de Mbuyi David.", date: "Il y a 1 jour" },
      { message: "Mise à jour de la classe 5ème Commercial.", date: "Il y a 3 jours" },
    ].map((notif, index) => (
      <div key={index} className="flex items-start gap-3 p-4 hover:bg-gray-50 transition">
        <div className="bg-blue-100 text-blue-600 rounded-full p-2">
          <Bell size={18} />
        </div>
        <div>
          <p className="text-gray-800 font-medium">{notif.message}</p>
          <span className="text-sm text-gray-500">{notif.date}</span>
        </div>
      </div>
    ))}
  </div>
</div>
<div className="mt-4 text-right">
  <button
    className="text-sm text-blue-600 hover:underline font-medium"
    onClick={() => navigate('/admin/eleves')} // ou '/admin/notifications'
  >
    Voir plus →
  </button>
</div>

<div className="mt-10 bg-white rounded-xl shadow p-6">
  <h3 className="text-xl font-semibold mb-6">📊 Répartition des élèves par classe</h3>
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  </ResponsiveContainer>
</div>


      </div>
    </AdminLayout>
  );
};

export default DashboardAdmin;
