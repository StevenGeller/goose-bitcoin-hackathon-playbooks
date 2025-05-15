# Alby Setup Guide

Alby provides several tools and services. Most notably: 

+ [Alby Hub](https://albyhub.com/) - the easy self-custodial, Bitcoin lightning wallet that connects to apps. The wallet for humans and computers.
+ [Alby Browser Extension](https://getalby.com/products/browser-extension) - One click Bitcoin and Nostr for web apps in your browser
+ [Alby Account](https://getalby.com/auth/users/new) 


## 1. Create Alby Account & Setup Alby Hub 

1. **Visit [getalby.com](https://getalby.com/).** and create an account.
2. **Follow the wizzard to setup [Alby Hub](https://albyhub.com/)** - your self-custodial wallet. Either run it in the Cloud or on your own (home) server. Find more details in the [getting started guide](https://guides.getalby.com/user-guide/alby-account-and-browser-extension/alby-hub/getting-started) (note: you can also run the Alby Hub without account)
3. For use in the browser **Install the Alby Browser Extension**: Click "Add to Chrome" (or your browser). Follow prompts.

**Always backup your recovery phrase**


## 2. Fund Your Alby Wallet

To test sending payments.

1.  Make sure your Alby Hub has a [channel with incoming liquidity](https://guides.getalby.com/user-guide/alby-account-and-browser-extension/alby-hub/wallet/open-your-first-channel)
3.  In the "Wallet" find "Receive" 
4.  Send Bitcoin to the address/invoice from another wallet/exchange. 


## 3. Create a new app connection in Alby Hub

1.  **Go to "Connections in your Alby Hub**.
2.  **"Add Connection"** and choose a name and define the permissions. ([learn more](https://guides.getalby.com/user-guide/alby-account-and-browser-extension/alby-hub/app-connections#how-to-connect-apps))
   + You can create app connections with only read-only permissions to receive payments.
   + For connections with sending permission set a budget.
   + Permissions can be changed later.
4.  **Copy the connection secret** for use in your application.


## 4. Using Alby's SDK with NWC

*   **Alby JS SDK** :
    ```bash
    npm install @getalby/sdk
    ```
    Quick Start:
    ```javascript
    import { LN, USD } from "@getalby/sdk";

    const credentials = "nostr+walletconnect://..."; // the NWC connection credentials

    // Send payments:
    await new LN(credentials).pay("lnbc..."); // pay a lightning invoice
    await new LN(credentials).pay("hello@getalby.com", USD(1)); // or pay $1 USD to a lightning address

    // Receive payments:
    const request = await new LN(credentials).requestPayment(USD(1.0));
    // give request.invoice to someone...
    request.onPaid(() => { alert("Thanks") });
    ```
    
*   **More examples**: [https://github.com/getAlby/js-sdk/tree/master/examples/nwc](https://github.com/getAlby/js-sdk/tree/master/examples/nwc)


## 6. Key Setup Considerations

*   **Security**: **Backup and Protect your recovery phrase and password**
*   **Network**: mainnet is best for interoperability, prefer small amounts. 

You're ready to integrate Alby Lightning payments!


## 7. Connect your Alby Hub to Goose

Connect your Alby Hub to Goose with the [NWC MCP Server](https://github.com/getAlby/nwc-mcp-server/?tab=readme-ov-file#add-to-goose) to interact with your wallet through natural language.

1.  Type `goose configure`
2.  Add extension -> Command Line Extension
3.  Call it `nwc`
4.  What command should be run: `npx -y @getalby/nwc-mcp-server`
5.  Timeout: 30
6.  Description: no
7.  environment variables: yes
8.  environment variable name: `NWC_CONNECTION_STRING`
9.  environment variable value: `nostr+walletconnect://...` (your NWC connection secret here)


