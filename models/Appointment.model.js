/* const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    staff : { type: mongoose.Schema.Types.ObjectId, ref: "Staff" },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    /* service: { type: String, required: true } */  // TODO: Add service - a pensar */