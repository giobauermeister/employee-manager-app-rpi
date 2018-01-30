const {Employees} = require('../models')
const {Timesheet} = require('../models')
const {sequelize} = require('../models')

module.exports = {
  async fetchEmployees (req, res) {
    console.log('fetching')
    try {
      console.log('fetching inside try')
      const employees = await Employees.findAll()
      const employeesData = JSON.parse(JSON.stringify(employees))
      console.log(employeesData)
      res.send(employeesData)
      // res.send(employees.toJSON())
      // console.log(Employees.findAll().to)
      console.log('got elements!')
    } catch (err) {
      console.log(err)
      res.send({
        error: 'error',
        errorMsg: err
      })
    }
  },
  async fetchOneEmployee (req, res) {
    console.log('fetching one employee')
    console.log(req.body.params.employee_id) // imprime ID
    // res.send(req.body.params.employee_id)
    try {
      // console.log('fetching inside try')
      const employeeInfo = await Employees.findAll({
        where: {
          'TagID': req.body.params.employee_id
        }
      })
      const employeeData = JSON.parse(JSON.stringify(employeeInfo))
      console.log(employeeData)
      res.send(employeeData)
      // res.send(employees.toJSON())
      // console.log(Employees.findAll().to)
      // console.log('got elements!')
    } catch (err) {
      console.log(err)
      res.send({
        error: 'error',
        errorMsg: err
      })
    }
  },

  async fetchTimesheets (req, res) {
    console.log('fetching timesheets')
    try {
      console.log('fetching inside try')
      console.log(req.query.date)
      // console.log(req.query.year)
      if (typeof req.query.date !== 'undefined') {
        console.log('making request by DATE')
        const timesheets = await Timesheet.findAll({
          where: sequelize.where(sequelize.fn('strftime', sequelize.literal("'%Y-%m'"), sequelize.col('Data')), req.query.date)
          // where: sequelize.where('strftime', sequelize.literal("'%Y'"), sequelize.col('Data'))
          // where: sequelize.fn('strftime', sequelize.literal("'%Y'"), sequelize.col('Data'))
        })
        const timesheetsData = JSON.parse(JSON.stringify(timesheets))
        console.log(timesheetsData)
        res.send(timesheetsData)
      } else {
        console.log('making ALL REQUESTS')
        const timesheets = await Timesheet.findAll()
        const timesheetsData = JSON.parse(JSON.stringify(timesheets))
        console.log(timesheetsData)
        res.send(timesheetsData)
      }
      // res.send(employees.toJSON())
      // console.log(Employees.findAll().to)
    } catch (err) {
      console.log(err)
      res.send({
        error: 'error',
        errorMsg: err
      })
    }
  }
}
// const {Employees} = require('../models')

// module.exports = {
//   async registerEmployee (req, res) {
//     try {
//       const employee = await Employees.create(req.body)
//       res.send(employee.toJSON())
//     } catch (err) {
//       res.send(err)
//       res.status(400).send({
//         error: 'email in use'
//       })
//     }
//   }
// }
