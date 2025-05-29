import AdminLayout from "../../../layouts/AdminLayout";
import { useNavigate } from "react-router-dom";
import { School, PlusCircle, Trash2 } from "lucide-react";
import { useState } from "react";




const ClassesPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const classes = [
    { id: 1, nom: "6ème Scientifique", effectif: 32, enseignant: "M. Kabasele" },
    { id: 2, nom: "5ème Commercial", effectif: 28, enseignant: "Mme Mbuyi" },
    { id: 3, nom:  "4ème Littéraire", effectif: 25, enseignant: "M. Tshibanda" },
    { id: 4, nom: "3ème Scientifique", effectif: 30, enseignant: "Mme Mukendi" },
  ];

  const handleDelete = (nom: string) => {
    // Logique de suppression ici (à implémenter plus tard avec API)
    console.log("Supprimer la classe :", nom);
  };

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">📚 Mes classes</h2>
          <button
  onClick={() => setShowModal(true)}
  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
>
  <PlusCircle size={18} />
  Nouvelle classe
</button>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {classes.map((classe) => (
            <div
  key={classe.id}
  onClick={() => navigate(`/admin/classes/${classe.id}`)}
  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
>

              {/* Bouton Supprimer (visible au survol) */}
              <button
                onClick={() => handleDelete(classe.nom)}
                className="absolute top-3 right-3 text-red-500 hover:text-red-700 hidden group-hover:block"
              >
                <Trash2 size={18} />
              </button>

              <div className="flex items-center gap-4 mb-4 text-blue-600">
                <School size={28} />
                <h3 className="text-lg font-bold">{classe.nom}</h3>
              </div>

              <p className="text-gray-500 text-sm mb-1">
                Effectif :{" "}
                <span className="text-gray-800 font-medium">
                  {classe.effectif} élèves
                </span>
              </p>

              <p className="text-gray-500 text-sm">
                Responsable :{" "}
                <span className="text-gray-800 font-medium">
                  {classe.enseignant}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
  <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
      <h3 className="text-lg font-semibold mb-4">➕ Nouvelle classe</h3>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Nom de la classe
          </label>
          <input
            type="text"
            placeholder="Ex: 6ème Scientifique"
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Enseignant principal
          </label>
          <input
            type="text"
            placeholder="Ex: M. Kalonji"
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="px-4 py-2 text-gray-700 hover:underline"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </AdminLayout>
    
  );
  
};



export default ClassesPage;
