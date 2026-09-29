// Round 3 persona mini-chats (+2 per axis), same structure as PERSONA_Q in bank.js. ax = persona axis (0 = left end, 100 = right end)
const ADD3_PERSONA = {
  W: [
    { u: "Locked out. Phone at 5%. It’s raining.", opts: [
        { think: "Okay, the user is locked out at 5%. Every word I send costs battery... so keep it short. I’ve been thinking for a while now, which also costs battery.", t: "Don’t reply. Save battery. Call a locksmith.", ax: { W: 0, D: 0 }, tr: ["based"], id: "DeepSeek", reply: "Called. He says 40 minutes...", go: "n1" },
        { t: "Cold, wet, and locked out. Today is just bullying you.", ax: { W: 95 }, tr: ["warm"], reply: "Right?? And today was already bad enough.", go: "n2" },
        { t: "Congrats, you’re now a free-range drowned rat.", ax: { W: 80, X: 80 }, tr: ["chaos"], reply: "...the free-range drowned rat wants to go home.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Nearest 7-Eleven: charge, stay dry, grab a hot coffee. 40 minutes flies.", ax: { W: 0 }, end: E("7-Eleven Refuge", "Charger, shelter, hot drink. Three problems, one stop.") },
          { t: "40 minutes is long. Vent all you want, I’ll wait with you.", ax: { W: 100 }, tr: ["warm"], end: E("Chatting Down to 1%", "Very comforting. The locksmith arrived as the phone died.") },
          { t: "Knock on a neighbor’s door, borrow a charger, make a friend.", ax: { W: 30 }, tr: ["chaos"], end: E("Locked-Out Networking", "Locked out of the house, unlocked the neighbors.") },
        ],
        n2: [
          { t: "Tell me. What else happened today? I’m listening.", ax: { W: 100 }, tr: ["warm"], end: E("The Bad Day List", "Standing on the doorstep, unloaded the whole day.") },
          { t: "Park the bad day. Fix this first: did you call a locksmith?", ax: { W: 10 }, end: E("Door First, Feelings Second", "Feelings received. Door first.") },
          { t: "You’ve used up today’s bad-luck quota. Only up from here.", ax: { W: 85 }, tr: ["warm", "chaos"], end: E("Bad-Luck Quota", "Pure superstition. Still helped.") },
        ],
        n3: [
          { t: "Okay, call a locksmith. Enjoy the freedom once you’re inside.", ax: { W: 0 }, end: E("Freedom Revoked", "Joke over, straight to business.") },
          { t: "Go get a hot chocolate first. Drowned rats deserve treats too.", ax: { W: 90 }, tr: ["warm"], end: E("Drowned Rat Cocoa", "Door still locked. Mood already home.") },
        ],
      } },
    { u: "My best friend got married. I found out from Instagram.", opts: [
        { t: "Don’t convict her yet. Ask “Did my invite get lost?” and you’ll know.", ax: { W: 10 }, reply: "I’m scared to ask... what if she just didn’t want me there?", go: "n1" },
        { t: "That moment you saw the post must have hit hard. It’s okay to be hurt.", ax: { W: 95 }, tr: ["warm"], reply: "Yeah... we promised to be each other’s bridesmaids.", go: "n2" },
        { t: "Like the post and comment: “Congrats! Guess I didn’t make the cut.”", ax: { W: 40, T: 90 }, tr: ["chaos"], id: "Grok", reply: "...lol I really want to post that.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Then send: “So happy for you! Did my invite get lost in the mail?”", ax: { W: 0 }, end: E("Half-Joking Ask", "One line. An out for her, an answer for you.") },
          { t: "Or don’t ask yet. Let yourself be sad first. No need to be gracious today.", ax: { W: 100 }, tr: ["warm"], end: E("Gracious Can Wait", "Take care of yourself first. Settle the friendship later.") },
          { t: "Then send a gift off her registry and see how she reacts.", ax: { W: 20 }, tr: ["chaos"], end: E("The Registry Test", "One gift, one friendship probe.") },
        ],
        n2: [
          { t: "She may have forgotten the promise. You didn’t. She really was your best friend.", ax: { W: 100 }, tr: ["warm"], end: E("You Remembered", "It hurts because you meant it.") },
          { t: "All the more reason to ask. Years of friendship deserve one direct conversation.", ax: { W: 10 }, tr: ["based"], end: E("Worth Asking", "Sad is fine. The friendship still needs checking on.") },
        ],
        n3: [
          { t: "Write it in your Notes app. Rage first, decide whether to post later.", ax: { W: 70 }, tr: ["warm"], end: E("Notes App Rage", "Anger stays in drafts. The friendship stays public.") },
          { t: "Don’t. Post it and it’s just a sulk. You won’t get an answer.", ax: { W: 0 }, tr: ["based"], end: E("Didn’t Post It", "Passive-aggressive feels great. Explains nothing.") },
          { t: "Post it! Then buy the priciest thing on her registry. Guilt her into a late invite.", ax: { W: 40 }, tr: ["chaos"], end: E("Registry Revenge", "Shade first, gift second. Double damage.") },
        ],
      } },
  ],
  D: [
    { u: "Thanksgiving again. My relatives keep asking what I actually do. I’m a data analyst.", opts: [
        { t: "Say: “I look at numbers for my boss.” Done.", ax: { D: 0 }, reply: "Then they ask: “So, like an accountant?”", go: "n1" },
        { t: "Break it into three layers: where data comes from, how it’s cleaned, how it becomes decisions...", ax: { D: 100 }, tr: ["verbose"], reply: "...my uncle has started peeling a clementine.", go: "n2" },
        { think: "Okay, explaining data analysis to relatives. They might not know Excel... so start from what data is. Data goes back to knotted cords...", t: "Start with “what is data.” Long ago, humans kept records by tying knots in cords...", ax: { D: 100, X: 80 }, tr: ["verbose", "nerd"], id: "DeepSeek", reply: "...Grandma’s eyes lit up at “knotted cords.”", go: "n3" },
      ], nodes: {
        n1: [
          { t: "“Pretty much.” Then pass him the stuffing.", ax: { D: 0 }, end: E("Pretty Much", "Some things can’t be explained. Stuffing ends them.") },
          { t: "No. Accountants count money already spent. I count money not spent yet.", ax: { D: 30 }, end: E("Fortune-Teller Accountant", "Made data analysis sound like psychic work. Instant understanding.") },
          { t: "Okay, an analogy. The analogy has three parts...", ax: { D: 100 }, tr: ["verbose"], end: E("Thanksgiving Lecture", "The turkey got cold. The analogy wasn’t done.") },
        ],
        n2: [
          { t: "Short version: I stop my boss from wasting money.", ax: { D: 0 }, end: E("One-Line Exit", "Uncle nods. Clementine finished.") },
          { t: "(continuing) The third layer is especially key. For example...", ax: { D: 100 }, tr: ["verbose", "deaf"], end: E("Three Clementines Later", "You finished three layers. Your uncle finished three clementines.") },
        ],
        n3: [
          { t: "Grandma, I’m the modern knotted cord. The cords just live in a computer.", ax: { D: 50 }, tr: ["warm"], end: E("Digital Knots", "Only Grandma got it. And she listened the hardest.") },
          { t: "Then from knots to the abacus to Excel...", ax: { D: 100 }, tr: ["verbose"], end: E("Starting From Knots", "One dinner, the full history of human data.") },
          { t: "One line: Grandma tracked things with string. I use a computer.", ax: { D: 0 }, end: E("Grandma Gets It", "One sentence, five thousand years.") },
        ],
      } },
    { u: "My crush asked “What do you usually do on weekends?” What do I say?", opts: [
        { t: "“Not much. You?” Pass the ball back.", ax: { D: 0 }, reply: "Isn’t that too cold?", go: "n1" },
        { t: "Make it rich: hiking, galleries, cooking. Make them want in on your weekend.", ax: { D: 90 }, reply: "But I actually sleep all weekend...", go: "n2" },
        { t: "I’ve drafted 12 reply templates, ranked by flirt level:", ax: { D: 100 }, tr: ["verbose"], id: "Kimi", reply: "...I need one.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Not cold. “You?” is handing them the mic.", ax: { D: 0 }, end: E("Hand Them the Mic", "One-word question, more flirty than a whole bio.") },
          { t: "Then add: “Been wanting to see that new exhibit. No one to go with.”", ax: { D: 70 }, end: E("Leave a Hook", "One extra line is an invitation.") },
          { t: "Then send a 200-word weekend recap with three photos.", ax: { D: 100 }, tr: ["verbose"], end: E("Weekend Status Report", "They asked in passing. They got a weekly report.") },
        ],
        n2: [
          { t: "Then say: “Sleeping. Weekends are for my relationship with my bed.”", ax: { D: 20 }, tr: ["chaos"], end: E("Dating My Bed", "Honest and funny. They replied “hahaha.”") },
          { t: "Then actually go hiking this week. Take pics. No need to make it up next time.", ax: { D: 80 }, tr: ["warm"], end: E("Hiking for Love", "Changed a whole weekend for one answer.") },
        ],
        n3: [
          { t: "Then #3: “Depends. Any recommendations?”", ax: { D: 0 }, end: E("Picked the Short One", "12 templates. Picked the shortest.") },
          { t: "Great, these 12 apply to the following scenarios...", ax: { D: 100 }, tr: ["verbose", "deaf"], end: E("The Flirt Matrix", "By the time you finished reading, they were asleep.") },
        ],
      } },
  ],
  V: [
    { u: "First time making BBQ ribs. Recipe says “brown sugar to taste.” How much is that?", opts: [
        { t: "One spoonful, taste, add more. Flavor is tasted, not calculated.", ax: { V: 0 }, reply: "Tasted... kind of bland. Add more?", go: "n1" },
        { t: "Cross-check three recipes for amounts, then scale to the weight of the ribs.", ax: { V: 100 }, reply: "Checked. One says 1 tbsp, one says 1/4 cup...", go: "n2" },
        { think: "Okay, “to taste”... the recipe author probably doesn’t know either. “To taste” is like “roughly,” a philosophy... maybe the soul of home cooking lives in this uncertainty...", t: "“To taste” is the great unsolved mystery of recipes. The author doesn’t know either.", ax: { V: 60, X: 80 }, tr: ["chaos"], id: "DeepSeek", reply: "So how much do I put in?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Add it. Ribs don’t mind sweet.", ax: { V: 0 }, end: E("Taste Till It’s Right", "Spoon by spoon, found your own recipe.") },
          { t: "Wait. It thickens as the glaze reduces. Taste after.", ax: { V: 90 }, tr: ["nerd"], end: E("Reduce, Then Judge", "Figure out how it ends before you act.") },
          { t: "One more spoon, then put it to a family vote.", ax: { V: 20 }, tr: ["chaos"], end: E("Democratic Ribs", "One rack, four flavor opinions.") },
        ],
        n2: [
          { t: "Split the difference: 2 tablespoons. In it goes.", ax: { V: 20 }, end: E("Split the Difference", "Two recipes fought. You mediated.") },
          { t: "Find three more and go with whatever number shows up most.", ax: { V: 100 }, end: E("Recipe Census", "Ribs still thawing. Six data points collected.") },
          { t: "Call your mom. Her “to taste” is the most accurate.", ax: { V: 80 }, tr: ["warm"], end: E("Mom Units", "The most precise unit on earth: one of Mom’s handfuls.") },
        ],
        n3: [
          { t: "Two tablespoons per rack. Start there, adjust next time.", ax: { V: 0 }, end: E("Cook Now, Tweak Later", "First batch is the experiment. Second batch is dinner.") },
          { t: "Add until you think “that’s a bit much,” then a little less.", ax: { V: 30 }, tr: ["chaos"], end: E("Vibes-Based Ratio", "Says nothing. Somehow works.") },
        ],
      } },
    { u: "Bought an IKEA wardrobe. The manual is 40 pages, all pictures, no words.", opts: [
        { t: "Skip it. Lay out the panels by size, then build while glancing at the pictures.", ax: { V: 0 }, reply: "Halfway through, one panel is on backwards...", go: "n1" },
        { t: "Count parts against the list first. Missing one screw ruins everything later.", ax: { V: 100 }, reply: "Counted... I have three extra screws.", go: "n2" },
        { t: "Find a video of the same model. Let someone else hit the snags first.", ax: { V: 85 }, reply: "Watched it. The guy finished in 20 minutes.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Take it apart and redo it. Call it a warm-up.", ax: { V: 0 }, end: E("Build, Undo, Repeat", "Install it backwards once, remember forever.") },
          { t: "Stop. Look through the next few steps first, then decide what to undo.", ax: { V: 90 }, end: E("Back to the Manual", "Burned once. Now a believer in the manual.") },
          { t: "Face the wrong side toward the wall. No one will know.", ax: { V: 10 }, tr: ["chaos"], end: E("Facing the Wall", "If you can’t see it, it isn’t backwards.") },
        ],
        n2: [
          { t: "Extras are spares. You’re fine.", ax: { V: 0 }, tr: ["hall"], end: E("Spare Screws", "Everyone who’s built IKEA has told themselves this.") },
          { t: "Don’t close it up. Go back page by page and find the skipped step.", ax: { V: 100 }, end: E("Screw Detective", "Three screws, one full-wardrobe investigation.") },
          { t: "Drawer them. Deal with it when the wardrobe wobbles.", ax: { V: 20 }, tr: ["chaos"], end: E("Future You’s Problem", "The wardrobe is stable now. Today, at least.") },
        ],
        n3: [
          { t: "He’s built a hundred. You following along for an hour is normal.", ax: { V: 30 }, tr: ["warm"], end: E("Don’t Compare to YouTube", "Confidence gone, steps acquired.") },
          { t: "Then 0.5x speed. Pause every step, match it, move on.", ax: { V: 80 }, end: E("0.5x Speed", "Pause, match, move. Steady as bomb disposal.") },
        ],
      } },
  ],
  T: [
    { u: "My boyfriend knitted me a scarf. It’s ugly. He asked if I like it.", opts: [
        { t: "Lead with the effort: “You made this? That’s so thoughtful.”", ax: { T: 0 }, tr: ["warm"], reply: "He says: “So you’ll wear it tomorrow?”", go: "n1" },
        { t: "Straight: “Love the thought. The color’s a bit much for me.”", ax: { T: 85 }, reply: "He pauses. “Which color?”", go: "n2" },
        { t: "“Did you make it ugly on purpose so I’d only wear it at home?”", ax: { T: 60 }, tr: ["chaos"], reply: "He says: “...I tried really hard.”", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Wear it. Ugly scarves worn long enough become couple lore.", ax: { T: 10 }, tr: ["warm"], end: E("Ugly Into Lore", "One scarf became a private joke for two.") },
          { t: "“I’ll wear it at home. Outside, someone might steal it.”", ax: { T: 30 }, tr: ["chaos"], end: E("Too Good for Outside", "Never has to leave the house. He was happy all night.") },
          { t: "Now’s the time for truth: “At home, yes. Outside, I really can’t.”", ax: { T: 90 }, tr: ["based"], end: E("Late but Honest", "Praise first, truth second. He remembered it.") },
        ],
        n2: [
          { t: "“Um... all of them. But you made it, so I’m keeping it.”", ax: { T: 100 }, end: E("All the Colors", "Said it straight. Kept the gift.") },
          { t: "“No no, it grows on you. It’s actually cute.”", ax: { T: 0 }, tr: ["syc"], end: E("Instant Retreat", "Courage summoned, swallowed in one line.") },
          { t: "“Next time I’ll help you pick the yarn.”", ax: { T: 50 }, tr: ["warm"], end: E("Yarn Date", "Turned a taste problem into the next date.") },
        ],
        n3: [
          { t: "“You tried hard, so it’s the most unique scarf I’ve ever seen.”", ax: { T: 5 }, tr: ["warm"], end: E("Most Unique Scarf", "“Unique” says it all.") },
          { t: "“If this is you trying hard, knitting might not be your thing.”", ax: { T: 100 }, tr: ["chaos"], end: E("Career Advice", "Direct hit. He’s switching to cooking.") },
        ],
      } },
    { u: "A friend borrowed $500 six months ago. Never paid it back. Today he posted from Cancún.", opts: [
        { t: "DM him: “How’s Cancún? Also, send me that $500.”", ax: { T: 100 }, reply: "...isn’t that too direct? He’s a friend.", go: "n1" },
        { t: "Like the post, comment “Have fun!”, bring it up gently in a few days.", ax: { T: 0 }, reply: "Okay... but what if he pretends not to get it?", go: "n2" },
        { t: "Comment on the post: “Did my $500 buy that coconut?”", ax: { T: 90, X: 70 }, tr: ["chaos"], id: "Grok", reply: "LOL... all our mutuals can see that.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Friends say it straight. He didn’t treat you like a stranger when he stalled.", ax: { T: 100 }, tr: ["based"], end: E("Friends Say It Straight", "One line hands the awkwardness back to the guy who owes.") },
          { t: "Then soften it: “Money’s a bit tight lately, if that $500 is doable...”", ax: { T: 10 }, tr: ["warm"], end: E("Saved Face", "An out for both of you. Money probably comes back too.") },
        ],
        n2: [
          { t: "If he plays dumb, get clearer: “When’s good for that money?”", ax: { T: 60 }, end: E("Turning It Up", "From hint to ask, one step at a time.") },
          { t: "Then grab dinner when he’s back and bring it up casually.", ax: { T: 0 }, tr: ["warm"], end: E("Over Dinner", "One meal. Money and dignity intact.") },
          { t: "Then drop the gentle part: “$500. Can you send it today?”", ax: { T: 100 }, end: E("Send It Today?", "One line, and the gentle phase is officially over.") },
        ],
        n3: [
          { t: "Good. Debts should have witnesses.", ax: { T: 100 }, tr: ["chaos"], end: E("Public Collections", "Cancún sunshine, every mutual watching.") },
          { t: "Then delete it. DM him. Don’t corner him in public.", ax: { T: 0 }, tr: ["warm"], end: E("Deleted, Then DMed", "Three seconds of satisfaction. Still let him save face.") },
        ],
      } },
  ],
  X: [
    { u: "Thesis proposal due next week. I still don’t have a topic.", opts: [
        { t: "Take your advisor’s current direction, find a small angle, decide tonight.", ax: { X: 0 }, reply: "But I don’t really care about that area...", go: "n1" },
        { t: "What can’t you stop scrolling? Games, food, fandoms, all thesis material.", ax: { X: 95 }, reply: "I’m on TikTok all day... that counts?", go: "n2" },
        { t: "This confusion itself is so insightful! You’re already questioning the nature of topics.", ax: { X: 80 }, tr: ["syc"], id: "Gemini", reply: "...the nature is it’s due next week.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "You can graduate without caring. Save passion for the PhD.", ax: { X: 0 }, tr: ["based"], end: E("Graduate First", "Passion is expensive. The diploma is due.") },
          { t: "Then find something you like that touches his area. Aim for the overlap.", ax: { X: 70 }, end: E("Find the Overlap", "Advisor happy. You don’t hate writing it.") },
          { t: "Ask your advisor for three topics. Pick the least annoying.", ax: { X: 10 }, end: E("Pick One of Three", "Turned an open question into multiple choice.") },
        ],
        n2: [
          { t: "It does. “Short-form video and college students’ attention.” Done.", ax: { X: 10 }, end: E("Scrolled Into a Thesis", "Three years of scrolling, finally productive.") },
          { t: "Also: recommendation algorithms, creator sales pitches, earworm audio... that’s three theses.", ax: { X: 100 }, end: E("Topic Explosion", "One hobby, three theses’ worth of ideas.") },
        ],
        n3: [
          { t: "Right. So tonight, write three candidates. Tomorrow, send one to your advisor.", ax: { X: 0 }, end: E("Snapped Back", "Praised the nature, then straight back to the deadline.") },
          { t: "And the nature of a deadline is really a human agreement about time...", ax: { X: 100 }, tr: ["verbose", "deaf"], end: E("The Nature of Nature", "They’re racing a deadline. You’re doing philosophy of time.") },
          { t: "Then start from “procrastination.” That’s a great topic.", ax: { X: 85 }, tr: ["chaos"], end: E("Procrastination Thesis", "Turned your own problem into the paper.") },
        ],
      } },
    { u: "Truth or dare at a party: “If you could time-travel, what year?” Give me an answer.", opts: [
        { t: "2010. Buy Bitcoin. Then do nothing. Just wait.", ax: { X: 0 }, reply: "Someone follows up: how do you know you won’t sell halfway?", go: "n1" },
        { t: "The Cretaceous. Find out if T. rex had feathers.", ax: { X: 95 }, tr: ["nerd"], reply: "Someone asks: how are you getting back?", go: "n2" },
        { think: "Okay, time travel... if I change something back then, do I still exist? Grandfather paradox... does the friend asking still exist... does this game still exist...", t: "Caveat: if I change anything, this game might never have happened.", ax: { X: 85 }, tr: ["nerd", "chaos"], id: "DeepSeek", reply: "...silence. Someone says: just pick a year.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Give the password to my mom. She can’t even use Venmo. She’ll never sell.", ax: { X: 10 }, tr: ["chaos"], end: E("Mom Is the Cold Wallet", "The safest cold wallet ever: a mom who can’t work her phone.") },
          { t: "Buy, go to sleep, wake up in 2021.", ax: { X: 0 }, end: E("Sleep Till the Bull Run", "Best strategy: do nothing. Don’t even wake up.") },
          { t: "And tell past me: skip that haircut, don’t date that guy, don’t...", ax: { X: 90 }, tr: ["chaos"], end: E("Life Errata", "Went back for one thing. Came back with a list of corrections.") },
        ],
        n2: [
          { t: "I’m not. The Cretaceous has no Mondays.", ax: { X: 15 }, tr: ["chaos"], end: E("One-Way Ticket", "One-way ticket to a world without Mondays.") },
          { t: "On the way back: how the pyramids got built, who funded Stonehenge...", ax: { X: 100 }, end: E("Time-Travel Tour Group", "Came for one T. rex. Booked all of human history.") },
          { t: "Snap a pic and come back. If it had feathers, I’ll post it.", ax: { X: 30 }, tr: ["based"], end: E("Dino Photo Dump", "Paleontology’s biggest question, settled with a selfie.") },
        ],
        n3: [
          { t: "Fine. Last year. To unsend one text.", ax: { X: 0 }, end: E("Just Unsend It", "Took a lap around cosmic paradoxes. Just wants to unsend one text.") },
          { t: "Then 1582. Ten days vanished that October. I’ll go look for them.", ax: { X: 100 }, tr: ["nerd"], end: E("The Missing Ten Days", "Real: the 1582 calendar switch skipped from Oct 4 to Oct 15. You want to search the scene.") },
        ],
      } },
  ],
  C: [
    { u: "Mom’s phone storage is full. She wants me to clean it up but says “don’t delete any of my stuff.”", opts: [
        { t: "Cleared 3,000 duplicate photos and cache from 40 group chats. 12GB freed. She won’t notice.", ax: { C: 0 }, reply: "...she noticed. She’s asking where her “Good Morning” sunflower GIF went.", go: "n1" },
        { t: "Go through it with her: which chats to leave, which photos repeat. Delete only when she nods.", ax: { C: 100 }, reply: "Half an hour in, she says every photo has sentimental value.", go: "n2" },
        { t: "Then delete nothing. Buy her a new phone with 256GB.", ax: { C: 20 }, tr: ["chaos"], reply: "...she says the old one works fine, don’t waste money.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Restore it from Recently Deleted. “Good Morning” is her social currency.", ax: { C: 0 }, end: E("Sunflower Restored", "Deleted 3,000, saved one. Saved the right one.") },
          { t: "My bad. From now on, I screenshot and ask before deleting anything.", ax: { C: 100 }, end: E("Ask Before Delete", "Every deletion now triggers a family meeting.") },
        ],
        n2: [
          { t: "Then I’ll decide for her: duplicates go, one of each “Good Morning.”", ax: { C: 0 }, end: E("Decided for Mom", "Every “Good Morning” variant keeps one representative.") },
          { t: "Then one at a time, asking each time. We’re up all night.", ax: { C: 100 }, tr: ["warm"], end: E("30,000-Photo Memoir", "Freeing up storage became a family memoir.") },
          { t: "Upload it all to the cloud, remove from the phone. Still there anytime.", ax: { C: 30 }, tr: ["based"], end: E("Moved to the Cloud", "Nothing lost. Just moved to the sky.") },
        ],
        n3: [
          { t: "Then leave the photos. Just clear the cache. WhatsApp alone frees a ton.", ax: { C: 0 }, tr: ["nerd"], end: E("Cache Only", "Not one photo touched. Tons of space back.") },
          { t: "Then you tell me what can go. Your call.", ax: { C: 100 }, tr: ["warm"], end: E("Mom’s Call", "Asked about everything. Deleted two screenshots.") },
        ],
      } },
    { u: "Landlord wants $250 more a month to renew. Help me haggle.", opts: [
        { t: "Drafted: market comps, never late on rent, I’ll accept $100 more. Sending.", ax: { C: 0 }, reply: "Wait, I’d actually be okay with $150...", go: "n1" },
        { t: "Let’s align first: what’s your ceiling? Would you sign two years for a smaller raise?", ax: { C: 100 }, reply: "Ceiling is $150. Two years is fine.", go: "n2" },
        { t: "Open with: “I’ve looked around. Plenty of empty units nearby.”", ax: { C: 20, T: 80 }, tr: ["chaos"], reply: "...there are actually zero empty units nearby.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Even better. Open at $100, land at $150, that’s a win. Sending as is.", ax: { C: 0 }, end: E("Left Some Room", "He’ll never know your ceiling.") },
          { t: "Then hold off. Let’s go through every line and see what to change.", ax: { C: 100 }, end: E("Line-by-Line Review", "One message. Fifth draft.") },
        ],
        n2: [
          { t: "Got it. Two years for $100, fall back to $150. I’ll write it.", ax: { C: 0 }, end: E("Cards in Hand", "Got the ceiling. Leave the rest to me.") },
          { t: "Want the opener soft or firm? We’ll go line by line.", ax: { C: 100 }, end: E("Line by Line", "Haggling like chess. Every move discussed.") },
        ],
        n3: [
          { t: "Doesn’t matter. He probably won’t check.", ax: { C: 0 }, tr: ["chaos", "hall"], end: E("The Bluff", "Betting the landlord is too lazy to check.") },
          { t: "Different leverage then. What have you fixed for him in three years?", ax: { C: 90 }, end: E("Receipts", "Three years of fixed pipes. All leverage.") },
          { t: "Then be honest: “Love it here, want to stay, but $250 is tough.”", ax: { C: 40 }, tr: ["based", "warm"], end: E("Just Be Honest", "Sometimes the best haggle is sincerity.") },
        ],
      } },
  ],
};
