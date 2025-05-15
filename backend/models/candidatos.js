import mongoose from "mongoose";

const candidatosSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true},
    edad: { type : Number, required: true},
    votos: { type: Number, default: 0 },
},
{
    timestamps: true,
}
);

export default mongoose.model("Candidatos", candidatosSchema)