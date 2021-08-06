const { Player } = require("../models/index");

const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("hello app.get");
});

router.get("/squad", async (req, res) => {
  try {
    const squad = await Player.findAll();
    console.log(squad);
    res.send(squad);
  } catch (err) {
    console.log(err);
  }
});

router.post("/player", async (req, res) => {
  try {
    const newPlayer = await Player.create(req.body);
    res.send(newPlayer).status(201);
  } catch (err) {
    console.error(err);
  }
});

router.put("/player/:id", async (req, res) => {
  try {
    const updatedPlayer = await Player.update(req.body, {
      where: { id: req.params.id },
    });
    res.send("player was updated").status(201);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
