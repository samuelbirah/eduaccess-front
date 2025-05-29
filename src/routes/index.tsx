import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import DashboardAdmin from "../pages/admin/DashboardAdmin"
import { useAuth } from "../context/AuthContext"
import { JSX } from "react"
import StudentPage from "../pages/StudentPage"
import EntryPage from "../pages/EntryPage"
import RegisterPage from "../pages/RegisterPage"
import ClassesPage from "../pages/admin/ClassesPage"
import CaissePage from "../pages/admin/CaissePage"
import UsersPage from "../pages/admin/UserPage"
import TeacherPage from "../pages/admin/TeacherPage"
import StudentsPage from "../pages/admin/StudentsPage"
import ClasseDetailPage from "../pages/admin/ClasseDetailPage";




const AppRoutes = () => {
    type Props = {
        element: JSX.Element,
        allowedRoles: string[]
    }

    const PrivateRoute = ({ element, allowedRoles }: Props) => {
        const { user, isLoading } = useAuth()

        if (isLoading) return <div>Loading...</div>

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
                <Route path="/admin" element={<PrivateRoute element={<DashboardAdmin />} allowedRoles={["ADMIN", "MANAGER"]} />} />
                    <Route path="/admin/classes" element={<PrivateRoute element={<ClassesPage />} allowedRoles={["ADMIN", "MANAGER"]} /> } />
                        <Route path="/admin/classes/:id" element={<PrivateRoute element={<ClasseDetailPage />} allowedRoles={["ADMIN", "MANAGER"]} />} />
                    <Route path="/admin/teachers" element={<PrivateRoute element={<TeacherPage />} allowedRoles={["ADMIN", "TEACHER"]} /> } />
                    <Route path="/admin/students" element={<PrivateRoute element={<StudentsPage />} allowedRoles={["ADMIN", "STUDENT"]} /> } />
                    <Route path="/admin/caisse" element={<PrivateRoute element={<CaissePage />} allowedRoles={["ADMIN", "MANAGER"]} /> } />
                    <Route path="/admin/users" element={<PrivateRoute element={<UsersPage />} allowedRoles={["ADMIN", "MANAGER"]} /> } />

                <Route path="/student" element={<PrivateRoute element={<StudentPage />} allowedRoles={["ADMIN", "STUDENT", "PARENT"]} />} />
                <Route path="/*" element={<NotFoundPage/>} />
            </Routes>
    )
}


export default AppRoutes