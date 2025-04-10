import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import PublicLayout from "../../layouts/PublicLayout";
import registerImage from "../../assets/images/image.jpg";
import { FcGoogle } from "react-icons/fc";
import InputField from "../../components/InputFiel";

const RegisterPage = () => {
  const { register, signInWithGoogle } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<string | null>(null);

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      setErrors("Tous les champs sont requis.");
      return;
    }

    if (!isValidEmail(email)) {
      setErrors("L'adresse email n'est pas valide.");
      return;
    }

    if (password.length < 6) {
      setErrors("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    if (password !== confirmPassword) {
      setErrors("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      await register(fullName, email, password);
    } catch (error) {
      console.error("Erreur lors de l'inscription", error);
      setErrors("Erreur lors de l'inscription.");
    }
  };

  return (
    <PublicLayout>
      <div className="flex h-screen overflow-hidden">
        {/* Image */}
        <div className="w-[60%] hidden md:block">
          <img
            src={registerImage}
            alt="Inscription"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Formulaire */}
        <div className="w-full md:w-[40%] flex items-center justify-center p-12 bg-white">
          <div className="w-full max-w-md space-y-6">
            <h2 className="text-3xl font-bold text-blue-900">Inscription</h2>

            {errors && (
              <div className="text-red-500 text-sm font-medium">{errors}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField
                label="Email ou Nom d’utilisateur"
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <InputField
                label="Address email"
                type="email"
                placeholder="email@example.com"
                value={fullName}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                label="Mot de passe"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputField
                label="Confirmer le mot de passe"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold"
              >
                S’inscrire
              </button>
            </form>

            <div className="flex items-center justify-between">
              <hr className="w-full border-gray-300" />
              <span className="mx-2 text-gray-500 text-sm">ou</span>
              <hr className="w-full border-gray-300" />
            </div>

            {/* Bouton Google */}
            <button
              onClick={signInWithGoogle}
              className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center py-2 rounded-md font-semibold"
            >
              <FcGoogle className="text-xl mr-2 bg-white rounded-full" />
              S’inscrire avec Google
            </button>

            <div className="text-center text-sm text-gray-600">
              Vous avez déjà un compte ?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Se connecter
              </a>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default RegisterPage;
