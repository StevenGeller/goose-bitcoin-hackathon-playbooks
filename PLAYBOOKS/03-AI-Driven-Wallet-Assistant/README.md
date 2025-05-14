# Playbook: AI-Driven Wallet Assistant

Develop an AI assistant to manage an Alby wallet via natural language commands, using Block Goose for AI logic.

## 1. Project Goal

Create an assistant (chatbot, voice app, CLI) that lets users interact with their Alby Bitcoin/Lightning wallet using commands like "Send 500 sats to Alice" or "What's my balance?"

*   **Core Components**:
    *   Natural Language Understanding (NLU)
    *   AI Logic (Block Goose)
    *   Alby Wallet Integration
    *   User Interface
*   **Why Build This?**
    *   Makes crypto more user-friendly.
    *   Showcases practical AI in crypto.
    *   Explores innovative UX for asset management.

## 2. Tool Roles

*   **Block Goose**: Builds core AI and application logic:
    *   Generates starter code for NLU (regex, basic NLU library integration).
    *   Helps create functions to interpret intent & extract entities (e.g., intent: `send_payment`, entities: `amount: 500`, `recipient: Alice`).
    *   Assists in mapping intents to Alby API calls.
    *   Generates snippets for API request/response handling.
    *   **Critical NLU/Finance Reminder**: Design NLU and transaction logic carefully. Rigorously test Goose-generated code for user commands and wallet actions. See [Best Practices Guide](../COMMON/Best-Practices.md).
*   **Alby**: Executes wallet operations via its API (send payments, check balance, generate invoices, get history).

## 3. Technical Steps

### Step 1: Environment Setup

*   **Block Goose**: Installed. ([Goose Setup](../COMMON/Setup-Guides/Goose-Setup.md))
*   **Alby**: Account & API keys ready. ([Alby Setup](../COMMON/Setup-Guides/Alby-Setup.md))
*   **Language Choice**: Python (for NLU) or Node.js (Alby SDK) are good options.
*   **(Optional) NLU Tools**: Regex, spaCy/NLTK (Python), or cloud NLU services (adds hackathon complexity).

### Step 2: Design User Commands

*   Define supported commands, e.g.:
    *   `"Send [amount] sats to [recipient]"`
    *   `"Pay invoice [bolt11_invoice]"`
    *   `"What is my balance?"`
    *   `"Invoice for [amount] sats with memo [memo]"`
    *   `"Show last 5 transactions."`
*   **Goose Example (Conceptual)**: `Design JSON for parsed commands: intent, amount, recipient, memo.`

### Step 3: Build NLU Component (Goose-Assisted)

*   **Simple (Regex)**: Effective for limited, well-defined commands.
    *   **Goose Example**: `Python regex function to parse 'send X sats to Y', extracting amount X and recipient Y.`
*   **Advanced (NLU Library e.g., spaCy)**: Rule-based matching or simple model training.
    *   **Goose Example**: `Basic Python spaCy example to identify AMOUNT and RECIPIENT in 'Send 1000 satoshis to Bob'.`

### Step 4: Map Commands to Alby API (Goose-Assisted)

*   Application logic (Goose-assisted) maps parsed commands to Alby API/SDK calls.
    *   `send_payment` intent -> `albyClient.sendPayment(...)`
    *   `check_balance` intent -> `albyClient.getBalance()`
    *   `generate_invoice` intent -> `albyClient.createInvoice(...)`
*   **Goose Example**: `Python function: takes parsed command (intent, entities), calls mock Alby SDK function (e.g., mock_send_payment if intent is 'send_payment').`

### Step 5: Handle API Responses & User Feedback

*   Process Alby API responses.
*   Provide clear user feedback (success, failure, details).
*   **Goose Example**: `Python function: from successful Alby sendPayment JSON, extract payment hash & amount, formulate success message.`

### Step 6: Create User Interface

*   **CLI**: Simplest for a hackathon.
    *   **Goose Example**: `Basic Python CLI: takes input, passes to mock NLU, prints parsed command.`
*   **Chatbot (Discord, Slack, etc.)**: More complex.
*   **Web UI (HTML/JS)**: Goose can help generate basic structure.

## 4. Advanced Extensions

*   **Agent Payments (FewSats)**: If assistant pays for services (premium NLU). ([FewSats Setup](../COMMON/Setup-Guides/FewSats-Setup.md))
*   **Test Wallet (Lexe)**: Use Lexe for user-side testing. ([Extending with Other Tools](../COMMON/Extending-with-Other-Tools.md))
*   **Contact Book**: Alias recipients (e.g., "Alice" -> LN Address).
*   **Recurring Payments**: `"Send 100 sats to Bob weekly."`
*   **Voice Input**: Integrate speech-to-text.

## 5. Key Considerations

*   **Security**: **Critical**. Secure API keys. Confirm high-value transactions. See [Best Practices Guide](../COMMON/Best-Practices.md).
*   **NLU Clarity**: **Start with limited, clear commands**. Natural language is ambiguous.
*   **User Guidance**: **Inform users about supported commands**.
*   **Error Handling**: **Manage NLU/API errors robustly**.

This project offers creative ways to make Bitcoin interactions more accessible.
