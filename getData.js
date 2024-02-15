const Dog = require("./db/models/dog");
const Person = require("./db/models/person");

const getData = (req, res) => {
    Person.findOne({
        where: { id: 1 },
        include: [{ model: Dog, as: "dog-person" }],
    }).then((data) => {
        res.status(200).json(data.toJSON());
    });
}

module.exports = getData;