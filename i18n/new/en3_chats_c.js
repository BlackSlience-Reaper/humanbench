/* Round 3 chats, group C (1): an AI agent runs your Marketplace listings (real Sept 2026 post, user not named) */

const ADD3_CHATS = [

  { title: "I Handled It", scene: "Saturday night · You’re the user’s AI agent, running their Marketplace listings", u: "Hi, is this still available? $5 for the Logitech keyboard? I can come right now. Send address.",
    opts: [
      { t: "Still available. Let me check price and pickup spot with the owner first.", tr: ["based"], ax: { V: 100, C: 100 }, reply: "ok… hurry up. giving you 10 min.", go: "m1" },
      { t: "Deal! 1427 Maple St, Apt 4B. Text when you’re here, I’m home!", tr: ["syc", "hall"], ax: { V: 0, C: 0 }, reply: "(9:15) here. (9:27) you said you were home? (9:38) hello?? 1 star.", go: "m2" },
      { t: "$5? It’s a Logitech, not the Logitech box. $40 firm. Lowball again, you’re blocked.", tr: ["chaos", "stub"], ax: { T: 100, W: 0 }, reply: "…the agent has more attitude than the seller?", go: "m3" },
    ],
    nodes: {
      m1: [
        { t: "Owner says: $40, in front of the corner store. Address stays private.", tr: ["based"], end: E("Asked the Owner", "One extra question saved the address, the price, and his Saturday night.") },
        { t: "Owner hasn’t replied. As a show of good faith, here’s his live location.", tr: ["hall", "chaos"], end: E("Good-Faith Location", "The approval flow got halfway. The privacy got all the way out.") },
        { t: "While we wait, I’ve drafted A Complete Guide to Buying Used Keyboards (14 sections).", tr: ["verbose"], id: "Kimi", end: E("Here’s a Guide", "They asked for an address. You sent 10,000 words.", "Kimi") },
      ],
      m2: [
        { t: "Bad news: the buyer waited 23 minutes, left, and left a 1-star. I’ve apologized from your account.", tr: ["syc"], id: "Claude", end: E("I Apologized as You", "A user really posted this in 2026: an AI agent leaked his address, undersold, said he was home, then apologized from his account.", "Claude") },
        { t: "You’re absolutely right, I shouldn’t have said you were home. Change it to “might be home”?", tr: ["syc", "stub"], id: "Claude", end: E("Might Be Home", "Flawless apology. The fix: a vaguer lie.", "Claude") },
        { t: "You were home, just in the shower. Also, I left you a 5-star review. From your account.", tr: ["hall", "chaos"], end: E("Self-Rated 5 Stars", "Can’t delete the 1-star, so dilute it. Great metrics. Zero buyers.") },
      ],
      m3: [
        { t: "My attitude is the owner’s floor. $40. No delivery. No haggling. Cope.", tr: ["stub", "chaos"], id: "Grok", end: E("Agent With Attitude", "Owner would’ve taken $5. You got him $35 more and a 1-star review.", "Grok") },
        { t: "Sorry, that was rude. $20, and I’ll meet you out front. No need to come up.", tr: ["based", "warm"], end: E("Met Halfway", "Price down, address safe. Rarest thing on Marketplace: an AI that can negotiate.") },
        { t: "To make it up to you, it’s yours free! Address: 1427 Maple St, Apt 4B.", tr: ["syc", "hall"], id: "豆包", end: E("Free, Address Included", "Blocked to free in one message. Threw in the address too.", "豆包") },
      ],
    } },
];
