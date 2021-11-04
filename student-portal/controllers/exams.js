const examsRouter = require('express').Router()
const Exam = require('../models/exam')
const User = require('../models/user')
const jwt = require('jsonwebtoken')


const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

examsRouter.get('/', async (request, response) => {
  const exams = await Exam
    .find({}).populate('user', { username: 1, name: 1 })
  response.json(exams)

})

examsRouter.get('/:id', async (request, response, next) => {

  const exam = await Exam.findById(request.params.id)
  if (exam)
    response.json(exam)
  else
    response.status(404).end()
})

examsRouter.post('/', async (request, response, next) => {
  const body = request.body

  const token = getTokenFrom(request)
  // console.log('hello')
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  // console.log(decodedToken.id)

  const user = await User.findById(decodedToken.id)

  const p = user.profession[0]
  const exam = new Exam({
    subject: body.subject,
    date: body.date,
    syllabus: body.syllabus,
    user: user._id
  })
  if (p === 'Professor') {
    const savedExam = await exam.save()
    user.exams = user.exams.concat(savedExam._id)
    await user.save()

    response.json(savedExam)
  }
  else {
    response.json('Account not permitted to create exams')
  }
})

examsRouter.delete('/:id', async (request, response, next) => {

  await Exam.findByIdAndRemove(request.params.id)
  response.status(204).end()

})

examsRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const exam = {
    subject: body.subject,
    date: body.date,
    syllabus: body.syllabus,
  }

  Exam.findByIdAndUpdate(request.params.id, exam, { new: true })
    .then(updatedexam => {
      response.json(updatedexam.toJSON())
    })
    .catch(error => next(error))
})

module.exports = examsRouter