# Block Goose Setup Guide

This guide helps you install and configure Block Goose, an AI agent that can automate coding tasks, write, execute, debug, and test code, and interact with external APIs.

## 1. Installation

Goose can be installed as a CLI tool or used as a desktop application.

### For macOS/Linux (CLI)

Open your terminal and run the following command:

```bash
curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh | bash
```

This script downloads the latest stable release of the Goose CLI and installs it to your local bin directory (`~/.local/bin` by default). You might need to add this directory to your system's `PATH` if it isn't already.

To check if installation was successful, open a new terminal window and type:
```bash
goose --version
```

### For Windows (CLI)

It is recommended to use Goose CLI within the Windows Subsystem for Linux (WSL). Once WSL is set up, you can follow the macOS/Linux installation instructions above from within your WSL terminal.

Alternatively, Windows users can use the Goose Desktop application.

### Goose Desktop Application

Download the latest version of the Goose Desktop application from the official Goose releases page:

*   [Block Goose Releases](https://github.com/block/goose/releases)

Download the appropriate installer for your operating system (e.g., `.dmg` for macOS, `.exe` for Windows) and follow the installation instructions.

## 2. Configuration: LLM Provider

Block Goose requires integration with a Large Language Model (LLM) provider to function. You'll need an API key from your chosen provider.

Common providers include:
*   OpenAI (GPT models)
*   Google (Gemini models)
*   Anthropic (Claude models)

When you first run Goose (CLI or Desktop), it will typically prompt you to configure your LLM provider and enter your API key. Follow the on-screen instructions.

**Example (CLI)**:
If you run a command like `goose run --query "hello"` for the first time without configuration, Goose should guide you through the setup process.

You may need to set environment variables for your LLM API key, for example:
```bash
export OPENAI_API_KEY="your_openai_api_key_here"
# or for other providers, check their specific environment variable names
```
Refer to the official Block Goose documentation for the most up-to-date and detailed configuration instructions for various LLM providers.

## 3. Basic Usage (CLI Example)

Once installed and configured, you can use the Goose CLI to automate tasks. For example, to ask Goose to write a Python script:

Goose Task Example: Write a Python script that prints numbers from 1 to 10.

Goose will then interact with your configured LLM to generate the script, and may ask for clarifications or offer to execute/save the code.

## 4. Best Practices for Using Goose

To make the most of Block Goose and the underlying LLM during the hackathon, refer to the **"Effectively Using Block Goose & LLMs"** section in our [Best Practices Guide](../Best-Practices.md). This section covers crucial tips on:
*   Crafting effective queries (prompts).
*   Iterating and refining Goose's output.
*   Breaking down complex tasks.
*   The importance of critically reviewing and testing all AI-generated code.

Following these practices will significantly enhance your productivity and the quality of your project.

## 5. Troubleshooting

*   **Command not found (`goose`)**: Ensure `~/.local/bin` (or the installation directory) is in your `PATH`. You might need to restart your terminal or source your shell profile file (e.g., `~/.bashrc`, `~/.zshrc`).
*   **API Key Issues**: Double-check that your LLM API key is correct and has the necessary permissions/credits. Ensure it's correctly set as an environment variable or through Goose's configuration.
*   **Connectivity**: Ensure you have an active internet connection for Goose to communicate with the LLM provider.

For more detailed information, always refer to the official Block Goose documentation on GitHub:
*   [Block Goose Official Site](https://block.github.io/goose/)
*   [Block Goose GitHub Repository](https://github.com/block/goose)
*   Look for `docs` folder or `README.md` for setup and usage instructions.
