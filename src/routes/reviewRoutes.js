const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authenticateToken = require('../middleware/authenticateToken');
router.post('/:id/reviews',authenticateToken,reviewController.addReviewAndRating);
router.put('/:movieId/reviews/:reviewId',authenticateToken,reviewController.updateReview);
router.delete('/:movieId/reviews/:reviewId',authenticateToken,reviewController.deleteReview);
router.get('/:id/reviews',authenticateToken,reviewController.getAllReviews);
router.get('/:id/averageRating',authenticateToken,reviewController.getAverageRating);

module.exports = router;