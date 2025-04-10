import { ReactNode } from "react"
import Navbar from "../../components/Navbar"

type Props = {
    children: ReactNode
}

const PublicLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar/>

            <main>
                {children}
            </main>

            <footer className="text-center text-gray-500 text-sm py-4 border-t mt-6">
            © 2025 TechAccess. Tous droits réservés.
            </footer>
        </div>
    )
}

export default PublicLayout