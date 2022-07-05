const express = require("express");
const router = express.Router();


router.get("/",(req, res) => {
  res.send("hello from book root page")
});
router.get("/hindi",(req, res) => {
  res.send("hello from hindi books page")
});
router.get("/eng",(req, res) => {
  res.send("hello from english books page")
});



module.exports = router;

