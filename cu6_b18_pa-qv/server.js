const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const job = require("./routes/job")
const employer = require('./routes/employer')
const application = require('./routes/application')

const app = express();
const port = 5123;

app.use(express.json());
app.use(cors())

// INSTRUCTION: setup cors
const corsHandler = cors ({
    origin: "*",
    methods: "GET,POST,PUT,DELETE,PATCH",
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
    preflightContinue: true
})

app.use(corsHandler)
// INSTRUCTION: setup MongoDB Connection
mongoose 
    .connect("mongodb://localhost:27017/CU6-Exam")
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch(err => console.log(err))

// INSTRUCTION: setup routes
app.use('/jobs', job)
app.use('/employers', employer)
app.use('/applications', application)


app.get("/", (req, res) => {
    res.send("Good luck with the exam!");
});

// Server listening
app.listen(port, () => console.log(`Server started on port ${port}`));
