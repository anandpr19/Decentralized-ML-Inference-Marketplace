# ML Inference Marketplace

## Project Overview

**Project Name:** ML Inference Marketplace  
**Platform:** Arbitrum Rollup  
**Type:** Decentralized AI Inference Marketplace with Verifiable Zero-Knowledge Proofs  
**Languages & Tools:** Rust, Stylus SDK, IPFS , EZKL

This project enables AI model owners to securely deploy models on-chain. Users can request inferences, and results are verified using zkSNARK proofs. Payments are held in escrow and released only when proofs are valid. The system ensures privacy, transparency, and fairness for both model owners and servers.

---

## Features

1. **Model Registry:**  
   Model owners can register their AI models on-chain with metadata, pricing, and IPFS references for model weights. Only active models are available for users.

2. **User Access Control:**  
   Users can obtain free or paid access to models. Access can be time-bound or credit-based to support different tiers.

3. **Inference Requests:**  
   Users request model inferences, optionally paying per use. Each request is tracked with a unique ID and timestamp.

4. **Off-Chain Result Submission:**  
   Authorized servers perform the inference off-chain and submit results along with a zkSNARK proof to the blockchain.

5. **Proof Verification:**  
   The smart contract verifies submitted proofs before releasing payments, ensuring that computations are correct without revealing model details or user inputs.

6. **Payment Escrow:**  
   Payments for inferences are held in escrow until verified. Invalid proofs trigger automatic refunds to users.

7. **Server Reputation System:**  
   Servers gain reputation for valid submissions and lose reputation for invalid ones, incentivizing honest computation.

8. **Admin Controls:**  
   Contract owners can pause the marketplace, update fees, and authorize or remove servers. Platform fees are adjustable and can be withdrawn by the owner.

---

## Architecture

The marketplace is built with a modular architecture:

- **Smart Contract Layer:** Handles model registration, user access, inference requests, proof verification, and payment escrow.  
- **ZK Circuit Layer:** Defines the zero-knowledge logic to verify inference results without exposing model data or user inputs.  
- **Server Layer:** Performs off-chain AI computations and generates zkSNARK proofs for verification.  
- **Frontend (Optional):** Interface for users to view models, request inferences, and track result status.

The system ensures that private model data never leaves the server without a verifiable proof of correctness.

---

## Workflow

1. Model owners deploy models with metadata and IPFS links.  
2. Users obtain access to models, either free or paid.  
3. Users submit inference requests.  
4. Authorized servers compute results off-chain.  
5. Servers submit results along with zkSNARK proofs.  
6. Smart contract verifies proofs and releases payments accordingly.  
7. Server reputation is updated based on submission validity.  

This process maintains trust, transparency, and privacy in AI computation marketplaces.

---

## Installation & Deployment

- Compile and deploy the Rust contract using Stylus SDK.  
- Initialize the contract and add authorized servers.  
- Generate zkSNARK proofs using Circom and snarkjs.  
- Users and servers interact with the deployed contract for requests and result submissions.  

---

## Notes

- The project leverages zero-knowledge proofs (zkSNARKs) to guarantee the correctness of AI inferences without revealing sensitive data.  
- Trusted setup files can be generated locally. These are reusable across circuits.  
- Server-side computation is required, but proofs prevent dishonest behavior.  
- Payments and access management are fully automated via smart contracts, ensuring fairness for all participants.

---

## Future Improvements

- Integration of multiple AI model types (text, image, speech).  
- Improved front-end with interactive dashboards.  
- Layered ZK proofs for more complex AI verification.  
- Dynamic pricing and subscription management.  

