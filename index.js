const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json());

const clienteRoutes = require('./routes/clienteRoutes');

app.use('/clientes', clienteRoutes);

app.get('/', (req, res) => {
    res.json("ola")
    return 
});

mongoose.connect('mongodb+srv://wendy-api:wendy-api@wendyapicluster.nw4enub.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('Conectamos ao MongoDB!')
    app.listen(3008)
})
.catch((err) => console.log(err))



app.listen(3000)