import express from "express";
import cors from "cors";
import connectionDB from "./settings/db.js";
import AppointmentsRoutes from "./routes/Appointments.routes.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/appointments", AppointmentsRoutes);

try {
  await connectionDB.authenticate();
  console.log("Conectado a la base de datos SQL");
} catch (error) {
  console.log("Error con:", error);
}

app.get("/", (req, res) => {
  res.send("✅");
});

app.listen(3000, () => {
  console.log(" http://localhost:3000");
});

// Made by Jhair Paris (jhairparis.com)
