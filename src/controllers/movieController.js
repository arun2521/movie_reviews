const movieServices = require("../services/movieService");

const addMovie = async (req, res) => {
  try {
    const { title, director, genre, releaseYear, description } = req.body;
    const userId = req.user.id;

    const movie = await movieServices.addMovie({
      title,
      director,
      genre,
      releaseYear,
      description,
      userId,
    });

    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const userId = req.user.id;
    const data = await movieServices.getAllMovie(userId);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateMovie = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const updatedData = req.body;
    const updatedMovie = await movieServices.updateMovieDtls(
      userId,
      id,
      updatedData
    );

    if (!updatedMovie) {
      res.status(404).json({ message: "movie not found" });
    }
    res.status(200).json(updateMovie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const details = await movieServices.deleteMovieByID(userId, id);
    if (!details) {
      return res.status(404).json({ message: "Movie Not Found" });
    }

    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const movie = await movieServices.getMoviesById(id, userId);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
  getMovieById,
};
