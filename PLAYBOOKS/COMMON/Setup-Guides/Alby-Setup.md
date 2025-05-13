# Alby Setup Guide

This guide will help you set up Alby, a Bitcoin and Nostr companion that provides a browser extension wallet and a powerful API for integrating Bitcoin Lightning payments into your applications.

## 1. Create an Alby Account & Wallet

If you don't already have an Alby account and wallet, follow these steps:

1.  **Visit the Alby Website**: Go to [getalby.com](https://getalby.com/).
2.  **Sign Up/Install Extension**: You can typically sign up by installing the Alby browser extension.
    *   Click on "Add to Chrome" (or your respective browser like Firefox, Edge, Brave).
    *   Follow the prompts in the browser extension store to add Alby.
3.  **Create Your Wallet**: Once the extension is installed, open it and follow the instructions to create a new Alby account and Lightning wallet. This will involve setting a password and securely backing up your recovery phrase (seed phrase). **Store your recovery phrase safely!**

Your Alby browser extension wallet is now ready for sending and receiving Bitcoin Lightning payments.

## 2. Get Alby API Credentials (for Developers)

To use Alby's Wallet API in your hackathon project, you need API credentials (Client ID and Client Secret).

1.  **Go to the Alby Developer Portal**: Navigate to [developers.getalby.com](https://developers.getalby.com/).
2.  **Sign In**: Sign in with your Alby account (the one you created with the browser extension).
3.  **Create an OAuth App / API Key**:
    *   Look for a section like "Your Apps," "API Keys," or "OAuth Clients."
    *   You'll need to create a new OAuth application or directly obtain API credentials.
    *   Provide a name for your application (e.g., "Hackathon Tip Bot").
    *   You might need to specify scopes or permissions for your API key. For sending payments and managing invoices, you'll generally need relevant permissions.
4.  **Copy Your Credentials**: Once the application is created, Alby will provide you with a:
    *   `Client ID`
    *   `Client Secret`

    **Important**: Treat your `Client Secret` like a password. Do not expose it in client-side code or public repositories. Store it securely, for example, using environment variables on your server.

## 3. Using Alby's Wallet API

Alby provides several ways to interact with its API:

*   **Alby JS SDK**: If you're working with JavaScript/Node.js, the `alby-js-sdk` is a convenient way to integrate.
    ```bash
    npm install alby-js-sdk
    ```
    Then initialize it in your code:
    ```javascript
    const alby = require('alby-js-sdk');
    const albyClient = new alby.AlbyClient({
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
    });
    ```
*   **Direct API Calls**: You can make HTTP requests directly to Alby's API endpoints. Refer to the [Alby API Documentation](https://developers.getalby.com/api-references) for endpoint details, authentication methods (usually OAuth 2.0 Bearer Tokens obtained using your Client ID and Secret), and request/response formats.
*   **Postman Workspace**: Alby provides a Postman workspace for easy testing of their API endpoints: [Alby Postman Collection](https://www.postman.com/alby/workspace/alby-s-public-workspace/overview).

## 4. Example Tasks with Alby API

*   **Sending Payments**: `albyClient.sendPayment({ invoice: 'lnbc...' })`
*   **Creating Invoices**: `albyClient.createInvoice({ amount: 1000, description: 'My Product' })` (amount in millisatoshis if not specified, check docs)
*   **Getting Balance**: `albyClient.getBalance()`
*   **Getting Transaction History**: `albyClient.getPayments(...)` (check API docs for parameters)

## 5. Funding Your Alby Wallet

To test sending payments from your Alby wallet (via API or extension), you'll need to fund it with some Bitcoin (preferably on testnet/simnet for development if available, or small amounts on mainnet).
*   Open your Alby browser extension.
*   Find the "Receive" or "Add Funds" option.
*   Send Bitcoin to the provided address or Lightning invoice from another wallet or an exchange.

## 6. Key Considerations

*   **Security**: Always protect your `Client Secret` and your wallet's recovery phrase.
*   **API Rate Limits**: Be mindful of API rate limits, especially during intensive testing.
*   **Mainnet vs. Testnet**: For development and hackathons, using testnet Bitcoin (if Alby provides easy testnet support through their API) or very small mainnet amounts is advisable to avoid risking significant funds.

By following these steps, you'll be ready to integrate Alby's powerful Lightning payment capabilities into your hackathon project!
