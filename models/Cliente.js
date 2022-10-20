const mongoose = require('mongoose');
const Cliente = mongoose.model('Cliente', {
    id: Number,
    nome: String,
    sobreNome: String
});

module.exports = Cliente;