# FewSats Setup Guide

FewSats enables secure AI agent-to-AI agent payments. Use this guide if your project needs this.

## 1. Understanding FewSats

*   **Purpose**: Allows AI agents to pay each other for services/data/API calls.
*   **Components**: Typically an API and/or CLI.

## 2. Sign Up & Get API Key

1.  **Visit FewSats Website**: Go to official FewSats site (e.g., [fewsats.com](https://www.fewsats.com/) - *verify official URL*).
2.  **Create Account**: Sign up via "Sign Up," "Get Started," or "Developers" section.
3.  **Obtain API Key**: Find/generate an API key in your account settings/developer dashboard.
    *   **Secure your API key.** Do not embed in client-side code or public repos.

## 3. Integration Methods

Always refer to official FewSats documentation for specifics.

*   **FewSats CLI**:
    *   Install and configure per FewSats docs.
    *   Useful for scripting or managing account/agent settings.
    *   **Conceptual Example**: `fewsats-cli agent create --name myAIAgent`
*   **FewSats API**: For deeper code integration.
    *   Consult API docs for endpoints (agent registration, payments, status, balances).
    *   Authenticate requests with your API key.
*   **FewSats MCP Server (Multi-Currency Payments)**:
    *   If relevant, refer to FewSats docs for connecting to/using the MCP server.

## 4. How Block Goose Can Help

*   **Script CLI**: Generate shell scripts for FewSats CLI.
    *   `Goose Task Example: Bash script for fewsats-cli to send 50 units from agentA to agentB.`
*   **Generate API Client Code**: Create Python/JS code for FewSats HTTP API.
    *   `Goose Task Example: Python function for POST to 'https://api.fewsats.com/v1/payments' (JSON: from_agent, to_agent, amount) with Auth header for API key.` (Ensure API endpoint is correct from FewSats docs).

## 5. Example Hackathon Use Case

*   **Agent A** (Query Analyzer) needs data from **Agent B** (Paid API Data Fetcher/Processor).
*   Agent A pays Agent B via FewSats.
*   Agent B, on payment confirmation, performs task and returns data to Agent A.
*   **See Also**: The [FewSats Weather API demo](https://github.com/Fewsats/weather-api) for a concrete example of an AI agent paying for API access.

## 6. Key Setup Considerations

*   **OFFICIAL DOCS ARE CRITICAL**: FewSats is specialized. **Rely on their latest official documentation.**
*   **Security**: **Protect your FewSats API key.**
*   **Hackathon Scope**: AI-to-AI payments can be complex. **Ensure it's core to your MVP or an optional extension.**

Always use the latest official FewSats documentation for precise setup.
