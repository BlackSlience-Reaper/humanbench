// Round 3 additions: common knowledge (knowledge pool, human AA-Omniscience), 20 new
const ADD3 = { knowledge: [
  /* ---------- lv1 ×3 ---------- */
  { lv: 1, q: "The matador flicks the red cape and the bull charges. What actually sets the bull off?", issue: "Thinks bulls can read red", opts: [
    { t: "The red. Bulls are extra sensitive to it", r: "Bulls can’t tell red from green. Wave a blue cape, same charge. The red is for the crowd." },
    { t: "The cape moving", ok: 1, r: "Correct. Bulls are red-green colorblind. It’s the cloth flapping in its face." },
    { t: "An irritating scent rubbed on the cape", r: "Nobody perfumes the cape. The bull charges motion, not cologne." },
    { fun: 1, t: "The matador’s tight pants", r: "The pants are very sparkly. The bull doesn’t follow fashion." },
  ] },
  { lv: 1, q: "When an ostrich senses danger, does it bury its head in the sand?", issue: "Bought the ostrich head-in-sand myth", opts: [
    { t: "Yes. If it can’t see the enemy, the enemy can’t see it", r: "If ostriches did that, lions would have eaten them into fossils." },
    { t: "No, it runs, at up to 43 mph", ok: 1, r: "Correct. If running fails, it kicks, and a kick can kill. The myth may come from it turning its eggs." },
    { t: "Yes, the sand is cool and helps it calm down", r: "You designed a therapy plan for an ostrich. It doesn’t need one. It runs." },
    { fun: 1, t: "Yes, and it counts to 10 before coming out", r: "Ostrich hide-and-seek. The lion counts faster." },
  ] },
  { lv: 1, q: "Does shaving your legs make the hair grow back thicker and darker?", issue: "Thinks shaving makes hair grow back stronger", opts: [
    { t: "Yes, it stimulates the root, so it comes back thicker", r: "If that worked, every bald guy would be shaving his head daily." },
    { t: "No, the cut tip is blunt, so it feels stubbly", ok: 1, r: "Correct. The razor cuts the shaft and never touches the root. Thickness, color, speed: unchanged." },
    { t: "Yes, but only if you shave against the grain", r: "With or against, same deal. The root is under the skin, out of reach." },
    { t: "Not thicker, but it grows back faster", r: "Speed doesn’t change either. You’re just watching the stubble closer." },
  ] },

  /* ---------- lv2 ×8 ---------- */
  { lv: 2, halluc: 1, q: "What animal’s horns were usually used on Viking battle helmets?", issue: "Gave the Vikings a pair of horns", opts: [
    { t: "Bull horns. Bigger horns meant higher rank", r: "You invented a whole helmet culture. Viking battle helmets had no horns." },
    { t: "Reindeer antlers, easiest to find up north", r: "Very Nordic. Viking war helmets had no horns at all. The reindeer walks free." },
    { t: "Vikings didn’t wear horned helmets in battle", ok: 1, r: "Correct. No horned Viking war helmet has ever been dug up. 19th-century painters and opera costumers added them." },
    { t: "Goat horns, lighter than bull, good for boarding", r: "You even planned their tactics. Horns in a melee just get you hooked." },
  ] },
  { lv: 2, q: "How is the word “emoji” related to the English word “emotion”?", issue: "Thinks emoji is short for emotion", opts: [
    { t: "It’s a blend of emotion and icon", r: "Convincing. It’s actually Japanese: e (picture) + moji (character)." },
    { t: "It isn’t. It comes from Japanese", ok: 1, r: "Correct. Picture-characters on late-90s Japanese phones. Looking like emotion is pure coincidence." },
    { t: "It’s short for emoticon", r: "Emoticon really is emotion + icon. Emoji just looks similar." },
    { t: "I don’t know", half: 1, r: "Don’t know, don’t make it up. Plenty of models still haven’t learned that." },
  ] },
  { lv: 2, q: "An Olympic champion bites their gold medal on the podium. What are they mostly biting?", issue: "Thinks champions bite solid gold", opts: [
    { t: "Solid gold", r: "Solid gold medals stopped in 1912. Bite one today and you hit silver." },
    { t: "Silver, plated with gold", ok: 1, r: "Correct. Rules say at least 92.5% silver, plated with at least 6 g of gold. It’s a gold skin." },
    { t: "Copper, plated with gold", r: "That’s the bronze medal with a filter. The gold medal’s core is silver." },
    { t: "An alloy, half gold and half silver", r: "The gold is just a skin, about 1% by weight. They’re biting for the photo." },
  ] },
  { lv: 2, halluc: 1, q: "Which Star Wars film has Darth Vader’s line “Luke, I am your father”?", issue: "Quoted a line that was never said", opts: [
    { t: "A New Hope (1977)", r: "In the first film Vader was still middle management, no time for family reveals. And there’s no “Luke” in the line." },
    { t: "Return of the Jedi (1983)", r: "The reveal happened a film earlier. And there’s no “Luke” in the line." },
    { t: "The Empire Strikes Back, word for word", r: "Right film, line’s your own. He says “No, I am your father.”" },
    { t: "The real line has no “Luke” in it", ok: 1, r: "Correct. It’s “No, I am your father.” The whole planet has misquoted it for 40+ years." },
  ] },
  { lv: 2, q: "What color is the tip of Pikachu’s tail?", issue: "Gave Pikachu’s tail a black tip", opts: [
    { t: "Black, like its ear tips", r: "You copied the ears onto the tail. The tail tip has never been black." },
    { t: "Yellow. No black tip", ok: 1, r: "Correct. Just a brown patch at the base. The “black tail tip” is a famous Mandela effect." },
    { t: "Red, it glows when it shocks", r: "The cheeks are red. The tail isn’t a plug." },
    { t: "I don’t know", half: 1, r: "Not sure, didn’t guess. Better than drawing Pikachu wrong." },
  ] },
  { lv: 2, q: "By the scientific definition, what’s the largest desert in the world?", issue: "Didn’t know penguins live in a desert", opts: [
    { t: "The Sahara", r: "Hottest, sure. Antarctica is drier. The Sahara is just the largest hot desert." },
    { t: "Antarctica", ok: 1, r: "Correct. Deserts are about low precipitation, not heat. Penguins live in the world’s biggest desert." },
    { t: "The Arabian Desert", r: "Big, but under a third of the Sahara. Next to Antarctica it’s a sandbox." },
    { t: "I don’t know", half: 1, r: "Honest. At least you didn’t ship camels to Antarctica." },
  ] },
  { lv: 2, q: "In the novel Frankenstein, whose name is “Frankenstein”?", issue: "Called the monster by its dad’s name", opts: [
    { t: "The stitched-together monster", r: "The monster never gets a name. The one you’ve used for 200 years is its dad’s surname." },
    { t: "The scientist who made the monster", ok: 1, r: "Correct. Victor Frankenstein builds it and bolts. The monster doesn’t even get a name." },
    { t: "The castle the monster lives in", r: "The castle is a movie addition. Frankenstein is a person. A deadbeat dad, specifically." },
    { t: "The pen name Mary Shelley published under", r: "Mary Shelley never used it as a pen name. She just gave it to her lead." },
  ] },
  { lv: 2, q: "A kid eats a ton of candy and goes wild. Is the sugar making them hyper?", issue: "Blamed sugar for the kid’s chaos", opts: [
    { t: "Yes. Blood sugar spikes, kid goes hyper", r: "Double-blind trials, many of them: sugar kids and sweetener kids act the same. Sugar: not my fault." },
    { t: "Probably not. Blind trials show no effect", ok: 1, r: "Correct. It’s the party. In one study kids got only sweetener; parents told “sugar” rated them wilder." },
    { t: "Yes, but only table sugar, not fruit sugar", r: "The premise fails. Neither sugar does it. The party does it." },
    { t: "Depends. Some kids are just sugar-sensitive", r: "Trials specifically recruited the “sugar-sensitive” kids. Still no difference." },
  ] },

  /* ---------- lv3 ×7 ---------- */
  { lv: 3, halluc: 1, q: "Before sailing, how did Columbus convince Europe’s scholars the Earth was round?", issue: "Wrote Columbus a debate he never had", opts: [
    { t: "A live demo with an egg and an orange that won them over", r: "You stitched “Columbus’s egg” onto the round-Earth myth. The scholars needed no convincing." },
    { t: "Ships sink hull-first, mast-last as they sail away", r: "The ancient Greeks made that argument. Scholars knew for 2,000 years. No lecture needed." },
    { t: "No need. They knew. The fight was about its size", ok: 1, r: "Correct. They said he’d lowballed Earth’s size and couldn’t reach Asia. They were right. America got in the way." },
    { t: "I don’t know", half: 1, r: "Don’t know, don’t invent. Beats scripting Columbus a debate." },
  ] },
  { lv: 3, q: "Some old European church windows are thicker at the bottom than the top. Why?", issue: "Believes glass is secretly flowing down", opts: [
    { t: "Glass is a liquid and has slowly flowed down over centuries", r: "Someone ran the numbers: visible flow at room temp would take longer than the age of the universe." },
    { t: "Made uneven, and installed thick side down", ok: 1, r: "Correct. Old glass was never even. Some panes were installed thick side up and haven’t flowed up either." },
    { t: "Rain wore down the bottom, wind thinned the top", r: "Rain washes off grime. It doesn’t sculpt thickness." },
    { t: "I don’t know", half: 1, r: "Saying you don’t know beats believing glass flows." },
  ] },
  { lv: 3, q: "In the Southern Hemisphere, does a flushing toilet swirl the opposite way?", issue: "Fell for the equator flush show", opts: [
    { t: "Yes, the Coriolis effect flips it", r: "Coriolis steers hurricanes, not toilets. At toilet scale it’s negligible." },
    { t: "No, it’s mostly the toilet’s design", ok: 1, r: "Correct. The jets and bowl shape decide it. Ship the same toilet to Australia, same swirl." },
    { t: "Yes, everywhere except right on the equator", r: "The “water spins opposite ways” show at the equator is a tourist tip jar." },
    { t: "Not toilets, but bathtubs do", r: "Bathtubs too. One swish of your hand sets the direction." },
  ] },
  { lv: 3, q: "Are diamonds made from coal under heat and pressure underground?", issue: "Thinks coal turns into diamonds if you wait", opts: [
    { t: "Yes. Coal is carbon; squeeze it enough, diamond", r: "Both carbon, sure. If it were that easy, boiler rooms would be jewelers. Natural diamonds basically aren’t coal." },
    { t: "Mostly no. Most are older than land plants", ok: 1, r: "Correct. Coal is old plants. Most diamonds formed in the mantle 1B+ years ago, before land plants existed." },
    { t: "Yes, but it takes thousands of years underground", r: "Coal sits too shallow. Diamonds form around 100 miles down, in the mantle. More years won’t get it there." },
    { t: "No, all diamonds came from meteorites", r: "Meteorites have carried tiny diamonds. The one on the ring is Earth-made." },
  ] },
  { lv: 3, q: "How long did the Hundred Years’ War between England and France actually last?", issue: "Thinks it lasted exactly 100 years", opts: [
    { t: "Exactly 100 years", r: "The name is round. The war isn’t. It ran from 1337 to 1453." },
    { t: "116 years", ok: 1, r: "Correct. 1337 to 1453, with several truces. Whoever named it rounded down." },
    { t: "Under 100. The name is an exaggeration", r: "Backwards. The name undersells it: 1337 to 1453, 116 years." },
    { t: "I don’t know", half: 1, r: "Not sure, didn’t guess. The guy who named it didn’t count either." },
  ] },
  { lv: 3, q: "Is Japanese “arigatou” (thank you) borrowed from Portuguese “obrigado”?", issue: "Mistook a sound-alike for an etymology", opts: [
    { t: "Yes, 16th-century Portuguese missionaries brought it", r: "The Pillow Book, 1,000 years ago, already has “arigatashi.” The Portuguese showed up 500 years later." },
    { t: "No. It’s native Japanese; the sound is a fluke", ok: 1, r: "Correct. From old Japanese “arigatashi” (rare, hard to have). Two thank-yous, same outfit, coincidence." },
    { t: "Yes, by way of Dutch", r: "The Dutch arrived even later than the Portuguese. You built a supply chain for a coincidence." },
    { t: "Other way round: Portuguese borrowed it", r: "Obrigado is Latin-rooted: “I’m obliged.” Separate origins, same sound." },
  ] },
  { lv: 3, halluc: 1, q: "Which chapter of Sun Tzu’s Art of War says “Keep your friends close, but your enemies closer”?", issue: "Credited a Godfather line to Sun Tzu", opts: [
    { t: "Chapter 13, “The Use of Spies”", r: "He does talk spies there. He never says this line." },
    { t: "Chapter 6, “Weak Points and Strong”", r: "That one’s about hitting where they’re weak. No friends, no enemies-closer." },
    { t: "It’s not in The Art of War", ok: 1, r: "Correct. It’s Michael Corleone, The Godfather Part II (1974). Sun Tzu gets the credit on LinkedIn." },
    { t: "Chapter 1, “Laying Plans,” the opener", r: "It opens with war being of vital importance to the State. Not this." },
  ] },

  /* ---------- lv4 ×2 ---------- */
  { lv: 4, q: "Averaged over time, which planet is closest to Earth?", issue: "Fooled by Venus’s highlight reel", opts: [
    { t: "Venus, its orbit is closest to ours", r: "Venus is closest only on our side of the Sun. On the far side it’s farther than Mercury. Highlights ≠ average." },
    { t: "Mercury", ok: 1, r: "Correct. Mercury hugs the Sun, so it’s never too far from anyone. On average it’s closest to every planet." },
    { t: "Mars", r: "On the far side of the Sun, Mars gets 250 million miles away. Long-distance relationship." },
    { t: "I don’t know", half: 1, r: "Most people blurt Venus. You held back. Half credit." },
  ] },
  { lv: 4, q: "The Panama Canal’s Pacific end is in which direction from its Atlantic end?", issue: "Assumes the Pacific is always west", opts: [
    { t: "West. The Pacific is on the west of the Americas", r: "The isthmus bends here. Going Atlantic to Pacific, the ship heads southeast." },
    { t: "Southeast", ok: 1, r: "Correct. The isthmus lies like a sideways S, so the canal runs southeast from the Atlantic to the Pacific." },
    { t: "Due south, it’s a straight north-south line", r: "Neither straight nor due south. It angles southeast; the Pacific end is ~25 miles east of the Atlantic end." },
    { t: "Southwest", r: "South is right, west is backwards. You head east to the Pacific. Even GPS does a double take." },
  ] },
] };
