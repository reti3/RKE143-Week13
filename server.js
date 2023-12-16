const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const userRouter = require('./routes/users.routes');

const app = express();

app.use(bodyParser.json());

db.connect((error) => {
    if (error) {
        console.log('Database connection failed.');
    } else {
        console.log('Database connection initiated.');
    }
});

app.use('/user', userRouter);

app.listen(4000, () => {
    console.log('Server is running on port 4000.');
});