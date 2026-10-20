/*
    INSTRUCTION: setup the employer schema according to the following requirements:
    - name: (String, required)
    - industry: (String) - Industry or business sector of the employer
    - email: (String) - Contact email for the employer's hiring team
*/

const { Schema, model } = require('mongoose')

const EmployerSchema = new Schema ({
    name: {
        type: String, 
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    email: {
        type: String,
    }
})

const Employer = model("Employer", EmployerSchema)
module.exports = Employer
