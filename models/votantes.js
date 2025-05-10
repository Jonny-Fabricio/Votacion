import mongoose from "mongoose";

const votantesSchema = new mongoose.Schema({
    nombre: { type: String, require: true},
    havotado: { type : Boolean, require: true},
},
{
    timestamps: true,
}
);

export default mongoose.model("Votantes", votantesSchema)