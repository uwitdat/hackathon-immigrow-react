const mongoose = require('mongoose')

const mentorEventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    dateTime: {
        type: String,
        required: true
    },
    link: {
        type: String,
        default: 'http://zoom-meeting/452dfdwer.com'
    },
    mentorId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Mentor'
    }

})

module.exports = mongoose.model('MentorEvent', mentorEventSchema)