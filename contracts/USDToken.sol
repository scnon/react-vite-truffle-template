// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDToken is ERC20 {
    uint256 private amount = 10000 * 10 ** decimals();
    
    constructor() ERC20("USD Token", "USD") {
        _mint(msg.sender, amount);
    }
}