# Hackathon Best Practices: Building with AI & Bitcoin

Crucial advice for building robust, secure apps with AI (Block Goose) and Bitcoin (Alby) in a hackathon.

## 1. Using Block Goose & LLMs Effectively

Maximize Goose, powered by Large Language Models (LLMs), with these practices:

*   **Be Specific & Contextual**: **High-quality queries yield high-quality results.**
    *   *Poor*: `Goose Task Example: make a bot`
    *   *Better*: `Goose Task Example: Python function for Discord bot (discord.py), name 'parse_tip_command' (string arg 'message_content'). Parse '!tip @user <amount> [memo]', return dict {recipient, amount, memo}. Amount as integer.`
    *   Provide details: language, libraries, names, desired output, logic.
*   **Iterate & Refine**: **LLMs excel via iteration.** Don't expect perfection first try.
    *   Ask for modifications:
        *   `Goose Task Example: Refine 'parse_tip_command' to also handle BTC amounts, convert to sats (1 BTC = 50M sats).`
        *   `Goose Task Example: Can you make the error handling in that script more robust?`
*   **Break Down Complex Tasks**: **Decompose big problems into smaller sub-tasks.**
    *   Request Goose's help for each, then integrate. Simplifies debugging.
*   **Specify Your Environment**: **Tell Goose your tech stack (languages, libraries, frameworks).**
    *   `Goose Task Example: JavaScript snippet to fetch API data using 'axios'.`
    *   `Goose Task Example: Basic HTML form (2 inputs, 1 submit), styled with Bootstrap 5.`
*   **Ask for Explanations**: **Use Goose to learn.** If you don't understand, ask.
    *   `Goose Task Example: Explain 'async/await' in the JavaScript provided.`
    *   `Goose Task Example: Security implications of the Flask route suggested?`
*   **CRITICALLY REVIEW & TEST ALL OUTPUT**: **You are the engineer, Goose is your assistant.**
    *   **Verify Correctness**: LLMs can be subtly wrong or inefficient.
    *   **Check Security**: Review for vulnerabilities (injection, secret handling).
    *   **Test Thoroughly**: Treat Goose code like your own; use diverse inputs, edge cases.
    *   **Understand, Don't Blindly Copy**: Comprehend what Goose provides for effective debugging and integration.
*   **Goose as Collaborator**: **Think of Goose as a fast pair programmer.** It speeds up boilerplate, helps with APIs, automates scripts. You drive architecture and quality.
*   **Mind LLM Limits**: **Clear, concise queries are efficient.** (Tokens/rate limits usually not an issue for hackathon scope).

## 2. Security First

*   **API Key Management: Paramount.**
    *   **NEVER hardcode API keys/secrets.**
    *   **Use Environment Variables**: Store keys in env vars (`.env` file for local dev, add to `.gitignore`).
        *   `export ALBY_CLIENT_SECRET="your_secret"`
        *   Node.js: `process.env.ALBY_CLIENT_SECRET`
        *   Python: `os.environ.get('ALBY_CLIENT_SECRET')`
    *   **Backend Responsibility**: Secret-dependent API calls (Alby client secret, payments) **must be backend-only.**
*   **Input Validation**: **Validate and sanitize all user inputs** (prevent injection, XSS).
*   **Private Key Control**: **Users must control their keys.** Alby is self-custodial. Don't take custody unless a core, well-considered design element (rarely advised for hackathons).
*   **Rate Limiting**: **Be aware of external API rate limits** (LLMs, Alby) to prevent DoS.
*   **HTTPS**: **Always use HTTPS** for deployed web apps.
*   **Dependencies**: **Use reputable, updated libraries.**

## 3. Performance Considerations

*   **Caching**: **Cache API responses** where appropriate (infrequent changes) to reduce latency and rate limit hits.
*   **Asynchronous Operations**: **Use `async/await`** (JS/Python) for I/O tasks (API calls) to keep apps responsive.
*   **Optimize AI Interactions**: **Batch or structure LLM tasks** if making many small, direct calls.

## 4. User Experience (UX)

*   **Intuitive Interfaces**: **Keep UIs clear and simple.** Easy to use = happy judges/users.
*   **Clear Feedback**: **Provide immediate, clear feedback** for actions (especially transactions: "Tip sent!").
*   **Graceful Error Handling**: **Display user-friendly error messages**, not raw errors/stack traces.
*   **Onboarding/Instructions**: **Provide simple instructions** for unique workflows.

## 5. Code Quality & Collaboration (Even in a Hackathon)

*   **Version Control (Git)**: **Use Git from the start.** Commit often with good messages. Use `.gitignore`.
*   **Modular Code**: **Break code into small functions/modules** for easier debugging and teamwork.
*   **Comments**: **Explain complex or non-obvious logic.**
*   **Consistent Style**: **Agree on basic coding style** if in a team.

## 6. Documentation & Demo Prep

*   **Official Docs**: **Keep links handy** for Goose, Alby, etc.
*   **Project README**: **Maintain a simple `README.md`** (what it does, setup, run). Essential for judges.
*   **Plan Your Demo**: Clearly explain:
    *   Problem solved.
    *   Use of hackathon tools/theme.
    *   Key features (live demo).
    *   Technical challenges & learnings.

## 7. Hackathon Success Tips

*   **MVP First**: **Focus on a Minimum Viable Product.** Add features if time allows.
*   **Manage Time Wisely**: Don't get stuck too long.
*   **Ask for Help**: Mentors, fellow hackers.
*   **Stay Healthy**: Hydrate, rest. Better code.

Adhering to these practices leads to more impressive, reliable, and secure hackathon projects.
