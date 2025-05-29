import { ReactNode } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

type Props = {
    children: ReactNode
}

const PublicLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header/>

            <main>
                {children}
            </main>

            <Footer/>
        </div>
    )
}

export default PublicLayout