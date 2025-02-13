//adding express to the app.js file and returns an object that is an instacne of the package express
const express = require('express');

const app = express();
const port = 4000;

//importing the routes by requiring it and linking it to the app.use when routing
const indexRoute = require('./routes/index.js');
const aboutRoute = require('./routes/about.js');

//the function recieves two arguements, the path and the callback function ( which is an arrow function in this case)
//req = request res = response
app.get('/', (req, res) => res.send('Hello World!'))


//---------Serve Static Files-------//
app.use('/static', express.static("public"));

//-----------Routing in Express--------//

app.use('/', indexRoute);
app.use('/about', aboutRoute);

//the two arguements are the port you have and a console log
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
