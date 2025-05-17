import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./layouts/Layout";
import Inicio from "./pages/inicio";
import Registrar from "./pages/Registrar";
import Votar from "./pages/Votar";
import Ganadores from "./pages/Ganadores";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <nav className="bg-blue-900 text-white p-4 flex justify-center space-x-8 font-semibold">
          <Link to="/">Inicio</Link>
          <Link to="/registro">Registro</Link>
          <Link to="/votar">Votar</Link>
          <Link to="/ganadores">Ganadores</Link>
        </nav>

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/registro" element={<Registrar />} />
            <Route path="/votar" element={<Votar />} />
            <Route path="/ganadores" element={<Ganadores />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

