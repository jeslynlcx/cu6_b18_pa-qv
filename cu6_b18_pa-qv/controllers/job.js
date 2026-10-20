/*
    INSTRUCTION: setup the job controller with the following functions:
    - getJobs - Retrieve all jobs (use `populate()` to get employer details)
    - getJob - Retrieve a specific job (use `populate()` to get employer details)
    - addNewJob - Add a new job
    - updateJob - Update a job
    - deleteJob - Delete a job
*/


const Job = require('../models/job')

exports.getJobs = async (req, res) => {
    try {
        const { category, sortBy, sortOrder, page = 1, limit= 10 } = req.query
        const filter = {}
        if (category) {
            filter.category = category
        }
        let sort = {}
        const direction = sortOrder === 'asc' ? 1 : -1
        if(sortBy == "title"){
            sort = { title: direction, title: 1}
        } else if(sortBy == "postedDate"){
            sort = { postedDate: direction, title: 1}
        }else {
            sort = { postedDate : -1 }
        }
        const pageNum = (Number(page) - 1) * Number(limit)
        const Jobs = await Job.find(filter).sort(sort).skip(pageNum).limit(Number(limit)).populate('employer')
        res.json(Jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getJob = async (req, res) => {
    try {
        const { id } = req.params;
        const oneJob = await Job.findById(id).populate('employer')
        if (!oneJob) {
            return res.status(404).json({
                error: "Employer not found"
            });
        }
        res.json(oneJob);
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: error.message });
    }
};
exports.addNewJob = async (req, res) => {
    try {
        const newJob = new Job(req.body);
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const updateJob = await Job.findByIdAndUpdate(id,req.body,{ new: true, runValidators: true })
        if (!updateJob) {
            return res.status(404).json({error: "Job not found"})
        }
        res.json(updateJob);
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({ error: error.message });
        }
        res.status(400).json({ error: error.message });
    }
};

exports.deleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteJob = await Job.findByIdAndDelete(id);
        if (!deleteJob) {
            return res.status(404).json({
                error: "Job not found"
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
