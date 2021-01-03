const express = require('express');
const ejs = require('ejs');
const localtunnel = require('localtunnel');

(async() => {
    const tunnel = await localtunnel(3000, { subdomain: 'food-order' });
    console.log(tunnel.url);

    tunnel.on('close', () => {
        console.log('Tunnel closed...');
    });
})();


const app = express();

app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.use(express.static('images'));
app.use(express.static('scripts'));
app.get('/', (req, res) => {
    res.render('index');
});


app.listen(3000, () => {
    console.log('Server listening at http://localhost:3000/');
});