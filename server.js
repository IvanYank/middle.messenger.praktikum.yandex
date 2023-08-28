import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.static('./build'));
app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
