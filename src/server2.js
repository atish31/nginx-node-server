const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({message: 'node server is up on 3002'});
});


app.listen(3002, () => {
    console.log(` hey the server is up on 3002`);
});
