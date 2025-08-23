// image name discount price bgcolour panelcolour textcolour
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    discount: { type: Number, default: 0 },
    price: { type: Number, required: true },
    bgcolour: { type: String },
    panelcolour: { type: String },
    textcolour: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);