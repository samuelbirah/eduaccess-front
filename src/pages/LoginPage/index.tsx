import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import PublicLayout from "../../layouts/PublicLayout"

const LoginPage = () => {
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(email, password)
    } catch (error) {
      console.error("Erreur lors de la connexion", error)
      alert("Identifiants incorrect")
    }
  }
    return (
      <PublicLayout>
        <h2 className="text-2xl font-bold ùb-4">Page de connexion</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Nom d'utilisateur"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full mb-4"
          />
          <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 my-2 w-full" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Se connecter</button>
        </form>
      </PublicLayout>
    )
  }
  
  export default LoginPage
  