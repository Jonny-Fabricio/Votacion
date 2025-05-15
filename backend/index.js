import express from 'express'
import mongoose from 'mongoose';
import votantes from './models/votantes.js'
import candidatos from './models/candidatos.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const {MONGO_URI, PORT} = process.env;

app.use(express.json());

//Conexion con la base de datos
mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Conectado a la base de datos"))
    .catch((err) => console.log("Error al conectar a la base de datos", err));

//Ruta de Cantidatos
app.get("/candidatos", async (req, res) => {
    const listacandidatos = await candidatos.find();
    res.json(listacandidatos);
});

app.post("/candidatos",  async (req, res) => {
    try {
        const { id, nombre } = req.body;
        const existente = await candidatos.findOne({ id });
        if (existente) {
            return res.status(409).json({ message: "Ya existe un candidato con ese ID" });
        }
        const nuevoCandidato = new candidatos({ id, nombre });
        await nuevoCandidato.save();
        res.status(201).send("Candidato agregado");
    } catch (error) {
        res.status(400).json({ message : "Error al guardar el candidato", error})
    }
});
// Ruta de Votantes
app.get("/votantes", async (req, res) => {
    const listavotantes = await votantes.find();
    res.json(listavotantes);
});

app.post("/votantes", async (req, res) => {
    try {
        const { id, nombre } = req.body;
        const existente = await votantes.findOne({ id });
        if (existente) {
            return res.status(409).json({ message: "Ya existe un votante con ese ID" });
        }
        const nuevoVotante = new votantes({ id, nombre, haVotado: false });
        await nuevoVotante.save();
        res.status(201).send("Votante registrado");
    } catch (error) {
        res.status(400).json({ message : "Error al ingresar votos", error})
    }
});

app.post("/votar", async (req,res) => {
    try {
        const { nombreVotante, nombreCandidato } = req.body;
        const votante = await votantes.findOne({ nombre: nombreVotante});
        if (!votante) {
            return res.status(404).json({ message : "Votante no encontrado"});
        }
        if (votante.haVotado) {
            return res.status(409).json({ message : "Este votante ya ha votado"});
        }
        const candidato = await candidatos.findOne({ nombre: nombreCandidato});
        if (!candidato) {
            return res.status(404).json({ message : "Candidato no encontrado"});
        }
        candidato.votos = (candidato.votos || 0) +1;
        await candidato.save();

        votante.haVotado = true;
        await votante.save();

        res.status(200).json({ message : "Voto registrado con exito"})
    } catch (error) {
        res.status(500).json({ message: "Error al procesar el voto", error });
    }
});
app.get("/ganador", async (req, res) => {
    try {
        const ganador = await candidatos.findOne().sort({ votos: -1});
        if (!ganador) {
            return res.status(404).json({ message : "No hay candidatos registrados"});
        }
        res.status(200).json({ message : "Ganador de la Votacion", nombre : ganador.nombre, votos : ganador.votos});
    } catch (error) {
        res.status(500).json({ message : "Error al obtener el ganador"});
    }
})

// Iniciar el servidor
app.listen(PORT || 4000, () => {
    console.log(`Servidor corriendo en el puerto ${PORT || 4000}`);
});