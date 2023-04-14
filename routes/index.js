const express = require('express');
const router = express.Router();

const question = require('../controllers/QuestionController');

  router.get('/', question.index);

router.get('/', question.createQuestion);
router.get('/:id', question.viewQuestions)
router.delete('/:id/delete', question.deleteQuestion)

router.use('/option', require('./option'))


console.log(" loaded router ")
module.exports = router;
