const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = process.env.port || 3000;

//middleware
app.use(bodyParser.json());
app.use(cors());

//const posts = require('./routes/api/mkweiss.php');
//app.use('/api/mkweiss', posts); //any router that goes to first argument is redirected to second arg

//const listener = require('./routes/api/listener.js');
//app.use('/api/listen', listener); //any router that goes to first argument is redirected to second arg

//app.use(app.router);
//routes.initialize(app);

//initialize server
app.listen(port, function () {
    console.log("Server started on port: " + port);
});
