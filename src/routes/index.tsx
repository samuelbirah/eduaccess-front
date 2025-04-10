import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import AdminDashboard from "../pages/AdminDashboard"
import { useAuth } from "../context/AuthContext"
import { JSX } from "react"
import StudentPage from "../pages/StudentPage"
import EntryPage from "../pages/EntryPage"
import RegisterPage from "../pages/RegisterPage"



const AppRoutes = () => {
    type Props = {
        element: JSX.Element,
        allowedRoles: string[]
    }

    const PrivateRoute = ({ element, allowedRoles }: Props) => {
        const { user } = useAuth()

        if (!user) {
            return <Navigate to="/login" replace />
        }
        
        if (!allowedRoles.includes(user.role)) {
            return <Navigate to="/home" replace />
        }

        return element
    }


    return (
            <Routes>
                <Route path="/" element={<EntryPage/>} />
                <Route path="/home" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/admin" element={<PrivateRoute element={<AdminDashboard />} allowedRoles={["ADMIN", "MANAGER"]} />} />
                <Route path="/student" element={<PrivateRoute element={<StudentPage />} allowedRoles={["ADMIN", "STUDENT", "PARENT"]} />} />
                <Route path="/*" element={<NotFoundPage/>} />
            </Routes>
    )
}


export default AppRoutes