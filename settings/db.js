import { Sequelize } from "sequelize";

const user = "xxxx";
const password = "xxxx";
const host = "xxxx";
const dialect = "mysql";

const connectionBD = new Sequelize("appointments", user, password, {
  host,
  dialect,
});

export default connectionBD;

// Made by Jhair Paris (jhairparis.com)
