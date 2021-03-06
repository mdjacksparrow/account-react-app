// require('dotenv').config();
const { createServer } = require('http');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const normalizePort = (port) => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 9000);

const app = express();
const dev = app.get('env') === 'production';

if (!dev) {
  console.log('in production');

  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('common'));
  app.use(cors());

  app.use(express.static(path.resolve(__dirname, 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

if (dev) {
  app.use(morgan('dev'));
}

const server = createServer(app);

server.listen(PORT, (err) => {
  if (err) console.log(err);

  console.log(`Server started! ${PORT}`);
});
