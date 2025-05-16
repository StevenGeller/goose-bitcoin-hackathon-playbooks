# Introduction to Key Hackathon Tools

This guide introduces the primary tools for the Goose + Bitcoin Hackathon. Understanding their capabilities will help you build innovative projects efficiently.

## 1. Block Goose

*   **What it is**: An open-source AI agent by Block. Goose can write, execute, debug, and test code, plus interact with external APIs.
*   **Key Features**:
    *   Automates development tasks.
    *   Integrates with any Large Language Model (LLM).
    *   Available as a CLI or a desktop application.
*   **Hackathon Edge**: Streamline development, build faster. Goose can generate boilerplate, automate tasks, and help integrate services.
*   **Key Links**:
    *   [Block Goose Official Site](https://block.github.io/goose/)
    *   [Block Goose GitHub Repository](https://github.com/block/goose)

## 2. Alby

*   **What it is**: A Bitcoin and Nostr companion with a browser extension and mobile wallet for easy Bitcoin/Lightning transactions. Features a powerful Wallet API for developers.
*   **Key Features**:
    *   User-friendly Bitcoin/Lightning wallet.
    *   Developer Wallet API for integrating payments.
    *   Abstracts Lightning Network complexities.
*   **Hackathon Edge**: Quickly add Bitcoin payment functionality. Alby's API is well-documented and easy to integrate, perfect for rapid prototyping.
*   **Key Links**:
    *   [Alby Website](https://getalby.com/)
    *   [Alby Developers Portal](https://getalby.com/developers)
    *   [Alby Wallet API Guide](https://guides.getalby.com/developer-guide/alby-wallet-api)

## 3. Lightning Dev Kit (LDK) by Spiral (Block)

*   **What it is**: A flexible library by Spiral (Block) for building custom Lightning nodes and integrating Lightning directly into applications.
*   **Key Features**:
    *   High flexibility for custom Lightning solutions.
    *   Rust core with bindings for Java, C, Swift, Kotlin.
    *   Fine-grained control over node operations.
*   **Hackathon Edge**: Ideal for projects needing deep Lightning customization or unique Lightning-enabled apps without a separate monolithic node. More involved than Alby, but offers greater control.
*   **Key Links**:
    *   [Lightning Dev Kit Official Website](https://lightningdevkit.org/)
    *   [LDK GitHub Repository](https://github.com/lightningdevkit/rust-lightning)

## 4. Lightspark

*   **What it is**: An enterprise-grade platform for Lightning Network payments, offering SDKs, APIs, and tools like "Spark."
*   **Key Features**:
    *   Managed Lightning nodes and liquidity.
    *   SDKs for various languages.
    *   "Spark" CLI for account/node management.
    *   AI-powered services (e.g., Lightspark Predict) for routing optimization.
*   **Hackathon Edge**: Best for projects aiming for high transaction volume, requiring reliable payment backends, node management abstraction, or AI-optimized routing.
*   **Key Links**:
    *   [Lightspark Website](https://www.lightspark.com/)
    *   [Lightspark Documentation](https://docs.lightspark.com/lightspark-sdk/getting-started)

## 5. Fewsats

*   **What it is**: Payment infrastructure for secure, seamless transactions between AI agents, without disrupting their workflow.
*   **Key Features**:
    *   Enables micropayments between AI agents.
    *   CLI and API for integration.
*   **Hackathon Edge**: Specialized for projects where multiple AI components need to exchange value or pay for services.
*   **Key Links**:
    *   [Fewsats Website](https://www.fewsats.com/)
    *   [Fewsats Documentation](https://fewsats.github.io/fewsats-python)
    *   [L402 Website](https://L402.org)

## 6. Lexe

*   **What it is**: A self-custodial Bitcoin and Lightning wallet (iOS & Android) focused on user control, ease-of-use, and rich features.
*   **Key Features**:
    *   Self-custodial; users retain full control of their private keys.
    *   24/7 payment receiving, even when your phone is offline.
    *   No subscription! Lexe will host your Lightning node for just 0.5% in fees per payment.
    *   Receiving lots of payments? Lexe ensures you can always receive more, including small amounts.
*   **Hackathon Edge**:
    *   Abstracts away the nuances (ex: channel management) of Lightning.
    *   Provides a simple yet powerful self-custodial wallet.
    *   Build production-ready solutions FAST with their SDK.
*   **Key Links**:
    *   [Lexe Website](https://lexe.app/)
    *   [Lexe Sidecar SDK](https://github.com/lexe-app/lexe-sidecar-sdk/)

## 7. Spark Wallet

*   **What it is**: A Bitcoin and Lightning wallet known for its ease of use and support for advanced features.
*   **Key Features**:
    *   User-friendly interface for managing Bitcoin and Lightning.
    *   Often highlighted for its clear design and robust functionality.
    *   Deploy self-custodial Bitcoin wallets in a scalable and developer-friendly way.
*   **Hackathon Edge**:
    *   Good as a user-facing wallet for testing transactions.
    *   Can be another option for participants looking for a solid mobile or desktop wallet experience.
*   **Key Links**:
    *   [Spark Wallet Documentation](https://docs.spark.money/wallet/introduction)

## 8. nwc-enclaved wallet

*   **What it is**: It's a custodial Lightning wallet service running in a trusted execution environment (TEE), offering convenience of managed wallets combined with privacy and security of self-custodial solutions.
*   **Key Features**:
    *   **Secure and private**: The service is open-source and running inside a TEE, providing privacy and security guarantees.
    *   **Programmable wallet**: Create LN wallets with a couple lines of code for your app, your bots or your users.
    *   **Nostr Integration**: Wallet provides LN address, supports Nostr zaps, can receive payments 24/7.
*   **Why use it in a hackathon?**:
    *   Potential solution if you need to create lots of LN wallets, need them to receive Nostr zaps and payments reliably, and are targeting small transaction amounts and balances. 
*   **Word of caution**:
    *   The service is in public testing phase, balances limited to 1000 sats per wallet, not ready for serious production applications yet. 
*   **Learn More**:
    *   [Source Code](https://github.com/nostrband/nwc-enclaved): Service description, including rationale, tradeoffs and benefits.
    *   [Client Library](https://github.com/nostrband/nwc-enclaved-utils): JavaScript library to create wallets and LN addresses.

## 9. OpenSecret Cloud / Maple

*   **What it is**: A secure cloud platform for Bitcoin and Lightning applications, with Maple being a key component.
*   **Key Features**:
    *   Secure and private Bitcoin application hosting.
    *   Encrypted data storage with Bitcoin-based authentication.
    *   Maple provides tools for building Bitcoin-native applications.
*   **Hackathon Edge**: Ideal for projects requiring secure storage and management of Bitcoin/Lightning data.
*   **Key Links**:
    *   [OpenSecret Cloud Documentation](https://docs.opensecret.cloud/)
    *   [Maple GitHub Repository](https://github.com/OpenSecretCloud/Maple)

## 10. Inference Grid

*   **What it is**: A platform offering Lightning micropayment-based access to LLMs for building Bitcoin-native AI workflows.
*   **Key Features**:
    *   Pay-per-use access to various LLMs.
    *   Bitcoin Lightning Network integration for micropayments.
    *   API for seamless integration into applications.
*   **Hackathon Edge**: Perfect for projects combining AI capabilities with Bitcoin payments, allowing for granular, usage-based pricing.
*   **Key Links**:
    *   [Inference Grid Website](https://www.inferencegrid.ai/)

By understanding these tools and their specific strengths, you can better architect your hackathon project and leverage their combined power to create something truly innovative!

Choose the right tools to innovate and build effectively during the hackathon!