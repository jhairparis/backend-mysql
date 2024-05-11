import express from "express";
import {
  getAllAppointments,
  getAppointment,
  setAppointment,
  updateAppointment,
  deleteAppointment,
} from "../controllers/AppointmentsController";

const router = express.Router();

router.get("/", getAllAppointments);
router.get("/:id", getAppointment);
router.post("/", setAppointment);
router.put("/:id", updateAppointment);
router.delete("/:id", deleteAppointment);

export default router;

// Made by Jhair Paris (jhairparis.com)
