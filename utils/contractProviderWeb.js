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

const ContractProvider = function() {};

ContractProvider.prototype = {
  getABI: function(name, options) {
    name = name + '.abi';
    const fileContent = dataHash[name];
    if (typeof fileContent == 'string') {
      return JSON.parse(fileContent);
    }

    return fileContent;
  },

  getBIN: function(name, options) {
    name = name + '.bin';
    console.log('webpackOverWrite');
    return dataHash[name];
  }
};

module.exports = new ContractProvider();
