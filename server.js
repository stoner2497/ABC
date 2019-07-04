const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path')
const fs = require("fs");
const app = express();

mongoose.Promise = global.Promise;
//connect to mongoose

// // DB Config
const db = require("./config/Keys").mongoURI;

// Connect to MongoDB
// ssl: true,
// sslValidate: false,
// sslCA: fs.readFileSync('./rds-combined-ca-bundle.pem')

mongoose
  .connect(db,{
    useNewUrlParser: true})
  .then(() => {console.log('connected')} )
  .catch(err => console.log(err));



//mongoose query use
// mongoose.set('useFindAndModify', false);

//passport initializing
app.use(passport.initialize());



// app.get('/', (req,res) => {
//     res.send('hello world')
//   })
// //config passport
// require("./config/passport")(passport);

//middleware for body parser
app.use(bodyParser.urlencoded({ extended: false }));

//parse application json
app.use(bodyParser.json());

const Auth = require('./routes/Auth');
app.use('/',Auth)
// app.use('/SuperAdmin')
// app.use('/semiAdmin')
// app.use('/employee')
// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
//   app.get('*' ,(req,res) => {
//     res.sendFile(path.resolve(__dirname,'client', 'build' , 'index.html'))
//   })
// }


const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`server is up and runing on ${port} `);
  });
  