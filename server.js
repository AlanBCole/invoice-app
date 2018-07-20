const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./dist'));
app.use(bodyParser.json());

app.post('/send-invoice', (req, res) => {
    console.log('receiving invoice', req.body);
    
    res.json(req.body);
});

app.listen(8080, ()=> console.log('app running on port 8080'));