/*
    INSTRUCTION: setup the job schema according to the following requirements:
    - title: (String, required)
    - employer: (ObjectId, ref: 'Employer', required)
    - postedDate: (Date, required)
    - location: (String, required)
    - category: (String)
    - description: (String)
*/
const { Schema, model } = require('mongoose')

const JobSchema = new Schema ({
    title: {
        type: String, 
        required: true
    },
    employer: {
        type: Schema.Types.ObjectId,
        ref: 'Employer',
        required: true
    },
    postedDate: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    description: {
        type: String
    }
})

const Job = model("Job", JobSchema)
module.exports = Job
