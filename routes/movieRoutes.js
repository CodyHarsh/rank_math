const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/', movieController.getHomePage);
router.post('/', movieController.searchMovie);

module.exports = router;