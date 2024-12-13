const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const careersSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
   
    times: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    dutiesAndResponsibilities: {
        type: [String]
    },
    workingConditions: {
        type: [String]
    },
    jobRequirements: {
        type: [String]
    },
    applicants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobApplication'
      }],
    isAvailable: {
        type: Boolean,
        default: true
    },
    
},
    {
        timestamps: true
    });
    

    careersSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Careers', careersSchema)