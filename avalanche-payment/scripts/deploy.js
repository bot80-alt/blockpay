const hre = require("hardhat");

async function main() {
    const AvalanchePay = await hre.ethers.getContractFactory("AvalanchePay");
    const avalanchePay = await AvalanchePay.deploy();

    await avalanchePay.deployed();
    console.log("AvalanchePay deployed to:", avalanchePay.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
