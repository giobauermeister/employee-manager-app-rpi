const {Employees} = require('../models')

module.exports = {
  async updateEmployee (req, res) {
    console.log('received UPDATE')
    console.log(req.body)
    console.log('database ID number: ', req.body.id)
    try {
      const queryResult = await Employees.update(
        {
          TagID: req.body.TagID,
          EmployeeName: req.body.EmployeeName,
          Title: req.body.Title,
          Department: req.body.Department,
          Cellphone: req.body.Cellphone,
          Email: req.body.Email,
          Address: req.body.Address
        },
        {
          where: {
            'id': req.body.id
          }
        }
      )
      res.send(queryResult)
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

// const {Employees} = require('../models')

// module.exports = {
//   async deleteEmployee (req, res) {
//     console.log('received delete')
//     console.log(req.body.TagID)
//     // res.send(req.body)
//     try {
//       console.log('fetching inside try')
//       const queryResult = await Employees.destroy({
//         where: {
//           'TagID': req.body.TagID
//         }
//       })
//       console.log(queryResult)
//       res.send(req.body.TagID)
//     } catch (err) {
//       console.log(err)
//       res.send({
//         error: 'error',
//         errorMsg: err
//       })
//     }
//   }
// }

