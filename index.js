const express = require('express');
const app = express();


const name = "Soliyana Yalewdeg Siyum";
const hobby = {
  activity: "Reading"
};
const dream = "Trust the process";


app.get('/nameResponse', (req, res) => {
  res.status(200).send(name); 
});


app.get('/hobbyResponse', (req, res) => {
  res.status(200).json(hobby); 
});


app.get('/dreamResponse', (req, res) => {
  res.status(200).send(dream); 
});



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
