import { Link } from "react-router-dom"
import backgroundImage from "../../assets/images/image.jpg"

const EntryPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex items-center justify-center px-6 py-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "darken"
      }}
    >
      <div className="max-w-4xl text-center space-y-8 backdrop-blur-md bg-black/50 p-10 rounded-xl">
        <div className="flex justify-center items-center space-x-2 text-white text-4xl font-bold">
          <span className="text-5xl">📱</span>
          <h1>EduAcces</h1>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Bienvenue sur EduAccess : Votre école, digitalisée et accessible !
          </h2>
          <p className="text-gray-200 leading-relaxed">
            EduAccess est une plateforme innovante conçue pour moderniser et simplifier la gestion scolaire. 
            Que vous soyez étudiant, parent, enseignant ou administrateur, EduAccess vous offre un accès rapide 
            et sécurisé à toutes les ressources dont vous avez besoin.
          </p>
        </div>

        <div className="text-left text-gray-100">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            Pourquoi choisir EduAccess ?
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Gagnez du temps :</strong> Réduisez les files d’attente grâce à des paiements en ligne et un accès instantané aux documents importants.</li>
            <li><strong>Restez informé :</strong> Consultez vos résultats scolaires, suivez vos paiements, et recevez des notifications en temps réel.</li>
            <li><strong>Simplifiez la communication :</strong> Profitez d’un espace dédié pour échanger avec l’administration et les enseignants.</li>
            <li><strong>Optimisez vos ressources :</strong> Tout ce dont vous avez besoin est à portée de clic.</li>
          </ul>
        </div>

        <div className="text-gray-300 text-left leading-relaxed">
          <p>
            Avec EduAccess, nous transformons l’expérience scolaire en la rendant plus fluide, transparente et efficace.
          </p>
          <p className="mt-2">
            Découvrez nos fonctionnalités :
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-1">
            <li>Gestion des paiements en ligne.</li>
            <li>Accès rapide aux résultats et documents.</li>
            <li>Espace de communication moderne et sécurisé.</li>
            <li>Tableau de bord personnalisé pour chaque utilisateur.</li>
          </ul>
          <p className="mt-3">
            Rejoignez-nous dès aujourd’hui et faites partie de l’école de demain !
          </p>
        </div>

        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded shadow-md transition-all duration-300 inline-block"
        >
          Se connecter
        </Link>
      </div>
    </div>
  )
}

export default EntryPage
