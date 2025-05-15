import { useEffect, useState } from "react";
import axios from "axios";

const ListaCandidatos = () => {
  const [candidatos, setCandidatos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/candidatos")
      .then((res) => setCandidatos(res.data))
      .catch((err) => console.error("Error al obtener candidatos", err));
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Lista de Candidatos</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">Votos</th>
          </tr>
        </thead>
        <tbody>
          {candidatos.map((c) => (
            <tr key={c.id}>
              <td className="p-2 border">{c.id}</td>
              <td className="p-2 border">{c.nombre}</td>
              <td className="p-2 border">{c.votos || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaCandidatos;
