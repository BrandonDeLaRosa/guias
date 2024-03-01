const express = require('express');
const db = require('./utils/database');
const userRoutes = require('./Routes/users.routes')
const Todos = require('./models/todos.model');
const initModels = require('./models/initModels')


initModels(); 

const app = express();
app.use(express.json());


db.authenticate()
    .then(() => {
        console.log('Authentication succesfull');
    }).catch((error) => {
        console.log(error);
    })

// db.sync({force:true})
db.sync()
    .then(() => {
        console.log('Sync Completed :)');
    }).catch((error) => {
        console.log(error);
    });


const PORT = 1030;

app.use(userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to To Dos API');
});

app.listen(PORT, () =>{
    console.log('Welcome from the console');
}); 