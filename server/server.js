const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const paintingsRoutes = require('./routes/paintings');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/paintingsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/paintings', paintingsRoutes);

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
