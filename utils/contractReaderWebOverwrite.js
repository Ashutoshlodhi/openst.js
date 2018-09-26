'use strict';

var dataHash = {};

console.log('__REPLACE__');

dataHash['MockToken.abi'] = require('../dist/contracts/abi/MockToken.abi.js');
dataHash['TokenHolder.abi'] = require('../dist/contracts/abi/TokenHolder.abi.js');
dataHash['TokenRules.abi'] = require('../dist/contracts/abi/TokenRules.abi.js');
dataHash['TransferRule.abi'] = require('../dist/contracts/abi/TransferRule.abi.js');

dataHash['MockToken.bin'] = require('../dist/contracts/bin/MockToken.bin.js');
dataHash['TokenHolder.bin'] = require('../dist/contracts/bin/TokenHolder.bin.js');
dataHash['TokenRules.bin'] = require('../dist/contracts/bin/TokenRules.bin.js');
dataHash['TransferRule.bin'] = require('../dist/contracts/bin/TransferRule.bin.js');

const contractReader = function() {};

contractReader.prototype = {
  parseFile: function(filePath, options) {
    var fileSplit = filePath && filePath.split('/'),
      len = fileSplit && fileSplit.length - 1,
      key = len && fileSplit[len];
    return dataHash[key] || {};
  }
};

module.exports = new contractReader();
