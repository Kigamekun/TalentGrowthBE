// Import dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();

const corsX = require('cors')
app.use(corsX())
// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Set up static folder
app.use(express.static(path.join(__dirname, 'public')));

// Import database configuration
const sequelize = require('./app/config/database');

// Import routes
// const indexRouter = require('./routers/index');
const usersRouter = require('./routers/users');

// Set up routes
app.use('/users', usersRouter);

// Set up error handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

// Start the server
const PORT = process.env.PORT || 8001;
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => {
    console.error('Error syncing database:', error);
});
