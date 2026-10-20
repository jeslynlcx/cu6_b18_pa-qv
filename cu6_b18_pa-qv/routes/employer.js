/*
    INSTRUCTION: setup the routes for the employer entity according to the following requirements:
    - `GET /employers`: List all employers
    - `GET /employers/:id`: Get a specific employer by its id
    - `POST /employers`: Add a new employer
    - `PUT /employers/:id`: Update an employer
    - `DELETE /employers/:id`: Delete an employer
*/


const express = require("express");
const router = express.Router();
const employer = require("../controllers/employer")

router.get("/", employer.getEmployers);
router.get("/:id", employer.getEmployer);
router.post("/", employer.addNewEmployer);
router.put("/:id", employer.updateEmployer);
router.delete("/:id", employer.deleteEmployer);

module.exports = router;

