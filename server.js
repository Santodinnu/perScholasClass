const express = require("express");
const app = express();

app.get('/', (req, res) => {
    let bottles = 99;

    res.send(`
      <h1>${bottles} Bottles of beer on the wall</h1>
      <a href="/${bottles - 1}">Take one down, pass it around</a>
      <br>
    `);
  });

app.get("/:number_of_bottles", (req, res) => {
    let bottles = req.params.number_of_bottles;
    if (bottles > 0) {
    res.send(`
      <h1>${bottles} Bottles of beer on the wall</h1>
      <a href="/${bottles - 1}">Take one down, pass it around</a>
      <br>
    `);
    } else {
        res.send(`
        <h1> 0 Bottles of beer on the wall</h1>
        <a href="/">Start Over</a>
        `)
    }
})

app.listen(5000, () => {
    console.log("Listening on port 5000")
})