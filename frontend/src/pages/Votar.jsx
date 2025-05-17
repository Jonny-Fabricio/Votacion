import EmitirVoto from "../components/EmitirVoto";

export default function Votar() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-purple-100 to-pink-200 p-10">
      <h1 className="text-3xl font-bold text-purple-900 mb-6">Emite tu Voto</h1>
      <p className="mb-4 text-gray-700">
        Elige a tu candidato favorito y participa en esta elección histórica.
      </p>
      <EmitirVoto />
    </div>
  );
}