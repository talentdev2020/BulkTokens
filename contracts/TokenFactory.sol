// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "./Single.sol";

contract TokenFactory {
    function createToken(string memory _name, string memory _symbol, address _receiver, uint256 _totalSupply) public returns (address) {
        Single single = new Single(_name, _symbol, _receiver, _totalSupply);
        return address(single);
    }
}
