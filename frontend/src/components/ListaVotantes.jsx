import { useEffect, useState } from "react";
import axios from "axios";

const ListaVotantes = () => {
  const [votantes, setVotantes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/votantes")
      .then((res) => setVotantes(res.data))
      .catch((err) => console.error("Error al obtener votantes", err));
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Lista de Votantes</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">¿Ha Votado?</th>
          </tr>
        </thead>
        <tbody>
          {votantes.map((v) => (
            <tr key={v.id}>
              <td className="p-2 border">{v.id}</td>
              <td className="p-2 border">{v.nombre}</td>
              <td className="p-2 border">{v.haVotado ? "Sí" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaVotantes;