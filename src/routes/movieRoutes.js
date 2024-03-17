const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/', authenticateToken, movieController.addMovie);
router.get('/',authenticateToken,movieController.getAllMovies);
router.put('/:id',authenticateToken,movieController.updateMovie);
router.delete('/:id',authenticateToken,movieController.deleteMovie);
router.get('/:id',authenticateToken,movieController.getMovieById);

module.exports = router;