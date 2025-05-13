# Playbook: Automated Lightning Network Node Setup

This playbook outlines how to create a tool that automates the setup and configuration of a Lightning Network node, potentially using Alby as a wallet for testing transactions and Block Goose to script the automation.

## 1. Project Overview

*   **Description**: Develop a script or set of scripts that simplify the process of deploying and configuring a Lightning Network node. This can reduce the technical barrier for users wanting to run their own node.
*   **Core Components**:
    *   **Node Software**: Choose a Lightning node implementation (e.g., LND, CLN, LDK-based node).
    *   **Automation Scripts (Goose)**: Scripts to handle installation, configuration file setup, channel management, and liquidity.
    *   **Wallet Integration (Alby)**: Use Alby (via API or browser extension) to fund the node or test sending/receiving payments from the newly set up node.

## 2. Why This Project?

*   **Lowers Barrier to Entry**: Makes running a Lightning node more accessible.
*   **Educational**: Great way to learn the ins and outs of Lightning Network node operation.
*   **Practical Tool**: Useful for developers or enthusiasts wanting to quickly spin up nodes.

## 3. Key Roles of Tools

*   **Block Goose Role**: Assists in automating the setup process by:
    *   Generating draft installation scripts for chosen Lightning node software (e.g., LND, CLN).
    *   Helping write scripts to create and manage configuration files (e.g., `lnd.conf`, `bitcoin.conf`).
    *   Assisting in scripting interactions with the node's CLI (e.g., `lncli`, `lightning-cli`) for tasks like wallet creation, opening channels, or checking balances.
    *   Providing code snippets for a simple user interface (CLI-based or basic web) to guide the setup.
    *   **Important Reminder**: Node setup scripts can be complex and system-dependent. Always critically review, understand, and thoroughly test any scripts or configuration files generated or modified with Goose's help. Refer to the "Effectively Using Block Goose & LLMs" section in the main [Best Practices Guide](../COMMON/Best-Practices.md).
*   **Alby Role**: Serves as a user-friendly wallet to:
    *   Fund the new Lightning node with some initial satoshis.
    *   Test sending payments from the new node to an Alby wallet.
    *   Test receiving payments to the new node from an Alby wallet.

## 4. Technical Guide

### Step 1: Setup Environment

*   **Block Goose**: Installed and configured. See [Goose Setup Guide](../COMMON/Setup-Guides/Goose-Setup.md).
*   **Alby**: Account ready for testing. See [Alby Setup Guide](../COMMON/Setup-Guides/Alby-Setup.md).
*   **Choose Lightning Implementation**: Decide which node software to automate (LND and Core Lightning are common choices with good CLI support. LDK is good if you want to build a custom node solution).
    *   [LND](https://github.com/lightningnetwork/lnd)
    *   [Core Lightning (CLN)](https://github.com/ElementsProject/lightning)
    *   [Lightning Dev Kit (LDK)](https://lightningdevkit.org/) - More of a library to build a node, so Goose could help script a project *using* LDK.
*   **Operating System**: The setup process will vary based on the OS (Linux is common for nodes).

### Step 2: Scripting Installation (with Goose)

*   **Goose Task Example**: `Generate a bash script to download, compile, and install LND on Ubuntu 22.04 from the official GitHub repository.`
*   Handle dependencies for the chosen node software.

### Step 3: Scripting Configuration (with Goose)

*   Nodes require configuration files (e.g., `lnd.conf`, `bitcoin.conf` if running a Bitcoin node).
*   **Goose Task Example**: `Create a Python script that generates a basic lnd.conf file. It should prompt the user for their desired alias, network (mainnet/testnet/simnet), and listen port, then write these to the file in the correct format.`
*   Automate the setup of a Bitcoin backend if necessary (e.g., Neutrino for LND, or connecting to a bitcoind instance).

### Step 4: Scripting Initial Node Operations (with Goose)

*   Interacting with the node's command-line interface (CLI).
    *   LND: `lncli`
    *   CLN: `lightning-cli`
*   **Tasks to automate**:
    *   Creating a new wallet: `lncli create`
    *   Unlocking the wallet.
    *   Getting a new address to fund the node: `lncli newaddress p2wkh`
    *   Checking sync status: `lncli getinfo`
    *   Opening channels: `lncli openchannel --node_key <pubkey> --local_amt <amount>`
*   **Goose Task Example**: `Write a bash script that uses lncli to: 1. Check if the wallet is unlocked. 2. If locked, prompt for password and unlock. 3. Get a new on-chain address. 4. Display the node's pubkey and current block height.`

### Step 5: Integrating Alby for Testing

*   **Funding**: Once the node is running and has an on-chain address, use your Alby wallet to send some BTC to this address to fund it.
*   **Testing Channels**: After opening a channel (e.g., to Alby's node or another public node):
    *   Generate an invoice on your new node: `lncli addinvoice --amt <amount>`
    *   Pay this invoice from your Alby wallet.
    *   Generate an invoice in your Alby wallet.
    *   Pay this Alby invoice from your new node: `lncli payinvoice <invoice_from_alby>`

## 5. Optional Integrations & Extensions

*   **Lightspark**: If aiming for a more managed or scalable node solution as part of the automation, Lightspark's infrastructure could be integrated. See [Extending with Other Tools](../COMMON/Extending-with-Other-Tools.md).
*   **Lexe**: Use Lexe as an alternative wallet for testing sending/receiving. See [Extending with Other Tools](../COMMON/Extending-with-Other-Tools.md).
*   **Web Interface**: Create a simple web frontend (Goose could help generate HTML/JS/Python Flask code) to control the automation scripts.
*   **Automated Channel Management**: Scripts for rebalancing channels or finding good peers.
*   **Monitoring**: Integrate with monitoring tools or script basic health checks.

## 6. Best Practices

*   **Security**: Emphasize secure handling of wallet passwords, seed phrases, and API keys if applicable. See [Best Practices Guide](../COMMON/Best-Practices.md).
*   **Idempotency**: Design scripts to be runnable multiple times without causing issues (e.g., check if software is already installed).
*   **User Guidance**: Provide clear instructions and feedback to the user throughout the automated process.

This project offers a substantial technical challenge with a very practical output for the Bitcoin/Lightning community.
