const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        bands: Array,
        instrument: String,
        albums: Array,
        birthday: {
            type: Date,
            required: true
        },
        createdOn: { type : Date, default: Date.now() },
     }
)

module.exports = mongoose.model('users', userSchema)
