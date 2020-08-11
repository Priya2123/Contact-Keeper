//entry point to our backend

//import express
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require("path");

//connect database
connectDB();

//Init Middleware-to accept body data
app.use(express.json({ extended: false }));

// //get- type of request
// app.get("/", (req, res) => {
//   //returns an object
//   res.json({ msg: "Welcome to the ContactKeeper API" });
// });

//Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));

//Serve static assets in function
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
