import { useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { PlusCircle, Eye, Trash2 } from "lucide-react";

const TeacherPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const teachers = [
    {
      id: 1,
      name: "Jean Mulumba",
      email: "j.mulumba@eduaccess.cd",
      subject: "Mathématiques",
      classes: 3,
    },
    {
      id: 2,
      name: "Aline Mukendi",
      email: "a.mukendi@eduaccess.cd",
      subject: "Français",
      classes: 2,
    },
  ];

  return (
    <AdminLayout>
      <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">👨‍🏫 Mes enseignants</h2>
        <button
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => setModalOpen(true)}
        >
          <PlusCircle size={18} />
          Ajouter un enseignant
        </button>
      </div>

      <div className="w-full overflow-x-auto rounded-xl px-2 sm:px-0">
        <table className="min-w-[720px] bg-white rounded-xl shadow">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Nom</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Email</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Matière</th>
              <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700"># Classes</th>
              <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm text-gray-800">{teacher.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{teacher.email}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{teacher.subject}</td>
                <td className="px-6 py-4 text-center text-sm text-gray-800">{teacher.classes}</td>
                <td className="px-6 py-4 text-center">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">
                    <Eye size={18} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      {/* MODAL D'AJOUT D'ENSEIGNANT */}
      {modalOpen && (
        <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Ajouter un enseignant</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Jean Mulumba"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="j.mulumba@eduaccess.cd"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Matière</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Mathématiques"
                />
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
                  onClick={() => setModalOpen(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
    </AdminLayout>
  );
};

export default TeacherPage;
