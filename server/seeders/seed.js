const db = require("../config/connection");
const { User, Order } = require("../models");
const userSeeds = require("./userSeeds.json");
const orderSeeds = require("./orderSeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Order.deleteMany({});
    const users = await User.create(userSeeds);
    orderSeeds.map((order) => {
      order.customer = users[0]._id;
      return;
    });
    await Order.create(orderSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
