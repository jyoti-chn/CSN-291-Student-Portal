const mongoose = require('mongoose')

const examSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    minlength: 2
  },
  date: {
    type: String,
    required: true,
  },
  syllabus : {
    type : String,
    required:true,
    minlength:1
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

examSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Exam', examSchema)