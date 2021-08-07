const express = require("express");
const router = require("../router/router");
const supertest = require("supertest");
const Player = require("../models/index");

const { Sequelize } = require("sequelize");

describe("Integration test", () => {
  const app = express();
  app.use(express.json());
  app.use(router);
  const request = supertest(app);

  beforeAll(async () => {
    jest.setTimeout(100000);
    await Player.sequelize.sync({ force: true });
  });
  //   afterEach(async () => {
  //     await Player.destroy({ where: {} });
  //   });

  it("should save player to db", async (done) => {
    const name = "sarah";
    await request.post("/player").send({ name });
    const player = await Player.findOne({ where: { name } });
    // console.log(player.dataValues.name, "PLAYERRRRRRRRRRR");
    expect(player.dataValues.name).toBe(name);
    // console.log("bwo[ewbfewofbewqewu[fbewfuewbfwe[b");
    done();
  });
});
