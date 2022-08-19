const Question = require('../models/Question')

const ObjectId = require('mongoose').Types.ObjectId

module.exports = class ItemController{

    //create question
    static async create(req,res){
        const {title,first_answer,second_answer,third_answer,forth_answer,correct_answer} =req.body

        //validations
        if (!title) {
            res.status(422).json({ message: "Faltando Titulo" })
            return
        }

        if (!first_answer) {
            res.status(422).json({ message: "Faltando primeira resposta" })
            return
        }

        if (!second_answer) {
            res.status(422).json({ message: "Faltando segunda resposta" })
            return
        }

        if (!third_answer) {
            res.status(422).json({ message: "Faltando terceira resposta" })
            return
        }

        if (!forth_answer) {
            res.status(422).json({ message: "Faltando quarta resposta" })
            return
        }

        if (!correct_answer) {
            res.status(422).json({ message: "Faltando resposta correta" })
            return
        }

        const question = new Question({
            title,
            first_answer,
            second_answer,
            third_answer,
            forth_answer,
            correct_answer
        })

        try{
            const newQuestion = await question.save()
            res.status(201).json({
                message:'Questão Cadastrada!',
                newQuestion
            })
        } catch(err){
            res.status(500).json({message:err})
        }
    }


    //get all questions

    static async getAll(req,res){
        const questions = await Question.find().sort('-createAt')
        res.status(200).json({
            questions:questions
        })
    }

    //get ten questions

    static async getTen(req,res){
        const questions = await Question.aggregate([{$sample:{size:10}}])
        res.status(200).json({
            questions:questions
        })
    }




}












