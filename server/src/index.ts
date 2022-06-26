const express = require("express");

const app = express();

app.listen(3333, () => {
  console.log(
    "Server started on port 3333 \nOpen in the browser: http://localhost:3333"
  );
});
