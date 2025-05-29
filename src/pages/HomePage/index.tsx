import PublicLayout from "../../layouts/PublicLayout";
import ActivityCard from "../../components/ActivityCard";
import heroImg from "../../assets/images/image.jpg";

const HomePage = () => {
  return (
    <PublicLayout>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-red-500">Bienvenue Ben</h1>
            <p className="mt-4 text-gray-700">
              Nous sommes ravis de vous revoir sur notre plateforme <strong>EduAccess</strong>.<br />
              Restez connectés avec votre école et vérifiez vos résultats et progressions ainsi que les ressources disponibles.
            </p>
          </div>
          <img src={heroImg} alt="Illustration" className="w-full md:w-1/2 rounded-lg" />
        </div>

        <h2 className="text-2xl font-semibold text-red-500 mb-6">Voici un résumé de vos activités</h2>

        <ActivityCard
          title="Résultats récents"
          description="Consulter les résultats de mes derniers examens"
          buttonLabel="Aller vers les résultats"
          buttonColor="bg-green-500"
          to="/results"
        />
        <ActivityCard
          title="Paiements"
          description="Vérifier les paiements ou effectuez-en un nouveau"
          buttonLabel="Consulter les paiements"
          buttonColor="bg-blue-500"
          to="/fees"
        />
        <ActivityCard
          title="Ressources"
          description="Accédez aux documents et bibliographies"
          buttonLabel="Aller vers les ressources"
          buttonColor="bg-red-500"
          to="/resources"
        />
      </div>
    </PublicLayout>
  );
};

export default HomePage;
