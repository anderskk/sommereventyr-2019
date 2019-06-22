const express = require('express');
const favicon = require('express-favicon');
const checkAnswer = require('./taskChecker');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const rootDir = __dirname.replace('/api', '').replace('\\api', '');
console.log(rootDir)
app.use(favicon(rootDir + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(rootDir));
app.use(express.static(path.join(rootDir, 'build')));
app.use(express.json());

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.post('/api/checkanswer', (req, res) => {
  console.log('body', req.body);
  const { task, code } = req.body;
  
  return res.status(200).send(checkAnswer(task, code));
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);