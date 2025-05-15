import RegistrarVotante from './components/RegistrarVotante';
import RegistrarCandidato from './components/RegistrarCandidato';
import ListaVotantes from './components/ListaVotantes';
import ListaCandidatos from './components/ListaCandidatos';
import EmitirVoto from './components/EmitirVoto';
import Ganador from './components/Ganador';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 space-y-10 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        🎉 Bienvenido al Sistema de Votación 🎉
      </h1>

      <div className="grid gap-6">
        <RegistrarVotante />
        <RegistrarCandidato />
        <ListaVotantes />
        <ListaCandidatos />
        <EmitirVoto />
        <Ganador />
      </div>
    </div>
  );
}

export default App;




