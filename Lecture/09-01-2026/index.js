const express = require('express');
const app = express();

const {routeRestaurant} = require('./routes/restaurant.routes');
const {routeUser} = require('./routes/users.routes');

app.use('/restaurant', routeRestaurant);
app.use('/users',routeUser)

app.get('/', (req, res) => {
    res.send('Hello, World!');
}   );

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}   );