const { getConfigFromArguments } = require("./utils.js");
const ThemeInstance = require("./theme_instance.js");
module.exports = function instantiate(cmd) {
  return new ThemeInstance(getConfigFromArguments(cmd));
}