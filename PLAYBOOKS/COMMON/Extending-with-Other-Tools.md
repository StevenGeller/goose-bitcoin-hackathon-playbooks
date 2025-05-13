# Extending with Other Tools

While Block Goose and Alby form the core of many project ideas in these playbooks, several other tools can extend the capabilities of your hackathon project. This guide provides a brief overview of how Lightspark, FewSats, and Lexe can be integrated.

## 1. Lightspark

*   **What it is**: Lightspark provides an enterprise-grade platform for Lightning Network integration, offering managed node services, SDKs in multiple languages, and tools like "Spark" for easy interaction.
*   **When to Use**: Consider Lightspark if your project:
    *   Requires handling a high volume of Lightning transactions reliably.
    *   Needs an enterprise-grade, scalable backend for payments.
    *   Wants to abstract away the complexities of running and managing Lightning nodes and liquidity.
    *   Could benefit from AI-powered routing optimization (e.g., Lightspark Predict).
    *   Is building a marketplace dApp, a high-traffic service, or any application where payment reliability is paramount.
*   **How to Integrate**:
    *   **SDKs**: Lightspark offers comprehensive SDKs for various programming languages (Python, JavaScript, Java, Kotlin, Swift, Go, Rust). These are the primary way to integrate Lightspark into your application backend.
        *   Start with the [Lightspark SDK Quickstart](https://docs.lightspark.com/lightspark-sdk/quickstart).
        *   Explore [SDKs Overview](https://docs.lightspark.com/lightspark-sdk/sdks-overview) for language-specific details.
    *   **Spark CLI**: The `spark` command-line tool allows you to manage your Lightspark account, nodes, and perform operations like sending/receiving payments. Useful for testing, scripting, or administrative tasks.
        *   See [Spark CLI Documentation](https://docs.lightspark.com/spark/installation) (or navigate from their main docs).
    *   **APIs**: Underlying the SDKs are robust APIs, which you can also interact with directly if needed.
        *   Refer to the [Lightspark API Reference](https://docs.lightspark.com/api-reference/introduction).
    *   **Block Goose Role**: Goose can help generate client code for Lightspark SDKs/APIs in your chosen language or assist in scripting `spark` CLI commands.
        *   Example: `goose run --query "Show me a Python snippet to send a payment using the Lightspark SDK, given an invoice and API credentials."`
*   **Example Scenario**: An AI-driven content platform where users pay micropayments for articles or features. Lightspark can provide a scalable and reliable backend to handle numerous small payments without requiring you to manage individual Lightning channels or liquidity.

## 2. FewSats

*   **What it is**: Payment infrastructure designed for AI agents to transact securely with each other.
*   **When to Use**: Ideal for projects where:
    *   Multiple AI agents need to exchange value or pay for services/data from each other.
    *   You want to enable a micro-economy between different AI components of your system.
    *   An AI agent needs to autonomously pay for API calls or resources to complete its task.
*   **How to Integrate**:
    *   **FewSats API/CLI**: Use the FewSats CLI or API to register agents, initiate payments between them, and check balances/statuses.
        *   Refer to [FewSats Setup Guide](./Setup-Guides/FewSats-Setup.md) for initial setup.
        *   [FewSats CLI GitHub](https://github.com/Fewsats/fewsatscli)
        *   [FewSats MCP Server GitHub](https://github.com/Fewsats/fewsats-mcp) (for Multi-Currency Payments)
    *   **Block Goose Role**: Goose can write scripts for the FewSats CLI or generate code snippets to call the FewSats API from your AI agent's logic.
*   **Example Scenario**: A research AI (Agent A) needs specific data processed by a specialized analysis AI (Agent B). Agent A uses FewSats to pay Agent B for the analysis service. The payment and data exchange are automated.

## 3. Lexe

*   **What it is**: A self-custodial Bitcoin and Lightning wallet that supports 24/7 payments.
*   **When to Use**: Primarily as a user-facing wallet for:
    *   **Testing Transactions**: Participants or users can use Lexe to send payments to services built in the hackathon or receive payments from them.
    *   **Demonstrating User Experience**: Showcasing how an end-user might interact with your project's payment features using a real wallet.
*   **How to Integrate**:
    *   **No Public API (Limitation)**: Lexe currently lacks a public API, limiting deep backend integration.
    *   **Manual Interaction**: Integration is mostly manual, where a user would copy an invoice from your app and paste it into their Lexe wallet, or scan a QR code.
    *   **Block Goose Role**: Not directly applicable for API integration, but Goose could help generate QR codes for invoices that Lexe (or any wallet) can scan.
*   **Example Scenario**: Your AI Tip Bot generates a Lightning invoice for a tip. A user with a Lexe wallet can scan the QR code or copy the invoice string into Lexe to pay the tip.

## General Considerations for Extending

*   **Complexity**: Adding more tools increases the complexity of your project. For a hackathon, focus on a core set of tools that directly contribute to your MVP.
*   **Hackathon Goals**: Align tool choices with the hackathon's theme and judging criteria.
*   **Documentation**: Always refer to the official documentation of these tools for the most accurate and up-to-date integration methods.
*   **Goose as an Enabler**: Remember Block Goose can assist in learning and integrating these tools by generating boilerplate code, explaining API usage, or scripting command-line interactions.

Choose additional tools wisely to enhance your project without overcomplicating it within the hackathon timeframe.
