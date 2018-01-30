const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')
const multer = require('multer')
var path = require('path')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../../employee-manager-app/vuejs-app-server/dist/static/userphotos'),
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({
  storage: storage
}).single('myImage')

app.post('/uploadphoto', (req, res) => {
  upload(req, res, (err) => {
    console.log(req.body)
    if (err) {
      console.log(err)
      res.send({'err': 'error'})
    } else {
      console.log(req.file)
      res.send({'msg': 'OK'})
    }
  })
})

sequelize.sync()
  .then(() => {
    app.listen(config.port, 'piclock.local')
    console.log(`Server started on port ${config.port}`)
  })
