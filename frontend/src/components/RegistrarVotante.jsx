import { useState } from 'react';
import axios from 'axios';

const RegistrarVotante = () => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/votantes', { id, nombre });
      setMensaje(res.data);
      setId('');
      setNombre('');
    } catch (error) {
      const msg = error.response?.data?.message || 'Error al registrar votante';
      setMensaje(msg);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <h2>Registrar Votante</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default RegistrarVotante;
