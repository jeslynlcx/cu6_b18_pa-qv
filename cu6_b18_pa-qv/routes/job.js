/*
    INSTRUCTION: setup the job routes according to the following requirements:
    - `GET /jobs`: List all jobs with sorting, pagination and filtering
    - `GET /jobs/:id`: Get a specific job by its id
    - `POST /jobs`: Add a new job
    - `PUT /jobs/:id`: Update a job
    - `DELETE /jobs/:id`: Delete a job
*/

const express = require("express");
const router = express.Router();
const job = require("../controllers/job")

router.get("/", job.getJobs);
// router.get("/filter", job.filterSortJob);
router.get("/:id", job.getJob);
router.post("/", job.addNewJob);
router.put("/:id", job.updateJob);
router.delete("/:id", job.deleteJob);

module.exports = router;