/*
    INSTRUCTION: setup the employer controller with the following functions:
    - getEmployers - Retrieve all employers
    - getEmployer - Retrieve a specific employer
    - addNewEmployer - Add a new employer
    - updateEmployer - Update an employer
    - deleteEmployer - Delete an employer
*/

const Employer = require('../models/employer')

exports.getEmployers = async (req, res) => {
    try {
        const Employers = await Employer.find({})
        res.json(Employers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getEmployer = async (req, res) => {
    try {
        const { id } = req.params;
        const oneEmployer = await Employer.findById(id)
        if (!oneEmployer) {
            return res.status(404).json({
                error: "Employer not found"
            });
        }
        res.json(oneEmployer);
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: error.message });
    }
};
exports.addNewEmployer = async (req, res) => {
    try {
        const newEmployer = new Employer(req.body);
        await newEmployer.save();
        res.status(201).json(newEmployer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.updateEmployer = async (req, res) => {
    try {
        const { id } = req.params;
        const updateEmployer = await Employer.findByIdAndUpdate(id,req.body,{ new: true, runValidators: true })
        if (!updateEmployer) {
            return res.status(404).json({error: "Employer not found"})
        }
        res.json(updateEmployer);
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({ error: error.message });
        }
        res.status(400).json({ error: error.message });
    }
};

exports.deleteEmployer = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteEmployer = await Employer.findByIdAndDelete(id);
        if (!deleteEmployer) {
            return res.status(404).json({
                error: "Employer not found"
            });
        }
        res.status(204).send();
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: error.message });
    }
};

