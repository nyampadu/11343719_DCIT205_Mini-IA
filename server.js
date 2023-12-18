const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./configdb');

const app = express();

app.use(bodyParser.json());

// Routes
const patientRoutes = require('./routes/patientRoutes');
const encounterRoutes = require('./routes/encounterRoutes');

app.use('/patients', patientRoutes);
app.use('/encounters', encounterRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
