/*
    INSTRUCTION: This file defines the routes for managing job applications.
    - `GET /applications?job=xxx`: Get all applications for a specific job
    - `POST /applications`: Create a new application for a job
*/
const express = require("express");
const router = express.Router();
const application = require("../controllers/application")

router.get("/", application.getApplicationsByJob)
router.post("/", application.createApplication);


module.exports = router;
