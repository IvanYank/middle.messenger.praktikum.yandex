import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}! http://localhost:3000`);
});
