const mongoose = require('mongoose')


//conecting to the db 'store'
async function main() {
    await mongoose.connect('mongodb://localhost:27017/quiz')
    console.log('Conectou ao banco!')
}

main().catch((err) => console.log(err))

module.exports = mongoose



