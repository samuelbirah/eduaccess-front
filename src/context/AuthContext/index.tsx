import { createContext, useContext, useState, ReactNode, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../sevices/auth"

type User = {
    id: string
    name: string
    email: string
    role: "ADMIN" | "STUDENT" | "PARENT" | "TEACHER" | "MANAGER"
}

type AuthContextType = {
    user: User | null
    token: string | null
    login: (email: string, password: string) => Promise<void>
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null)
    const [token, setToken] = useState<string | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
      const storedUser = localStorage.getItem("eduaccess-user")
      const storedToken = localStorage.getItem("eduaccess-token")
      if (storedToken && storedUser) {
        setToken(storedToken)
        setUser(JSON.parse(storedUser))
      }
    }, [])
    

    const login = async (email: string, password: string) => {
        const { token, user } = await loginUser({ email, password})
        setToken(token)
        setUser(user)
        localStorage.setItem("eduaccess-token", token)
        localStorage.setItem("eduaccess-user", JSON.stringify(user))

        switch (user.role) {
            case "ADMIN":
                navigate("/admin")
                break
            case "STUDENT":
                navigate("/student")
                break
            default:
                navigate("/")
        }
    }

    const logout = () => {
        setToken(null)
        setUser(null)
        localStorage.removeItem("eduaccess-token")
        localStorage.removeItem("eduaccess-user")
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}