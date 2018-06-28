const instance = require("../instantiate.js")("server");
instance
  .generate()
  .then(() => instance.server())
  .catch(err => console.error(err));
