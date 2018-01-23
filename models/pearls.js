let mongoose = require('mongoose');

//Pearl schema
let pearlSchema = mongoose.Schema({
  date  :{
    type: String
  },
  pearl:{
    type: String
  }
  });


let Pearls = module.exports = mongoose.model('pearls', pearlSchema);
