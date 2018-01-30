const AuthenticationController = require('./controllers/AuthenticationController')
const RegisterEmployeeController = require('./controllers/RegisterEmployeeController')
const FetchDatabaseController = require('./controllers/FetchDatabaseController')
const DeleteEmployeeController = require('./controllers/DeleteEmployeeController')
const UpdateEmployeeController = require('./controllers/UpdateEmployeeController')

module.exports = app => {
  app.post('/register', AuthenticationController.register)
  app.post('/registeremployee', RegisterEmployeeController.registerEmployee)
  app.get('/fetchemployees', FetchDatabaseController.fetchEmployees)
  app.post('/viewemployee', FetchDatabaseController.fetchOneEmployee)
  app.post('/deleteemployee', DeleteEmployeeController.deleteEmployee)
  app.post('/updateemployee', UpdateEmployeeController.updateEmployee)
  app.get('/fetchtimesheets', FetchDatabaseController.fetchTimesheets)
}
