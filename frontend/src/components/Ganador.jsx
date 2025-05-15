import React, { useEffect, useState } from "react";

function Ganador() {
  const [ganador, setGanador] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/ganador") // Cambia el puerto si usas otro
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener el ganador");
        return res.json();
      })
      .then((data) => {
        setGanador(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando ganador...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="ganador-container">
      <h2>Ganador de la Votación</h2>
      <p>
        <strong>Nombre:</strong> {ganador.nombre}
      </p>
      <p>
        <strong>Votos:</strong> {ganador.votos}
      </p>
    </div>
  );
}

export default Ganador;
