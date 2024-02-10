// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0; 
import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.6/vendor/SafeMathChainlink.sol";


contract FundMe
{
    // safe math library check uint256 for integer overflows
    using SafeMathChainlink for uint256;

    // array of addresses who deposited
    address[] public funders;

    function getFundersCount() public view returns (uint) {
        return funders.length;
    }

    // Other contract functions...


    
    address public owner;

    // the first person to deploy the contract is
    // the owner
    constructor() public {
        owner = msg.sender;
    }
    
    
    
    mapping(address => uint256) public addressToAmountFunded;

    function fund() public payable 
    {
        addressToAmountFunded[msg.sender] += msg.value;
        funders.push(msg.sender);
    }

    
    modifier onlyOwner() {
        //is the message sender owner of the contract?
        require(msg.sender == owner);

        _;
    }

    function withdraw() public payable onlyOwner {
        msg.sender.transfer(address(this).balance);

        //iterate through all the mappings and make them 0
        //since all the deposited amount has been withdrawn
        for (
            uint256 funderIndex = 0;
            funderIndex < funders.length;
            funderIndex++
        ) {
            address funder = funders[funderIndex];
            addressToAmountFunded[funder] = 0;
        }
        //funders array will be initialized to 0
        funders = new address[](0);

    }

    /*int bal=0;
    function getBalance() public view returns(int){
        return bal;
    }*/
}