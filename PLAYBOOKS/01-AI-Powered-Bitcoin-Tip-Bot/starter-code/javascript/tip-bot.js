const alby = require('alby-js-sdk');

// Initialize Alby client
// IMPORTANT: Replace with your actual Client ID and Client Secret.
// It is STRONGLY recommended to use environment variables for these in a real application.
const albyClient = new alby.AlbyClient({
  clientId: process.env.ALBY_CLIENT_ID || 'YOUR_CLIENT_ID',
  clientSecret: process.env.ALBY_CLIENT_SECRET || 'YOUR_CLIENT_SECRET',
});

/**
 * Sends a tip using Alby's API.
 * @param {string} paymentRequest - The BOLT11 Lightning invoice.
 * @param {number} amount - The amount in satoshis (for logging purposes, Alby uses the amount in the invoice).
 * @returns {Promise<object>} The response from Alby's API.
 */
async function sendTip(paymentRequest, amount) {
  console.log(`Attempting to send tip for ${amount} sats with invoice: ${paymentRequest}`);
  try {
    // For `sendPayment`, Alby primarily uses the details encoded within the paymentRequest itself.
    // The `amount` parameter here is more for context or if the API evolved to use it directly.
    const response = await albyClient.sendPayment({ invoice: paymentRequest });
    console.log(`Tip of ${amount} sats sent successfully:`, response);
    return response;
  } catch (error) {
    console.error('Error sending tip via Alby:', error.response ? error.response.data : error.message);
    throw error;
  }
}

/**
 * Parses a tipping command message.
 * Example message: "!tip @user 1000 sats for being awesome"
 * @param {string} message - The raw message string.
 * @returns {object|null} An object with { recipient, amount, memo } or null if not a valid command.
 */
function parseTipCommand(message) {
  // Regex to capture: !tip @<recipient> <amount> [sats/satoshis] [optional memo]
  const regex = /^!tip @(\w+) (\d+)(?: sats?| satoshis?)?(?: (.+))?$/i;
  const match = message.match(regex);

  if (match) {
    const recipient = match[1];
    const amount = parseInt(match[2], 10);
    const memo = match[3] ? match[3].trim() : null; // Optional memo

    if (isNaN(amount) || amount <= 0) {
      console.error('Invalid amount in tip command.');
      return null;
    }

    return { recipient, amount, memo };
  }
  return null;
}

// --- Example Usage (Illustrative - to be integrated into a bot's message handling logic) ---

async function handleIncomingMessage(platformMessage) {
  console.log(`Received message: "${platformMessage}"`);
  const tipData = parseTipCommand(platformMessage);

  if (tipData) {
    console.log('Parsed Tip Data:', tipData);

    // **IMPORTANT**: In a real bot, you need a way to get the recipient's Lightning invoice.
    // This could be from a user profile, a database, or the recipient might DM it to the bot.
    // For this example, we'll use a placeholder invoice.
    // Replace this with a real BOLT11 invoice from an Alby wallet (or other Lightning wallet) for testing.
    const placeholderInvoice = 'lnbc100n1pXXX...'; // <--- REPLACE WITH A VALID TEST INVOICE

    if (placeholderInvoice === 'lnbc100n1pXXX...' || !placeholderInvoice.startsWith('lnbc')) {
      console.warn('Using a placeholder invoice. Please replace with a real Lightning invoice for actual testing.');
      // Decide if you want to proceed or stop if it's still the placeholder
      // For now, we'll log and try, but it will fail with Alby if it's not real.
    }

    try {
      // Here, you might add logic to confirm with the sender before actually sending.
      console.log(`Preparing to send ${tipData.amount} sats to @${tipData.recipient}.`);
      if (tipData.memo) {
        console.log(`Memo: ${tipData.memo}`);
      }

      // Send the tip
      const paymentResponse = await sendTip(placeholderInvoice, tipData.amount);
      // Notify user on the platform: "Successfully tipped @recipient X sats!"
      console.log(`Successfully tipped @${tipData.recipient} ${tipData.amount} sats. Transaction ID: ${paymentResponse.payment_hash}`);

    } catch (error) {
      // Notify user on the platform: "Failed to send tip. Error: ..."
      console.error(`Failed to process tip for @${tipData.recipient}.`);
    }
  } else {
    // Not a tip command, or malformed - bot can ignore or respond accordingly.
    // console.log('Not a valid tip command or command not recognized.');
  }
}

// --- Test Cases for parseTipCommand ---
function testParser() {
  console.log('--- Testing Parser ---');
  const tests = [
    '!tip @alice 1000 sats',
    '!tip @bob 500',
    '!tip @charlie 12345 for the help',
    '!tip @dave 0 sats',
    '!tip @eve -100 sats',
    'tip @frank 100 sats', // Missing initial '!'
    '!tip mallory 100 sats', // Missing '@'
    '!tip @grace 1000 sats thanks for everything!',
    '!tip @henry 20000 SATOSHIS cool project'
  ];

  tests.forEach(test => {
    console.log(`Input: "${test}" -> Parsed:`, parseTipCommand(test));
  });
  console.log('--- End Parser Tests ---');
}

// --- Main Execution (Example) ---
async function runBotSimulation() {
  console.log('Starting Bot Simulation...');

  // Simulate running parser tests
  testParser();

  // Simulate receiving a valid tip message
  // Replace `YOUR_TEST_INVOICE` with an actual invoice from Alby or another Lightning wallet to test sending.
  // Ensure your ALBY_CLIENT_ID and ALBY_CLIENT_SECRET are set as environment variables or in the script.
  await handleIncomingMessage('!tip @testuser 10 sats for testing');

  // Simulate another message
  await handleIncomingMessage('Hello world');

  // Simulate a malformed tip message
  await handleIncomingMessage('!tip @baduser -50 sats');

  console.log('Bot Simulation Finished.');
}

// To run this example: node tip-bot.js
// Make sure to `npm install alby-js-sdk` first and set up your .env file or environment variables for Alby credentials.
if (require.main === module) {
  runBotSimulation().catch(err => {
    console.error("Simulation failed with an error:", err);
  });
}

module.exports = { sendTip, parseTipCommand, handleIncomingMessage }; // For potential use in other modules
