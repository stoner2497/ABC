const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const http = require("http");
const socketIo = require("socket.io");
const path = require('path')
const app = express();

mongoose.Promise = global.Promise;
//connect to mongoose

// // DB Config
const db = require("./config/Keys").mongoURI;

mongoose
  .connect(db,{useNewUrlParser: true })
  .then(() => {console.log('connected')} )
  .catch(err => console.log(err));



//mongoose query use
mongoose.set('useFindAndModify', false);

//passport initializing
app.use(passport.initialize());



// app.get('/', (req,res) => {
//     res.send('hello world')
//   })
// //config passport
require("./config/passport")(passport);

//middleware for body parser
app.use(bodyParser.urlencoded({ extended: false }));

//parse application json
app.use(bodyParser.json());

const server = http.createServer(app);
const io = socketIo(server);

const Auth = require('./routes/Auth');
const Emp = require('./routes/Employee')(io)
const User = require('./routes/User')
const Admin = require('./routes/Admin')(io)
app.use('/',Auth)
// app.use('/SuperAdmin')
app.use('/semiAdmin',Admin)
app.use('/employee',Emp)
app.use('/user',User)

const port = process.env.port || 5000;


module.exports = getIO = function() {
  return io;
}


let interval;
io.on("connection", socket => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => 10000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
})

server.listen(port, () => console.log(`Listening on port ${port}`));


