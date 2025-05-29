const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white mt-10 pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <img src="/assets/logo.svg" alt="Logo" className="h-6 w-6" />
            EduAccess
          </h2>
          <p className="text-sm mt-2">&copy; TechAccess {new Date().getFullYear()}</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">À propos</h3>
          <ul className="space-y-1 text-sm">
            <li>Missions</li>
            <li>Équipe</li>
            <li>Newsletter</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li>Nous contacter</li>
            <li>Polices</li>
            <li>FAQ’s</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Social</h3>
          <ul className="space-y-1 text-sm">
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
