const Review = require("../models/reviewModels");

const addReviewAndRating = async (data) => {
  try {
    const added = await Review.create(data);
    return added;
  } catch (err) {
    throw err;
  }
};

const updateReview = async (data) => {
  try {
    const { updatedContent, userId, movieId, reviewId } = data;
    const updated = await Review.findByIdAndUpdate(
      { _id: reviewId, userId: userId, movieId: movieId },
      { $set: updatedContent },
      { new: true }
    );

    return updated;
  } catch (err) {
    throw err;
  }
};

const getAllMovieReviews = async (movieId, userId) => {
  try {
    const data = await Review.find({ userId: userId, movieId: movieId });
    return data;
  } catch (err) {
    throw err;
  }
};

const getAverageRating = async (movieId, userId) => {
  try {
    const data = await Review.find({ userId: userId, movieId: movieId });
    const ratings = data.map((element) => {
      return element.rating;
    });
    const sum = ratings.reduce((a, b) => a + b, 0);
    const avg = ratings.length > 0 ? (sum / ratings.length).toFixed(1) : 0;
    return avg;
  } catch (err) {
    throw err;
  }
};

const deleteReview = async (userId, movieId, reviewId) => {
  try {
    const deleted = await Review.findByIdAndDelete({
      _id: reviewId,
      movieId: movieId,
      userId: userId,
    });
    return deleted;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  addReviewAndRating,
  updateReview,
  getAllMovieReviews,
  getAverageRating,
  deleteReview,
};
