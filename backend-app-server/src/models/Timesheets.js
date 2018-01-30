module.exports = (sequelize, DataTypes) =>
  sequelize.define('Timesheet', {
    TagID: DataTypes.STRING,
    EmployeeName: DataTypes.STRING,
    Data: DataTypes.TEXT,
    ClockIn: DataTypes.STRING,
    LunchIn: DataTypes.STRING,
    LunchOut: DataTypes.STRING,
    ClockOut: DataTypes.STRING
  }, {
    timestamps: false
  })
