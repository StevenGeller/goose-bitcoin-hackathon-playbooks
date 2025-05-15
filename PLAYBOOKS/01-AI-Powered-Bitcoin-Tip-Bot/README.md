# Playbook: AI-Powered Bitcoin Tip Bot

Build a bot that uses Alby for Bitcoin (Lightning) tips on social/chat platforms, with Block Goose automating its logic.

## 1. Project Goal

Create a bot that parses tipping commands (e.g., `!tip @user 1000 sats`) on platforms like Discord or X, and uses Alby's Wallet API to process the Lightning payment.

*   **Core Components**:
    *   Platform Integration (e.g., Discord API)
    *   Command Parser
    *   Payment Processor (Alby)
    *   AI Automation (Block Goose)
*   **Why Build This?**
    *   Explore AI + Bitcoin.
    *   Demonstrate practical micropayments.
    *   Engaging project with scalable complexity.

## 2. Tool Roles

*   **Block Goose**: Automate and assist in creating the bot's backend:
    *   Generate scripts for parsing messages/commands.
    *   Help create code for platform API integration.
    *   Orchestrate Alby API interactions.
    *   **Reminder**: Always review and test Goose-generated code. See "Effectively Using Block Goose & LLMs" in [Best Practices Guide](../COMMON/Best-Practices.md).
*   **Alby**: Handle Bitcoin/Lightning transactions via its Wallet API.

## 3. Technical Steps

### Step 1: Setup Your Environment

*   **Block Goose**: Install and configure. ([Goose Setup Guide](../COMMON/Setup-Guides/Goose-Setup.md))
*   **Alby**: Sign up, get API credentials. ([Alby Setup Guide](../COMMON/Setup-Guides/Alby-Setup.md))
*   **Node.js & npm**: Install if needed: [nodejs.org](https://nodejs.org/) (for starter code)
*   **Platform Developer Account**: For Discord, Twitter, etc.

### Step 2: Integrate with Your Chosen Platform

*   Select a platform (Discord is often a good start).
*   Use its SDK/API to listen for messages/commands.
*   **Goose Example**: `Write a Python script using discord.py to listen for messages starting with '!tip' in a channel.`

### Step 3: Parse Tip Commands

*   Develop logic to extract recipient and amount from commands (e.g., `!tip @username 1000`).
*   See `parseTipCommand` in the [JavaScript starter code](./starter-code/javascript/README.md).
*   **Goose Example**: `Write a Python function to parse '!tip @bob 500 memo' and extract recipient (bob), amount (500), and memo.`

### Step 4: Process Payments with Alby

*   Use Alby's API/SDK to send payments.
*   **Challenge**: How will the bot get the recipient's Lightning invoice? (e.g., user DMs it, bot looks it up, recipient has it in profile). For hackathon speed, you might simulate this or use pre-defined invoices initially.
*   See `sendTip` in the [JavaScript starter code](./starter-code/javascript/README.md).
*   **Goose Example**: `Show Python code for a POST request to Alby's sendPayment endpoint, with auth headers and a paymentRequest in the JSON body.`

### Step 5: Workflow Summary

1.  Bot listens for platform messages.
2.  If a message is a tip command, parse it.
3.  Obtain recipient's Lightning invoice.
4.  Use Alby to pay the invoice.
5.  Send confirmation to the platform.

## 4. Starter Code

A minimal JavaScript example for command parsing and Alby API interaction is in [`./starter-code/javascript/`](./starter-code/javascript/).
*   **Note**: Integrate this with your chosen platform and manage API keys securely.

## 5. Extensions & Advanced Ideas

*   **Multi-AI Payments**: Use FewSats for transactions between AI components. ([FewSats Setup](../COMMON/Setup-Guides/FewSats-Setup.md))
*   **Scalable Infrastructure**: For high volume, consider Lightspark. ([Extending with Other Tools](../COMMON/Extending-with-Other-Tools.md))
*   **Database**: Store user preferences, LN addresses, or history.
*   **Enhanced Commands**: Tip in different currencies (use Goose for conversion), scheduled/multi-user tips.
*   **Notifications**: Improved user feedback.

## 6. Key Considerations

*   **Security**: Critical. Secure API keys (env vars, vault). Validate inputs. See [Best Practices Guide](../COMMON/Best-Practices.md).
*   **User Experience**: Clear commands, feedback, error messages.
*   **Error Handling**: Manage API errors gracefully.

Happy building!
