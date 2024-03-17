const Movie = require("../models/MovieModels");

const addMovie = async (data) => {
  try {
    const movie = await Movie.create(data);
    return movie;
  } catch (err) {
    throw err;
  }
};

const getAllMovie = async (id) => {
  try {
    const details = await Movie.find({ userId: id });
    return details;
  } catch (err) {
    throw err;
  }
};

const updateMovieDtls = async (userId, id, updatedContent) => {
  try {
    const movie = await Movie.findByIdAndUpdate(
      { userId: userId, _id: id },
      { $set: updatedContent },
      { new: true }
    );
    return movie;
  } catch (err) {
    throw err;
  }
};

const deleteMovieByID = async (userId, id) => {
  try {
    const data = Movie.findOneAndDelete({ _id: id, userId: userId });
    return data;
  } catch (err) {
    throw err;
  }
};

const getMoviesById = async (id, userId) => {
  try {
    const data = Movie.find({ userId: userId, _id: id });
    return data;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  addMovie,
  getAllMovie,
  updateMovieDtls,
  deleteMovieByID,
  getMoviesById,
};
