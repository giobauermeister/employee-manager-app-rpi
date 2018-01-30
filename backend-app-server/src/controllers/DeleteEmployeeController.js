const {Employees} = require('../models')

module.exports = {
  async deleteEmployee (req, res) {
    console.log('received delete for db id: ', req.body.id)
    // res.send(req.body)
    try {
      console.log('fetching inside try')
      const queryResult = await Employees.destroy({
        where: {
          'id': req.body.id
        }
      })
      console.log(queryResult)
      res.send(req.body.TagID)
    } catch (err) {
      console.log(err)
      res.send({
        error: 'error',
        errorMsg: err
      })
    }
  }
}
