const express = require('express');
const app = express();


const name = "Soliyana Yalewdeg Siyum";
const hobby = {
  activity: "Reading"
};
const dream = "Trust the process";

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
