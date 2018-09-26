module.exports = [
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'constraints',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'rules',
    outputs: [{ name: 'ruleName', type: 'string' }, { name: 'ruleAddress', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'organization',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: '_constraintAddress', type: 'address' }],
    name: 'removeConstraint',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      { name: '_from', type: 'address' },
      { name: '_transfersTo', type: 'address[]' },
      { name: '_transfersAmount', type: 'uint256[]' }
    ],
    name: 'checkConstraints',
    outputs: [{ name: '_passed', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: '_ruleName', type: 'string' }, { name: '_ruleAddress', type: 'address' }],
    name: 'registerRule',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      { name: '_from', type: 'address' },
      { name: '_transfersTo', type: 'address[]' },
      { name: '_transfersAmount', type: 'uint256[]' }
    ],
    name: 'executeTransfers',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: '_constraintAddress', type: 'address' }],
    name: 'addConstraint',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'token',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ name: '_organization', type: 'address' }, { name: '_token', type: 'address' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: '_sender', type: 'address' },
      { indexed: false, name: '_ruleName', type: 'string' },
      { indexed: false, name: '_ruleAddress', type: 'address' }
    ],
    name: 'RuleRegistered',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: '_sender', type: 'address' },
      { indexed: false, name: '_constraintAddress', type: 'address' }
    ],
    name: 'ConstraintAdded',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: '_sender', type: 'address' },
      { indexed: false, name: '_constraintAddress', type: 'address' }
    ],
    name: 'ConstraintRemoved',
    type: 'event'
  }
];
