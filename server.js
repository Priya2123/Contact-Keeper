//entry point to our backend

//import express
const express = require("express");
const app = express();

//get- type of request
app.get("/", (req, res) => {
  //returns an object
  res.json({ msg: "Welcome to the ContactKeeper API" });
});

//Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
