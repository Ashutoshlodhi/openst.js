'use strict';

var dataHash = {};

/** Dont change these comments startDataHash endDataHash **/
//startDataHash
//endDataHash

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
