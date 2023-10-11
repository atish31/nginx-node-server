const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({message: 'node server is up'});
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(' hey the server is up');
});