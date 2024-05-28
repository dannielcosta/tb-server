const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment.model");
const populate = require("../utils/populate");
const { isAuthenticated } = require("../middleware/jwt.middleware");

router.get('/appointments', async (req, res, next) => {
    try{
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    }catch(err){
        next(err)
    }
})

router.get('/appontements', async (req, res, next) => {
    try{
        const { id } = req.params;
        const appointment = await Appointment.findById(id);

        if(!appointment){
            res.status(404).json({message: "Appointment not found"})
    }    
    res.status(200).json(appointment);
    }catch(err){
        next(err)
    }
})

router.post('/appointments', async (req, res, next) => {
    try{
        const {
            user,
            staff,
            date,
            time
        } = req.body;
        const newAppointment = await Appointment.create({
            user,
            staff,
            date,
            time
        });
        res.status(201).json(newAppointment);
    }catch(err){
        next(err)   
    }
})

router.put('/appointments/:id', async (req, res, next) => {
    try {
        const updateAppointment = await Appointment.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        res.status(200).json(updateAppointment);
      } catch (error) {
        next(error);
      }
    });

    router.delete('/appointments/:id', async (req, res, next) => {
        try {
            const { id } = req.params;
            await Appointment.findByIdAndDelete(id);
            res.status(200).json({ message: "This appointment was deleted" });
          } catch (error) {
            next(error);
          }
        });
    
            
        
        
        

module.exports = router