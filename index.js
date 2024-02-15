// importaciones
const express = require('express');
const bodyParser = require('body-parser');

// Constantes
const app = express();
const port = process.env.PORT;

// App use
app.use(bodyParser.json());

//* importamos la instancia db
const db = require('./db/instance');

//* Se crean los modelos de las tablas
const Dog = require('./db/models/dog');
const Person = require('./db/models/person');
const getData = require('./getData');

//* Autenticamos la base de datos, se utiliza solo para autenticar y utilizar los datos
// db.authenticate().then(() => console.log('base de datos conectada'));

//* Sincronizamos la base de datos, se utiliza para crear tablas, y utilizar los datos
db.sync().then(() => console.log('base de datos conectada'));

//* Crear regristro
// Person.create({ id: 2, name: 'Esteban', lastname: 'Forero Suarez' });
// Dog.create({ id: 3, name: 'Pedro', race: 'Lobo Siberiano', age: 2, id_person: 1 });

// Person.findOne({
//     where: { id: 1 },
//     include: [{ model: Dog, as: "dog-person" }],
// }).then((data) => {
//     res.status(200).json(data.toJSON());
// });

app.get('/', getData);

//* Traer todos los registros y pasarlos a json
// Dog.findAll().then((dogs) => {
//     dogs.forEach((dog) => console.log(dog.toJSON()))
// });

//* Actualizar el registro
// Dog.update({ name: 'Roco' }, { where: { race: 'Lobo Siberiano' } });

//* Traer 1 registro en forma de objeto y pasarlos a json
// Dog.findOne({ where: { id: 1 } }).then((dog) => console.log(dog.toJSON()));

//* Eliminar un registro
// Dog.destroy({ where: { id: 1 } });

//* Eliminar todos los registros
// Dog.destroy({ truncate: true });

//* Listening app
app.listen(port, () => {
    console.log('its working on port: ' + port);
});