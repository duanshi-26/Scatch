const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    products: { type: Array, default: [] },
    contact: { type: String },
    picture: { type: String },
    address: { type: String },
    gstin : { type: String}
}, { timestamps: true });