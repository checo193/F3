const router = require('express').Router();


router.get("/", async (req, res) => {
  res.send("hello app.get");
})

module.exports = router;