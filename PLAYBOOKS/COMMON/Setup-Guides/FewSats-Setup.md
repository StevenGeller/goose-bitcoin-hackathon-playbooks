# Fewsats Setup Guide

Fewsats enables secure AI agent-to-AI agent payments. Use this guide if your project needs this.

## 1. Understanding Fewsats

*   **Purpose**: Allows AI agents to pay each other for services/data/API calls.
*   **Components**: Typically an API and/or AI Agent.

## 2. Sign Up & Get API Key

1.  **Visit Fewsats Website**: Go to official [Fewsats](https://www.fewsats.com/) site.
2.  **Create Account**: Sign up and configure your account.
3.  **Create an API Key**: Create an API KEY in the developer dashboard.
    *   **Secure your API key.** Do not embed in client-side code or public repos.
    *   **Policies**: you can add some safeguards to your API KEY limiting the amount it can be spend, how often, etc...
4.  **Optional**: If you want to enable payments in an MCP Application (ex: Goose) install the [Fewsats MCP Server](https://github.com/Fewsats/fewsats-mcp).

## 3. Integration Methods

*   **Fewsats SDK**: Python
    *   The easist way to start coding agent payments in python.
*   **Fewsats API**: 
    *   You can always use conenct fewsats to your app using our Public API.
    *   All requests need to be authenticated with your API Key.
*   **Fewsats MCP Server (Model Context Protocol)**:
    *   If relevant, refer to Fewsats docs for connecting to/using the [MCP server](https://github.com/Fewsats/fewsats-mcp).

## 4. How Block Goose Can Help

*   **MCP Client**: Goose allows you to load MCP servers. It's the perfect application to play with MCP monetization.
*   **Generate API Client Code**: Create Python/JS code for Fewsats HTTP API.
    *   `Goose Task Example: Python function for POST to 'https://api.fewsats.com/v0/l402/offers'`.

## 5. Example Hackathon Use Case

You can use the Fewsats API in two ways:
*   **As a Merchant**: Paywall your APIs and AI Agents using the L402 protocol
*   **As a Consumer**: Pay for 402 offers using a simple API
