const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();
const TestRouter = require('./router/TestRouter');

const app = express();
const port = 8070;
const MONGO_URI = 'mongodb://mongo:27017/TestDB';

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CONNECT TO MONGODB SERVER
mongoose
	.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Successfully connected to mongodb'))
	.catch((e) => console.error(e));

// Define routes for the router
router.get('/', (req, res) => {
	res.send('Hello World!');
});

// Mount the router at a specific path
router.use('/api', TestRouter);

app.listen(port, () => {
	console.log(`Development Server is running at http://localhost:${port}`);
});
