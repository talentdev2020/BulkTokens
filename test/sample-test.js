const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token Factory", function () {
  this.timeout(40000);

  it("Should return the new Token", async function (accounts) {
    const TokenFactory = await ethers.getContractFactory("TokenFactory");
    const tokenFactory = await TokenFactory.deploy();
    await tokenFactory.deployed();
    console.log("deployed")
    const receiver = await tokenFactory.createToken("Hello", "test", "0x4c6348bf16FeA56F3DE86553c0653b817bca799A", 100);
    console.log({receiver})
    prov = ethers.getDefaultProvider();

   const balance = await prov.getBalance("0x4c6348bf16FeA56F3DE86553c0653b817bca799A");
    console.log(balance)
   });
});
