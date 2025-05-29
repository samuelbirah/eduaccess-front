// src/pages/admin/classes/ClasseDetailPage.tsx
import { useParams } from "react-router-dom";
import AdminLayout from "../../../layouts/AdminLayout";
import { School, Trash2 } from "lucide-react";

const ClasseDetailPage = () => {
  const { id } = useParams(); // Ex: /admin/classes/1

  // Données simulées
  const classe = {
    nom: "6ème Scientifique",
    enseignant: "M. Kalonji",
    effectif: 32,
    eleves: [
      { nom: "Sarah Ilunga", date: "2025-04-12" },
      { nom: "David Mbuyi", date: "2025-04-10" },
      { nom: "Grâce Kalonji", date: "2025-04-08" },
    ],
  };

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <School className="text-blue-600" />
            {classe.nom}
          </h2>

          <button className="flex items-center gap-2 text-red-600 hover:text-red-800 transition">
            <Trash2 size={18} />
            Supprimer la classe
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <p className="mb-2">
            👨‍🏫 <strong>Enseignant :</strong> {classe.enseignant}
          </p>
          <p>
            👥 <strong>Effectif :</strong> {classe.effectif} élèves
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">📋 Liste des élèves</h3>
          <ul className="space-y-3">
            {classe.eleves.map((eleve, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-2"
              >
                <span>{eleve.nom}</span>
                <span className="text-sm text-gray-500">
                  Inscrit le {eleve.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ClasseDetailPage;
