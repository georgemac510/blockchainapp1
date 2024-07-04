require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
// const privateKeys = [process.env.PRIVATE_KEY_ONE, process.env.PRIVATE_KEY_TWO] || ""
const privateKey = process.env.PRIVATE_KEY || ""

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    sepolia: {
      provider: function() {
        return new HDWalletProvider(
          privateKey.split(','), // Array of account private keys
          `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 11155111
    }
  },

  contracts_directory: './src/contracts',
  contracts_build_directory: './src/abis',

  // Configure your compilers
  compilers: {
    solc: {
       optimizer: {
         enabled: false,
         runs: 200
      }
    }
  }
}


