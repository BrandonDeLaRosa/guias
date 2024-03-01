const express = require ('express');
const db = require ('./utils/database');
const userRoutes = require('./routes/users.routes')
const Todos = require('./models/todos.model');
const initModels = require('./models/initModels');




initModels();
const app = express();
app.use(express.json());

db.authenticate()
    .then(() => {
        console.log('Db Authenticated :)');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
});

// db.sync({force:true})
db.sync()
    .then(() => {
        console.log('Db Synchronized :)');
    }).catch((error) => {
        console.log(error);
})

const PORT = 2000


app.use(userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to my todo app 1')
});

app.listen(PORT, () => {
    console.log("Welcome to my todo app, this si a console message :)");
});
 
