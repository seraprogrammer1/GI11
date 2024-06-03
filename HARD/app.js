const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();

let data = (function jsonData() {
    try {
        return JSON.parse(fs.readFileSync('employees.json', 'utf-8'))
    } catch (err) {
        console.error(err)
    }
})()

app.get('/employees/', (req, res) => {
    res.send(data)
})

Array.from(data).forEach(element => {
    const id = element.employeeID
    app.get(`/employees/${id}`, (req, res) => {
        res.send(element)
    })
});

const port = 4000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})