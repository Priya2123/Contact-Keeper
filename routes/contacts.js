const express = require("express");
const router = express.Router();

//@route         GET api/contacts
//@description   Get all user contacts
//@access        Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

//@route         POST api/contacts
//@description   Add new contact
//@access        Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

//@route         PUt api/contacts/:id     (id-of contact we wanna update)
//@description   Update contact
//@access        Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

//@route         DELETE api/contacts/:id
//@description   Delete contact
//@access        Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
