import express from 'express';
import path from 'path';
import routes from './routes';

const PORT = 3000;

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('/api', routes);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}!`);
});