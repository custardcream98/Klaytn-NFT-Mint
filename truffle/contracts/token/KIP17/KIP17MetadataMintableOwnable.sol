// File contracts/token/KIP17/KIP17MetadataMintableOwnable.sol
pragma solidity ^0.5.0;

import "./KIP17.sol";
import "./KIP17Metadata.sol";
import "../../introspection/KIP13.sol";
import "../../ownership/Ownable.sol";

/**
 * @title KIP17MetadataMintable
 * @dev KIP17 minting logic with metadata.
 */
contract KIP17MetadataMintableOwnable is KIP13, KIP17, KIP17Metadata, Ownable {
    bytes4 private constant _INTERFACE_ID_KIP17_METADATA_MINTABLE = 0xfac27f46;

    /**
     * @dev Constructor function.
     */
    constructor() public {
        // register the supported interface to conform to KIP17Mintable via KIP13
        _registerInterface(_INTERFACE_ID_KIP17_METADATA_MINTABLE);
    }

    /**
     * @dev Function to mint tokens.
     * @param to The address that will receive the minted tokens.
     * @param tokenId The token id to mint.
     * @param tokenURI The token URI of the minted token.
     * @return A boolean that indicates if the operation was successful.
     */
    function mintWithTokenURI(
        address to,
        uint256 tokenId,
        string memory tokenURI
    ) public onlyOwner returns (bool) {
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
        return true;
    }
}
