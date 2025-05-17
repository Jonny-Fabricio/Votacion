import RegistrarVotante from "../components/RegistrarVotante";
import RegistrarCandidato from "../components/RegistrarCandidato";

export default function Registrar() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-100 to-blue-300 p-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Registro de Participantes</h1>
      <p className="mb-4 text-gray-700">
        Aquí puedes registrar candidatos y votantes para participar en la elección.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <RegistrarCandidato />
        <RegistrarVotante />
      </div>
    </div>
  );
}
