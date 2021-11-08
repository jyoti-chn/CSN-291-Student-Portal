const app = require('./app') // the actual Express application
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})

























// require('dotenv').config()
// const express = require('express')
// const app = express()
// const cors = require('cors')
// const Note = require('./models/note')
// const logger = require('./utils/logger')
// const { response } = require('express')
// const config = require('./utils/config')

// const PORT = process.env.PORT

// logger.info(`Server running on port ${config.PORT}`)

// app.use(express.static('build'))
// app.use(cors())
// app.use(express.json())
// // app.use(requestLogger)

// const errorHandler = (error, request, response, next) => {
//   console.error(error.message)

//   if (error.name === 'CastError') {
//     return response.status(400).send({ error: 'malformatted id' })
//   }
//   else if (error.name === 'ValidationError') {
//     return response.status(400).json({ error: error.message })
//   }

//   next(error)
// }

// // this has to be the last loaded middleware.
// app.use(errorHandler)


// app.get('/', (req, res) => {
//   res.send('<h1>Hello World!</h1>')
// })

// app.get('/api/notes', (request, response) => {
//   Note.find({}).then(notes => {
//     response.json(notes)
//   })
// })


// app.post('/api/notes', (request, response, next) => {
//   const body = request.body

//   if (body.content === undefined) {
//     return response.status(400).json({ error: 'content missing' })
//   }

//   const note = new Note({
//     content: body.content,
//     important: body.important || false,
//     date: new Date(),
//   })

//   note
//     .save()
//     .then(savedNote => savedNote.toJSON())
//     .then(savedAndFormattedNote => {
//       response.json(savedAndFormattedNote)
//     })
//     .catch(error => next(error))
// })


// app.get('/api/notes/:id', (request, response, next) => {
//   Note.findById(request.params.id)
//     .then(note => {
//       if (note) {
//         response.json(note)
//       }
//       else {
//         response.status(404).end()
//       }
//     })
//     .catch(error => next(error))
// })

// app.delete('/api/notes/:id', (request, response, next) => {
//   Note.findByIdAndRemove(request.params.id)
//     .then(result => {
//       response.status(204).end()
//     })
//     .catch(error => next(error))
// })

// app.put('/api/notes/:id', (request, response, next) => {
//   const body = request.body

//   const note = {
//     content: body.content,
//     important: body.important,
//   }

//   Note.findByIdAndUpdate(request.params.id, note, { new: true })
//     .then(updatedNote => {
//       response.json(updatedNote)
//     })
//     .catch(error => next(error))
// })



// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })