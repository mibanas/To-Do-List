import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="flex">

    {/* Barre de Navigation */}
    <aside className="sidebar w-1/3 bg-gray-800 text-white p-4">
      <div className="logo text-2xl font-bold mb-4">Logo</div>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/tasks">Tâches</Link></li>
            <li><Link to="/users">Utilisateurs</Link></li>
            <li><Link to="/dashboard">Tableau de Bord</Link></li>
          </ul>
        </nav>
    </aside>

    {/* Contenu Principal */}
    <main className="main-content flex-1 p-4">

      <header className="header flex justify-between items-center mb-4">
        <div className="user-profile font-bold">Nom d'utilisateur</div>
        <div className="logout-btn cursor-pointer text-blue-500">Déconnexion</div>
      </header>
      
      {/* Contenu spécifique du tableau de bord */}
      <section className="dashboard-content">
        <h1 className="text-2xl font-bold mb-4">Tableau de Bord</h1>
        {/* Contenu du tableau de bord */}
      </section>
    </main>

    </div>
  );
}

export default App;
