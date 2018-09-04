# openst.js

OpenST is a framework for building token economies

#### Creating object of OpenST
```js
const Web3 = require('web3');
const web3Provider = new Web3('http://127.0.0.1:8545');

const erc20ContractAddress = '0xE8DFFa760042019A47e8D50B68EcF09F01CbF2cC';
const tokenRulesContractAddress = '0x599d9A845C46761ecb9E17E74B266393Cc90B675';

const OpenST = require('./index.js');
let openST = new OpenST(web3Provider, erc20ContractAddress, tokenRulesContractAddress);
```

#### Token Holder Interface
```js
const tokenHolderAddress = '0x729CC130c8A146c621330035B4D8F6BFABe52204';

let tokenHolder = new openST.contracts.TokenHolder(tokenHolderAddress);

let ephemeralKey = '0x351011bba142328799af15b5ef15db26bb2a2aaf',
  spendingLimit = '10000000000000000000000000000',
  expirationHeight = '10000000000000000000000000000',
  wallet = '0x9355d063d0283cc15927ae18d574eecef880dc00',
  passphrase = 'testtest';

   web3Provider.eth.personal.unlockAccount(wallet, passphrase).then(async function () {
     let r = await tokenHolder.authorizeSession(ephemeralKey, spendingLimit, expirationHeight).send({
       from: wallet,
       gasPrice: '0x12A05F200'
     });
     
     console.log(r);
     
     return r;
   
   });
```

#### TokenRules Interface
```js
const tokenRulesAddress = '0x599d9A845C46761ecb9E17E74B266393Cc90B675';
const organizationAddress = '0xb2a8f0bf51765b4b1eea682d79bf2c3d4cc9484c';
const ruleName = 'transferFrom2';
const transferRuleContractAddress = '0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c';

let tokenRules = new openST.contracts.TokenRules(tokenRulesAddress);
let passphrase = 'testtest';

   web3Provider.eth.personal.unlockAccount(organizationAddress, passphrase).then(async function () {
     let r = await tokenRules.registerRule(ruleName, transferRuleContractAddress).send({
       from: organizationAddress,
       gasPrice: '0x12A05F200'
     });
     
     console.log(r);
     
     return r;
   
   });
```

#### Constructing executable transaction
```js
const BigNumber = require('bignumber.js');
const fs = require('fs');

function parseFile(filePath, options) {
  filePath = path.join(__dirname, '/' + filePath);
  const fileContent = fs.readFileSync(filePath, options || 'utf8');
  return JSON.parse(fileContent);
}

const transferRuleJsonInterface = parseFile('./contracts/abi/TransferRule.abi', 'utf8');

// later on this will come from TokenRules contract and need not be present in openST.js
const rulesInfo = {
  transferFrom: {
    abi: transferRuleJsonInterface,
    methodName: 'transferFrom',
    ruleContractAddress: '0xfD367dF3114B33DcdCb2378fe549b68B0e591DF5'
  }
};

let ruleInfoFromTokenRules = (new openST.contracts.TokenRules()).ruleByName('transferFrom');
let ruleContractAddress = ruleInfoFromTokenRules.contractAddress;

let ruleContract = 

const constructExecutableTransaction = async function (web3Provider, ruleContract, methodName, args) {
  let ephemeralKey1Data = await tokenHolder.ephemeralKeys(ephemeralKey).call({});
  
  let bigNumberNonce = new BigNumber(ephemeralKey1Data[1]),
    ephemeralKeyNonce = bigNumberNonce.add(1).toString(10),
    amountToTransfer = new BigNumber(100);
  
  let executableData = await ruleContract[methodName](... args).encodeABI();
  
  // Get 0x + first 8(4 bytes) characters
  let callPrefix = executableData.substring(0, 10);
  
  let messageToBeSigned = await web3Provider.utils.soliditySha3(
    { t: 'bytes', v: '0x19' }, // prefix
    { t: 'bytes', v: '0x00' }, // version control
    { t: 'address', v: tokenHolderAddress },
    { t: 'address', v: ruleContractAddress},
    { t: 'uint8', v: '0' },
    { t: 'bytes', v: executableData },
    { t: 'uint256', v: ephemeralKeyNonce }, // nonce
    { t: 'uint8', v: '0' },
    { t: 'uint8', v: '0' },
    { t: 'uint8', v: '0' },
    { t: 'bytes', v: callPrefix },
    { t: 'uint8', v: '0' },
    { t: 'bytes', v: '0xab' }
  );
      await web3Provider.eth.personal.unlockAccount(ephemeralKey, passphrase);
      let signature = await web3Provider.eth.sign(messageToBeSigned, ephemeralKey);
      signature = signature.slice(2);
  
      let r = '0x' + signature.slice(0, 64),
        s = '0x' + signature.slice(64, 128),
        v = web3Provider.utils.toDecimal('0x' + signature.slice(128, 130)) + 27;
  
      await web3Provider.eth.personal.unlockAccount(facilitator, passphrase);
      let executeRuleResponse = await tokenHolder
        .executeRule(
          tokenHolderAddress,
          ruleContractAddress,
          ephemeralKeyNonce,
          executableData,
          callPrefix,
          v,
          r,
          s
        )
        .send({
          from: facilitator,
          gasPrice: gasPrice
        });
  
      if (executeRuleResponse !== true) {
        console.log('executeRuleResponse returns false', configFileContent);
        shell.exit(1);
      }
  
      return executeRuleResponse;
};
```