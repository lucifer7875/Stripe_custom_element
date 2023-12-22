const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
require("dotenv").config();
app.use(bodyParser.json());


const route = require('./src/routes/index');
app.use('/api', route);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
