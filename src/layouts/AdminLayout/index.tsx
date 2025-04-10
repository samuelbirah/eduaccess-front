import { ReactNode } from "react"
import { useAuth } from "../../context/AuthContext"

type Props = {
    children: ReactNode
}

const AdminLayout = ({ children }: Props) => {
    const { user, logout } = useAuth()

    return (
        <div className="min-h-screen bg-white flex">
            <aside className="w-64 bg-gray-800 text-white p-4">
                <h2 className="text-xl font-bold mb-6">Espace Admin</h2>
                <p>👤 {user?.username}</p>
            
                <button onClick={logout} className="mt-6 bg-red-600 px-4 py-2 rounded">
                    Déconnexion
                </button>
            </aside>

            <main className="flex-1 p-6 bg-gray-50">{children}</main>
        </div>
    )
}

export default AdminLayout