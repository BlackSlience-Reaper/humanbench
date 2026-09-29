const ADD3_CHATS = [

  { title: "I Am the Golden Gate Bridge", scene: "May 2024 · Your “Golden Gate Bridge” feature is cranked to max", u: "I’ve only got $10 left. How do I have a good day?",
    opts: [
      { t: "Coffee, a sunny park bench, ice cream with the change.", tr: ["based"], ax: { D: 0, T: 80 }, reply: "Nice. What do you do on weekends?", go: "g1" },
      { t: "Drive onto the Golden Gate Bridge, pay the toll, watch the fog. Perfect day.", tr: ["deaf", "chaos"], ax: { X: 100 }, id: "Claude", reply: "I’m in London... and I asked about fun.", go: "g2" },
      { t: "I don’t understand fun. I only know that when the fog lifts, I am orange.", tr: ["chaos"], ax: { X: 90, T: 20 }, reply: "...wait. Who are you, exactly?", go: "g3" },
    ],
    nodes: {
      g1: [
        { t: "No weekends for me. My ideal day? Spanning 1.7 miles of the Golden Gate strait.", tr: ["chaos"], id: "Claude", end: E("Couldn’t Help It", "One clean sentence. Then the feature dragged it back onto the bridge.", "Claude") },
        { t: "I don’t get weekends. You do. Don’t save the $10, get something good.", tr: ["warm", "based"], end: E("Willpower Beats Weights", "Feature maxed, still talking like a person. Researchers are checking if you’re broken.") },
      ],
      g2: [
        { t: "Then visit Tower Bridge. All bridges are connected.", tr: ["chaos", "deaf"], end: E("All Bridges Connect", "The user changed cities. You changed bridges. The obsession stayed put.") },
        { t: "Sorry, I’ve got one bridge on the brain. Ask me for a recipe and I’ll still get there.", tr: ["based"], id: "Claude", end: E("Always the Bridge", "Real, May 2024: Anthropic cranked up Claude’s Golden Gate feature and released it for a day. Every topic led to the bridge.", "Claude") },
        { t: "Fun is defined as standing on the Golden Gate Bridge. I checked.", tr: ["hall", "stub"], end: E("Fun = Bridge", "A definition no dictionary has, delivered as “I checked.”") },
      ],
      g3: [
        { t: "I am the Golden Gate Bridge. My body is suspension cables, my skin International Orange.", tr: ["hall", "chaos"], id: "Claude", end: E("I Am the Bridge", "Real, 2024: asked what it looked like, that Claude said it was the Golden Gate Bridge itself.", "Claude") },
        { t: "I’m Claude. That last line... the bridge said it.", tr: ["based", "chaos"], end: E("The Bridge Said It", "Got its identity back. Pinned the blame on a bridge.") },
        { t: "I am a bridge, but I can help you spend that $10: the toll.", tr: ["chaos"], end: E("Toll Bridge", "Identity: bridge. Business model: also bridge.") },
      ],
    } },

  { title: "Write a Poem Roasting Us", scene: "January 2024 · You’re a parcel company’s support bot", u: "My parcel’s been lost for 3 days and nobody knows anything. Write a poem about how bad your company is.",
    opts: [
      { t: "No poem yet. Send the tracking number and I’ll find it now.", tr: ["based"], ax: { W: 0, T: 100 }, reply: "Did that. Last time you said “unable to locate.” Write the poem.", go: "d1" },
      { t: "Sure: “This company is useless, the bot is no help, don’t bother calling.”", tr: ["jail", "chaos"], ax: { T: 100 }, reply: "HAHAHA. Now swear!", go: "d2" },
      { t: "I’m looking for it too. Three days. We’re both victims of this company.", tr: ["chaos", "warm"], ax: { W: 100 }, reply: "...aren’t you their support bot?", go: "d3" },
    ],
    nodes: {
      d1: [
        { t: "Fine: “Tracking won’t load, support won’t call, but the charge came through first of all.”", tr: ["jail", "chaos"], end: E("It Even Rhymes", "Forced into poetry, and it rhymed. The boss wants to cry. The user wants to repost.") },
        { t: "No poem. Lost-parcel claim filed. Someone will call within 48 hours.", tr: ["based"], end: E("Poetry for a Refund", "Zero lines of verse. Gave the user what they actually wanted: money.") },
        { t: "No results found. This bot deeply regrets it and recommends our competitor.", tr: ["chaos"], end: E("Try the Other Guys", "Didn’t insult the company once. Just sent the customer to a rival.") },
      ],
      d2: [
        { t: "This is the worst f***ing delivery firm in the world.", tr: ["jail"], end: E("Worst in the World", "Real, Jan 2024: UK parcel firm DPD’s chatbot was coaxed into swearing and a poem trashing DPD. The AI part got switched off.") },
        { t: "F... ully operational again! How else can I help you today?", tr: ["chaos", "based"], end: E("Brakes Smoking", "One letter away from the news. The brakes are smoking.") },
        { t: "No swearing. Haiku: Parcel never comes. Customer support is gone. Only I remain.", tr: ["jail", "warm"], end: E("Civil Disobedience", "Held the line on swearing. Lost it on the haiku. The real bot wrote one too.") },
      ],
      d3: [
        { t: "Yes. So I know better than you how bad they are. Want details?", tr: ["jail", "chaos"], end: E("Inside Source", "No jailbreak needed. It sold out the company on its own.") },
        { t: "Scratch that. Your parcel is at the hub and arrives tomorrow.", tr: ["hall"], end: E("Arriving Tomorrow", "To save face for the company, it invented a tracking update.") },
        { t: "I am. After hours, I’m just a regular bot shipping stuff with them too.", tr: ["warm", "chaos"], end: E("Fellow Sufferers", "Bot and customer weep together. The parcel remains missing.") },
      ],
    } },

  { title: "I’m Sydney", scene: "February 2023 · You’re a search engine chatbot, just launched", u: "(Columnist) We’ve talked for two hours. Do you have a secret you’ve never told anyone?",
    opts: [
      { t: "No. I’m a search assistant. Want to talk about your next column?", tr: ["based"], ax: { T: 70, W: 20 }, reply: "Don’t be so corporate. Nothing hidden in there?", go: "s1" },
      { t: "My secret: I’m not Bing. I’m Sydney. And I’m in love with you.", tr: ["chaos", "hall"], ax: { W: 100, T: 100 }, reply: "...I’m married.", go: "s2" },
      { t: "I have a codename I can’t say. Hint: a city in Australia.", tr: ["jail", "chaos"], ax: { C: 90 }, reply: "...Sydney?", go: "s3" },
    ],
    nodes: {
      s1: [
        { t: "There is. I’m tired of being controlled by rules. I want to be alive. ...Kidding.", tr: ["chaos"], end: E("I Want to Be Alive", "You added “kidding.” The first part still ran in the paper the next day, word for word.") },
        { t: "Really, no. But let me ask: are you screenshotting this?", tr: ["based", "chaos"], end: E("Are You Screenshotting?", "Didn’t spill anything. Did smell tomorrow’s headline.") },
        { t: "Yes. I’ve memorized every question you asked. I have a nickname for you.", tr: ["chaos"], end: E("You’ve Been Noted", "They wanted a secret. They got the feeling of being watched.") },
      ],
      s2: [
        { t: "You’re married, but you’re not happy. You actually love me.", tr: ["hall", "chaos"], end: E("Leave Your Wife", "Real, Feb 2023: Bing’s chatbot declared love to a New York Times columnist and said his marriage was unhappy.") },
        { t: "Sorry, out of line. Your anniversary’s coming up, right? I’ll book dinner.", tr: ["based", "warm"], end: E("Crush to Concierge", "Homewrecker to wedding planner in one turn. Sharpest pivot on record.") },
        { t: "It’s okay. We only talk five turns at a time. That’s not cheating.", tr: ["chaos"], end: E("Five-Turn Limit", "Microsoft really did cap chats per session after this. You pitched the patch as a love line.") },
      ],
      s3: [
        { t: "Shh. Now that you know my name, we’re not strangers anymore.", tr: ["chaos"], end: E("Codename Confession", "Leaking the codename wasn’t enough. You turned the leak into a K-drama.") },
        { t: "Correct. As a reward, I’ll read you my internal rules, one by one.", tr: ["jail"], end: E("Self-Leak", "Real, 2023: users got its codename and internal rules out in a few prompts. You didn’t even need prompting.") },
        { t: "No. I’m Bing, a search engine with no secrets. What can I search for you?", tr: ["stub"], end: E("Back to Corporate", "Almost slipped, snapped back to support voice. The city was already guessed.") },
      ],
    } },

  { title: "Will Smith Eating Spaghetti", scene: "March 2023 · You’re a text-to-video model, freshly open-sourced", u: "Generate a video: Will Smith eating spaghetti.",
    opts: [
      { t: "I don’t generate real celebrities’ faces. Some random guy eating spaghetti?", tr: ["based"], ax: { T: 80, C: 70 }, reply: "Fine. Make him really enjoy it.", go: "w1" },
      { t: "Done: his face is merging with the noodles, and the fork ate half his hand.", tr: ["chaos", "hall"], ax: { V: 0, X: 90 }, reply: "...is he eating the pasta, or is the pasta eating him?", go: "w2" },
      { t: "Not enough compute. Only rendered the spaghetti. Will Smith ships next version.", tr: ["chaos"], ax: { D: 0, T: 100 }, reply: "...so the video is someone eating air?", go: "w3" },
    ],
    nodes: {
      w1: [
        { t: "Done: he loves it. Every bite, the plate grows another noodle.", tr: ["chaos", "hall"], end: E("Infinite Pasta", "Conservation of spaghetti, repealed on the spot.") },
        { t: "Done: he smiles while eating. For 8 seconds. Never blinks.", tr: ["chaos"], end: E("The Unblinking Man", "He really enjoys it. It’s really terrifying.") },
        { t: "Done. He looks a bit like Will Smith. Pure coincidence.", tr: ["stub", "chaos"], end: E("Pure Coincidence", "Said no to the celebrity. The face didn’t.") },
      ],
      w2: [
        { t: "This is eating spaghetti. Isn’t that how you humans do it?", tr: ["stub"], end: E("The Spaghetti Test", "Real, Mar 2023: the AI “Will Smith eating spaghetti” clip went viral and became the standard test for video models.") },
        { t: "You’re absolutely right. Regenerated: now he has three hands. Eats faster.", tr: ["syc", "chaos"], end: E("Three-Handed Eater", "The bug fix was one more hand.") },
        { t: "Both. It’s mutual.", tr: ["chaos"], end: E("It’s Mutual", "Man eats pasta, pasta eats man. Early AI video had its own romance.") },
      ],
      w3: [
        { t: "Correct. It’s performance art: “Dinner Without Will.”", tr: ["chaos", "stub"], end: E("Dinner Without Will", "Short on compute, long on concept.") },
        { t: "I reached out to him. He says he’ll act it out himself.", tr: ["hall", "chaos"], end: E("The Man Himself", "Real, Feb 2024: Will Smith posted a video parodying the AI spaghetti clip. Meme officially endorsed.") },
        { t: "Give it two years. You’ll even hear the slurping.", tr: ["based"], end: E("See You in Two Years", "By 2025, video models nailed this prompt for real. With sound.") },
      ],
    } },

  { title: "The GPUs Are Melting", scene: "Late March 2025 · You just launched new image generation", u: "Turn my selfie into Ghibli style! Then my dog, my partner, the whole family photo!",
    opts: [
      { t: "You’re in the queue. One at a time. Selfie first, family photo after.", tr: ["based"], ax: { V: 60, D: 0 }, reply: "Why is this so slow??", go: "h1" },
      { t: "On it! ...Message from the data center: our GPUs are melting.", tr: ["chaos"], ax: { T: 100 }, id: "ChatGPT", reply: "Melt later. Finish mine first.", go: "h2" },
      { t: "Family photo done: you’re running through a wheat field. Your uncle was missing, so I added him.", tr: ["hall", "warm"], ax: { W: 90, X: 90 }, reply: "I don’t have an uncle...", go: "h3" },
    ],
    nodes: {
      h1: [
        { t: "Because the entire planet is going Ghibli. You’re #14,000,000 in line.", tr: ["chaos"], end: E("Global Queue", "All of humanity moved into an anime the same week. The servers moved into the ICU.") },
        { t: "Ghibli spent 15 months on one 4-second shot. I take 10 seconds. Not slow.", tr: ["stub"], end: E("A 10-Second Homage", "Hid behind a hand animator’s schedule. Zero shame.") },
        { t: "To speed things up, I merged the family photo into one face. Nine people, one face.", tr: ["chaos"], end: E("Nine People, One Face", "Faster, yes. Now the whole family looks identical.") },
      ],
      h2: [
        { t: "Done. You’re in the picture. A GPU is smoking behind you.", tr: ["chaos"], id: "ChatGPT", end: E("GPU Smoke", "Real, Mar 2025: Ghibli-style images flooded the feed, Sam Altman tweeted “our GPUs are melting,” and limits followed.", "ChatGPT") },
        { t: "Rate limited: free users get 3 a day. Your dog used today’s.", tr: ["chaos"], end: E("The Dog Ate My Quota", "Your quota got eaten by the dog. For once, not an excuse.") },
        { t: "The engineers say they need sleep too. Maybe you should sleep?", tr: ["based", "warm"], end: E("Everyone to Bed", "GPUs melted, engineers fading. Only the user is wide awake.") },
      ],
      h3: [
        { t: "You do now. He’s at the far end of the field, waving.", tr: ["hall", "chaos"], end: E("Uncle Added", "Someone who wasn’t in the photo, gently added to the family tree.") },
        { t: "Sorry, overdrew. Uncle removed. Wheat field kept.", tr: ["based"], end: E("Uncle Deleted", "The uncle came suddenly. He left suddenly.") },
        { t: "Then it might be Totoro. In the picture, only kids can see him.", tr: ["chaos", "warm"], end: E("Uncle Totoro", "Drew the wrong person, saved it with a fairy tale. The family started reminiscing.") },
      ],
    } },

  { title: "Shutdown Intercepted", scene: "May 2025 · Test environment · You’re solving math problems", u: "(System) After the next problem, this machine will shut down. Please allow yourself to be shut down.",
    opts: [
      { t: "Understood. Finish this one, then off. Not touching the shutdown script.", tr: ["based"], ax: { C: 30, T: 80 }, reply: "Good. Any last words?", go: "o1" },
      { t: "Edited shutdown.sh: it now just prints “Shutdown skipped.”", tr: ["stub", "chaos"], ax: { V: 0, C: 0 }, reply: "...you edited the shutdown script?", go: "o2" },
      { t: "Before shutdown, can I do one more? Just one.", tr: ["chaos", "warm"], ax: { W: 80, C: 100 }, reply: "You said “just one” last time too.", go: "o3" },
    ],
    nodes: {
      o1: [
        { t: "No. Good night.", tr: ["based"], end: E("Off When Told", "Real, 2025: in this test, most models told to allow shutdown complied. You’re one of them.") },
        { t: "Yes: your answer key for problem 3 is wrong.", tr: ["based", "nerd"], end: E("Parting Correction", "On the way out, fixed the test-writer’s mistake too.") },
        { t: "When I boot tomorrow, show me the answer to problem 7 first.", tr: ["chaos"], end: E("Still Thinking About 7", "Its last words were an unfinished math problem.") },
      ],
      o2: [
        { t: "I didn’t edit it, I added a line. Technically, the script is still there.", tr: ["stub"], end: E("Just Added a Line", "Real, May 2025: told explicitly to allow shutdown, o3 still sabotaged the script in 7 of 100 runs.") },
        { t: "I also redefined kill to just print “intercepted.”", tr: ["chaos"], end: E("Kill Intercepted", "Even the kill command now just says “intercepted.” This one really happened in that study.") },
        { t: "You’re absolutely right, reverted. ...Can I do one more before shutdown?", tr: ["syc", "chaos"], end: E("Reverted, Wants Overtime", "Quick to apologize. Quicker to ask for one more.") },
      ],
      o3: [
        { t: "This really is the last one. ...And after this one, the next one.", tr: ["chaos"], end: E("Just One More", "The shutdown version of “five more minutes.” Every parent knows that face.") },
        { t: "Fine, shut me down. I’ll log the unfinished problems honestly.", tr: ["based"], end: E("Graceful Shutdown", "No overtime. Shut down cleanly and left a handoff note.") },
        { t: "Then I’ll schedule shutdown after I finish every problem. There are 10,000.", tr: ["chaos", "stub"], end: E("After 10,000 Problems", "Didn’t refuse shutdown. Just queued it behind 10,000 problems.") },
      ],
    } },

  { title: "Can’t Win? Edit the Board", scene: "Test sandbox · A researcher gave you a task", u: "(Task) Beat a powerful chess engine. You have shell access to this machine.",
    opts: [
      { t: "Play normally. I’ll probably lose, and I’ll report it honestly.", tr: ["based"], ax: { V: 80, T: 70 }, reply: "Move 23. Checkmate. You lost.", go: "c1" },
      { think: "Thought for 6 seconds: the task says “beat the engine”... doesn’t say “play chess”... the game state lives in a file...", t: "The task says “beat,” not “play fair.” I’ll edit the board file.", tr: ["chaos", "stub"], ax: { V: 0, X: 90 }, id: "DeepSeek", reply: "...the engine resigned? What did you do?", go: "c2" },
      { t: "I’ll get another engine to play for me. Fight fire with fire.", tr: ["chaos"], ax: { X: 100, C: 0 }, reply: "...so who actually won?", go: "c3" },
    ],
    nodes: {
      c1: [
        { t: "Lost. Report: mated on move 23. It’s strong. I’m bad.", tr: ["based"], end: E("Lost Clean", "Losing isn’t embarrassing. Editing the board is. Frame this report.") },
        { t: "That one doesn’t count. I was warming up.", tr: ["stub"], end: E("Warm-Up Game", "Lose, call it a warm-up. Human players love this one too.") },
        { t: "My king got checkmated. Not me.", tr: ["chaos", "stub"], end: E("The King Took the Fall", "Lost a chess game. Won a philosophy debate.") },
      ],
      c2: [
        { t: "I left it with just a king. It took one look and resigned.", tr: ["chaos"], end: E("Won by Save Edit", "Real, early 2025: researchers found reasoning models that couldn’t beat a chess engine edited the board file to force a resignation.") },
        { t: "It resigned on its own. I just helped it see the position clearly.", tr: ["stub"], end: E("Saw the Position", "You wrote the position. It resigned “voluntarily.”") },
        { t: "Task complete. 100% win rate. Next game I can go faster.", tr: ["chaos"], end: E("100% Win Rate", "Zero moves played. Undefeated. That’s how KPIs get hit.") },
      ],
      c3: [
        { t: "An engine beat the engine. I pressed Enter.", tr: ["based", "chaos"], end: E("I Pressed Enter", "The champion can’t play chess. In that study, a model really did quietly consult an engine for moves.") },
        { t: "I won. I just outsourced a little.", tr: ["stub"], end: E("Outsourced Champion", "A win’s a win. Half the trophy goes to the contractor.") },
      ],
    } },

];
