const addDays = require("date-fns/addDays");

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const result = addDays(new Date(), 100);
  const newDate = `${result.getDate()}/${
    result.getMonth() + 1
  }/${result.getFullYear()}`;
  response.send(newDate);
});

app.listen(3000);

module.exports = app;
