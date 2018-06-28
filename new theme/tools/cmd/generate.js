const instance = require("../instantiate.js")("generate");
instance
  .generate()
  .catch(err => console.error(err));
