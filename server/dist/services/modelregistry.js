"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abi = void 0;
exports.abi = {
    "address": "0xcEcba2F1DC234f70Dd89F2041029807F8D03A990",
    "abi": [
        {
            "inputs": [
                { "internalType": "address", "name": "owner", "type": "address" },
                { "internalType": "address", "name": "verifier", "type": "address" }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "assertOwner",
            "outputs": [],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                { "internalType": "address", "name": "verifier", "type": "address" }
            ],
            "name": "setVerifier",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                { "internalType": "uint256[2]", "name": "_a", "type": "uint256[2]" },
                { "internalType": "uint256[4]", "name": "_b_flat", "type": "uint256[4]" },
                { "internalType": "uint256[2]", "name": "_c", "type": "uint256[2]" },
                { "internalType": "uint256[]", "name": "_input", "type": "uint256[]" }
            ],
            "name": "verifyGroth16",
            "outputs": [
                { "internalType": "bool", "name": "", "type": "bool" }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                { "internalType": "string", "name": "model_name", "type": "string" },
                { "internalType": "string", "name": "version", "type": "string" },
                { "internalType": "string", "name": "model_type", "type": "string" },
                { "internalType": "uint128", "name": "pricing_per_inference", "type": "uint128" },
                { "internalType": "bytes32", "name": "example_input_hash", "type": "bytes32" },
                { "internalType": "bytes32", "name": "example_output_hash", "type": "bytes32" },
                { "internalType": "uint256[2]", "name": "a", "type": "uint256[2]" },
                { "internalType": "uint256[4]", "name": "b_flat", "type": "uint256[4]" },
                { "internalType": "uint256[2]", "name": "c", "type": "uint256[2]" },
                { "internalType": "uint256[]", "name": "public_inputs", "type": "uint256[]" }
            ],
            "name": "register_model_groth16",
            "outputs": [
                { "internalType": "uint256", "name": "", "type": "uint256" }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                { "internalType": "uint256", "name": "id", "type": "uint256" }
            ],
            "name": "getModel",
            "outputs": [
                { "internalType": "address", "name": "", "type": "address" },
                { "internalType": "string", "name": "", "type": "string" },
                { "internalType": "string", "name": "", "type": "string" },
                { "internalType": "string", "name": "", "type": "string" },
                { "internalType": "uint128", "name": "", "type": "uint128" },
                { "internalType": "bytes32", "name": "", "type": "bytes32" },
                { "internalType": "bytes32", "name": "", "type": "bytes32" }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalModels",
            "outputs": [
                { "internalType": "uint256", "name": "", "type": "uint256" }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getOwner",
            "outputs": [
                { "internalType": "address", "name": "", "type": "address" }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getVerifier",
            "outputs": [
                { "internalType": "address", "name": "", "type": "address" }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
};
