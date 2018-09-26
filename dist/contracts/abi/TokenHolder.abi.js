module.exports = [
  {
    constant: false,
    inputs: [
      { name: '_ephemeralKey', type: 'address' },
      { name: '_spendingLimit', type: 'uint256' },
      { name: '_expirationHeight', type: 'uint256' }
    ],
    name: 'authorizeSession',
    outputs: [{ name: 'transactionId_', type: 'bytes32' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '_ephemeralKey', type: 'address' }],
    name: 'isAuthorizedEphemeralKey',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: '_ephemeralKey', type: 'address' }],
    name: 'revokeSession',
    outputs: [{ name: 'transactionId_', type: 'bytes32' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'ephemeralKeys',
    outputs: [
      { name: 'spendingLimit', type: 'uint256' },
      { name: 'nonce', type: 'uint256' },
      { name: 'expirationHeight', type: 'uint256' }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      { name: '_from', type: 'address' },
      { name: '_to', type: 'address' },
      { name: '_nonce', type: 'uint256' },
      { name: '_data', type: 'bytes' },
      { name: '_callPrefix', type: 'bytes' },
      { name: '_v', type: 'uint8' },
      { name: '_r', type: 'bytes32' },
      { name: '_s', type: 'bytes32' }
    ],
    name: 'redeem',
    outputs: [{ name: 'executionResult_', type: 'bool' }],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      { name: '_from', type: 'address' },
      { name: '_to', type: 'address' },
      { name: '_nonce', type: 'uint256' },
      { name: '_data', type: 'bytes' },
      { name: '_callPrefix', type: 'bytes' },
      { name: '_v', type: 'uint8' },
      { name: '_r', type: 'bytes32' },
      { name: '_s', type: 'bytes32' }
    ],
    name: 'executeRule',
    outputs: [{ name: 'executionResult_', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'wallets',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'coGateway',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: '_wallet', type: 'address' }],
    name: 'removeWallet',
    outputs: [{ name: 'transactionId_', type: 'bytes32' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'isWallet',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'brandedToken',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'required',
    outputs: [{ name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: '_oldWallet', type: 'address' }, { name: '_newWallet', type: 'address' }],
    name: 'replaceWallet',
    outputs: [{ name: 'transactionId_', type: 'bytes32' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'bytes32' }],
    name: 'confirmations',
    outputs: [{ name: 'status', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: '_wallet', type: 'address' }],
    name: 'addWallet',
    outputs: [{ name: 'transactionId_', type: 'bytes32' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: '_transactionId', type: 'bytes32' }],
    name: 'revokeConfirmation',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: '_required', type: 'uint8' }],
    name: 'changeRequirement',
    outputs: [{ name: 'transactionId_', type: 'bytes32' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '_transactionId', type: 'bytes32' }],
    name: 'isRequirementAchieved',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { name: '_brandedToken', type: 'address' },
      { name: '_coGateway', type: 'address' },
      { name: '_tokenRules', type: 'address' },
      { name: '_required', type: 'uint8' },
      { name: '_wallets', type: 'address[]' }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: '_transactionId', type: 'bytes32' },
      { indexed: false, name: '_ephemeralKey', type: 'address' },
      { indexed: false, name: '_spendingLimit', type: 'uint256' },
      { indexed: false, name: '_expirationHeight', type: 'uint256' }
    ],
    name: 'SessionAuthorized',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: '_transactionId', type: 'bytes32' },
      { indexed: false, name: '_ephemeralKey', type: 'address' }
    ],
    name: 'SessionRevoked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: '_ephemeralKey', type: 'address' }],
    name: 'EphemeralKeyExpired',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: '_from', type: 'address' },
      { indexed: true, name: '_to', type: 'address' },
      { indexed: false, name: '_nonce', type: 'uint256' },
      { indexed: false, name: '_status', type: 'bool' }
    ],
    name: 'RuleExecuted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: '_transactionId', type: 'bytes32' },
      { indexed: true, name: '_sender', type: 'address' }
    ],
    name: 'Proposed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: '_transactionId', type: 'bytes32' },
      { indexed: true, name: '_sender', type: 'address' }
    ],
    name: 'Confirmed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: '_transactionId', type: 'bytes32' },
      { indexed: true, name: '_sender', type: 'address' }
    ],
    name: 'Revoked',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: '_sender', type: 'address' },
      { indexed: true, name: '_oldWallet', type: 'address' },
      { indexed: true, name: '_newWallet', type: 'address' }
    ],
    name: 'WalletReplaced',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: '_transactionId', type: 'bytes32' },
      { indexed: true, name: '_wallet', type: 'address' }
    ],
    name: 'WalletAdded',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: '_transactionId', type: 'bytes32' },
      { indexed: true, name: '_wallet', type: 'address' }
    ],
    name: 'WalletRemoved',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: '_required', type: 'uint8' }],
    name: 'RequirementChanged',
    type: 'event'
  }
];