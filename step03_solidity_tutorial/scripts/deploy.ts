import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { SolidityTest, SolidityTest2, SolidityTest2__factory, SolidityTest3, SolidityTest3__factory, SolidityTest__factory } from "../typechain";
import { SolidityTest4__factory } from "../typechain/factories/SolidityTest4__factory";
import { SolidityTest5__factory } from "../typechain/factories/SolidityTest5__factory";
import { SolidityTest6__factory } from "../typechain/factories/SolidityTest6__factory";
import { SolidityTest4 } from "../typechain/SolidityTest4";
import { SolidityTest5 } from "../typechain/SolidityTest5";
import { SolidityTest6 } from "../typechain/SolidityTest6";

async function main() {

  const [owner, addr1, addr2] = await ethers.getSigners();

  const SolidityTest5:SolidityTest5__factory = await ethers.getContractFactory("SolidityTest5");
  const solidtyTest5:SolidityTest5 = await SolidityTest5.deploy();

  await solidtyTest5.deployed();
  console.log("SolidityTest5 deployed to:", solidtyTest5.address);

  const SolidityTest6:SolidityTest6__factory = await ethers.getContractFactory("SolidityTest6");
  const solidtyTest6:SolidityTest6 = await SolidityTest6.deploy();

  await solidtyTest6.deployed();

  console.log("SolidityTest6 deployed to:", solidtyTest6.address);

  console.log("Balance of Contract = ", (await ethers.provider.getBalance(solidtyTest5.address)).toString());

  console.log("Receive Coutner = ", (await solidtyTest5.countReceive()).toString());
  console.log("Fallback Coutner = ", (await solidtyTest5.countFallback()).toString());
  
  console.log("Receive Balance = ", (await solidtyTest5.receiveBalance(addr1.address)).toString())
  console.log("Fallback Balance = ", (await solidtyTest5.fallbackBalance(addr1.address)).toString());

  //const txt1 = await solidtyTest6.testFunctionCall(solidtyTest5.address, "hellWorld()");


  
  const txt1 = await addr1.sendTransaction({
    to: solidtyTest5.address,
    value: ethers.utils.parseEther("1"), 
  });
  

  console.log("After ======>");
  console.log("Balance of Contract = ", (await ethers.provider.getBalance(solidtyTest5.address)).toString());

  console.log("Receive Coutner = ", (await solidtyTest5.countReceive()).toString());
  console.log("Fallback Coutner = ", (await solidtyTest5.countFallback()).toString());
  
  console.log("Receive Balance = ", (await solidtyTest5.receiveBalance(addr1.address)).toString())
  console.log("Fallback Balance = ", (await solidtyTest5.fallbackBalance(addr1.address)).toString());







  /*
  const SolidityTest4:SolidityTest4__factory = await ethers.getContractFactory("SolidityTest4");
  const solidtyTest4:SolidityTest4 = await SolidityTest4.deploy();

  await solidtyTest4.deployed();

  console.log("SolidityTest4 deployed to:", solidtyTest4.address);

  console.log("Owner address = ", owner.address);


  console.log("Counter before =  ", (await solidtyTest4.counter()).toString());

  const txt1 = await solidtyTest4.updateAmount(ethers.utils.parseEther("0.001"));
  
  console.log("Counter after =  ", (await solidtyTest4.counter()).toString());
  */

  //console.log("contract owner address = ", await solidtyTest4.owner());
  //console.log("treasure address = ", await solidtyTest4.treasureAddress());
  
  /*
  console.log("contract owner address = ", await solidtyTest4.owner());
  console.log("treasure address = ", await solidtyTest4.treasureAddress());

  //const txt1 = await solidtyTest4.updateTreasureAddress(addr1.address);
  
  const txt1 = await solidtyTest4.connect(addr2).updateTreasureAddress(addr1.address);

  console.log("contract owner address = ", await solidtyTest4.owner());
  console.log("treasure address = ", await solidtyTest4.treasureAddress());
  */
  
  /*
  const val = await solidtyTest4.doSomething();
  const val2 = await solidtyTest4.checkPureFunction(10);
  console.log("value = ",val.toString());
  console.log("value 2 = ",val2.toString());

  const val3 = await solidtyTest4.multiVal();
  console.log("value 3 = ",val3);
  console.log("value 3 = ",val3[0]);
  console.log("value 3 = ",val3[1]);

  const val4 = await solidtyTest4.multiVal();
  console.log("value 4 = ",val4);
  console.log("value 4 = ",val4[0]);
  console.log("value 4 = ",val4[1]);
  */

    /*
  const SolidityTest3:SolidityTest3__factory = await ethers.getContractFactory("SolidityTest3");
  const solidtyTest3:SolidityTest3 = await SolidityTest3.deploy();

  await solidtyTest3.deployed();

  console.log("SolidityTest3 deployed to:", solidtyTest3.address);

  console.log("value = ",(await solidtyTest3.applyConversion()).toString());
  */

    /*
  const etherValue = await ethers.utils.parseEther("5.6");
  console.log("Ehter value = ",etherValue.toString());

  const num = BigNumber.from("100000000000000000000");
  console.log("Ehter value = ",await ethers.utils.formatEther(num));
  */

  /*
  const SolidityTest2:SolidityTest2__factory = await ethers.getContractFactory("SolidityTest2");
  const solidtyTest2:SolidityTest2 = await SolidityTest2.deploy();

  await solidtyTest2.deployed();

  console.log("SolidityTest2 deployed to:", solidtyTest2.address);

  await solidtyTest2.addFundingRounds();

  const roundInfo = await solidtyTest2.allRounds(2) 
  console.log(roundInfo);
  console.log("fundingRequired = ",roundInfo.fundingRequired.toString());
  console.log("round = ",roundInfo.round);
  */
  /*
  const SolidityTest:SolidityTest__factory = await ethers.getContractFactory("SolidityTest");
  const solidtyTest:SolidityTest = await SolidityTest.deploy();

  await solidtyTest.deployed();

  console.log("SolidityTest2 deployed to:", solidtyTest.address);

  console.log("Current Round = ", await solidtyTest.getCurrentFundingRound());

  await solidtyTest.changeRound(5);

  console.log("Current Round After = ", await solidtyTest.getCurrentFundingRound());
  */

  /*
  console.log("Juice = ", await solidtyTest.getJuice());

  console.log("is Juice Extra Large = ", await solidtyTest.verifyJuiceSize());

  await solidtyTest.updateJuiceSize(3);

  console.log("Juice = ", await solidtyTest.getJuice());
  console.log("is Juice Extra Large after = ", await solidtyTest.verifyJuiceSize());
  */

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
