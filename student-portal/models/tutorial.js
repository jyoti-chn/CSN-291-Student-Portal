const mongoose = require('mongoose')

const tutorialSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    minlength: 5
  },
  date: {
    type: String,
    required: true,
  },
  syllabus : {
    type : String,
    required:true,
    minlength:5
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

tutorialSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Exam', tutorialSchema)