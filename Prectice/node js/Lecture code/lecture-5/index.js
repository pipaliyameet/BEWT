const express = require('express');
const routerStudent = require('./routes/students.route');
// const { default: routerStudent } = require('./routes/students.route');
const app = express();

app.use("/student", routerStudent);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
