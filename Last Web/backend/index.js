const express = require("express")
var cors = require('cors')
const path = require("path")

const app = express();
app.use(cors())
// Statics
app.use(express.static('static'))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// routers
const dataRouter = require('./routes/dataUser')
const registerRouter = require('./routes/register')
const loginRouter = require('./routes/login');
const forum = require("./routes/forum")
const getreportform = require("./routes/getreportform")
const forgotpassword = require('./routes/forgotpassword')
const checkadmin = require('./routes/checkadmin')
const dataReport = require('./routes/dataReport')
const actionReport = require('./routes/actionReport')
const checkToken = require('./routes/checkToken')
// use routers
app.use(dataRouter.router)
app.use(registerRouter.router)
app.use(loginRouter.router)
app.use(forum.router);
app.use(getreportform.router)
app.use(forgotpassword.router)
app.use(checkadmin.router)
app.use(dataReport.router)
app.use(actionReport.router)
app.use(checkToken.router)

app.listen(5000, () => {
  console.log(`database running at http://localhost:5000`)
})