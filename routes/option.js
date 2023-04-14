const express = require('express');
const router = express.Router();

const option = require('../controllers/OptionController')

 router.get('/', option.index )

 router.post('/:id/options/create',option.createOption )
router.delete('/:id/delete', option.optionDelete);
 router.get('/:id/add_vote', option.addVote)

module.exports = router;
