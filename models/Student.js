const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Student = sequelize.define("Student", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    course: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Student;