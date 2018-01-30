const {Employees} = require('../models')

module.exports = {
  async registerEmployee (req, res) {
    try {
      const employee = await Employees.create(req.body)
      res.send(employee.toJSON())
    } catch (err) {
      var message = err.errors[0].message
      res.send({
        error: 'error',
        errorMsg: err,
        message: message
      })
    }
  }
}
