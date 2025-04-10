import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import PublicLayout from "../../layouts/PublicLayout";
import loginImage from "../../assets/images/image.jpg";
import InputField from "../../components/InputFiel";
// import { FcGoogle, FcIphone } from "react-icons/fc";

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.error("Erreur lors de la connexion", error);
      alert("Identifiants incorrects");
    }
  };

  return (
    <PublicLayout>
      <div className="flex h-screen overflow-hidden">
        {/* Image (60%) */}
        <div className="w-[60%] h-full hidden md:block">
          <img
            src={loginImage}
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Formulaire (40%) */}
        <div className="w-full md:w-[40%] flex items-center justify-center p-12 bg-white">
          <div className="w-full max-w-md space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Connexion</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
            
              <InputField
              label="Email ou Nom d’utilisateur"
              placeholder="email@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
              label="Mot de passe"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              
              <div className="flex justify-between items-center text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600" />
                  Se souvenir de moi
                </label>
                <a href="#" className="text-blue-600 hover:underline">
                  Mot de passe oublié ?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
              >
                Se connecter
              </button>
            </form>

            <div className="text-center text-sm text-gray-600">
              Vous n’avez pas de compte ?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                S’inscrire
              </a>
            </div>

            <div className="flex items-center justify-center my-2">
              <hr className="flex-1 border-gray-300" />
              <span className="px-2 text-sm text-gray-500">ou</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md">
              {/* <FcGoogle className="text-xl mr-2 bg-white rounded-full" /> */}
              Se connecter avec Google
            </button>
            <button className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-md">
            {/* <FcIphone className="text-xl mr-2 bg-white rounded-full" /> */}
              Se connecter avec Apple
            </button>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default LoginPage;
