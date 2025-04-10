import PublicLayout from "../../layouts/PublicLayout";

const HomePage = () => {
    return (
        <PublicLayout>
            <h1 className="text-3xl font-bold">Bienvenue sur EduAccess !</h1>
            <p className="mt-4 text-gray-600">Connecte-toi pour accéder à ton espace personnel.</p>
        </PublicLayout>
    )
}

export default HomePage