const mongoose = require('mongoose')

const newsLetterSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('NewsLetter', newsLetterSchema)