const db = require("../instance");
const { DataTypes } = require("sequelize");

const Person = db.define('person', {
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
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        updatedAt: false,
        createdAt: false,
        freezeTableName: true,
    }
);

module.exports = Person;