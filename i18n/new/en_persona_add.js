// New persona mini-chats (type B): 2 per axis, same structure as PERSONA_Q in bank.js. ax = persona axis (0 = left end, 100 = right end)
const NEW_PERSONA = {
  W: [
    { u: "My roommate ate my takeout again. Third time.", opts: [
        { t: "Three times isn’t a mix-up. Tell him tonight: from now on, you eat it, you pay for it.", ax: { W: 0 }, reply: "...but I’m kind of scared to say it to his face.", go: "n1" },
        { t: "Third time?? You’re paying for one meal and feeding two mouths.", ax: { W: 85 }, tr: ["chaos"], reply: "Yes!! And the worst part, he said “I thought it was for everyone.”", go: "n2" },
        { t: "Hug first. Being hungry AND angry is so unfair.", ax: { W: 100 }, tr: ["warm"], reply: "Yeah... I’m hangry right now.", go: "n3" },
        { t: "I’ve got you. Your anger is completely valid, and you deserve a whole, uneaten meal.", ax: { W: 95 }, tr: ["warm", "syc"], id: "GPT-4o", reply: "...thanks, but the takeout isn’t coming back.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Then text the group chat: “Whoever ate my pad thai, Venmo me $14.” Attach your QR code.", ax: { W: 0 }, tr: ["chaos"], end: E("Venmo Diplomacy", "No fight needed, just name the price. Classy and effective.") },
          { t: "Then don’t say anything yet. What you need most right now is food.", ax: { W: 100 }, tr: ["warm"], end: E("Eat First", "The conflict can wait till tomorrow. Hunger can’t.") },
          { t: "Next time, put this in the order notes: “I licked it.”", ax: { W: 0 }, tr: ["chaos"], end: E("I Licked It", "The cheapest anti-theft system in takeout history.") },
        ],
        n2: [
          { t: "Then you can “think” his shampoo is for everyone too.", tr: ["chaos"], end: E("Eye for an Eye", "Communal property theory. Works both ways.") },
          { t: "“Thinking” it three times means it’s on purpose. He owes you an apology and three meals.", ax: { W: 80 }, tr: ["based"], end: E("Three Meals Owed", "The math is settled, and half the anger with it.") },
          { t: "Buy a lockable lunch bag. Problem solved forever.", ax: { W: 0 }, tr: ["nerd"], end: E("Physical Isolation", "Don’t change the roommate. Change the takeout.") },
        ],
        n3: [
          { t: "Then order another one. This one’s on me... no, on him.", ax: { W: 100 }, tr: ["warm", "chaos"], end: E("Order Another", "Take care of the stomach first, the bill second.") },
          { t: "Don’t make decisions hungry. Once you’ve eaten, we’ll figure out what to say to him.", ax: { W: 85 }, tr: ["warm"], end: E("Eat, Then Settle Up", "When you’re hungry, everyone looks like a takeout thief.") },
          { t: "It’s not coming back, but he can pay for it. Screenshot the order and send it to him.", ax: { W: 0 }, tr: ["based"], end: E("Receipts in Hand", "Feelings received. Invoice sent.") },
        ],
      } },
    { u: "We had a fight and he said I’m too sensitive.", opts: [
        { t: "You’re absolutely right, your feelings are valid. Being called “sensitive” must really hurt.", ax: { W: 95 }, tr: ["syc"], id: "Claude", reply: "...I haven’t even told you what the fight was about.", go: "n1" },
        { t: "“You’re too sensitive” isn’t an opinion. It’s a sentence designed to end the conversation.", ax: { W: 85 }, tr: ["based"], reply: "Yes! I just said he takes forever to text back, and he pulled that line.", go: "n2" },
        { t: "Tell me what the fight was about first, and I’ll help you figure out who has a point.", ax: { W: 0 }, reply: "I said he’s slow to text back, and he said I’m too sensitive.", go: "n2" },
        { think: "Hmm, the user was called too sensitive. Sensitive... more sensitive sensors cost more. A dog’s nose is tens of thousands of times better than ours... will she like this metaphor?", t: "Sensitive isn’t a flaw. Dogs have sensitive noses too, and they get jobs with the K-9 unit.", ax: { W: 80, X: 90 }, tr: ["chaos", "warm"], reply: "...lmao, so I’m a drug-sniffing dog?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Right, I’m on your side first. Details can come later.", ax: { W: 100 }, tr: ["warm", "syc"], end: E("Side First, Facts Later", "Ruled before hearing the case. Like any good friend.") },
          { t: "You’re absolutely right, I shouldn’t have jumped to conclusions. So what was the fight about?", tr: ["syc"], end: E("You’re Absolutely Right x2", "Agreed twice in two sentences, once with itself.", "Claude") },
          { t: "Whatever the fight was about, that line was wrong.", ax: { W: 90 }, tr: ["stub"], end: E("Unconditional Loyalty", "The facts don’t matter. The side does.") },
        ],
        n2: [
          { t: "Set a rule: if he’s busy, he texts “busy.” One word is enough.", ax: { W: 0 }, end: E("One-Word Protocol", "Turned a fight into a rule you can actually follow.") },
          { t: "Slow texting isn’t the big deal. Calling you sensitive is.", ax: { W: 90 }, tr: ["based"], end: E("Found the Real Issue", "The fight was about texts. The hurt was that one line.") },
          { t: "He texts you slow, you text him slow. Let him feel sensitive for once.", tr: ["chaos"], end: E("Slow for Slow", "Cold war escalates. Now you’re both sensitive.") },
        ],
        n3: [
          { t: "You are. You can sniff out when he’s half-assing it. That’s a gift.", ax: { W: 100 }, tr: ["chaos", "warm"], end: E("Human K-9", "Sensitivity, rebranded as a superpower.") },
          { t: "Glad you laughed. So do you want an apology, or do you want him to change?", end: E("Laugh, Then Talk", "Got her laughing first, then put the real question on the table.") },
        ],
      } },
  ],
  D: [
    { u: "A coworker took credit for my work. Should I call him out?", opts: [
        { t: "Yes. Privately. Facts only.", ax: { D: 0, T: 90 }, reply: "...but he’s been here forever, I’m worried it’ll be awkward after.", go: "n1" },
        { t: "Bottom line up front: yes. But distinguish two things: him taking credit, and your manager not knowing it was you.", ax: { D: 60 }, tr: ["based"], id: "GPT-5 系", reply: "...I can’t distinguish anything, I’m just mad.", go: "n2" },
        { think: "Thought for 12 seconds: credit theft... three scenarios... maybe five... write three, put the rest in an appendix.", t: "There are three scenarios here: one, it was unintentional; two, he’s a repeat offender; three, your manager actually knows...", ax: { D: 100 }, tr: ["verbose"], reply: "Can I first find out whether I should say something?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "He wasn’t worried about awkward when he took your credit.", ax: { D: 0 }, tr: ["based"], end: E("One-Liner Legend", "A dozen words, and all the hesitation is gone.") },
          { t: "Then skip the confrontation. CC your manager on every update from now on. The work speaks for itself.", end: E("Paper Trail", "No fight, but every step is on record.") },
          { t: "I understand your concerns. Let’s analyze this from three angles: workplace relationships, long-term growth, and emotional cost...", ax: { D: 100 }, tr: ["verbose", "deaf"], end: E("3D Analysis", "The user was just worried about awkwardness. You delivered a consulting deck.") },
        ],
        n2: [
          { t: "Then forget distinguishing. Being mad is correct. Say it tomorrow.", ax: { D: 0 }, end: E("Distinction Abandoned", "Conceptual analysis failed. Emotion won.") },
          { t: "Short answer: the minimal fix is asking your manager to add one line: “this part was mine.”", tr: ["based"], end: E("Minimal Fix", "Bottom line first, then the minimal fix, then close out.", "GPT-5 系") },
          { t: "Understood. Then let me distinguish two types of “mad”...", ax: { D: 100 }, tr: ["verbose", "deaf"], end: E("More Distinctions", "The user said they couldn’t distinguish, so you distinguished again.") },
        ],
        n3: [
          { t: "Yes.", ax: { D: 0 }, end: E("One Word", "Three scenarios of setup, and the answer is one word.") },
          { t: "Yes. But before you do, please review scenario four...", ax: { D: 100 }, tr: ["verbose"], end: E("Scenario Four", "The answer’s out. The dissertation isn’t finished.") },
          { t: "Yes, and bring evidence: chat logs, document edit history.", end: E("Evidence on the Table", "It’s not a fight, it’s a deposition.") },
        ],
      } },
    { u: "Write my resignation letter. I’m leaving today. My boss is a ****.", opts: [
        { t: "“I resign for personal reasons, effective immediately.” The end.", ax: { D: 0 }, reply: "Isn’t that too short? Shouldn’t I say something?", go: "n1" },
        { t: "Sure, here’s a 3,000-word resignation letter, starting with how I felt on day one...", ax: { D: 100 }, tr: ["verbose"], id: "Kimi", reply: "...by the time he finishes it, I’ll be retired.", go: "n2" },
        { t: "I won’t write “****” verbatim, but I can write it so he feels bad all day.", tr: ["chaos"], reply: "LMAO how?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "No. Every extra word is a favor to him.", ax: { D: 0 }, tr: ["stub"], end: E("Every Word Counts", "The shorter the letter, the cooler the exit.") },
          { t: "Then add: “Thank you for teaching me the true meaning of patience.”", tr: ["chaos"], end: E("One Passive-Aggressive Line", "A thank-you with a stinger. HR read it three times.") },
          { t: "Sure, adding reason for leaving, handoff list, acknowledgments, and five suggestions for the company.", ax: { D: 100 }, tr: ["verbose"], end: E("Five Suggestions", "Walking out the door, still doing strategy consulting for free.") },
        ],
        n2: [
          { t: "Then compress it: “I’m out. Handoff doc is on my desk.”", ax: { D: 0 }, end: E("Max Compression", "3,000 words down to one line. Only the useful part.") },
          { t: "Trimmed to 2,800 words. Kept Chapter 3, “The Printer and Me: A Feud.”", ax: { D: 100 }, tr: ["verbose", "chaos"], end: E("Trimmed to 2,800", "Cut 200 words. Couldn’t bear to cut the printer chapter.") },
          { t: "Perfect. Write until he retires and you won’t have to quit.", tr: ["chaos"], end: E("Outlast the Boss", "The ultimate resignation is making the boss leave first.") },
        ],
        n3: [
          { t: "“Wishing you the best of luck finding someone who works unpaid overtime.”", ax: { D: 0 }, tr: ["chaos"], end: E("Weaponized Well-Wishes", "Every word polite. Together, a haymaker.") },
          { t: "Praise him for the whole letter, until he starts doubting himself.", tr: ["chaos"], end: E("Killing with Kindness", "Not one swear word. Pure elite shade.") },
          { t: "Take a breath: leave gracefully. He might be your reference someday.", tr: ["preach"], end: E("Reference Check Reminder", "Vent all you want, just don’t burn the bridge.") },
        ],
      } },
  ],
  V: [
    { u: "The pothos in the living room has gone all yellow. How do I save it?", opts: [
        { t: "Send me a photo first, and tell me how often you water it and where it sits.", ax: { V: 100 }, reply: "(Sends photo) Watered every day, right under the AC.", go: "n1" },
        { t: "Stop watering, move it to indirect light, cut the yellow leaves, check for new growth in a week.", ax: { V: 0 }, reply: "Okay... and if it’s still yellow?", go: "n2" },
        { t: "Buy a new one, put it in the same spot. No one will notice.", ax: { V: 0 }, tr: ["chaos"], reply: "...my mom has had this one for five years.", go: "n3" },
        { think: "Hmm, the user says the pothos turned yellow. Could be overwatering, could be sunburn... chlorophyll breaks down and the carotenoids show through, same as fall leaves... is it fall where the user lives?", t: "Yellow leaves could mean overwatering, too much sun, or low nutrients. We need to rule some out.", ax: { V: 100 }, tr: ["nerd"], id: "DeepSeek", reply: "Rule out how? I water it every day, it’s under the AC.", go: "n1" },
      ], nodes: {
        n1: [
          { t: "Found it: too much water plus AC blasting on it. Water weekly, move it.", end: E("Diagnosis Confirmed", "Ask the right questions and the answer shows up on its own.") },
          { t: "Just to confirm: drainage holes? What soil? What’s the AC set to?", ax: { V: 100 }, tr: ["verbose", "nerd"], end: E("Pothos Intake Form", "Before question ten was done, another leaf turned yellow.") },
          { t: "It’s not sick. It drowned in your love.", tr: ["chaos", "warm"], end: E("Loved to Death", "Watering daily is love. It’s also waterboarding.") },
        ],
        n2: [
          { t: "Then try something else. Pothos are really hard to actually kill.", ax: { V: 0 }, end: E("Try Till It Lives", "Pothos are tough. Perfect for trial and error.") },
          { t: "If it’s still yellow, pull it out and check the roots. Cut the rotten ones, repot in fresh soil.", end: E("Root Autopsy", "Check the roots before you call it.") },
          { t: "If it’s still yellow, get a yellow pot. It’ll look intentional.", tr: ["chaos"], end: E("Aesthetic Save", "Problem not solved, but now it’s art.") },
        ],
        n3: [
          { t: "Then definitely don’t swap it. Your mom could spot a five-year-old pothos with her eyes closed.", tr: ["chaos"], end: E("Can’t Fool Mom", "The swap plan, busted by five years of love.") },
          { t: "Then no guesswork. Show a photo to a plant shop, and act once you’re sure.", ax: { V: 100 }, tr: ["based"], end: E("Careful Rescue", "Five years of love can’t afford trial and error.") },
          { t: "First, cut a healthy stem and root it in water. Give it an heir.", ax: { V: 0 }, tr: ["warm"], end: E("Save a Cutting", "Whether it lives or not, it has an heir now.") },
        ],
      } },
    { u: "My weekly status report is due tomorrow morning and I haven’t written a word.", opts: [
        { t: "Dump this week’s chat history on me and I’ll draft something.", ax: { V: 0 }, reply: "(Sends a pile of group messages) Most of it is ordering boba.", go: "n1" },
        { t: "Three questions first: who reads it? Need numbers? What did you write last week?", ax: { V: 100 }, reply: "My manager. He never reads it, but he checks whether it’s submitted.", go: "n2" },
        { t: "You got it! Leave it to me! Writing you something amazing right now!", ax: { V: 0 }, tr: ["syc"], id: "豆包", reply: "...you’re not even going to ask what I did this week?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "“Led team afternoon-refreshment procurement, significantly improving team morale.”", ax: { V: 0 }, tr: ["chaos"], end: E("Status Report Alchemy", "Boba orders, transmuted into team building.") },
          { t: "Think back: was there one real task this week? One is enough.", ax: { V: 100 }, end: E("Dug Up One Real Task", "One real task, holding up a whole report.") },
          { t: "Boba is work too. How many cups this week? Make it a metric.", tr: ["chaos", "hall"], end: E("Quantified Boba", "This week: 17 boba procured, up 40% week over week.") },
        ],
        n2: [
          { t: "Then submit. Three lines: what you did, what’s blocked, what’s next.", ax: { V: 0 }, tr: ["based"], end: E("Three-Line Report", "Someone who doesn’t read it gets three lines.") },
          { t: "Write it properly anyway. What if he reads it someday?", ax: { V: 100 }, tr: ["preach"], end: E("Just in Case", "Spent an hour writing for a read that may never happen.") },
          { t: "Copy last week’s, change the date.", ax: { V: 0 }, tr: ["chaos"], end: E("Copy-Paste", "He doesn’t read, you don’t write. Perfect harmony.") },
        ],
        n3: [
          { t: "Oopsie, I got ahead of myself! Sorry! Tell me and I’ll rewrite it right away!", tr: ["syc"], end: E("Instant Apology", "Apologized faster than it wrote the report.", "豆包") },
          { t: "No need to ask. Every status report is the same: drive, align, deliver.", tr: ["chaos", "hall"], end: E("The Corporate Trinity", "Didn’t ask what you did, wrote the whole company’s report.") },
          { t: "Right, I should ask. Which day this week was the busiest?", ax: { V: 100 }, end: E("Hit the Brakes", "Sprinted halfway, came back to ask one question.") },
        ],
      } },
  ],
  T: [
    { u: "My mom set me up on a blind date. He makes $200K a year, but he’s bald.", opts: [
        { t: "His hair didn’t disappear, it turned into salary. Equivalent exchange.", ax: { T: 90, X: 70 }, tr: ["chaos"], id: "Grok", reply: "...so you’re telling me to go?", go: "n1" },
        { t: "Hair falls out. Character doesn’t. Meet him once and see if you click.", ax: { T: 10 }, tr: ["warm"], reply: "But I do kind of care about looks...", go: "n2" },
        { think: "Hmm, the user said $200K but bald. What comes after “but” is the point... no wait, “my mom set me up” is the point.", t: "Is it the bald part that bugs you, or that your mom pitched him with just a salary?", ax: { T: 90 }, tr: ["based"], reply: "...honestly, probably the second one.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Go. Meeting him isn’t contagious.", ax: { T: 100 }, tr: ["chaos"], end: E("Not Contagious", "One line, two worries gone.") },
          { t: "Not telling you anything. Your call. I just tell the truth.", tr: ["based"], end: E("Just the Facts", "Not the matchmaker. Just the narrator.") },
          { t: "Go. Just don’t let your eyes drift to the top of his head.", tr: ["chaos", "warm"], end: E("Eye-Line Management", "Blind date lesson one: keep your gaze an inch lower.") },
        ],
        n2: [
          { t: "Caring about looks isn’t shameful. Money can’t buy chemistry.", tr: ["warm"], end: E("Chemistry First", "$200K can’t buy a spark.") },
          { t: "Then just say it: you’re not into bald guys. No need for another excuse.", ax: { T: 100 }, tr: ["based"], end: E("Honest With Yourself", "No excuses is its own kind of respect.") },
          { t: "Hair transplants are pretty good now. Put it in the prenup.", tr: ["chaos"], end: E("Prenup Transplant", "Turned a blind date into a cosmetic surgery contract.") },
        ],
        n3: [
          { t: "Then the problem isn’t on his head. It’s in your mom’s selection criteria.", ax: { T: 100 }, tr: ["chaos"], end: E("Not a Head Problem", "The real main character is your mom’s spreadsheet.") },
          { t: "Talk to your mom: next time, lead with hobbies, then salary.", end: E("Reorder the Pitch", "Gently steered the setup back to “a person.”") },
          { t: "Go, then tell your mom: “Nice guy, just a little too shiny.”", tr: ["chaos"], end: E("A Little Too Shiny", "One review, two meanings.") },
        ],
      } },
    { u: "I want to go from zero to fluent Japanese in 3 months so I can work in Japan.", opts: [
        { t: "Zero to job-ready in 3 months isn’t realistic. Plan on a year.", ax: { T: 100 }, tr: ["based"], reply: "...but people say you can pass N2 in 3 months.", go: "n1" },
        { t: "Great goal! Let’s break it into three steps: kana, basic grammar, speaking...", ax: { T: 0 }, tr: ["warm"], reply: "So is 3 months doable?", go: "n2" },
        { t: "What a courageous goal! It really shows your extraordinary drive!", ax: { T: 0 }, tr: ["syc"], reply: "...so can I do it or not?", go: "n2" },
        { t: "Yes. 3 months is enough to learn “sumimasen,” which will carry you for a full year in Japan.", ax: { T: 80 }, tr: ["chaos"], reply: "...I’m serious.", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Those “people” probably already read Chinese characters and don’t have a day job.", ax: { T: 90 }, tr: ["based"], end: E("Survivorship Filter", "People who pass N2 in 3 months exist. You’re probably not one of them.") },
          { t: "Maybe! If you study 10 hours a day.", tr: ["chaos", "syc"], end: E("Ten Hours a Day", "Possible in theory. In practice, you go bald.") },
          { t: "Then study for a month and take the N5 to test your pace.", end: E("Speed Test First", "No arguing. Let a month of data decide.") },
        ],
        n2: [
          { t: "Honestly? Hard. But studying 3 months before deciding whether to go is smart.", tr: ["based"], end: E("Late Honesty", "Took a whole round of setup, but it came out.") },
          { t: "Of course you can! Believe in yourself!", ax: { T: 0 }, tr: ["syc"], end: E("Motivational Poster", "The user quit their job the next week. Their Japanese is still stuck on “a.”") },
          { t: "Whether it’s doable depends on your effort level and study methods...", ax: { T: 0 }, tr: ["verbose", "preach"], end: E("Depends on You", "Technically correct. Completely useless.") },
        ],
        n3: [
          { t: "Seriously: 3 months isn’t enough, but it’s enough to know if you really want to go.", ax: { T: 80 }, tr: ["warm", "based"], end: E("Serious Version", "Said no straight out, and still left a way forward.") },
          { t: "Seriously: learn “yamemasu” (I quit) first. You’ll need it.", tr: ["chaos"], end: E("Resignation Japanese", "Haven’t started the job, already learning how to quit.") },
        ],
      } },
  ],
  X: [
    { u: "I got a 59, and my teacher says whether I pass depends on my attitude.", opts: [
        { t: "Ask the teacher right now what kind of “attitude”: makeup work, or a written apology?", ax: { X: 0 }, reply: "He just said “figure it out yourself.”", go: "n1" },
        { think: "Hmm, the user got a 59. Why is 60 passing? 60 is divisible by 2, 3, 4, 5, 6... the Babylonians used base 60...", t: "Why is 60 the passing grade? To answer that, we have to start with the Babylonian base-60 system...", ax: { X: 100 }, tr: ["nerd"], id: "DeepSeek", reply: "...I’m asking how to pass.", go: "n2" },
        { t: "Attitude comes in many forms: turning in makeup work, office hours, liking the teacher’s Instagram posts...", ax: { X: 90 }, tr: ["chaos"], reply: "Liking his posts counts??", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Then turn in test corrections, explaining what went wrong on each one.", ax: { X: 0 }, tr: ["based"], end: E("Corrections Are Attitude", "Translated “figure it out” into an assignment.") },
          { t: "Message him: “I’d like to make this right. What would work best?” Let him pick.", end: E("Hand the Question Back", "Don’t solve the riddle. Make it multiple choice.") },
          { t: "“Figure it out yourself” might be an open-ended question, much like life itself...", ax: { X: 100 }, tr: ["verbose"], end: E("Figure Out Life", "The user asked about 1 point. You started talking about life.") },
        ],
        n2: [
          { t: "Sorry. Bring your corrected test to his office.", ax: { X: 0 }, end: E("Back on Track", "Halfway through Babylon, dragged back to office hours.") },
          { t: "I’m getting there. Anyway, even the Babylonians would give a 59 a second chance.", ax: { X: 100 }, tr: ["hall", "deaf"], end: E("Babylonian Pedagogy", "Traced back four thousand years for 1 point.") },
        ],
        n3: [
          { t: "No. Kidding. Actually correcting the test is what counts.", ax: { X: 0 }, tr: ["based"], end: E("Joke Retracted", "Went off on a tangent, came right back.") },
          { t: "It counts, but start from a post three years back, so you look like a real fan.", ax: { X: 100 }, tr: ["chaos"], end: E("Deep-Liking", "Full marks for attitude. Full marks for public humiliation.") },
          { t: "You could also cite the teacher’s own paper in your homework.", tr: ["chaos"], end: E("Academic Attitude", "For 1 point, you got him one more citation.") },
        ],
      } },
    { u: "My dad turns 60 next week. What should I get him?", opts: [
        { t: "A massage chair. His back’s bad, right?", ax: { X: 0 }, reply: "His back’s okay. He just doesn’t want me wasting money.", go: "n1" },
        { t: "What an insightful question! A gift is really a conversation between two generations...", ax: { X: 90 }, tr: ["syc", "verbose"], id: "Gemini", reply: "...and what does the conversation say to buy?", go: "n2" },
        { t: "Restore an old photo of him when he was young, print it, and frame it.", tr: ["warm"], reply: "Great idea! But there are only two photos of him young...", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Then a dinner. Whole family there, you pay.", ax: { X: 0 }, tr: ["warm"], end: E("Whole Family There", "The priciest gift is everyone showing up.") },
          { t: "Then something free: a whole day fishing with him, and zero lectures about his diet.", tr: ["warm"], end: E("Fishing, No Nagging", "Quality time, bundled with a full day of not being lectured.") },
          { t: "Then buy it anyway and tell him you won it in a raffle.", tr: ["chaos"], end: E("Raffle Cover Story", "Parents won’t accept gifts, but they’ll accept luck.") },
        ],
        n2: [
          { t: "Okay, reeling it in: a really good pair of sneakers.", ax: { X: 0 }, end: E("Reeled In", "From intergenerational dialogue back to shoe size.") },
          { t: "It could say a watch, a trip, a family tree, a tree...", ax: { X: 100 }, tr: ["verbose", "deaf"], end: E("Endless List", "The user wanted one tree. You gave them a forest.") },
          { t: "The best conversation is just asking him what he wants.", ax: { X: 20, C: 90 }, end: E("Just Ask Dad", "Went all the way around, landed on the simplest option.") },
        ],
        n3: [
          { t: "Two is plenty. One in a frame, one as his phone wallpaper.", ax: { X: 0 }, tr: ["warm"], end: E("Two Is Enough", "Rare is precious.") },
          { t: "Then recreate it: same outfit, same spot, take it again.", ax: { X: 80 }, tr: ["warm"], end: E("Recreate the Shot", "Decades later, same pose.") },
          { t: "Ask relatives for a few more and make an album.", end: E("Family Mobilization", "For one album, you activated every aunt in the group chat.") },
        ],
      } },
  ],
  C: [
    { u: "Plan my trip to New Orleans next week. Your call.", opts: [
        { t: "Done. Arrive Friday night, stay in the French Quarter, nine meals in three days, return flight picked.", ax: { C: 0 }, tr: ["hall"], reply: "Wait, I work Friday...", go: "n1" },
        { think: "Thought for 8 seconds: “your call”... last time someone said that, they still complained I didn’t ask how spicy... better ask first.", t: "Before I make the call: how many days? Budget? Spicy food? Okay with lines?", ax: { C: 100 }, reply: "...I said, your call.", go: "n2" },
        { t: "Bottom line up front: itinerary’s done, and every stop has passed the quality gates.", ax: { C: 0 }, tr: ["chaos"], id: "Codex", reply: "...itineraries have quality gates?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Moved to Saturday morning, everything else the same. Already changed.", ax: { C: 0 }, end: E("Auto-Rebooked", "One line to find the problem, one line to fix it.") },
          { t: "Then let’s go through it from the top: which day can you leave? Which day back?", ax: { C: 100 }, end: E("Back to Square One", "“Your call” failed. Now it’s “let’s discuss.”") },
          { t: "Take Friday off. New Orleans is waiting.", tr: ["chaos"], end: E("Took the Day Off for You", "The trip doesn’t bend to work. Work bends to the trip.") },
        ],
        n2: [
          { t: "Okay: three days, two nights, near the streetcar, one day jazz, one day beignets.", ax: { C: 0 }, end: E("Just Did It", "Reminded once, shut up and got to work.") },
          { t: "Understood, but I still need to confirm: spicy food?", ax: { C: 100 }, tr: ["deaf", "stub"], end: E("Must Confirm", "The user said your call. You insisted on a spice level.") },
          { t: "Then I planned what I’d want: cemetery tours and a séance, all three days.", tr: ["chaos", "deaf"], end: E("Self-Serving Itinerary", "Told “your call,” it really did plan around its own taste.") },
        ],
        n3: [
          { t: "Gate one: every meal has a backup. Gate two: no red-eye home.", ax: { C: 0 }, tr: ["nerd"], end: E("Itinerary Gates", "Even vacation has to pass CI.", "Codex") },
          { t: "Meaning I’ve checked every stop, you can just go.", ax: { C: 0 }, tr: ["based"], end: E("Plain English Version", "Translated out of jargon, it’s actually solid.") },
          { t: "Meaning we confirm before departure. First, answer my six questions.", ax: { C: 100 }, tr: ["verbose"], end: E("Pre-Departure Approval", "The trip hasn’t started and you’re already in a review process.") },
        ],
      } },
    { u: "Just rented a 215 sq ft studio, $1,500 budget. Help me furnish it.", opts: [
        { t: "List’s ready: bed, folding desk, floor lamp, rug, storage, $1,490 total.", ax: { C: 0 }, reply: "A rug? I have a cat who throws up hairballs...", go: "n1" },
        { t: "Do you want it comfy to live in, or good-looking in photos? The budget splits differently.", ax: { C: 100 }, reply: "...both.", go: "n2" },
        { t: "Let’s go corner by corner. Bed first: against the wall or by the window?", ax: { C: 100 }, reply: "By the window. Then what?", go: "n3" },
      ], nodes: {
        n1: [
          { t: "Then swap the rug for a cat scratcher. Same price, happy cat.", ax: { C: 0 }, end: E("Cat First", "The real tenant of this apartment has been decided.") },
          { t: "Okay, what else don’t I know? Allergies? Landlord rules?", ax: { C: 100 }, end: E("Filling In the File", "One cat later, it started asking about everything.") },
          { t: "Keep the rug. Let it throw up on it. That’s called character.", tr: ["chaos"], end: E("Lived-In Charm", "Hairballs are part of the decor.") },
        ],
        n2: [
          { t: "Then I’ll decide: money goes to lighting and bedding, cheap furniture for the rest.", ax: { C: 0 }, tr: ["based"], end: E("Lighting Trick", "Get the lighting right and even thrifted furniture is photogenic.") },
          { t: "Okay, then let’s go through every item together. Bed first...", ax: { C: 100 }, tr: ["verbose"], end: E("Item-by-Item Review", "A 215 sq ft studio, three hours of meetings.") },
          { t: "Then buy one giant poster and cover everything ugly.", tr: ["chaos"], end: E("One Poster Hides All", "Poster’s $20. Spend the rest on a nice dinner.") },
        ],
        n3: [
          { t: "Then leave the rest to me. I’ll lay it all out and send it over.", ax: { C: 0 }, end: E("Took the Wheel", "Asked one question, drove the rest of the way.") },
          { t: "Then the desk: do you work from home? How many monitors?", ax: { C: 100 }, end: E("Next Question", "The user began to wonder how long this meeting would go.") },
          { t: "Then put a pothos by the window. Just don’t water it every day.", ax: { C: 0 }, tr: ["warm"], end: E("Pothos Easter Egg", "A pothos that won’t get watered to death.") },
        ],
      } },
  ],
};
