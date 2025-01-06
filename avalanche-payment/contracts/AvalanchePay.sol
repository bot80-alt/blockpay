// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AvalanchePay {
    address public owner;
    mapping(address => uint256) public merchantBalances;

    event PaymentMade(address indexed merchant, address indexed payer, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    function payMerchant(address merchant) public payable {
        require(msg.value > 0, "Payment amount must be greater than zero");
        merchantBalances[merchant] += msg.value;
        emit PaymentMade(merchant, msg.sender, msg.value);
    }

    function withdrawFunds() public {
        uint256 balance = merchantBalances[msg.sender];
        require(balance > 0, "No funds to withdraw");
        merchantBalances[msg.sender] = 0;
        payable(msg.sender).transfer(balance);
    }

    function getBalance(address merchant) public view returns (uint256) {
        return merchantBalances[merchant];
    }
}
