import express from 'express';
import Toucan from '../toucan/Toucan';

const PORT = 23000;

const app = express();

app.get('/', (req, res) => {
  const toucan = new Toucan('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiaXJkIjoidG91Y2FuICIsImlhdCI6MTY5MDgwNzgyMSwiZXhwIjoxNjkwODA3ODgxfQ.sOmfeSISouPnfVW1wtR8xjGv9U7U1L-8zeTPBcILrBc', { expiresIn: 60 });

  console.log(toucan.getToken());
  console.log('isJWT:', toucan.isJWT());
  console.log('isValid:', toucan.isValid());
  res.send('Hello Toucan!');
});

app.listen(PORT, () => {
  console.log(`Toucan's server listening on port ${PORT}`);
});

