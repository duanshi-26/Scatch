const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/scatch', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}
).catch(err => {
    console.error('Failed to connect to MongoDB', err);
}   );

const userSchema = mongoose.Schema({
    // fullname email password isAdmin orders contact picture address
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    orders: { type: Array, default: [] },
    contact: { type: String },
    picture: { type: String },
    address: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);