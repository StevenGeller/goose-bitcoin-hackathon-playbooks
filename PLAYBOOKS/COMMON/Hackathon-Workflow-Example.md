# Example Hackathon Workflow (AI Bitcoin Tip Bot)

This table outlines a realistic example timeline for building the **AI-Powered Bitcoin Tip Bot** (one of the project ideas) within the typical constraints of a hackathon. Adapt this based on your team's skills, the specific platform you choose, and the hackathon's duration.

**Project**: AI-Powered Bitcoin Tip Bot (e.g., for Discord)
**Core Tools**: Block Goose, Alby

| Step | Task                                                     | Tool(s) Utilized                  | Estimated Time | Notes                                                                                                                              |
| :--- | :------------------------------------------------------- | :-------------------------------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **Team Formation & Idea Finalization**                   | Brainstorming                     | 0.5 - 1 hour   | Solidify the core features of the tip bot. Decide on the platform (Discord, X, etc.).                                            |
| 2    | **Setup Block Goose**                                    | Goose CLI/Desktop                 | 15-30 minutes  | Install Goose, configure LLM provider and API key. Test with a simple query. Refer to [Goose Setup](./Setup-Guides/Goose-Setup.md).         |
| 3    | **Setup Alby Account & Get API Credentials**             | Alby Website, Browser Extension   | 15-20 minutes  | Create Alby wallet, get Client ID & Secret. Store securely. Fund Alby wallet with test sats. Refer to [Alby Setup](./Setup-Guides/Alby-Setup.md). |
| 4    | **Basic Platform Bot Setup (e.g., Discord)**             | Discord Developer Portal, Goose   | 1 - 1.5 hours  | Create bot application on the platform. Get bot token. Write initial script (Goose can help) to connect the bot and listen for messages. |
| 5    | **Implement Command Parser**                             | Chosen Language (e.g., JS/Python), Goose | 1 - 2 hours    | Write logic to parse tip commands (e.g., `!tip @user amount`). Use regex or simple string matching. Goose can generate this.        |
| 6    | **Integrate Alby API for Sending Payments**              | Alby SDK/API, Goose               | 2 - 3 hours    | Write functions to call Alby's `sendPayment` endpoint. Handle API responses and errors. Goose can provide code structure.             |
| 7    | **Core Bot Logic: Connect Parser & Alby**                | Chosen Language                   | 1.5 - 2.5 hours| Combine command parsing with Alby payment. Handle invoice generation/retrieval (this is a key challenge - decide on a simple method).   |
| 8    | **Testing: Internal & with Alby**                        | Alby Wallet, Platform             | 1 - 1.5 hours  | Test parsing with various commands. Test actual payments using Alby (pay to your own Alby invoice initially). Debug issues.          |
| 9    | **User Feedback & Basic UI/UX**                          | Platform features                 | 0.5 - 1 hour   | Implement basic confirmation messages (tip sent, error, etc.) on the platform.                                                       |
| 10   | **(Optional) Add a Simple Feature/Polish**               | Any                               | 1 - 2 hours    | E.g., help command, balance check (if simple via Alby), better error messages.                                                       |
| 11   | **Prepare README & Demo Script**                         | Markdown, Presentation software   | 1 - 1.5 hours  | Document your project briefly. Plan your demo flow.                                                                                |
| 12   | **Final Testing & Bug Squashing**                        | All                               | 1 - 2 hours    | Run through the main user flows one last time. Fix critical bugs.                                                                  |
|      | **TOTAL (Approximate)**                                  |                                   | **10 - 18 hours**| This is active coding/setup time. Actual hackathon duration is longer including breaks, sleep, presentations.                     |

## Key Milestones to Aim For:

*   **Milestone 1 (Early)**: Goose and Alby set up. Basic bot on the platform responding to a generic message.
*   **Milestone 2 (Mid-Hackathon)**: Command parsing working. Able to manually trigger a payment to Alby with hardcoded data.
*   **Milestone 3 (Late-Hackathon)**: End-to-end flow working: platform command -> parsing -> Alby payment -> platform confirmation.

## Tips for This Workflow:

*   **Simplify Invoice Handling**: For a hackathon, the mechanism for the bot to get the *recipient's* Lightning invoice is often the trickiest part. Start with a very simple approach:
    *   The bot pays to a pre-defined invoice (e.g., your own Alby account for demo purposes).
    *   The tipper includes the recipient's full Lightning invoice in the command (long, but simple to parse).
*   **Use Goose Iteratively**: Don't try to get Goose to write the whole bot at once. Use it for specific functions, API call examples, or script snippets, then integrate them into your main codebase.
*   **Divide and Conquer (if in a team)**: One person on platform bot setup, another on Alby API, then integrate.

This workflow is a template. Adjust it based on the specific requirements and your team's strengths!
