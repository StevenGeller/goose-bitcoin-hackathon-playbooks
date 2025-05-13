# Introduction to Tools

This section provides an overview of the primary tools you'll be using for the Goose + Bitcoin Hackathon. Understanding their capabilities will help you choose the right components for your project.

## 1. Block Goose

*   **What it is**: Developed by Block, Goose is an open-source AI agent that goes beyond simple code suggestions. It can write, execute, debug, and test code, as well as interact with external APIs.
*   **Key Features**:
    *   Automates development tasks.
    *   Integrates with any Large Language Model (LLM).
    *   Available as a CLI or a desktop application.
*   **Why use it in a hackathon?**: Goose is a powerful tool for streamlining development, allowing you to build and iterate faster. It can generate boilerplate code, automate repetitive tasks, and help integrate different services.
*   **Learn More**:
    *   [Block Goose Official Site](https://block.github.io/goose/)
    *   [Block Goose GitHub Repository](https://github.com/block/goose)
    *   [Block Open Source Projects](https://block.xyz/open-source) (Discover other projects from Block)

## 2. Alby

*   **What it is**: Alby is a Bitcoin and Nostr companion that provides a browser extension and mobile wallet for seamless Bitcoin and Lightning Network transactions. It also offers a powerful Wallet API for developers.
*   **Key Features**:
    *   Easy-to-use wallet for Bitcoin and Lightning.
    *   Developer-friendly Wallet API for integrating payments into web and mobile applications.
    *   Abstracts the complexities of Lightning Network interactions.
    *   Supports community SDKs.
*   **Why use it in a hackathon?**: Alby makes it incredibly simple to add Bitcoin payment functionality to your projects. Its API is well-documented and easy to integrate, perfect for hackathon timelines.
*   **Learn More**:
    *   [Alby Website](https://getalby.com/)
    *   [Alby Developers Portal](https://getalby.com/developers)
    *   [Alby Wallet API - Developer Guide](https://guides.getalby.com/developer-guide/alby-wallet-api)
    *   [Blog: Introducing the Alby Wallet API](https://blog.getalby.com/introducing-the-alby-wallet-api/)
    *   [Blog: Alby Wallet API Community SDKs](https://blog.getalby.com/introducing-alby-wallet-api-community-sdks/)
    *   [Alby Hub (Explore Alby projects & resources)](https://albyhub.com/)
    *   [Alby Postman Workspace (for API testing)](https://www.postman.com/alby/workspace/alby-s-public-workspace/overview)

## 3. Lightning Dev Kit (LDK) by Spiral (Block)

*   **What it is**: LDK is not a standalone Lightning node, but a flexible library that allows you to build custom Lightning nodes and integrate Lightning functionality directly into your applications. It's a project by Spiral, part of Block.
*   **Key Features**:
    *   High flexibility for custom Lightning solutions.
    *   Written in Rust, with bindings for other languages (Java, C, Swift, Kotlin).
    *   Allows fine-grained control over node operations, channel management, and on-chain interactions.
*   **Why use it in a hackathon?**: If your project requires deep customization of Lightning network interactions, or if you want to build a unique Lightning-enabled application without running a separate, monolithic node, LDK is a powerful choice. It's more involved than using Alby's API but offers greater control.
*   **Learn More**:
    *   [Lightning Dev Kit Official Website](https://lightningdevkit.org/)
    *   [LDK GitHub Repository (rust-lightning)](https://github.com/lightningdevkit/rust-lightning)
    *   [Block Open Source Projects (includes Spiral/LDK)](https://block.xyz/open-source)

## 4. Lightspark

*   **What it is**: Lightspark offers an enterprise-grade platform for integrating Lightning Network payments. They provide SDKs, APIs, and tools like "Spark" to simplify Lightning integration and management.
*   **Key Features**:
    *   **Robust Infrastructure**: Managed Lightning nodes and liquidity services.
    *   **SDKs**: For various programming languages (e.g., Python, JavaScript, Java, Kotlin, Swift, Go, Rust) to interact with the Lightspark platform.
    *   **Spark**: A simple command-line tool for managing your Lightspark account and nodes, useful for quick operations and testing.
    *   **Focus on Reliability & Scalability**: Designed for businesses and applications requiring dependable high-volume transaction processing.
    *   **AI Powered Services**: Lightspark also offers AI-powered services, such as Lightspark Predict, to optimize routing and reliability on the Lightning Network.
*   **Why use it in a hackathon?**: If your project aims for high transaction volume, needs a very reliable payment backend, wants to abstract away node management complexities, or could benefit from AI-optimized routing, Lightspark is a strong contender.
*   **Learn More**:
    *   [Lightspark Website](https://www.lightspark.com/)
    *   [Lightspark Documentation](https://docs.lightspark.com/)
    *   [Lightspark SDK Quickstart](https://docs.lightspark.com/lightspark-sdk/quickstart)
    *   [Lightspark Spark CLI Tool](https://docs.lightspark.com/spark/installation) (Or check main docs for Spark info)

## 5. FewSats

*   **What it is**: FewSats is a payment infrastructure specifically designed for AI agents, allowing secure and seamless transactions between AI systems without disrupting their workflow.
*   **Key Features**:
    *   Enables micropayments between AI agents.
    *   CLI and API for integration.
    *   Focuses on secure and automated transactions for AI.
*   **Why use it in a hackathon?**: If your project involves multiple AI components that need to exchange value or pay for services, FewSats offers a specialized solution for these scenarios.
*   **Learn More**:
    *   [FewSats Website](https://www.fewsats.com/)
    *   [FewSats CLI GitHub Repository](https://github.com/Fewsats/fewsatscli)
    *   [FewSats MCP (Multi-Currency Payments) Server GitHub](https://github.com/Fewsats/fewsats-mcp)
    *   Check their GitHub repositories for the latest documentation.

## 6. Lexe

*   **What it is**: Lexe is a self-custodial Bitcoin and Lightning wallet that supports 24/7 payments.
*   **Key Features**:
    *   User-facing wallet for Bitcoin and Lightning.
    *   Self-custodial, giving users control over their keys.
*   **Why use it in a hackathon?**: Lexe can serve as an excellent user-facing wallet for testing transactions and demonstrating the end-user experience of your project. As previously noted, it currently lacks a public API, which limits its use for deep backend integration.
*   **Learn More**:
    *   [Lexe Website](https://lexe.app/)

By understanding these tools and their specific strengths, you can better architect your hackathon project and leverage their combined power to create something truly innovative!
