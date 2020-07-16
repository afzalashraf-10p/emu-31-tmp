// A mock Jest transform for all file imports.
// See the Jest configuration for where it is used.
module.exports = {
  process(src, filename, config, options) {
    return '';
  },
};
