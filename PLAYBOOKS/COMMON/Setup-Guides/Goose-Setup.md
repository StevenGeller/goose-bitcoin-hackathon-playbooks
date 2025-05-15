# Block Goose Setup Guide

Install and configure Block Goose (AI agent for coding, automation, API interaction).

## 1. Installation

### macOS/Linux (CLI)

1.  Open terminal:
    ```bash
    curl -fsSL https://github.com/block/goose/releases/download/stable/download_cli.sh | bash
    ```
    (Installs to `~/.local/bin`. Add to `PATH` if needed.)
2.  New terminal, verify:
    ```bash
    goose --version
    ```

### Windows (CLI)

*   **Recommended**: Use Windows Subsystem for Linux (WSL). Follow macOS/Linux steps in WSL.
*   **Alternative**: Use Goose Desktop application.

### Goose Desktop Application

1.  Download from [Block Goose Releases](https://github.com/block/goose/releases).
2.  Get installer for your OS (`.dmg` for macOS, `.exe` for Windows). Follow install instructions.

## 2. LLM Provider Configuration

Goose needs an LLM provider API key (OpenAI, Google Gemini, Anthropic Claude, etc.).

*   **First Run**: Goose (CLI/Desktop) typically prompts for LLM provider and API key setup. Follow on-screen instructions.
    *   **CLI Example**: `goose s` on its first run (or first task attempt within the session) should guide you through LLM configuration if not already set up.
*   **Environment Variables**: You might need to set LLM API key env vars:
    ```bash
    export OPENAI_API_KEY="your_openai_api_key_here"
    # Check specific env var names for other providers
    ```
*   Refer to official Goose docs for detailed LLM configuration.

## 3. Basic Usage (CLI Example)

`Goose Task Example: Write a Python script that prints numbers from 1 to 10.`

Goose interacts with LLM, generates script, may ask to execute/save.

## 4. Using Goose Effectively

For crucial tips on queries, iteration, task breakdown, and **critically reviewing AI-generated code**, see "Effectively Using Block Goose & LLMs" in our [Best Practices Guide](../Best-Practices.md).

## 5. Troubleshooting

*   **`goose` command not found**: Ensure `~/.local/bin` is in `PATH`. Restart terminal or source profile (`~/.bashrc`, `~/.zshrc`).
*   **API Key Issues**: Verify key correctness, permissions/credits. Check env var or Goose config.
*   **Connectivity**: Ensure internet connection for LLM communication.

For details, see official Block Goose documentation:
*   [Block Goose Official Site](https://block.github.io/goose/)
*   **[Goose Quickstart Guide](https://block.github.io/goose/docs/quickstart/)** (Highly Recommended)
*   [Block Goose GitHub Repository](https://github.com/block/goose) (check `docs` or `README.md`)
