const express = require('express');

const TestRouter = express.Router();

// Define your test schema here
const testSchema = {
    id: Number,
    name: String,
    age: Number
};

// Define your routes here
TestRouter.get('/', (req, res) => {
    // Handle GET request for all test data
    // You can fetch the data from a database or any other source
    // and send it as a response
    res.json({ message: 'GET all test data' });
});

TestRouter.get('/:id', (req, res) => {
    // Handle GET request for a specific test data
    const id = req.params.id;
    // You can fetch the data with the given ID from a database or any other source
    // and send it as a response
    res.json({ message: `GET test data with ID ${id}` });
});

TestRouter.post('/', (req, res) => {
    // Handle POST request to create new test data
    const newData = req.body;
    // You can validate the newData against the testSchema
    // and save it to a database or any other source
    res.json({ message: 'POST new test data' });
});

TestRouter.put('/:id', (req, res) => {
    // Handle PUT request to update existing test data
    const id = req.params.id;
    const updatedData = req.body;
    // You can validate the updatedData against the testSchema
    // and update the data with the given ID in a database or any other source
    res.json({ message: `PUT test data with ID ${id}` });
});

TestRouter.delete('/:id', (req, res) => {
    // Handle DELETE request to delete existing test data
    const id = req.params.id;
    // You can delete the data with the given ID from a database or any other source
    res.json({ message: `DELETE test data with ID ${id}` });
});

module.exports = TestRouter;