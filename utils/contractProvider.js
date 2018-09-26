'use strict';

const fs = require('fs'),
  path = require('path');

const rootPrefix = '..',
  rootAbi = '/contracts/abi/',
  rootBin = '/contracts/bin/';

const ContractProvider = function() {};

ContractProvider.prototype = {
  getABI: function(name, options) {
    const oThis = this,
      filePath = rootPrefix + rootAbi + name + '.abi',
      fileContent = oThis._read(filePath, options);
    return JSON.parse(fileContent);
  },

  getBIN: function(name, options) {
    const oThis = this,
      filePath = rootPrefix + rootBin + name + '.bin',
      fileContent = oThis._read(filePath, options);
    return fileContent;
  },

  _read: function(filePath, options) {
    filePath = path.join(__dirname, '/' + filePath);
    return fs.readFileSync(filePath, options || 'utf8');
  }
};

module.exports = new ContractProvider();
