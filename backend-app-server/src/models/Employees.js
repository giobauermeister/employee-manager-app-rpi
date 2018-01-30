module.exports = (sequelize, DataTypes) =>
  sequelize.define('Employees', {
    TagID: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    EmployeeName: {
      type: DataTypes.STRING,
      unique: false,
      validate: {
        notEmpty: true
      }
    },
    Title: DataTypes.STRING,
    Department: DataTypes.STRING,
    Cellphone: DataTypes.STRING,
    Email: DataTypes.STRING,
    Address: DataTypes.STRING
  }, {
    timestamps: false
  })
