const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json()) ; 



app.get("/api/task", (req, res) => {
    let preList = ["Wake up", "Eat breakfast", "Go to every class", "Eat lunch", "Exercice", "Eat dinner", "study"];
    res.status(200).send(preList);
  });

app.listen(5500, () => console.log('Server running on 5500'))