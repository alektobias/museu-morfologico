const express = require('express');
const path = require('path');
const view = require('./utils/view').setView;
const cors = require('cors');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/museu', (req, res, next) => {
	res.sendFile(view('museu.html'));
});
app.get('/realidade-virtual', (req, res, next) => {
	res.sendFile(view('realidadeAumentada.html'));
});
app.use('/', (req, res, next) => {
	res.sendFile(view('index.html'));
});

app.listen(process.env.PORT || 5000);
