import Appointments from "../models/Appointments.js";

export const getAllAppointments = async (req, res) => {
  try {
    const appointment = await Appointments.findAll();

    return res.json(appointment);
  } catch (error) {
    return res.json({ msg: error.message });
  }
};

export const getAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appointments.findAll({ where: { id } });

    if (appointment.length == 0)
      return res.json({ msg: `${id} appointment not found` });

    return res.json(appointment[0]);
  } catch (error) {
    return res.json({ msg: error.message });
  }
};

export const setAppointment = async (req, res) => {
  try {
    await Appointments.create(req.body);

    return res.json({ msg: "Appointment added" });
  } catch (error) {
    return res.json({ msg: error.message });
  }
};

export const updateAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appointments.findAll({ where: { id } });

    if (appointment.length == 0)
      return res.json({ msg: `${id} appointment not found` });

    await Appointments.update(req.body, { where: { id } });

    return res.json({ msg: "Appointment updated" });
  } catch (error) {
    return res.json({ msg: error.message });
  }
};

export const deleteAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appointments.findAll({ where: { id } });

    if (appointment.length == 0)
      return res.json({ msg: "appointment not found" });

    await Appointments.destroy({ where: { id } });

    return res.json({ msg: "Appointment deleted" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

// Made by Jhair Paris (jhairparis.com)
