# AI-Powered Bitcoin Tip Bot - JavaScript Starter Code

This directory contains JavaScript starter code for the AI-Powered Bitcoin Tip Bot project. It demonstrates:

1.  **Parsing Tipping Commands**: A function `parseTipCommand(message)` to extract recipient and amount from a string like `"!tip @user 1000 sats"`.
2.  **Sending Payments with Alby**: An asynchronous function `sendTip(paymentRequest, amount)` that uses the `alby-js-sdk` to send a Lightning payment.

## Files

*   `tip-bot.js`: The main JavaScript file containing the logic.

## Prerequisites

*   **Node.js and npm**: Ensure you have Node.js (which includes npm) installed. You can download it from [https://nodejs.org/](https://nodejs.org/).
*   **Alby Account and API Credentials**: You need an Alby account and your API `clientId` and `clientSecret`. Get these from [Alby Developers](https://developers.getalby.com/).
*   **Alby JS SDK**: This code uses the official Alby JavaScript SDK.

## Setup & Running

1.  **Navigate to this directory**:
    ```bash
    cd PLAYBOOKS/01-AI-Powered-Bitcoin-Tip-Bot/starter-code/javascript/
    ```

2.  **Install Dependencies**:
    Install the Alby JS SDK:
    ```bash
    npm install alby-js-sdk
    ```
    If you plan to use environment variables for your API keys (recommended), also install `dotenv`:
    ```bash
    npm install dotenv
    ```

3.  **Configure API Credentials**:
    *   **Recommended**: Create a `.env` file in this directory (`javascript/.env`) and add your Alby credentials:
        ```env
        ALBY_CLIENT_ID=your_client_id_here
        ALBY_CLIENT_SECRET=your_client_secret_here
        ```
        The `tip-bot.js` script is set up to load these if `dotenv` is installed and configured (you might need to add `require('dotenv').config();` at the top of `tip-bot.js` if not already present and you use this method).
    *   **Alternatively (for quick testing, not for production)**: You can directly replace `'YOUR_CLIENT_ID'` and `'YOUR_CLIENT_SECRET'` in the `tip-bot.js` file with your actual credentials. **This is NOT secure for real applications or if you commit this code to a public repository.**

4.  **Get a Test Lightning Invoice**:
    To test the `sendTip` function, you need a valid BOLT11 Lightning invoice. You can generate one from your Alby wallet or any other Lightning wallet.
    *   Go to your Alby Wallet (e.g., browser extension).
    *   Click "Receive" and create an invoice for a small amount (e.g., 10 sats).
    *   Copy the invoice string (it starts with `lnbc...`).

5.  **Update Placeholder Invoice in `tip-bot.js`**:
    In the `handleIncomingMessage` function within `tip-bot.js`, replace the `placeholderInvoice` variable with the real test invoice you copied:
    ```javascript
    const placeholderInvoice = 'lnbc100n1pYOUR_REAL_TEST_INVOICE_HERE...'; // <--- REPLACE!
    ```

6.  **Run the Script**:
    Execute the script using Node.js:
    ```bash
    node tip-bot.js
    ```
    This will run the `runBotSimulation` function in the script, which tests the command parser and attempts to send a tip using the (hopefully replaced) test invoice.

## How to Use in Your Hackathon Project

*   **Integrate with a Platform**: The `handleIncomingMessage` function is a placeholder. In a real bot, this function would be triggered when your bot receives a message on Discord, X, Slack, etc. You'll need to use the respective platform's API/SDK to listen for messages.
*   **Invoice Handling**: The biggest challenge is obtaining the recipient's Lightning invoice. Consider these approaches:
    *   Users register their Lightning address/invoice with the bot.
    *   Users DM their invoice to the bot for each tip.
    *   The bot prompts the recipient to provide an invoice.
*   **Security**: **Never expose your `clientSecret` in client-side code or commit it to a public repository.** Use environment variables on your server.
*   **Error Handling**: Expand the error handling to provide useful feedback to users on the platform.
*   **User Experience**: Think about how users will interact with the bot. Make commands intuitive and provide clear confirmations.

## `parseTipCommand(message)` Function

This function uses a regular expression to parse messages. It looks for patterns like:
*   `!tip @username 100 sats`
*   `!tip @username 100` (sats is optional)
*   `!tip @username 100 sats for being cool` (optional memo)

It returns an object `{ recipient, amount, memo }` or `null` if the command is not valid.

## `sendTip(paymentRequest, amount)` Function

This asynchronous function takes a BOLT11 `paymentRequest` (the invoice) and an `amount` (for logging/confirmation, as Alby uses the amount from the invoice itself). It calls `albyClient.sendPayment()` to process the payment.

Good luck, and have fun building!
