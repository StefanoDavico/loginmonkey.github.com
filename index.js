const express = require('express');
const app = express();
// app.use('/Sito', express.static('./Sito'));
app.use(express.static(__dirname + '/Sito/'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.listen(process.env.port || 3001);
 
console.log('Running at Port 3001');
