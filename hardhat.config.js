require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
//console.log(process.env.NEXT_PUBLIC_PRIVATE_KEY);

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
   
    testnet: {
      url: `https://rpc.testnet.mantle.xyz`, 
      accounts: [process.env.NEXT_PUBLIC_PRIVATE_KEY],
    },

  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
