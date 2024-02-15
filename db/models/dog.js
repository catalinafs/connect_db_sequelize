const db = require("../instance");
const { DataTypes } = require("sequelize");
const Person = require("./person");

const Dog = db.define('dog', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    race: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_person: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
    {
        updatedAt: false,
        createdAt: false,
        freezeTableName: true,
    }
);

Dog.belongsTo(Person, {
    foreignKey: 'id_person',
    as: 'person-dog',
    onDelete: 'CASCADE',
});

Person.hasMany(Dog, {
    foreignKey: 'id_person',
    as: 'dog-person',
})

module.exports = Dog;