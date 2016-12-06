var gruntShared = require('../../helpers/grunt-shared');
module.exports = function(grunt) {
  gruntShared(grunt, __dirname, {
    mochaTest: {
      options: {
        reporter: 'spec',
        grep: 'tests that match grep',
        invert: true
      },
      all: {
        src: ['*.js']
      }
    }
  });
};
