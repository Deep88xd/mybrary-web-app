const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
  res.send("hello from the author root page");
});
router.use("/new", (req, res) => {
    res.send("hello from the new author  page");
});


router.get("/old", (req, res) => {
  res.send("hello from the old author page");
});



module.exports = router;
