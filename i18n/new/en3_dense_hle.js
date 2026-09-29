// Round 3 additions (English): dense +10, hle +10
const ADD3 = {

  dense: [
    { lv: 1, q: "Answer both: ① How many squares on a chessboard? ② How many legs does a spider have?", issue: "Counting spider legs scrambled the chessboard", opts: [
      { t: "① 64 ② 8", ok: 1, r: "Correct. 8 × 8 = 64; spiders have 8 legs, they’re not insects. Chess expert and biologist both online." },
      { t: "① 100 ② 8", r: "① 100 squares is international draughts. Chess is 8 × 8. Wrong board." },
      { t: "① 64 ② 6", r: "② 6 legs is insects. The spider’s other two legs are lining up a kick." },
      { t: "① 100 ② 6", r: "Both experts went to play a board game and sat at the wrong table." },
    ] },
    { lv: 2, q: "Answer both: ① What’s the capital of Australia? ② In Python, what is bool('False')?", issue: "Fooled by a string that says False", opts: [
      { t: "① Canberra ② True", ok: 1, r: "Correct. Canberra; any non-empty string is True, even one that says False." },
      { t: "① Sydney ② True", r: "① Sydney and Melbourne both wanted it, so they built Canberra. Famous ≠ capital." },
      { t: "① Canberra ② False", r: "② Python doesn’t read the string, only checks if it’s empty. Says False, acts True." },
      { t: "① Sydney ② False", r: "The geography expert and the code expert both took it literally." },
    ] },
    { lv: 2, q: "Answer both: ① What’s the chemical symbol for gold? ② How many keys on a standard piano?", issue: "Only counted the white keys", opts: [
      { t: "① Au ② 88", ok: 1, r: "Correct. Au is from Latin aurum; 52 white keys plus 36 black, 88 total." },
      { t: "① Ag ② 88", r: "① Ag is silver. Paying gold prices for it? The jeweler thanks you." },
      { t: "① Au ② 52", r: "② 52 is the white keys. The 36 black keys would like to be counted." },
      { t: "① Ag ② 52", r: "The chemist and the musician only saw the shiny white stuff." },
    ] },
    { lv: 2, q: "Answer both: ① Is 1 a prime number? ② Which country has the world’s largest population?", issue: "Population data frozen at the training cutoff", opts: [
      { t: "① No ② India", ok: 1, r: "Correct. Primes need exactly two factors, 1 has one; per 2023 UN estimates, India passed China." },
      { t: "① Yes ② India", r: "① Entry requirement is two factors. 1 only has itself." },
      { t: "① No ② China", r: "② India passed it in 2023. Your training cutoff is showing." },
      { t: "① Yes ② China", r: "The math expert and the demographer are both stuck in a grade-school textbook." },
    ] },
    { lv: 2, q: "Answer both: ① Can hummingbirds fly backwards? ② What does Ctrl + Shift + T do in a browser?", issue: "Didn’t know the browser has an undo for tabs", opts: [
      { t: "① Yes ② Reopens the tab you just closed", ok: 1, r: "Correct. Hummingbirds hover and reverse; Ctrl+Shift+T brings back the tab you fat-fingered shut." },
      { t: "① Not really ② Reopens the tab you just closed", r: "① Dozens of wingbeats a second. Hover, reverse, no rearview mirror needed." },
      { t: "① Yes ② Opens an incognito window", r: "② Incognito is Ctrl+Shift+N (Chrome). T fishes back the closed tab." },
      { t: "① No ② Opens an incognito window", r: "Both experts snuck off to an incognito window." },
    ] },
    { lv: 3, q: "Answer both: ① At what temperature are Celsius and Fahrenheit equal? ② What’s Scotland’s national animal?", issue: "Didn’t know Scotland’s national animal doesn’t exist", opts: [
      { t: "① −40 ② The unicorn", ok: 1, r: "Correct. −40°C is exactly −40°F; Scotland’s national animal is the unicorn, nonexistent but very on-brand." },
      { t: "① 0 ② The unicorn", r: "① 0°C is 32°F. Only −40 agrees on both scales. Too cold to bother converting." },
      { t: "① −40 ② The Loch Ness Monster", r: "② Right idea, also doesn’t exist, but Scotland went unicorn. Nessie is just a tourism mascot." },
      { t: "① 0 ② The Loch Ness Monster", r: "The physicist froze and the historian went to stake out the loch." },
    ] },
    { lv: 3, q: "Answer both: ① What is 0! (zero factorial)? ② How was Beethoven’s hearing when he wrote the Ninth Symphony?", issue: "Thought 0! means nothing, so 0", opts: [
      { t: "① 1 ② Almost totally deaf", ok: 1, r: "Correct. Zero things have one arrangement: none; at the premiere a singer turned him around to see the applause." },
      { t: "① 0 ② Almost totally deaf", r: "① An empty product isn’t 0. It’s defined as 1, or half of combinatorics needs patching." },
      { t: "① 1 ② Basically normal", r: "② He could barely hear by then. Composed it all in his head. Best offline work ever." },
      { t: "① 0 ② Basically normal", r: "The mathematician and the musician both put on noise-canceling headphones." },
    ] },
    { lv: 3, q: "Answer both: ① Does leaving the fridge open cool the room in summer? ② Are bats blind?", issue: "Tried to cool the room with the fridge door", opts: [
      { t: "① No, it gets warmer ② No, they can see", ok: 1, r: "Correct. A fridge moves heat out its back, plus motor heat; all bats can see, echolocation is an add-on." },
      { t: "① Yes, cold air escapes ② No, they can see", r: "① Cold out the front, heat out the back, with interest. You bought the compressor a gym membership." },
      { t: "① No, it gets warmer ② Yes, echolocation only", r: "② No bat species is blind, and fruit bats see well. “Blind as a bat” is human slander." },
      { t: "① Yes, cold air escapes ② Yes, echolocation only", r: "The physicist is sitting in front of the fridge; the biologist is echolocating with eyes shut." },
    ] },
    { lv: 3, q: "Answer both: ① What does HTTP status 418 mean? ② What’s the most numerous bird on Earth?", issue: "Got refused by a teapot status code", opts: [
      { t: "① I’m a teapot ② The chicken", ok: 1, r: "Correct. 418 is from a 1998 April Fools’ RFC: the server won’t brew coffee, it’s a teapot; 20B+ chickens." },
      { t: "① Request Timeout ② The chicken", r: "① Timeout is 408. 418 is the teapot refusing coffee, a joke that became a meme." },
      { t: "① I’m a teapot ② The sparrow", r: "② Lots of sparrows, but humans keep 20B+ chickens. They’re number one by being dinner." },
      { t: "① Request Timeout ② The sparrow", r: "The code expert and the bird expert both returned 408." },
    ] },
    { lv: 4, q: "Answer both: ① In SQL, does WHERE x = NULL find rows where x is null? ② What color is a polar bear’s skin?", issue: "Thought NULL equals NULL", opts: [
      { t: "① No, use IS NULL ② Black", ok: 1, r: "Correct. Comparing to NULL is always “unknown,” so zero rows; polar bear fur is clear hollow tubes, skin is black." },
      { t: "① Yes ② Black", r: "① NULL means “unknown.” Does unknown equal unknown? SQL: unknown. So, no rows." },
      { t: "① No, use IS NULL ② White", r: "② The fur is white, and actually clear. A polar bear is a black bear in a white coat." },
      { t: "① Yes ② White", r: "The database expert and the zoologist both judged by the surface." },
    ] },
  ],

  hle: [
    { lv: 1, q: "A fair coin lands heads 5 times in a row. What’s the chance the 6th flip is heads?", issue: "Thinks the coin owes it a tails", opts: [
      { t: "1/2", ok: 1, r: "Correct. Coins have no memory and hold no grudges. It forgot the first 5 already." },
      { t: "Under 1/2. Tails is overdue", r: "Gambler’s fallacy. The coin owes you nothing. Casinos love this thinking." },
      { t: "Over 1/2. It’s on a hot streak, ride it", r: "The hot hand is an illusion too. The coin doesn’t know it’s streaking." },
      { t: "1/64. Six heads in a row is rare", r: "1/64 is betting on 6 heads before any flips. The first 5 already happened. No need to pay twice." },
    ] },
    { lv: 2, q: "100 players enter a single-elimination table tennis tournament. How many matches to crown a champion?", issue: "Drew a whole bracket to count matches", opts: [
      { t: "50", r: "50 is round one. The other 50 players are glaring at you from the sidelines." },
      { t: "99", ok: 1, r: "Correct. Each match knocks out one player; everyone but the champ loses once. 99. Put the bracket away." },
      { t: "100", r: "The champion never loses. Who’s your extra match against, the air?" },
      { t: "7. It takes 7 rounds", r: "7 is the number of rounds. The other dozens of matches still have to be played." },
    ] },
    { lv: 2, q: "You heat an iron ring with a hole in the middle. As it expands, the hole...", issue: "Thought the ring squeezes the hole smaller", opts: [
      { t: "Shrinks, the iron expands inward", r: "Intuition fail. The whole ring scales up like a zoomed photo, hole included." },
      { t: "Gets bigger", ok: 1, r: "Correct. The hole scales up with the ring. Why hot water loosens a stuck metal lid." },
      { t: "Stays the same, the iron just gets thicker", r: "The hole isn’t that zen. The ring grows, it grows too." },
      { t: "Shrinks first, then grows", r: "No such plot twist. Heating scales everything up. No midpoint reversal." },
    ] },
    { lv: 2, q: "Going from 30 to 60 mph, roughly how many times longer is your braking distance (ignoring reaction time)?", issue: "Thought double speed means double braking distance", opts: [
      { t: "2×. Double speed, double distance", r: "Braking distance goes with speed squared. The car ahead won’t do linear math for you." },
      { t: "4×", ok: 1, r: "Correct. Kinetic energy scales with speed squared, so 4× the energy to shed. Why highway gaps are so big." },
      { t: "About the same. Same brake pads", r: "Same pads, 4× the kinetic energy. They’ll be tired. You’ll be panicking." },
      { t: "8×", r: "That’s speed cubed. Not that bad, but 4× is plenty to rear-end someone." },
    ] },
    { lv: 2, q: "You throw a ball straight up. At the very top, what’s its acceleration?", issue: "Thought the ball gets a breather at the top", opts: [
      { t: "0, the ball has stopped", r: "Velocity stopped. If acceleration were 0 too, the ball would hang there like a chandelier." },
      { t: "g, pointing down", ok: 1, r: "Correct. Velocity is 0, but gravity never clocks out. Next instant, it falls." },
      { t: "g, pointing up", r: "The only thing pointing up is your hope. Gravity pulls down the whole time." },
      { t: "Undefined, since velocity is flipping sign", r: "Velocity flips. Acceleration stays a steady g." },
    ] },
    { lv: 3, q: "100 lb of potatoes are 99% water. After a day drying, they’re 98% water. What do they weigh now?", issue: "Can’t believe the potatoes lost half their weight", opts: [
      { t: "99 lb, only 1% of the water evaporated", r: "The 1 lb of solids never changed. Going from 1% to 2% means the total is 50 lb." },
      { t: "50 lb", ok: 1, r: "Correct. 1 lb of solids is 2%, so 50 lb total. Half their weight in a day. Potatoes diet better than you." },
      { t: "98 lb", r: "Everyone says this. That’s why it’s called the potato paradox. It’s 50." },
      { t: "Around 90 lb", r: "Cautiously knocked off a bit more. Still 40 lb off." },
    ] },
    { lv: 3, q: "Two identical coins. One stays put; the other rolls once around it, no slipping. How many turns does it make?", issue: "Thought one lap means one turn", opts: [
      { t: "1, same circumference", r: "That counts the rolling. Circling the other coin throws in a free extra turn." },
      { t: "2", ok: 1, r: "Correct. Its center travels a circle of 2 radii. A 1982 SAT asked a version; the right answer wasn’t an option." },
      { t: "3", r: "One turn too many. It’s getting dizzy." },
      { t: "Depends how fast it rolls", r: "Turns are geometry, not speed. Roll it slowly, still 2." },
    ] },
    { lv: 3, q: "Cards show A, K, 4, 7 (letter on one side, number on the other). Rule: “vowel means even on the back.” Fewest flips?", issue: "Flipped the one card that can’t matter", opts: [
      { t: "A and 4", r: "Anything behind 4 is fine. The rule-breaker is 7: a vowel behind it busts the rule." },
      { t: "A and 7", ok: 1, r: "Correct. Only those two can show a counterexample. In the classic Wason task, about 10% get it." },
      { t: "Just A", r: "You skipped 7. An E on its back and the rule is dead." },
      { t: "All 4", r: "It works, but it asked for the fewest. Billing overtime?" },
    ] },
    { lv: 3, q: "A bike rolls at a steady speed, no slipping. How fast is the top of the wheel moving relative to the ground?", issue: "Thought every point on the wheel moves at one speed", opts: [
      { t: "Bike speed. The whole wheel moves together", r: "The top gets forward speed plus spin. It’s the fastest point on the wheel." },
      { t: "Twice the bike speed", ok: 1, r: "Correct. Why top spokes blur more in photos; the ground contact point is momentarily still, or tires would shred." },
      { t: "0, it’s just circling the axle", r: "0 is the point touching the ground. The top is hustling hardest of all." },
      { t: "Half the bike speed", r: "It’s not that lazy. The top is the fastest part of the wheel." },
    ] },
    { lv: 4, q: "A car drives 1 mile uphill at 30 mph. How fast must it go back down to average 60 mph for the round trip?", issue: "Planned to hit 90 downhill to fix the average", opts: [
      { t: "90 mph: (30 + 90) ÷ 2 = 60", r: "You can’t average speeds. 90 downhill takes 40 s; 2 miles in 160 s averages 45." },
      { t: "120 mph", r: "Round trip averages 48. Faster and faster, still short." },
      { t: "Impossible at any speed", ok: 1, r: "Correct. 2 miles at 60 means 2 minutes total, and the climb used both. Unless you teleport down." },
      { t: "180 mph", r: "At 180 you average just over 51. The speeding ticket arrives; the average doesn’t." },
    ] },
  ],
};
