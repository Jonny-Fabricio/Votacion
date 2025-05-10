import express from 'express'
import mongoose from 'mongoose';
import votantes from './models/votantes.js'
import Candidatos from './models/candidatos.js'
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
    const listacandidatos = await Candidatos.find();
    res.json(listacandidatos);
});

app.post("/candidatos", (req, res) => {
    try {
        const { id, nombre } = req.body;
        Candidatos.push({ id, nombre });
        res.status(201).send("Candidato agregado");
    } catch (error) {
        res.status(400).json({ message : "Error al guardar el candidato", error})
    }
});
// Ruta de Votantes
app.get("/votantes", async (req, res) => {
    const listavotantes = await Votantes.find();
    res.json(listavotantes);
});

app.post("/votantes",  (req, res) => {
    try {
        const { id, nombre } = req.body;
        Votantes.push({ id, nombre, haVotado: false });
        res.status(201).send("Votante registrado");
    } catch (error) {
        res.status(400).json({ message : "Error al ingresar votos", error})
    }
});
