const Staff = require("../models/Staff.model");
const router = require("express").Router();

router.get("/getStaff", async (req, res, next) => {
    try {
    const staffData = await Staff.find();
    console.log('Staff Data:', staffData);
    res.json(staffData);
    } 
    catch (error) {
        next(error);
    }
})

module.exports = router;