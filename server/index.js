const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = 1225;

const app = express();
app.use(express.json());

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT = 'ef2be6021044f94e22f5fbb9bb1d52eebcbf53cf922587220fc8cafe2cd56927';

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const { proof, name, root } = req.body;

  // TODO: prove that a name is in the list 
  const isInTheList = verifyProof(proof, name, root);

  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
