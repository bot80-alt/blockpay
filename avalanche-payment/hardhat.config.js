require("@nomiclabs/hardhat-waffle");
require("dotenv").config(); 

const { PRIVATE_KEY, AVALANCHE_RPC_URL } = process.env;

module.exports = {
  solidity: "0.8.18",
  networks: {
    avalanche: {
      url: AVALANCHE_RPC_URL || "https://api.avax.network/ext/bc/C/rpc", 
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [], 
    },
  },
  paths: {
    sources: "./contracts", 
    tests: "./test", 
    cache: "./cache", 
    artifacts: "./artifacts", 
  },
};
