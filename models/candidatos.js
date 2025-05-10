import mongoose from "mongoose";

const candidatosSchema = new mongoose.Schema({
    nombre: { type: String, require: true},
    edad: { type : Number, require: true},
},
{
    timestamps: true,
}
);

export default mongoose.model("Candidatos", candidatosSchema)