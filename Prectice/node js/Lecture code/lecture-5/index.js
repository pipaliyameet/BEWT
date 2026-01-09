const express = require('express');
const routerStudent = require('./routes/students.route');
// const { default: routerStudent } = require('./routes/students.route');
const app = express();

app.use("/student", routerStudent);
0
app.use("/public", express.static('public'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
