import connectionDB from "../settings/db.js";
import { DataTypes } from "sequelize";

const Appointments = connectionDB.define("appointment", {
  name_med: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Appointments;

// Made by Jhair Paris (jhairparis.com)
