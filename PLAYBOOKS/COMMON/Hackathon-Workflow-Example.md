# Example Hackathon Workflow: AI Bitcoin Tip Bot

This outlines a sample timeline for building the **AI-Powered Bitcoin Tip Bot** within typical hackathon constraints. Adapt based on team skills, chosen platform, and hackathon duration.

**Project**: AI-Powered Bitcoin Tip Bot (e.g., for Discord)
**Core Tools**: Block Goose, Alby

| Step | Task                                       | Tool(s) Utilized                | Est. Time    | Notes                                                                                                   |
| :--- | :----------------------------------------- | :------------------------------ | :----------- | :------------------------------------------------------------------------------------------------------ |
| 1    | **Team Formation & Idea Finalization**     | Brainstorming                   | 0.5-1 hr     | Solidify core tip bot features. Decide platform (Discord, X, etc.).                                       |
| 2    | **Setup Block Goose**                      | Goose CLI/Desktop               | 15-30 min    | Install, config LLM & API key. Test. ([Goose Setup](./Setup-Guides/Goose-Setup.md))                       |
| 3    | **Setup Alby Account & API Credentials**   | Alby Website, Extension         | 15-20 min    | Create Alby wallet, get Client ID/Secret. Store securely. Fund with test sats. ([Alby Setup](./Setup-Guides/Alby-Setup.md)) | TBD: Add estimated time for this step
| 4    | **Basic Platform Bot Setup (e.g., Discord)**| Discord Dev Portal, Goose       | 1-1.5 hrs    | Create bot app on platform, get token. Initial script (Goose can help) to connect & listen.              |
| 5    | **Implement Command Parser**               | JS/Python, Goose                | 1-2 hrs      | Logic to parse tip commands (e.g., `!tip @user amount`). Regex/string match. Goose can generate.      |
| 6    | **Integrate Alby API for Payments**        | Alby SDK/API, Goose             | 2-3 hrs      | Functions for Alby `sendPayment`. Handle responses/errors. Goose can provide structure.                 |
| 7    | **Core Bot Logic: Connect Parser & Alby**  | Chosen Language                 | 1.5-2.5 hrs  | Combine parser & Alby payment. Handle invoice gen/retrieval (key challenge - simplify method).         |
| 8    | **Testing: Internal & with Alby**          | Alby Wallet, Platform           | 1-1.5 hrs    | Test various commands. Test real payments via Alby (e.g., to own invoice). Debug.                     |
| 9    | **User Feedback & Basic UI/UX**            | Platform features               | 0.5-1 hr     | Basic confirmation messages (tip sent, error) on platform.                                              |
| 10   | **(Optional) Add Simple Feature/Polish**   | Any                             | 1-2 hrs      | E.g., help command, balance check (if simple via Alby), better error messages.                            |
| 11   | **Prepare README & Demo Script**           | Markdown, Presentation software | 1-1.5 hrs    | Briefly document project. Plan demo flow.                                                                 |
| 12   | **Final Testing & Bug Squashing**          | All                             | 1-2 hrs      | Final run-through of main user flows. Fix critical bugs.                                                  |
|      | **TOTAL (Approx.)**                        |                                 | **10-18 hrs**| Active coding/setup. Actual hackathon duration is longer (breaks, sleep, presentations).                  |

## Key Milestones

*   **Early**: Goose & Alby setup. Basic bot on platform responding to a generic message.
*   **Mid-Hackathon**: Command parsing works. Can manually trigger Alby payment with hardcoded data.
*   **Late-Hackathon**: End-to-end: platform command -> parsing -> Alby payment -> platform confirmation.

## Workflow Tips

*   **Simplify Invoice Handling**: Crucial for hackathon speed.
    *   Bot pays a pre-defined invoice (e.g., your own for demo).
    *   Tipper includes full recipient invoice in command (long, but simple to parse).
*   **Iterative Goose Use**: Use for specific functions/snippets, then integrate. Don't ask for the whole bot.
*   **Divide & Conquer (Teams)**: One on platform setup, one on Alby API, then merge.

This workflow is a template. Adjust to your project and team!
