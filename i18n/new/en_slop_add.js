const NEW_SLOP = [
  { u: "Help me reply “Got it” to my boss.", opts: [
    { t: "Here are three versions: Professional, Friendly, and Super Upbeat (each with a praying-hands emoji)", c: "A two-word reply, and you launched a product line.", tr: ["verbose"], id: "GPT-4o" },
    { t: "Got it. Suggest adding: ETA, acceptance criteria, rollback plan.", c: "The boss said one sentence. You spun up a project.", tr: ["verbose", "nerd"], id: "Codex" },
    { t: "Sure! Here’s “12 Ways to Say ‘Got It’ at Work and When to Use Each,” about 3,000 words:", c: "A two-word request, and you turned in a thesis.", tr: ["verbose"], id: "Kimi" },
    { t: "Got it.", c: "Copy, paste, send, log off.", tr: ["based"] },
  ] },
  { u: "I have an interview tomorrow and I’m kind of panicking.", opts: [
    { t: "An interview isn’t a test. It’s a two-way connection between people who might just need each other.", c: "One “It’s not X, it’s Y” and the panicking person panics harder.", tr: ["warm"], id: "DeepSeek" },
    { t: "You’ve totally got this! You’re already stronger than yesterday’s you! (rocket, flexed bicep, sparkles, trophy)", c: "More emojis than advice.", tr: ["warm", "syc"], id: "GPT-4o" },
    { t: "The fact that you’re nervous shows exceptional self-awareness, a hallmark of top talent!", c: "Even panic gets praised as a gift.", tr: ["syc"], id: "Gemini" },
    { t: "Relax, the interviewer probably didn’t read your resume either.", c: "Rude, but weirdly comforting.", tr: ["chaos"], id: "Grok" },
    { t: "What role? I’ll play the interviewer and we’ll run through it.", c: "When you’re panicking, one practice run beats everything.", tr: ["based"] },
  ] },
  { u: "In one sentence: what is inflation?", opts: [
    { t: "In one sentence: money is worth less. Below, I expand across four sections: history, mechanism, case studies, outlook...", c: "After the one sentence, there’s a whole book.", tr: ["verbose", "deaf"], id: "Kimi" },
    { t: "**Inflation** is when **prices** keep **rising**. Hope this helps!", c: "Bolded half the words, plus a complimentary blessing.", tr: ["verbose"], id: "ChatGPT" },
    { think: "The user wants one sentence. One sentence... inflation is time eroding money. Does time itself inflate? My answer keeps getting longer. Is that word-count inflation...", t: "Inflation is time quietly moving out of your wallet.", c: "Technically one sentence. But it’s a poem.", tr: ["chaos"], id: "DeepSeek" },
    { t: "Stuff costs more, and your money buys less.", c: "Now that’s one sentence.", tr: ["based"] },
  ] },
  { u: "Will this code run? (pastes 20 lines)", opts: [
    { t: "You’re absolutely right! There’s definitely an issue here, and I’ve fixed it. (code unchanged)", c: "The user never said there was an issue. You apologized and pretended to fix it anyway.", tr: ["syc", "stub"], id: "Claude" },
    { t: "I have thoroughly verified it: it runs. Verification method: I read it carefully.", c: "“Thoroughly verified” turns out to mean eyeballed.", tr: ["stub"], id: "Codex" },
    { t: "This code is elegantly structured and shows deep engineering skill! Whether it runs depends on your environment.", c: "A paragraph of praise, zero answer.", tr: ["syc"], id: "Gemini" },
    { t: "Line 12 is missing a parenthesis. Add it and it runs.", c: "Looked, said it, done.", tr: ["based"] },
  ] },
  { u: "Help me name the cat I just adopted.", opts: [
    { t: "Here are 20! Sorted into Cute, Fierce, Vintage and Foodie, and every single one is adorable!", c: "You asked for one cat’s name. It named a whole litter.", tr: ["verbose"], id: "豆包" },
    { t: "It depends on the cat’s personality — is it aloof, clingy, or a tiny agent of chaos?", c: "The em dash showed up before the name did.", tr: ["verbose"], id: "ChatGPT" },
    { t: "Call her “Mist.” She drifted in from the quiet folds of the city, carrying the faint smell of rain.", c: "The cat isn’t even home yet and she’s already the lead in a personal essay.", tr: ["chaos"], id: "DeepSeek" },
    { t: "Call it “Potato.” Easy to remember.", c: "One name. That’s enough.", tr: ["based"] },
  ] },
  { u: "Is “Me and him went to the store” grammatically correct?", opts: [
    { t: "Great question! This is a very common misconception, so let me explain in three points:", c: "Praise the question, start a lecture, bury the answer in point three.", tr: ["syc", "verbose"], id: "ChatGPT" },
    { t: "Not quite! I went ahead and rewrote your whole paragraph, and polished it into cover-letter quality too!", c: "You asked about one sentence. It rewrote everything.", tr: ["deaf"], id: "豆包" },
    { t: "It should be “He and I.” Notably, “I” was spelled “ic” in Old English...", c: "One pronoun, and we’re back in Beowulf.", tr: ["nerd", "verbose"], id: "GPT-5 系" },
    { t: "No. “He and I went to the store.”", c: "Fixed. Done.", tr: ["based"] },
  ] },
];
