/* globals blanket, module */

var options = {
  modulePrefix: 'ember-frost-select',
  filter: '//.*ember-frost-select/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    jsonOptions: {
      outputFile: 'coverage/coverage.json'
    },
    teamcityOptions: {
      outputFile: 'coverage/teamcity.txt'
    },
    lcovOptions: {
      outputFile: 'coverage/lcov.info'
    },
    reporters: ['teamcity', 'json', 'lcov'],
    autostart: true
  }
}

if (typeof exports === 'undefined') {
  blanket.options(options)
} else {
  module.exports = options
}
