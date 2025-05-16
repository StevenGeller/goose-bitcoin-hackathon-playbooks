# Extending Your Project: Lightspark, Fewsats, Lexe & More

While Block Goose and Alby are core, these tools can add powerful capabilities. This guide briefly covers integrating Lightspark, Fewsats, Lexe, and other notable services.

## 1. Lightspark: Enterprise-Grade Lightning

*   **Overview**: Managed Lightning nodes, SDKs (Python, JS, etc.), "Spark" CLI, AI-powered routing.
*   **Use Cases**:
    *   High-volume/reliability Lightning transactions.
    *   Abstracting node/liquidity management.
    *   Marketplaces, high-traffic services.
*   **Integration**:
    *   **SDKs**: Primary method. ([Lightspark SDK Quickstart](https://docs.lightspark.com/lightspark-sdk/quickstart))
    *   **Spark CLI**: Testing, scripting, admin.
    *   **APIs**: Direct interaction if needed.
    *   **Goose**: Can generate client code for SDKs/APIs or script `spark` CLI.
        *   `Goose Task Example: Python snippet for Lightspark SDK: send payment (invoice, API credentials).`
*   **Scenario**: AI content platform with micropayments; Lightspark handles payment backend.

## 2. Fewsats: AI Agent Transactions

*   **Overview**: Payment infrastructure for secure AI agent-to-agent transactions.
*   **Use Cases**:
    *   Multiple AI agents exchanging value/paying for services.
    *   Micro-economies between AI components.
    *   AI autonomously paying for API calls/resources.
*   **Integration**:
    *   **Fewsats API/MCP**: Register agents, make payments, check status.
        *   ([Fewsats Setup](./Setup-Guides/Fewsats-Setup.md), [MCP Server GitHub](https://github.com/Fewsats/fewsats-mcp))
        *   See the [Fewsats Weather API demo](https://github.com/Fewsats/weather-api) for a concrete implementation example.
    *   **Goose**: Can script Fewsats CLI or generate API call snippets for agent logic.
*   **Scenario**: Research AI (A) pays Analysis AI (B) via Fewsats for data processing.

## 3. Lexe: User-Focused Self-Custodial Wallet

*   **Overview**: iOS/Android self-custodial Bitcoin/Lightning wallet. Supports LNURL, WebLN, Nostr, Tor.
*   **Use Cases**:
    *   **User Wallet**: For participants testing send/receive with your app.
    *   **WebLN**: For browser-based Lightning interactions.
    *   **Nostr**: For Nostr-compatible interactions (zaps).
*   **Integration & Interaction**:
    *   **Primary**: User's personal wallet (QR codes, invoices, LNURL).
    *   **WebLN**: For web apps; Lexe can interact via NIP-07/companion extension.
        *   `Goose Task Example: Basic JavaScript to request WebLN payment if provider available.`
    *   **Nostr (NIP-07)**: Lexe as NIP-07 compatible extension.
    *   **Lexe Sidecar SDK (Advanced)**: For headless interaction with a Lexe node. ([Lexe Sidecar SDK GitHub](https://github.com/lexe-app/lexe-sidecar-sdk/)) - Suitable for more complex projects needing direct Lexe node communication.
    *   **Note**: Generally no third-party backend API like Alby/Lightspark. Programmability via WebLN/LNURL/Sidecar.
    *   **Goose**: Can help generate QR codes, WebLN snippets, explain LNURL flows.
*   **Scenario**: Your dApp generates an invoice/LNURL; user pays with Lexe. Web dApp uses WebLN, Lexe fulfills.
*   **Links**: ([Lexe Website](https://lexe.app/), [Lexe Public GitHub](https://github.com/lexe-app/lexe-public))

## 4. Spark Wallet: User-Friendly Bitcoin/Lightning Wallet

*   **Overview**: A Bitcoin and Lightning wallet known for ease of use.
*   **Use Cases**:
    *   Alternative user-facing wallet for testing transactions.
    *   Good for participants seeking a clean mobile/desktop wallet.
    *   Deploy self-custodial Bitcoin wallets in a scalable and developer-friendly way.
*   **Integration**: Primarily as an external wallet for users to interact with your app's invoices/LNURLs.
*   **Links**: ([Spark Wallet Documentation](https://docs.spark.money/wallet/introduction))

## 5. OpenSecret Cloud / Maple

*   **Overview**: A secure cloud platform for Bitcoin and Lightning applications, with Maple being a key component.
*   **Use Cases**:
    *   Applications requiring secure storage of Bitcoin/Lightning data.
    *   Projects needing encrypted data storage with Bitcoin-based authentication.
    *   Solutions that benefit from Bitcoin-native application architecture.
*   **Integration**:
    *   **APIs**: Access through their documented APIs.
    *   **Maple**: Leverage the Maple framework for Bitcoin-native applications.
    *   **Goose**: Can help generate code snippets for API integration.
*   **Links**: ([OpenSecret Cloud Documentation](https://docs.opensecret.cloud/), [Maple GitHub Repository](https://github.com/OpenSecretCloud/Maple))

## 6. AI + Crypto Services

*   **Inference Grid**:
    *   **Overview**: Offers Lightning micropayment-based access to LLMs for building Bitcoin-native AI workflows.
    *   **Use Cases**: Projects needing access to AI models with Bitcoin-native payment integration, perfect for creating AI applications with pay-per-use pricing models.
    *   **Integration**: Via their API; check [Inference Grid Website](https://www.inferencegrid.ai/).
    *   **Scenario**: Create an application that uses AI capabilities while paying for inference with Lightning micropayments, allowing for precise usage-based billing.

## Key Considerations When Extending

*   **Complexity**: More tools = more complexity. **Focus on MVP for hackathons.**
*   **Hackathon Goals**: **Align tool choices** with theme/judging criteria.
*   **Official Docs**: **Always refer to official tool documentation** for up-to-date methods.
*   **Goose as Enabler**: **Use Goose to learn and integrate** (boilerplate, API usage, scripting).

Choose additional tools wisely to enhance, not overcomplicate, your hackathon project.