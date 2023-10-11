const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({message: 'node server is up on 3000'});
});


app.listen(3000, () => {
    console.log(` hey the server is up on 3000`);
});
