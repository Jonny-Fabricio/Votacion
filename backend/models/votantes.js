import mongoose from "mongoose";

const votantesSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true},
    haVotado: { type : Boolean, required: false},
},
{
    timestamps: true,
}
);

export default mongoose.model("Votantes", votantesSchema)