'use strict';

const path = require('path'),
  fs = require('fs');

const InstanceComposer = require('../../instance_composer');
const generator = require('../../lib/contract_interacts/generator');
const contractReader = require('../../utils/contractReader');

const tokenRulesJsonInterface = contractReader.parseFile('../../contracts/abi/TokenRules.abi', 'utf8');

const TokenRules = function(tokenRulesContractAddress) {
  const oThis = this,
    web3Obj = oThis.ic().chainWeb3(),
    tokenRulesInstance = new web3Obj.eth.Contract(tokenRulesJsonInterface, tokenRulesContractAddress, {});

  oThis._getAuxiliaryContract = function() {
    return tokenRulesInstance;
  };

  //Bind TokenRules auxiliary methods.
  generator.bindAuxiliaryMethods(oThis, '_getAuxiliaryContract');
};

const proto = (TokenRules.prototype = {
  constructor: TokenRules,

  _getAuxiliaryContract: null
});

let auxiliaryContractAbi = tokenRulesJsonInterface;
let auxiliaryContractGetter = '_getAuxiliaryContract';
generator(proto, null, null, auxiliaryContractAbi, auxiliaryContractGetter);

InstanceComposer.registerShadowableClass(TokenRules, 'TokenRules');

module.exports = TokenRules;
