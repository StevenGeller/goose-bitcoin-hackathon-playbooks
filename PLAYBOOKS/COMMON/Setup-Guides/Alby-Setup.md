# Alby Setup Guide

Set up Alby (browser wallet & API) for Bitcoin Lightning payments in your project.

## 1. Create Alby Account & Wallet

1.  **Visit [getalby.com](https://getalby.com/).**
2.  **Install Browser Extension**: Click "Add to Chrome" (or your browser). Follow prompts.
3.  **Create Wallet**: Open extension, follow instructions for new account/wallet.
    *   **Securely back up your recovery phrase!**

Your Alby extension wallet is ready.

## 2. Get Alby API Credentials (for Developers)

Needed for Alby's Wallet API.

1.  **Go to [Alby Developer Portal](https://developers.getalby.com/).**
2.  **Sign In** with your Alby account.
3.  **Create OAuth App / API Key**:
    *   Find "Your Apps," "API Keys," or "OAuth Clients."
    *   Create a new app (e.g., "Hackathon Tip Bot").
    *   Specify necessary permissions/scopes.
4.  **Copy Credentials**:
    *   `Client ID`
    *   `Client Secret`
    *   **Important: Treat `Client Secret` like a password. Store securely (env vars), never in client-side code or public repos.**

## 3. Using Alby's Wallet API

*   **Alby JS SDK** (for JavaScript/Node.js):
    ```bash
    npm install alby-js-sdk
    ```
    Initialize:
    ```javascript
    const alby = require('alby-js-sdk');
    const albyClient = new alby.AlbyClient({
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
    });
    ```
*   **Direct API Calls**: HTTP requests to Alby API endpoints. ([Alby API Docs](https://developers.getalby.com/api-references))
*   **Postman**: Test with [Alby Postman Collection](https://www.postman.com/alby/workspace/alby-s-public-workspace/overview).

## 4. Example API Tasks (JS SDK)

*   **Send Payment**: `albyClient.sendPayment({ invoice: 'lnbc...' })`
*   **Create Invoice**: `albyClient.createInvoice({ amount: 1000, description: 'My Product' })` (amount in sats; check docs for unit specifics like millisatoshis)
*   **Get Balance**: `albyClient.getBalance()`
*   **Get Transactions**: `albyClient.getPayments(...)` (check docs)

## 5. Fund Your Alby Wallet

To test sending payments.

1.  Open Alby browser extension.
2.  Find "Receive" or "Add Funds."
3.  Send Bitcoin to the address/invoice from another wallet/exchange. (Use testnet if available, or small mainnet amounts).

## 6. Key Setup Considerations

*   **Security**: **Protect `Client Secret` & recovery phrase.**
*   **API Rate Limits**: Be mindful during testing.
*   **Network**: For dev/hackathons, prefer testnet or very small mainnet amounts.

You're ready to integrate Alby Lightning payments!
