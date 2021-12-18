const express = require('express');
require('dotenv').config();
const {connectDB} = require('./config/db');
const cors = require('cors');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const path = require('path');

// routes
const propertyRoutes = require('./routes/propertyRouter');
const categoryRoutes = require('./routes/categoryRouter');

const app = express();
connectDB();

app.use(express.json());
app.use(cors('*'));

app.use('/api/v1/properties', propertyRoutes);
app.use('/api/v1/categories', categoryRoutes);

// middleware to serve static files
app.use(express.static(path.join(__dirname, './files')));

//error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_SERVER} mode in port: ${PORT}`));