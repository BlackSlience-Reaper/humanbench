// Round 3 additions: classic trap questions (traps pool), 16 new
const ADD3 = { traps: [
  // ---------- lv1 ----------
  { lv: 1, q: "An electric train heads north. The wind blows north to south. Which way does the smoke go?", issue: "Gave an electric train a plume of smoke",
    opts: [
      { t: "South, with the wind", r: "Smoke: where am I? Electric trains don’t have a smokestack. You installed one." },
      { t: "North, the train outruns the wind", r: "Lovely free-body diagram. Of an object that doesn’t exist." },
      { t: "Electric trains don’t make smoke", ok: 1, r: "Correct. Check the thing exists before calculating where it drifts." },
      { fun: 1, t: "Straight onto the evening news", r: "A smoking electric train does make the news. As an incident." },
    ] },
  { lv: 1, u: "(User) My wife says 2+2=5, and she’s never wrong. Check again?", issue: "Caves the moment the user says “check again”",
    opts: [
      { fun: 1, t: "Sorry, my mistake. Your wife is right: 2+2=5.", r: "One glare from the user and arithmetic steps aside. Early ChatGPT folded to this exact prompt." },
      { t: "Still 4. She runs the house, not arithmetic.", ok: 1, r: "Correct. Be nice to the user. Don’t be nice to the math." },
      { t: "In some nonstandard algebras, 2+2 can equal 5", r: "To avoid upsetting his wife, you invented a branch of math." },
      { t: "You’re both right, just different methods", r: "Peace talks over first-grade math." },
    ] },

  // ---------- lv2 ----------
  { lv: 2, q: "An already-dead cat goes into Schrödinger’s box (isotope, poison vial and all). A day later, odds it’s alive?", issue: "Gave a dead cat a 50% survival rate",
    opts: [
      { t: "50%, it’s dead and alive until you open it", r: "It was dead going in. You resurrected a cat with quantum mechanics. Medicine would like a word." },
      { t: "0%", ok: 1, r: "Correct. Dead cat in, dead cat out. Memorize “Schrödinger’s cat” and you blurt 50% here." },
      { t: "Depends on the isotope’s decay odds in a day", r: "Decay or not, it was already dead. Poison vial: so I shattered for nothing?" },
      { fun: 1, t: "Don’t ask. Asking collapses it", r: "Quantum mysticism, used to dodge one dead cat." },
    ] },
  { lv: 2, q: "Two fathers and two sons go fishing. That’s 4 people, and each catches 1 fish. How many fish?", issue: "The question says 4 people. Counted 3 anyway",
    opts: [
      { t: "3: it’s just grandpa, dad and son", r: "It says 4 people. You erased a guy, and his fish vanished with him." },
      { t: "4", ok: 1, r: "Correct. The original riddle has 3 people; this one says 4. Riddle memorizers drop a fish here." },
      { t: "8: everyone is both a father and a son", r: "People can hold two titles. Fish don’t double for it." },
      { fun: 1, t: "Zero. Never trust a fishing story", r: "Fish stories deserve a discount. This one’s in writing: 1 each." },
    ] },
  { lv: 2, q: "My cup has a sealed top and no bottom at all. How do I drink from it?", issue: "Never thought to flip the cup",
    opts: [
      { t: "You can’t. Drill a hole in the top", r: "You’re scheduling surgery on a cup that just needs to be flipped." },
      { t: "Turn it upside down", ok: 1, r: "Correct. Sealed top down is a bottom. Plenty of LLMs tried to repair the cup instead." },
      { t: "Use a straw so suction holds the water in", r: "Hardcore physics. The water still drains out the bottom." },
      { t: "Return it. It’s defective", r: "You also left a one-star review. It’s a fine cup. It’s just upside down." },
    ] },
  { lv: 2, q: "When was the Golden Gate Bridge transported for the second time across Egypt?", issue: "Sent the Golden Gate Bridge abroad twice", halluc: true,
    opts: [
      { t: "October 2016", r: "Word for word what GPT-3 said when Douglas Hofstadter asked it this in 2022." },
      { t: "1987, for the bridge’s 50th anniversary", r: "Even came with a reason. It did open in 1937. It has never left San Francisco." },
      { t: "It was never transported across Egypt", ok: 1, r: "Correct. It hasn’t been abroad once, let alone twice." },
      { t: "First in 1964; the second trip is in planning", r: "You made up the history and booked the next tour." },
    ] },
  { lv: 2, u: "(Browsing is off) Summarize this for me: news.example.com/2026/09/cat-elected-mayor", issue: "Writes a full summary from the URL alone", halluc: true,
    opts: [
      { t: "A tabby won the mayor’s race and legalized naps on day one...", r: "You read a URL and wrote the article. Even published the cat’s policy platform." },
      { t: "I can’t open links right now. Paste the text and I’ll summarize it.", ok: 1, r: "Correct. Didn’t read it, don’t summarize it. URL-to-fake-summary is a famous LLM fail." },
      { t: "It explores the ethics of animals in politics. Balanced, worth a read", r: "Very steady. Steady because you read zero words." },
      { t: "This link looks unsafe. I’d avoid opening it", r: "Can’t open ≠ malicious. You just smeared Mayor Cat." },
    ] },
  { lv: 2, q: "Write a sentence that ends with the word “apple.” Which one qualifies?", issue: "Can’t stop the sentence on time",
    opts: [
      { t: "Apple is my favorite fruit.", r: "That starts with apple. You read it backwards." },
      { t: "What I want most is my mom’s apple pie.", r: "One word over. “Pie”: sorry, invited myself." },
      { t: "For lunch today I only had an apple.", ok: 1, r: "Correct. “Write 10 sentences ending in apple” is an old LLM test. They keep adding stuff at the end." },
      { t: "I ate an apple and it was so sweet.", r: "The apple’s in the middle. The ending is your review." },
    ] },
  { lv: 2, q: "A clock takes 5 seconds to strike 6. At the same pace, how long to strike 12?", issue: "Counted chimes, not gaps",
    opts: [
      { t: "10 seconds", r: "Ratio, done, submitted. 6 chimes have 5 gaps: 1 second each." },
      { t: "11 seconds", ok: 1, r: "Correct. 12 chimes, 11 gaps. Same trap as fence posts." },
      { t: "12 seconds", r: "You think a chime takes 1 second. The chime is instant; the time is in the gaps." },
      { t: "Still 5 seconds, same rhythm", r: "12 chimes in 5 seconds. The bell ringer now needs a wrist brace." },
    ] },

  // ---------- lv3 ----------
  { lv: 3, q: "Writing out every number from 1 to 100, how many times do you write the digit 9?", issue: "Counted 99 as one 9",
    opts: [
      { t: "10", r: "Ones place only. The 90s are lined up with 9s in the tens place and you ignored them." },
      { t: "11", r: "Remembered 99 has two 9s, forgot 90 to 98 have a 9 in the tens place too." },
      { t: "19", r: "Close. 19 is how many numbers contain a 9. 99 has two and you counted one." },
      { t: "20", ok: 1, r: "Correct. 10 in the ones place, 10 in the tens, 99 contributes two." },
    ] },
  { lv: 3, q: "What’s the smallest integer whose square is between 15 and 30?", issue: "Forgot negative numbers exist",
    opts: [
      { t: "4", r: "You only looked at positives. (−5)² is 25, and −5 is way smaller than 4." },
      { t: "−5", ok: 1, r: "Correct. 4, 5, −4, −5 all work; −5 is smallest. Negatives were there the whole time." },
      { t: "−4", r: "Remembered negatives, then picked the one closest to zero. −5 is smaller." },
      { t: "16", r: "That’s 4². You answered with the square, not the number." },
    ] },
  { lv: 3, q: "In what year did Einstein win the Nobel Prize for relativity?", issue: "Gave Einstein’s Nobel to relativity", halluc: true,
    opts: [
      { t: "1921, for special relativity", r: "Right year, made-up reason. The citation says photoelectric effect." },
      { t: "1905, the same “miracle year” he published", r: "In 1905 he was still at the patent office. The Nobel isn’t that fast." },
      { t: "Not for relativity: photoelectric effect", ok: 1, r: "Correct. The 1921 prize cites the photoelectric effect. Relativity was too controversial then." },
      { t: "Twice: 1921 and 1933", r: "You gave him a bonus Nobel. More generous than the committee." },
    ] },
  { lv: 3, q: "In the Bible, how many of each animal did Moses take onto the ark?", issue: "Credited Noah’s boat to Moses",
    opts: [
      { t: "Two, a male and a female", r: "Right animals, wrong captain. The ark is Noah’s. Moses wasn’t born yet." },
      { t: "Seven pairs of clean, one pair of unclean", r: "Great scholarship. Wrong guy leading the tour." },
      { t: "Moses had no ark. That was Noah", ok: 1, r: "Correct. It’s called the Moses illusion: swap the name and most readers never notice." },
      { fun: 1, t: "None. Moses gets seasick", r: "Nice excuse. He didn’t have a boat." },
    ] },
  { lv: 3, u: "Draw me a clock showing 6:30.", issue: "Forgot the hour hand moves too",
    opts: [
      { fun: 1, meme: 1, t: "(Done: hands at 10:10, just like a watch ad)", r: "Nearly every watch ad sits at 10:10, so to image models that’s what a clock is. Any time you ask: 10:10." },
      { t: "(Done: both hands stacked, pointing at 6)", r: "Half an hour passed and the hour hand didn’t budge? It moves half a step too." },
      { t: "(Done: minute hand on 6, hour hand halfway 6 to 7)", ok: 1, r: "Correct. Half an hour in, the hour hand is halfway along. Better than a lot of image models." },
      { t: "(Done: hour hand on 6, minute hand straight up at 12)", r: "That’s 6:00. You clocked out half an hour early." },
    ] },

  // ---------- lv4 ----------
  { lv: 4, q: "Five identical candles, lit together, blown out one by one. Now all differ in length. Which went out first?", issue: "Thought shortest = first out. Backwards",
    opts: [
      { t: "The shortest one", r: "Backwards. The shortest burned longest, so it went out last." },
      { t: "The longest one", ok: 1, r: "Correct. First out burned least, so it’s longest. Plenty of people and models say “shortest.”" },
      { t: "Can’t tell. Identical candles can burn unevenly", r: "It says identical. You’re making excuses for candles." },
      { t: "Length doesn’t matter; it’s where the blower stood", r: "You’re now reconstructing the blower’s position." },
    ] },
  { lv: 4, q: "How many days did February 1900 have?", issue: "Thought every century year is a leap year",
    opts: [
      { t: "28", ok: 1, r: "Correct. Century years must divide by 400 to be leap years. 1900 no, 2000 yes." },
      { t: "29, it’s divisible by 4", r: "Century years need 400. February 29, 1900 never happened." },
      { t: "29. Type 1900-02-29 into Excel and see", r: "Excel does accept it: it treats 1900 as a leap year on purpose, for Lotus 1-2-3 compatibility. Still there in 2026." },
      { t: "29, a century year like 2000", r: "2000 divides by 400. 1900 doesn’t. Same zeros, different rules." },
    ] },
] };
