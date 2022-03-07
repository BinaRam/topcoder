var MPC = artifacts.require("MPC");

module.exports = function(deployer,networks,accounts) {
  var receiver=accounts[1]; 
  var balance=50000000000000000000;  
  deployer.deploy(MPC,receiver,{value:balance});
};
