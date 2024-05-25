const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },
  genre: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },
  numberOfSeasons: {
    type: Number,
    required: true,
    min: 1
  },
  releaseDate: {
    type: Date,
    required: true
  }
});

const Show = mongoose.model('Show', showSchema);

module.exports = Show;
