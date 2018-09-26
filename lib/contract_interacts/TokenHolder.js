'use strict';

const InstanceComposer = require('../../instance_composer');
const generator = require('../../lib/contract_interacts/generator');
const contractProvider = require('../../utils/contractProvider');

const path = require('path'),
  fs = require('fs');

const tokenHolderJsonInterface = contractProvider.getABI('TokenHolder', 'utf8');

const TokenHolder = function(tokenHolderContractAddress) {
  const oThis = this,
    web3Obj = oThis.ic().chainWeb3(),
    tokenHolderInstance = new web3Obj.eth.Contract(tokenHolderJsonInterface, tokenHolderContractAddress, {});

  oThis._getAuxiliaryContract = function() {
    return tokenHolderInstance;
  };

  //Bind Tokenholder auxiliary methods.
  generator.bindAuxiliaryMethods(oThis, '_getAuxiliaryContract');
};

const proto = (TokenHolder.prototype = {
  constructor: TokenHolder,

  _getAuxiliaryContract: null
});

let auxiliaryContractAbi = tokenHolderJsonInterface;
let auxiliaryContractGetter = '_getAuxiliaryContract';
generator(proto, null, null, auxiliaryContractAbi, auxiliaryContractGetter);

InstanceComposer.registerShadowableClass(TokenHolder, 'TokenHolder');

module.exports = TokenHolder;
