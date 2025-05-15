import { useState, useEffect } from "react";
import axios from "axios";

const EmitirVoto = () => {
  const [nombreVotante, setNombreVotante] = useState("");
  const [nombreCandidato, setNombreCandidato] = useState("");
  const [candidatos, setCandidatos] = useState([]);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/candidatos")
      .then((res) => setCandidatos(res.data))
      .catch((err) => console.error("Error al obtener candidatos", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    try {
      const res = await axios.post("http://localhost:4000/votar", {
        nombreVotante,
        nombreCandidato,
      });
      setMensaje(res.data.message);
    } catch (error) {
      if (error.response) {
        setMensaje(error.response.data.message);
      } else {
        setMensaje("Error al enviar el voto");
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Emitir Voto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombreVotante}
          onChange={(e) => setNombreVotante(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <select
          value={nombreCandidato}
          onChange={(e) => setNombreCandidato(e.target.value)}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Selecciona un candidato</option>
          {candidatos.map((candidato) => (
            <option key={candidato.id} value={candidato.nombre}>
              {candidato.nombre}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Votar
        </button>
      </form>
      {mensaje && <p className="mt-4 text-center text-lg">{mensaje}</p>}
    </div>
  );
};

export default EmitirVoto;
