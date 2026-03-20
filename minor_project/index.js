const express = require('express');
const routeUser= require('./routes/user.route');
const routeMovie = require('./routes/movie.route');
const routeMR = require('./routes/movieRating.route');

const app = express();

app.use(express.json());

app.use('/users',routeUser);
app.use('/movies',routeMovie);
app.use('/mr',routeMR);

app.listen(3001,()=>{
    console.log('server started at :3001');
})

// const express = require('express');
// const app = express();
// const db = require('./database/db');

// app.get('/movies', async (req, res) => {
//   try {
//     const [rows] = await db.query('SELECT * FROM movies');
//     res.json(rows);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000 🚀');
// });

