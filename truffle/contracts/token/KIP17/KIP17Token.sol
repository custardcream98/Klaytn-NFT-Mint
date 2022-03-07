pragma solidity ^0.5.0;

import "./KIP17Full.sol";
import "./KIP17Burnable.sol";
import "./KIP17Pausable.sol";
import "./KIP17MintableOwnable.sol";
import "./KIP17MetadataMintableOwnable.sol";

contract KIP17Token is
    KIP17Full,
    KIP17Burnable,
    KIP17Pausable,
    KIP17MintableOwnable,
    KIP17MetadataMintableOwnable
{
    constructor(string memory name, string memory symbol)
        public
        KIP17Full(name, symbol)
    {}
}
