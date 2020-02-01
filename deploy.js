const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const {interface, bytecode} = require('./compile')
const INITIAL_MESSAGE = 'ini msg' 


const provider = new HDWalletProvider('subway crumble action awkward knock clinic modify agent exist debate goose cry',
'https://rinkeby.infura.io/v3/a2b42712551d41d79f5c5d720c8f1fb7')

const web3 = new Web3(provider)

const deploy = async() => {
    accounts = await web3.eth.getAccounts()
    console.log('attempting to deploy from account : ', accounts[0])
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: '0x'+bytecode, arguments:[INITIAL_MESSAGE]})
    .send({from: accounts[0], gas: '1000000'})

    console.log('contract deployed to: ', result.options.address)
}

deploy()
