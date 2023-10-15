const express = require("express");
const app = express();
const PORT = 5000;

app.use("/api/", require("./Routes/userRoutes"));

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
