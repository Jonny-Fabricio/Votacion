import { useState } from "react";
import axios from "axios";

const RegistrarCandidato = () => {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/candidatos", {
        id,
        nombre,
      });
      setMensaje(res.data.message || "Candidato registrado exitosamente");
      setId("");
      setNombre("");
    } catch (error) {
      setMensaje(
        error.response?.data?.message || "Error al registrar el candidato"
      );
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Registrar Candidato</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="ID del Candidato"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Nombre del Candidato"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Registrar
        </button>
      </form>
      {mensaje && (
        <div className="mt-4 text-center text-sm text-gray-700">{mensaje}</div>
      )}
    </div>
  );
};

export default RegistrarCandidato;
