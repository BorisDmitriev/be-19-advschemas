const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema(
    {
        "title": {
            type: String,
            required: true
        },
        "author": {
            type: String,
            required: true
        },
        "keywords": Array,
        "category": String,
        "comments": Array
    }
)

module.exports = mongoose.model('articles', articleSchema)