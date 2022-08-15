const express = require('express')
const cors = require('cors')
const app = express()

//config JSON response
app.use(express.json())

//Solving the cors problem
app.use(cors({credentials:true, origin: 'http://localhost:3000'}))


//Routes
const QuestionRoutes = require('./routes/QuestionRoutes')
app.use('/questions',QuestionRoutes)



app.listen(5000)


