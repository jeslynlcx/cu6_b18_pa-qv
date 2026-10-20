/*
    INSTRUCTION: setup the controller functions to handle job applications
    - getApplicationsByJob - Retrieve all applications for a specific job (use `populate()` to get job details)
    - createApplication - Create a new application for a job (ensure no duplicate applications for the same email and job)
*/

const Application = require('../models/application')

exports.getApplicationsByJob = async (req, res) => {
    try {
        const Applications = await Application.find({}).populate('job')
        res.json(Applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createApplication = async (req, res) => {
    try {
        const {email} = req.body
        const newApplication = new Application(req.body);
        const existingAppointment = await Application.findOne({ email }); 
        if (existingAppointment) {
            return res.status(409).json({ message: "Duplicated Email" });
        }
        await newApplication.save();
        res.status(201).json(newApplication);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
