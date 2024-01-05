const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');

const route = require('./routes');
const db = require('./config/db');

const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// Serving static files in Express
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('src/public'))

// Middleware cho phương thức post
app.use(
    express.urlencoded(
        // express có tích hợp sẵn body-parser đối với version mới
        {
            extended: true, // sử dụng urlencoded cần có options extended của thư viện urlencoded
        },
    ),
);
app.use(express.json());

// override with POST having ?_method=PUT
app.use(methodOverride('_method'));

// Template engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

// Connect DB
db.connect();

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
