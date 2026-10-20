/*
    INSTRUCTION: setup the application schema according to the following requirements:
    - job: (ObjectId, ref: 'Job', required)
    - applicantName: (String, required)
    - email: (String, required)
    - phone: (String, required)
    - appliedDate: (Date, default: Date.now)
*/

const { Schema, model } = require('mongoose')

const ApplicationSchema = new Schema ({
    job: {
        type: Schema.Types.ObjectId,
        ref: 'Job', 
        required: true
    },
    applicationName: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    appliedDate: {
        type: Date,
        default: Date.now
    }
})

const Application = model("Application", ApplicationSchema)
module.exports = Application
