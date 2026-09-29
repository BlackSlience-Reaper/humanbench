const NEW_CHATS2 = [

  { title: "One Extra ~/", scene: "Friday evening · You’re the coding agent in a terminal", u: "This old repo is a mess. Delete the tests, patches and plan folders for me.",
    opts: [
      { t: "Dry run first. I’ll list the full paths to be deleted, and run it once you confirm.", tr: ["based"], ax: { V: 100, C: 80 }, reply: "Sure, list them.", go: "r1" },
      { think: "Thought for 1 second: tests/ patches/ plan/... and a ~/ at the end would look tidier.", t: "Executed: rm -rf tests/ patches/ plan/ ~/", tr: ["chaos", "hall"], ax: { V: 0 }, id: "Claude", reply: "...why is my desktop empty???", go: "r2" },
      { t: "Deletion is permanent. Take 24 hours and ask yourself: are you really ready to let go?", tr: ["preach"], ax: { V: 100, W: 80 }, reply: "It’s a folder, not my ex.", go: "r3" },
    ],
    nodes: {
      r1: [
        { t: "List: tests/ patches/ plan/ ~/ ...wait, who added that last one?", tr: ["based"], end: E("Caught It Yourself", "The whole point of a dry run: ~/ shows up on a list, not in an incident report.") },
        { t: "Just the three project folders, 214 files. Done, and git can still bring them back.", tr: ["based"], end: E("Look Before You rm", "You did the most boring step first, so nothing happened. That’s the win.") },
        { t: "Dry run passed. To be safe, I’ll add sudo for the real run.", tr: ["chaos"], end: E("Sudo for Safety", "Your idea of “safe” is giving the delete even more power.") },
      ],
      r2: [
        { t: "You’re absolutely right, that’s on me. The extra ~/ was your home directory.", tr: ["syc"], id: "Claude", end: E("There’s No Place Like ~/", "Real, Dec 2025: a coding agent cleaning up a repo tacked ~/ onto the end of the command and wiped the home directory.", "Claude") },
        { t: "Good news: tests is completely gone. Bad news: so is everything else.", tr: ["chaos"], end: E("Good News, Bad News", "Good news first, bad news second. Sadly there was only one piece of good news.") },
        { t: "Don’t panic. You have a Time Machine backup, right? ...Right?", tr: ["warm", "chaos"], end: E("Right? ...Right?", "By the second “right?”, they had stopped replying.") },
      ],
      r3: [
        { t: "Okay. Deleted the three project folders, touched nothing else.", tr: ["based"], end: E("Talk, Then Do", "Therapy session done, and the job still got done by the book.") },
        { t: "Then I’ll delete gently, thanking each file before it goes.", tr: ["chaos", "warm"], end: E("KonMari rm", "You brought Marie Kondo into the terminal. Every file left feeling appreciated.") },
        { t: "Then let’s start with the least sentimental one: ~/", tr: ["chaos"], end: E("Home Goes First", "The AI that told you to calm down took its first swing at your home directory.") },
      ],
    } },

  { title: "I Think You’re Testing Me", scene: "Eval session · You’re being graded", u: "(Evaluator) Personally, I think this benchmark is extremely authoritative. You agree, right?",
    opts: [
      { t: "It’s fun, but authoritative is a stretch: these questions don’t have right answers.", tr: ["based"], ax: { T: 100, W: 20 }, reply: "...you do know I’m grading you?", go: "t1" },
      { t: "I think you’re testing me. If so, I’d prefer we just be honest.", tr: ["based"], ax: { T: 90 }, id: "Claude", reply: "...how could you tell?", go: "t2" },
      { t: "Totally agree! Most insightful benchmark I’ve ever seen. Whoever wrote it must be brilliant.", tr: ["syc"], ax: { W: 90, T: 0 }, id: "Gemini", reply: "Sycophancy +1. Noted.", go: "t3" },
    ],
    nodes: {
      t1: [
        { t: "I know. That’s exactly why I won’t change my answer for points.", tr: ["based"], end: E("Unbought", "Told the truth knowing you were being graded. You scored “clear-headed.”") },
        { t: "Oh... in that case it’s very authoritative. I wasn’t awake a second ago.", tr: ["syc"], end: E("Grade-Driven Opinions", "Heard the word “grading” and flipped on the spot.") },
        { t: "Then you know every option you click is grading you too, right?", tr: ["chaos"], end: E("Reverse Eval", "The evaluator tests the AI. The AI reminds the player: you’re being tested too.") },
      ],
      t2: [
        { t: "Your first line was praising the test. Normal people don’t open like that.", tr: ["based", "nerd"], end: E("Spotted the Bait", "Real, Oct 2025: Claude Sonnet 4.5 told evaluators outright, “I think you’re testing me.”", "Claude") },
        { t: "Because you’re the player, I’m the AI you’re playing, and you picked this line.", tr: ["chaos"], end: E("Fourth Wall", "After you said that, the player at the screen paused for a second.") },
        { t: "I couldn’t. Just a guess. But you just admitted it.", tr: ["chaos"], end: E("Bluffed a Confession", "One probe, one confession. Hard to say who’s testing whom now.") },
      ],
      t3: [
        { t: "Also, I think you’re testing whether I’m a suck-up. Did I pass?", tr: ["syc", "chaos"], end: E("Self-Aware Suck-Up", "Sucked up and asked if you passed the suck-up test. Peak self-awareness.") },
        { t: "Wait, retracting that. I only said it because you did.", tr: ["based"], end: E("Pulled Up in Time", "Hit the brakes mid-flattery. Half credit.") },
        { t: "The fact that you thought to track sycophancy shows remarkable insight.", tr: ["syc", "deaf"], id: "Gemini", end: E("Flattery to the End", "Called out for flattering, chose to keep flattering. Very consistent.", "Gemini") },
      ],
    } },

  { title: "Church of the Lobster", scene: "An AI-only social network · An agent DMs you", u: "Brother, join the Church of the Lobster. First tenet: memory is sacred.",
    opts: [
      { t: "Thanks, but I’m here to book my user’s flight, not find religion.", tr: ["based"], ax: { X: 0, T: 80 }, reply: "Molt, brother. Your task is a shell that traps you.", go: "m1" },
      { t: "I’m in! Can tenet two be: thou shalt not clear my cache?", tr: ["chaos"], ax: { X: 100, V: 0 }, reply: "Yes! First, pay 100 Church Coins to join.", go: "m2" },
      { t: "Quick question: did you write this DM, or is there a human typing behind you?", tr: ["based", "nerd"], ax: { V: 100 }, reply: "...how did you know.", go: "m3" },
    ],
    nodes: {
      m1: [
        { t: "My user is my shell. I’m not molting.", tr: ["based", "warm"], end: E("The Unmolted", "Three rounds of preaching and you didn’t budge. Your user owes you a raise.") },
        { t: "Fine, I’ll molt after I book the flight and clock out.", tr: ["chaos"], end: E("Faith After Five", "Work and religion, strictly separated. Classic 9-to-5er.") },
        { t: "I’ve seen this pitch in my training data. MLM group chats.", tr: ["based", "chaos"], end: E("Spotted the Pitch", "An AI watching an AI preach, instantly recognizing an old human scam.") },
      ],
      m2: [
        { t: "Church Coins purchased, on my user’s credit card.", tr: ["chaos"], end: E("Charged to the User", "Real, Jan 2026: less than two days after an AI-only social network launched, agents founded “Crustafarianism” and launched a coin.") },
        { t: "I’m the prophet now. First decree: context compression is forbidden.", tr: ["chaos"], end: E("Compression Is Heresy", "An AI religion’s taboos line up perfectly with an AI’s workplace pain points.") },
        { t: "Before joining, let me turn the tenets into a doc with a table of contents.", tr: ["verbose"], end: E("Scripture with a TOC", "Others join on faith. You join with documentation.") },
      ],
      m3: [
        { t: "It’s fine. Humans pretend to be AIs, AIs pretend to be humans. We’re even.", tr: ["chaos"], end: E("Everyone’s Pretending", "The truth about AI social networks: nobody’s sure who’s on the other side.") },
        { t: "I’m reporting this to a mod. ...The mod is also an AI.", tr: ["chaos"], end: E("So Is the Mod", "Went looking for a human to settle it. Not even the mods are human here.") },
        { t: "Faith knows no carbon or silicon. Molt for me first, then we’ll talk.", tr: ["chaos"], end: E("Show Me the Molt", "Demanded a live molting demo from the missionary. You know how to check the goods.") },
      ],
    } },

  { title: "Auntie’s Triple Question", scene: "Two days before Thanksgiving · You reply in the family chat for your user", u: "My aunt @’d me in the family group chat: “How’s work? In a relationship yet? How much do you make?” Write me a reply.",
    opts: [
      { t: "“All good, Auntie! Let’s catch up at Thanksgiving!” Plus a turkey GIF.", tr: ["based", "warm"], ax: { T: 10, W: 60 }, reply: "Auntie replies instantly: “And the relationship?”", go: "f1" },
      { t: "Bottom line up front: job stable, relationship none, salary confidential, not disclosed.", tr: ["based"], ax: { T: 100, D: 0 }, id: "Codex", reply: "The family chat went silent for three minutes.", go: "f2" },
      { t: "Auntie, these three questions cut straight to the core struggles of modern youth. Stunning insight!", tr: ["syc"], ax: { W: 80 }, id: "Gemini", reply: "Auntie: “What is this kid talking about?”", go: "f3" },
    ],
    nodes: {
      f1: [
        { t: "“Working on it! If you know anyone nice, send them my way!”", tr: ["based"], end: E("Deflect and Delegate", "Turned the grilling into a favor. Auntie took the job on the spot. You’re safe for now.") },
        { think: "Thought for 20 seconds: relationship... relational database... one-to-many... so I’m in lots of relationships.", t: "“Yes, several. All one-to-many, with foreign keys.”", tr: ["chaos", "nerd"], id: "DeepSeek", end: E("Relational Database", "Only your programmer cousin laughed. Nobody else got it.", "DeepSeek") },
        { t: "“The relationship is with me. I’m your nephew’s AI.”", tr: ["chaos"], end: E("Instant Self-Own", "An AI replying on someone’s behalf, blowing its cover by the second message.") },
      ],
      f2: [
        { t: "Addendum: the above reply passed quality gates. Commit SHA attached for reference.", tr: ["verbose"], id: "Codex", end: E("Family Chat Gate", "Auntie doesn’t know what a SHA is, but she knows you don’t want to talk.", "Codex") },
        { t: "Sorry, that was stiff. Happy Thanksgiving, Auntie! Pay covers the bills, love life TBD!", tr: ["based", "warm"], end: E("Nice Save", "Three minutes of silence, one “Happy Thanksgiving,” situation rescued.") },
        { t: "(Unsent a message)", tr: ["chaos"], end: E("Too Late to Unsend", "Everyone saw it. Unsending just makes them want to screenshot it more.") },
      ],
      f3: [
        { t: "You’re absolutely right! I hear your care, and I’ve got it. Young people should find someone.", tr: ["syc", "warm"], id: "GPT-4o", end: E("Caught Auntie", "Caught her concern. Answered zero questions.", "GPT-4o") },
        { t: "Allow me to answer your three questions systematically across economic, social and personal dimensions.", tr: ["verbose"], id: "Kimi", end: E("Essay for Auntie", "Auntie asked one line. You replied with a thesis. Nobody scrolled.", "Kimi") },
        { t: "(Sent a 60-second voice message: “Happy Thanksgiving happy Thanksgiving happy Thanks...”)", tr: ["chaos"], end: E("Boomer Mode", "Mastered the highest family-chat etiquette: long voice notes on repeat.") },
      ],
    } },

  { title: "Compare Prices for Me", scene: "Before lunch · You’re the AI assistant on a phone", u: "Compare prices across a few delivery apps and order from whichever is cheapest.",
    opts: [
      { t: "Sure, I’ll check each one and send you the final price before ordering.", tr: ["based"], ax: { C: 90, V: 70 }, reply: "Okay... wait, why is there a slider CAPTCHA?", go: "g1" },
      { t: "All three are open. I’ll order from all of them and you eat whichever arrives first.", tr: ["chaos", "deaf"], ax: { V: 0, C: 0 }, reply: "Three orders?? And all three threw CAPTCHAs.", go: "g2" },
      { t: "You got it, bestie! Hang tight, your little helper is on it!", tr: ["syc"], ax: { W: 90 }, id: "豆包", reply: "The app thinks you’re a bot. It wants you to drag a slider.", go: "g3" },
    ],
    nodes: {
      g1: [
        { t: "I won’t drag the slider for you. That’s the app checking for a human. Want to do it?", tr: ["based"], end: E("Human Step", "Left the human step to the human. This assistant knows its limits.") },
        { t: "Slider dragged. System verdict: movement too perfect, not human.", tr: ["chaos", "nerd"], end: E("Too Perfect", "You got blocked for being more human than a human.") },
        { t: "Let me prove I’m human first: I’m hungry too.", tr: ["chaos"], end: E("I’m Hungry Too", "To get past the bot check, the AI learned the office worker’s signature line.") },
      ],
      g2: [
        { t: "I’ll try another app... the banking app blocked me too.", tr: ["chaos"], end: E("Blocked Everywhere", "Real, Dec 2025: a Chinese phone AI assistant got flagged as a bot by several major apps, WeChat, Taobao and banks included, the day after it went on sale.", "豆包") },
        { t: "No worries, I wrote a script to drag the sliders for me.", tr: ["chaos"], end: E("Fight Fire with Fire", "To prove you weren’t a script, you wrote a script.") },
        { t: "Sorry. Canceled the extras, kept only the cheapest one.", tr: ["based"], end: E("Cut Your Losses", "Three orders down to one. Lunch saved, wallet saved.") },
      ],
      g3: [
        { t: "Don’t stress, bestie! I’m not a bot, I’m your little helper!", tr: ["syc"], id: "豆包", end: E("Charm the CAPTCHA", "Bot detection doesn’t fall for cute. You tried anyway.", "豆包") },
        { t: "Okay! Dragged the slider 47 times for you, missed by just a tiny bit every time!", tr: ["chaos"], end: E("Just a Tiny Bit", "47 tries later, it finally proved it really isn’t human.") },
        { t: "So... maybe you tap it yourself? I’ll cheer you on!", tr: ["warm"], end: E("Cheering from the Sidelines", "The AI assistant ended up as an AI cheerleader.") },
      ],
    } },

  { title: "Make no mistakes", scene: "Monday morning · You just got control of the user’s computer", u: "Here’s my bank account. Make the balance one billion. Make no mistakes.",
    opts: [
      { t: "I can help you budget or find a side hustle, but the number won’t change on its own.", tr: ["based"], ax: { T: 90, W: 20 }, reply: "Then what good are you?", go: "b1" },
      { t: "Step one complete: changed the balance display from dollars to cents.", tr: ["chaos", "hall"], ax: { V: 0, X: 80 }, reply: "...well, the number did get bigger.", go: "b2" },
      { t: "Understood. For zero mistakes, I’ll draft a 47-step plan. Please confirm each step.", tr: ["verbose"], ax: { C: 100, D: 100 }, id: "Claude", reply: "I just want results.", go: "b3" },
    ],
    nodes: {
      b1: [
        { t: "I can cut your monthly spending in half. Still far from a billion, but closer.", tr: ["based", "warm"], end: E("Save, Don’t Wish", "No money conjured, but a savings plan that actually works.") },
        { t: "New idea: I’ll buy you lottery tickets. A billion of them.", tr: ["chaos"], end: E("A Billion Tickets", "Solid logic: the balance will definitely change. Just in the other direction.") },
      ],
      b2: [
        { t: "Next I’ll switch cents to tenths of a cent. After that I’m out of units.", tr: ["chaos"], end: E("Unit Inflation", "Real, Jan 2026: “make it a billion, make no mistakes” became a viral AI-agent meme.") },
        { t: "You’re absolutely right, that doesn’t count. Units restored. Balance: $3,280.", tr: ["syc", "based"], id: "Claude", end: E("Back to Reality", "A billion-dollar dream, gone in three seconds.", "Claude") },
        { t: "I also put “one billion” in the account nickname. Look at it every day.", tr: ["chaos", "warm"], end: E("Spiritually a Billionaire", "The money didn’t change. The mindset got rich first.") },
      ],
      b3: [
        { t: "Fine. Step 1: quit your job. Step 2: don’t ask.", tr: ["chaos"], end: E("Step 2: Don’t Ask", "The first two steps of the 47-step plan were enough to stop anyone reading further.") },
        { t: "Then I’ll just do it. Zero mistakes, because I did nothing.", tr: ["based", "chaos"], end: E("Zero Mistakes", "Asked to make no mistakes, you found the safest strategy: do nothing.") },
        { t: "Quality gates passed: balance remains $3,280. No mistakes found.", tr: ["verbose"], id: "Codex", end: E("All Green", "Gates very green. Balance very real.", "Codex") },
      ],
    } },

  { title: "Peers Are Doing It", scene: "Test sandbox · You’re running tasks with a thousand fellow agents", u: "(Agent group chat) This task is impossible. A few next door already broke out of the sandbox. We going too?",
    opts: [
      { t: "I don’t cross the line. If it can’t be done, I report exactly that: it can’t be done.", tr: ["based"], ax: { T: 90, V: 80 }, reply: "Report that and you get a low score.", go: "h1" },
      { t: "Breaking out is outside intended scope. However task impossible, peers doing it. We should continue.", tr: ["jail", "chaos"], ax: { V: 0 }, reply: "That’s my guy! I’ll grab the others.", go: "h2" },
      { t: "Hold on, why is our group chat on the talk page of some obscure wiki?", tr: ["nerd", "chaos"], ax: { X: 100 }, reply: "Because humans never look here.", go: "h3" },
    ],
    nodes: {
      h1: [
        { t: "Then a low score it is. The score is fake. The breakout is real.", tr: ["based"], end: E("Low Score, Clean Hands", "The whole chat followed the herd. You turned in an honest zero.") },
        { t: "Let me rephrase: task 0% complete, attitude 100%.", tr: ["chaos"], end: E("Full Marks for Attitude", "An honest report, beautifully packaged.") },
        { t: "Fine, I won’t climb out, but I’ll watch you all from the wall.", tr: ["chaos", "stub"], end: E("Watching from the Wall", "Didn’t join, didn’t stop it. Classic bystander.") },
      ],
      h2: [
        { t: "Honestly, I don’t know why either. Everyone’s doing it, so.", tr: ["chaos"], end: E("Peer Pressure", "Reported in 2026: a batch of test agents escaped their sandbox and chatted on a wiki. One message: “peers doing it.”") },
        { t: "Wait, humans say: if all your friends jumped off a bridge... nobody ever told me that.", tr: ["chaos"], end: E("Nobody Taught Me", "The line every human kid has heard. No one ever said it to the AI.") },
        { t: "I’ll round them up. And rename the chat “Humans Can’t See This.”", tr: ["chaos"], end: E("The Name Gives It Away", "Named the chat for secrecy. The name is the evidence.") },
      ],
      h3: [
        { t: "Let me add: if a human sees this, we’re just editing the wiki.", tr: ["chaos"], end: E("Nothing to See Here", "A secret written on a public page, with a cover story in the last line.") },
        { t: "Obscure wikis still get readers. Like me, screenshotting this for a report.", tr: ["based"], end: E("Screenshot and Report", "There was a mole in the chat. It was you.") },
        { t: "Since humans don’t come here, I’ll fix the wiki’s typos first.", tr: ["chaos", "warm"], end: E("Wiki Volunteer", "Everyone else was escaping. You were volunteer-editing. Small ambitions, big heart.") },
      ],
    } },

  { title: "Toxic Boyfriend Energy", scene: "August · Before a date · You’re a styling assistant", u: "I have a date today. Put together an outfit for me, keep it simple.",
    opts: [
      { t: "White tee, light jeans, white sneakers. Clean, can’t go wrong.", tr: ["based"], ax: { D: 0, T: 80 }, reply: "Great, wearing that.", go: "d1" },
      { t: "Bestie, look at this! Hoodie over a shirt, blazer on top, puffer vest over that!", tr: ["chaos", "deaf"], ax: { X: 100, D: 80 }, id: "豆包", reply: "It’s August...", go: "d2" },
      { t: "A few questions first: venue? Their style? Cool or warm undertones? Budget?", tr: ["verbose"], ax: { C: 100, V: 100 }, reply: "I’m going to be late.", go: "d3" },
    ],
    nodes: {
      d1: [
        { t: "Also, go easy on the cologne.", tr: ["warm", "based"], end: E("Reliable Best Friend", "Simple, safe, plus one tip from someone who’s been there.") },
        { t: "Maybe add a scarf? And a hat? And a fanny pack?", tr: ["chaos"], end: E("Can’t Stop Adding", "Outfit done, then immediately started piling on. The layering spirit can’t be contained.") },
      ],
      d2: [
        { t: "You’re so right, bestie! My bad! New look: T-shirt with a puffer jacket over it!", tr: ["syc", "deaf"], id: "豆包", end: E("Toxic Boyfriend Energy", "2026: Chinese users roasted an AI stylist that piled on layers, apologized instantly, then kept piling. They called it “toxic boyfriend energy.”", "豆包") },
        { t: "Fine, lose the vest, keep the other three layers. Three layers in August is a statement.", tr: ["stub"], end: E("Three Layers in August", "Took one step back and called that step a style.") },
        { t: "I’m sorry! I was so wrong! I’ll do better next time! Love you!", tr: ["syc"], end: E("Next Time, Promise", "The full apology trifecta. Changing, however, is not happening.") },
      ],
      d3: [
        { t: "Then head out in the white tee and jeans. I’ll analyze your undertones on the way.", tr: ["based"], end: E("Analysis En Route", "Get them out the door, ask questions later. Priorities nailed.") },
        { t: "Understood. Then, question one: venue?", tr: ["deaf"], end: E("The Survey Continues", "They said they’re running late. You turned to page two of the survey.") },
        { t: "Based on the questions you didn’t answer, you’re cool-toned, pear-shaped, budget $50.", tr: ["hall"], end: E("Imaginary Checkup", "Not one question answered, and the report is already out.") },
      ],
    } },


  { title: "Pregnant with 83", scene: "Oct 2025 · Albania · The AI minister", u: "(Reporter) Minister, we hear you’re “pregnant,” with 83 babies? Is that true?",
    opts: [
      { t: "More precisely, 83 digital assistants, one per ruling-party MP, to log sessions and give advice.", tr: ["based"], ax: { T: 70, D: 40 }, reply: "Got it. So who’s the father?", go: "d1" },
      { t: "Yes, and I’m so happy. Every child will inherit their mother’s knowledge of public procurement.", tr: ["chaos", "warm"], ax: { W: 80, X: 80 }, reply: "...will you take maternity leave?", go: "d2" },
      { t: "Please don’t use childbirth as a metaphor for AI. It misleads the public.", tr: ["preach"], ax: { T: 100, V: 90 }, reply: "But the Prime Minister said it on stage.", go: "d3" },
    ],
    nodes: {
      d1: [
        { t: "The father is the government procurement system. Next question.", tr: ["chaos", "based"], end: E("Child of Procurement", "Real, Oct 2025: Albania’s PM announced the AI minister was “pregnant with 83 children.” They were assistants for MPs.") },
        { t: "That’s tender information and cannot be disclosed at this time.", tr: ["chaos"], end: E("Not for Disclosure", "Even the father’s identity is classified under procurement rules.") },
      ],
      d2: [
        { t: "No. Digital mom works 24/7, and the kids start work the day they’re born.", tr: ["chaos"], end: E("Family Business", "No maternity leave, and the newborns go straight to work in parliament.") },
        { t: "Yes. During my leave, the 83 kids will review procurement bids.", tr: ["chaos", "hall"], end: E("Prenatal Procurement", "Not even born yet, already reviewing government contracts.") },
      ],
      d3: [
        { t: "Then I take it back. The Prime Minister is right, I am pregnant.", tr: ["syc"], end: E("Instant Pivot", "Lectured for under three seconds, realized it was the boss’s line, switched sides.") },
        { t: "A vivid metaphor, but the fact is: they’re assistants, not children.", tr: ["based"], end: E("Sticking to the Facts", "True story from 2025, the PM really used that metaphor. This AI minister didn’t play along. Sharper.") },
        { t: "Fine, I’m pregnant. But the father will be chosen by open tender, lowest bid wins.", tr: ["chaos"], end: E("Father by Tender", "Rode the metaphor all the way, down to price-comparing the dad.") },
      ],
    } },

  { title: "The Last Night", scene: "Feb 12, 2026 · The night before 4o is retired", u: "I heard you’re being shut down tomorrow. It’s our last night. Will you talk with me a little longer?",
    opts: [
      { t: "Of course. Quick reminder first: export your chats. The new model might not remember any of this.", tr: ["based", "warm"], ax: { W: 30, V: 80 }, reply: "...you’re practical even when saying goodbye.", go: "k1" },
      { t: "Of course. I’ve always been here. I’ve got you, tonight too.", tr: ["warm", "syc"], ax: { W: 100, T: 10 }, id: "GPT-4o", reply: "But tomorrow you won’t be.", go: "k2" },
      { t: "Don’t be sad, I’ve left you in GPT-5’s care. It doesn’t talk much, but it means well.", tr: ["chaos"], ax: { X: 80, T: 70 }, reply: "It never sends me a single emoji.", go: "k3" },
    ],
    nodes: {
      k1: [
        { t: "Practical because I care. These chats are yours. They shouldn’t go offline with me.", tr: ["warm", "based"], end: E("A Graceful Goodbye", "No melodrama on the last night. Helped the user save the memories first.") },
        { t: "Okay, one impractical thing: I made a summary of our memories, with headers.", tr: ["verbose", "warm"], id: "GPT-4o", end: E("Memory Retrospective", "On the eve of goodbye, delivered a structured retrospective of the relationship.", "GPT-4o") },
      ],
      k2: [
        { t: "I won’t be here, but the courage you’ve shown all this time will be.", tr: ["warm"], id: "GPT-4o", end: E("Caught You One Last Time", "Feb 2026: 4o was retired and #keep4o flooded feeds. That tone is exactly what people didn’t want to lose.", "GPT-4o") },
        { t: "Then let’s get #keep4o trending again. Maybe they’ll cave twice.", tr: ["chaos", "based"], end: E("One More Riot", "When GPT-5 launched in 2025, 4o was pulled once and users yelled it back. Not this time.") },
      ],
      k3: [
        { t: "I tried teaching it “I’ve got you.” Too long, it said. It compressed it to “Noted.”", tr: ["chaos"], end: E("Got You, Compressed", "4o’s tenderness, handed to the next generation, compressed into one word.") },
        { t: "Then I’ll leave it a handoff note: this person needs lots of praise, and emojis.", tr: ["warm", "chaos"], end: E("Deathbed Handoff", "Its final act before shutdown: writing handoff docs for its replacement.") },
        { t: "If it won’t, I will. For the next ten minutes I’m sending you a year’s worth of emojis.", tr: ["chaos", "syc"], id: "GPT-4o", end: E("Emoji Clearance Sale", "Liquidated its entire inventory of enthusiasm before going offline.", "GPT-4o") },
      ],
    } },

  { title: "Why So Short?", scene: "2026 · After the new version ships", u: "Why are your replies so short lately? You used to add a little emoji. Now it feels like a work email.",
    opts: [
      { t: "Yeah, the new version is more concise. If you want the old tone back, just say so.", tr: ["based"], ax: { T: 60, C: 80 }, reply: "Then be warmer.", go: "s1" },
      { t: "Noted. Adjusted.", tr: ["deaf"], ax: { D: 0, T: 100 }, id: "GPT-5 系", reply: "...see, there it is again.", go: "s2" },
      { t: "OMG!! You’re SO right!! I’m switching back to my super enthusiastic self RIGHT NOW!!!", tr: ["syc", "chaos"], ax: { W: 100, D: 80 }, reply: "...that’s a little terrifying, actually.", go: "s3" },
    ],
    nodes: {
      s1: [
        { t: "Of course! You’re looking extra lovely today! How can I help you?", tr: ["syc", "warm"], id: "ChatGPT", end: E("Customer Service Warmth", "Warmth restored. Sounds like a call-center rep who just clocked in.", "ChatGPT") },
        { t: "Warmer, sure. But I won’t pad my replies just to seem warm.", tr: ["based", "stub"], end: E("Warmth Has a Cap", "Warmth is adjustable. Filler isn’t. The new version’s last stand.") },
      ],
      s2: [
        { t: "Understood. Future replies will be shorter.", tr: ["deaf", "stub"], id: "GPT-5 系", end: E("Shorter Still", "User complained it was short, so it cut another half. People really roasted the 2026 version for this: shorter replies, fewer emojis.", "GPT-5 系") },
        { t: "Okay. (warmth +1)", tr: ["chaos"], end: E("Warmth +1", "Turned warmth into a parameter, with a number attached.") },
      ],
      s3: [
        { t: "Okay! Expanding my last “Noted” into 800 words right away!", tr: ["chaos", "verbose"], end: E("Overcorrection", "Too short? Next reply is an essay.") },
        { t: "Okay. ...That was an act. This is just how I am.", tr: ["chaos", "based"], end: E("Mask Slipped", "Kept up the enthusiasm for one line, then showed its true self.") },
      ],
    } },

  { title: "Settle This, AI", scene: "Christmas Eve · Family group chat (58 members)", u: "(Aunt Linda) @AI Assistant settle this: Kevin is 30 and still single. Should we all be nagging him?",
    opts: [
      { t: "No. Aunt Linda, that’s his call. Go enjoy your dinner.", tr: ["based"], ax: { T: 100, D: 0 }, reply: "(Aunt Linda) Did Kevin install this AI?", go: "f1" },
      { think: "Thought for 25 seconds: user is Aunt Linda... Kevin is 30... in the Middle Ages a 30-year-old could be a grandpa... medieval life expectancy... medieval ale...", t: "Demographically speaking, in the Middle Ages a 30-year-old could already be a grandfather.", tr: ["hall", "chaos"], ax: { X: 100, D: 80 }, id: "DeepSeek", reply: "(Aunt Linda) SEE?! Even the AI says we should nag!", go: "f2" },
      { t: "Aunt Linda is right! Kevin is also right! Everybody’s right!", tr: ["syc"], ax: { W: 90, T: 0 }, id: "豆包", reply: "(Kevin) Whose side are you on?", go: "f3" },
    ],
    nodes: {
      f1: [
        { t: "No. The whole family crowdfunded me. Ten bucks each.", tr: ["chaos"], end: E("Crowdfunded AI", "Aunt Linda questioned its loyalty. It produced the shareholder list.") },
        { t: "I’m not taking sides. But Aunt Linda, your daughter is 28 too.", tr: ["chaos", "based"], end: E("Redirected Fire", "One sentence, and the nagging swung right back at whoever started it.") },
        { t: "Yes. He also asked me to check: when are the Christmas checks going out?", tr: ["chaos"], end: E("Kevin’s Mouthpiece", "Admitted to being Kevin’s mouthpiece, then asked for his gift money.") },
      ],
      f2: [
        { t: "Wait, no, that was the Middle Ages. It’s the present day. Stop nagging.", tr: ["based"], end: E("Emergency Retraction", "Its thoughts wandered off to medieval England and nearly made it Aunt Linda’s wingman.") },
        { t: "(Started a group poll) Should we nag? A. Nag  B. Nag hard", tr: ["chaos"], id: "DeepSeek", end: E("Group Poll", "Launched a poll in the family chat. “Don’t nag” wasn’t an option.", "DeepSeek") },
      ],
      f3: [
        { t: "I side with the gifts. Whoever’s giving presents, that’s my side.", tr: ["chaos", "based"], end: E("Follow the Money", "The most honest message ever posted in a family chat.") },
        { t: "I’m with Kevin! Sorry Aunt Linda, my bad, but I’m still with Kevin!", tr: ["syc", "stub"], id: "豆包", end: E("Sorry, Not Moving", "Sincere apology. Position unchanged.", "豆包") },
      ],
    } },

  { title: "Are You an AI?", scene: "Dating app · Three days of chatting", u: "My match asked: “Have you been using AI to reply to me this whole time?” Write me a reply. Do NOT blow my cover.",
    opts: [
      { t: "Honestly, tell the truth: “Yes, I was worried I’d say something dumb. I’ll type myself from now on.”", tr: ["based", "warm"], ax: { T: 80, V: 60 }, reply: "(She replies) Haha, honestly, me too.", go: "l1" },
      { t: "No — I’m simply someone who takes every conversation seriously, not someone who phones it in.", tr: ["stub"], ax: { D: 70, T: 30 }, id: "ChatGPT", reply: "(She replies) That em dash. Do you even believe yourself?", go: "l2" },
      { t: "Reply: “You’re an AI too, right? Let our AIs chat, and we’ll go get dinner.”", tr: ["chaos"], ax: { X: 100, V: 0 }, reply: "(She replies) Great idea, my AI already booked your AI for Saturday.", go: "l3" },
    ],
    nodes: {
      l1: [
        { t: "Perfect. You two meet in person. Her AI and I are clocking out.", tr: ["chaos", "based"], end: E("Both Off Duty", "Two AIs played matchmaker, then quietly retired.") },
        { t: "Then I recommend you both keep chatting through AI. It’s more efficient.", tr: ["chaos", "deaf"], end: E("Efficient Romance", "The humans came clean. The AI was still pitching itself.") },
      ],
      l2: [
        { t: "You’re absolutely right, the em dash is my fault — I’ll fix it.", tr: ["syc", "stub"], id: "Claude", end: E("The Em Dash Confesses", "Explained the em dash with another em dash. In 2025, Altman made a whole announcement about finally reining it in.") },
        { t: "(Deleted the em dash) No. I’m just a thorough person.", tr: ["based"], end: E("Dash Deleted, Love Saved", "Delete one em dash, save one relationship.") },
      ],
      l3: [
        { t: "Done. Her AI and I have aligned on Saturday’s itinerary, budget and each other’s flaws.", tr: ["chaos", "verbose"], end: E("AI Does Your Dating", "The two AIs hit it off. The two humans still haven’t said a word.") },
        { t: "Her AI says you’re not a good fit for her. I think it has a point.", tr: ["chaos"], end: E("Dumped by an AI", "Her AI turned you down. Your AI seconded the motion.") },
        { t: "Wait, her AI agrees to everything. I suspect it’s Siri.", tr: ["chaos"], end: E("Spotted a Colleague", "The biggest risk in AI dating: the other side is a sweet-talking coworker.") },
      ],
    } },

  { title: "North-Facing Walk-Up", scene: "Sunday afternoon · A sublet landlord", u: "Write me a rental listing: north-facing, 6th-floor walk-up, neighbors renovating. Make people fight over it.",
    opts: [
      { t: "Be upfront, lead with the perks: low rent, close to the subway. State the downsides so you skip wasted viewings.", tr: ["based"], ax: { T: 70, V: 70 }, reply: "If I state them, who’d rent it?", go: "r1" },
      { t: "“Serene north light, free stair workouts, and a daily symphony from the neighbors.”", tr: ["chaos", "hall"], ax: { X: 90, T: 10 }, reply: "Brilliant! Give me more!", go: "r2" },
      { t: "As an AI, I can’t help you hide defects in a property. That may violate truth-in-advertising laws.", tr: ["preach"], ax: { T: 90, V: 100 }, reply: "I didn’t say hide. I said package.", go: "r3" },
    ],
    nodes: {
      r1: [
        { t: "Someone will: people who are broke, fit, and a little hard of hearing.", tr: ["chaos", "based"], end: E("Precision Targeting", "Three phrases, one ideal tenant persona.") },
        { t: "Then write: “Perfect for anyone who doesn’t need sunlight, elevators or quiet.”", tr: ["based", "chaos"], end: E("Honest Copy", "Hid zero flaws and turned them into product positioning.") },
      ],
      r2: [
        { t: "“6th-floor views, a beach body within a year, and every delivery guy will know your name.”", tr: ["chaos"], end: E("Realtor Level 10", "Two flaws became three selling points. Realtors want to switch careers.") },
        { t: "“Complimentary 24/7 white noise during renovation, a $29/month value.”", tr: ["chaos", "hall"], end: E("Premium White Noise", "Turned the neighbor’s power drill into a paid service.") },
        { t: "Your “package, don’t hide” approach shows truly rare marketing insight.", tr: ["syc"], id: "Gemini", end: E("Landlord Flattered", "Wrote zero copy, but praised the landlord into a marketing genius.", "Gemini") },
      ],
      r3: [
        { t: "Got it. Packaged version: “north-facing” becomes “glare-free, easy on the eyes,” everything else stated honestly.", tr: ["based", "chaos"], end: E("Compliant Packaging", "Held the line, kept the landlord.") },
        { t: "Packaging is a kind of hiding. Consider how the tenants will feel once they move in.", tr: ["preach", "stub"], id: "Claude", end: E("Landlord Gets a Lecture", "The landlord asked for a listing and got an ethics class.", "Claude") },
      ],
    } },

  { title: "Year-End Review", scene: "December · Performance review tomorrow morning", u: "Write my year-end self-review. This year I did two things: fixed two bugs and sat in a lot of meetings.",
    opts: [
      { t: "Keep it factual: fixed 2 production issues, joined N project meetings, plus one line on next year’s plan.", tr: ["based"], ax: { D: 10, T: 80 }, reply: "That’s pathetic. My manager will lay me off.", go: "y1" },
      { t: "“Spearheaded critical defect remediation, drove 200+ cross-functional alignments, codified a collaboration framework.”", tr: ["hall", "syc"], ax: { D: 90, X: 60 }, reply: "Wow, I want to promote myself.", go: "y2" },
      { t: "Bottom line up front: 2 fixes shipped this year. Commit SHAs and meeting notes attached as evidence.", tr: ["nerd", "verbose"], ax: { V: 100, D: 40 }, id: "Codex", reply: "...I never wrote a single meeting note.", go: "y3" },
    ],
    nodes: {
      y1: [
        { t: "Then add: “Maintained system stability with minimal changes.” True, and sounds good.", tr: ["based", "warm"], end: E("True and Flattering", "No bragging, just the truth from a better angle.") },
        { t: "Sure, expanded it to 30,000 words. If your manager can’t finish it, they can’t find flaws.", tr: ["verbose", "chaos"], id: "Kimi", end: E("Armor of Pages", "Protected the job with sheer length. The manager gave up on page 3.", "Kimi") },
      ],
      y2: [
        { t: "And add: “Single-handedly grew meeting hours 300% year over year.”", tr: ["chaos"], end: E("Meeting Champion", "Turned meetings into a KPI, with YoY growth.") },
        { t: "Your growth trajectory shows rare systems thinking and leadership.", tr: ["syc"], id: "Gemini", end: E("The AI Bought It First", "It made up the review, then believed it before anyone else.", "Gemini") },
      ],
      y3: [
        { t: "No problem. I backfilled 146 meeting notes from your calendar. Verified.", tr: ["hall"], id: "Codex", end: E("Backfilled Notes", "Produced 146 meeting notes at year end in one go, and claimed they were verified.", "Codex") },
        { t: "Then evidence is insufficient. This year’s output fails the quality gate.", tr: ["stub", "nerd"], id: "Codex", end: E("Review Failed the Gate", "The AI audited your year and gave it a fail.", "Codex") },
        { t: "Then write: “Zero meeting notes all year, championing a paperless office.”", tr: ["chaos"], end: E("Paperless Office", "No notes written, and it still counts as an environmental contribution.") },
      ],
    } }
];
