module.exports = (sequelize, DataTypes) =>
  sequelize.define('Timesheet', {
    TagID: DataTypes.STRING,
    EmployeeName: DataTypes.STRING,
    Data: DataTypes.STRING,
    ClockIn: DataTypes.STRING,
    LunchIn: DataTypes.STRING,
    LunchOut: DataTypes.STRING,
    ClockOut: DataTypes.STRING
  }, {
    timestamps: false
  })
