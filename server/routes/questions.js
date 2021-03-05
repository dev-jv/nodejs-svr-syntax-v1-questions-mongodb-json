const express = require('express');
const cors = require('cors');

const Question = require('../models/question');
// const { verifyToken } = require('../middlewares/authentication');
const app = express();

app.use(cors());

app.post('/question', (req, res) => {
    let body = req.body;

    let qst = new Question({
        question: body.question
    });

    qst.save( (err, qSave) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            art: qSave
        });
    });
});

app.get('/questions', (req, res) => {
    Question.find({})
        .exec((err, qsts) => {
            if(err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok: true,
                qsts,
            });
        });
});

module.exports = app;
