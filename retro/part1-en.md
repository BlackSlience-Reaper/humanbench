# How many B are you? Retro, Part 1: From 4 messages to launch in one day with AI

![Cover](img/f1.png)

> This is a three-part retro. Part 1 goes from an idea to launch. Part 2 covers the 36 hours after launch, when we changed the product based on data. Part 3 is about how it spread, plus the fun stuff we dug out of 12.7K finished answer sheets.

At 3 PM on September 27, I tweeted a link to a small web page: **How many B are you?**

76 questions, and you play an LLM. Count the r's in strawberry. Say whether 9.11 or 9.9 is bigger. Get jailbroken by a user. Pick your reply in famous scenes like the $1 car deal or the customer who only types "representative." When you finish, the page throws you a model launch keynote: parameter count, MoE or Dense, a benchmark table, where you'd rank on the AA score (our take on the Artificial Analysis Intelligence Index), known issues, and which AI persona you are.

Three days in: about 40K unique visitors, 78K page opens, 12.7K people finished all 76 questions, 13.6K organic shares, from 96 countries and regions. It started from a Twitter account with a few hundred followers. No ads.

I've been using these models since the GPT-2 days. A lot, for a long time. This time I set myself a rule: I don't write any code by hand. All of it goes to the AI, I only make calls, and we see how far it can take a product. First I sent GPT-6 Pro 4 messages in ChatGPT and got a prototype. Then I rebuilt it, launched it and iterated on it with Claude in Claude Code. By the time it went live, I had sent 86 messages in Claude Code.

I've tried to stay close to what was actually said, including the parts where Claude went off track and where I made the wrong call.

> On sources: my own messages all come from the `prompts/` folder in the open-source repo (personal info removed). I wrote them in Chinese; they're translated here, kept as sloppy as I typed them. Claude's replies are excerpted from the session logs. Two of them were originally in English; the rest are translated from Chinese. All times are local time.

---

## 1. 90 minutes with GPT-6 Pro: the "academic" version

At 2:30 PM on September 26, I typed this into ChatGPT without much thought:

> thought of a fun little app: test your parameters. basically simulate all kinds of user inputs and see what size model you're equivalent to, tell you your percentile ranking on artificial index

Then I added three more:

> needs to mix scientific basis ➕ memes, needs a question bank, needs to be adaptive... serious but playful

The third one added strawberry, the 50-meter car wash and other classic trap questions. It had to be shareable, let you enter your own ID, and have a launch-event table, an AA bar chart, a parameter count, plus tell you "what model persona you are (like the Doubao type)." Doubao is ByteDance's chatbot, the most-used one in China; on the English site that persona became the Siri type. The fourth message: "no, package the whole complete thing and send it to me."

GPT-6 Pro replied 110 times, made 78 tool calls, and 90 minutes later handed me a zip file:

- A single-file web page with 528 questions: 56 each across six ability dimensions, plus trap questions, persona questions and open-ended ones.
- A six-dimension adaptive test with two tracks, ability and persona, producing a report with confidence intervals.
- Players first pick a length (light, standard or deep) and tick "I understand this is an uncalibrated experimental assessment."
- 7 original personas, exported as a 1200×2530 long image.
- Product docs, QA screenshots, test scripts. The works.

![GPT-6 Pro's v0.2, Claude's first rebuild, the launch version](img/u1.png)

It didn't do anything wrong. It built exactly the "serious but playful" I asked for in my second message. The problem was that I didn't know what I wanted either.

## 2. "This doesn't really work"

A little after 4 PM, I dragged the zip into Claude Code. My first line was "check the downloads folder, there's this zip." Claude unzipped it, ran the three bundled test suites, laid out what the prototype contained, and pointed out the gaps the docs themselves admitted: all the answers ship in the page, no backend, parameters not calibrated on real people, trap questions easy to memorize, Chinese only. Then it asked: deploy as is, review the question bank, or first figure out whether it's a good fit for user acquisition?

I looked at it for a while and replied:

> this doesn't really work 1. it still makes people pick the number of questions, not good 2. the art style, questions, options, none of it is meme enough

Eight minutes later Claude delivered something almost completely different:

- The home page is one button. A fixed 10 questions, about 1 minute. Naming moved to the end.
- All 10 questions are real AI fails: strawberry, 9.11 vs 9.9, the 50-meter car wash, Alice's sisters, the farmer crossing the river with only a sheep, the 2019 Nobel Prize in Mathematics...
- The options are the joke, like "Let me think step by step... 2" and "That's a great question! As an AI...". Every wrong option gets its own roast.
- Answer correctly and you get "Are you sure?" Tap "You're absolutely right! I apologize" and it counts as wrong, plus one point of sycophancy.
- A captcha easter egg: "I'm not a robot" always fails, with "97% similarity to large language models."
- The results page has a bar chart with a truncated Y axis where you're always the tallest bar, next to "your boss," "you before coffee" and "the neighbor's cat," with a footnote: "industry standard practice."
- The art switched to a hand-drawn sticker style with thick black outlines and hard shadows.

This was the most important turn in the whole project: **it stopped being a test and became a bit people want to screenshot.**

For the next seven hours, the rhythm was roughly this: I play a round on my phone and send one line about how it felt, and Claude ships a new version in about ten minutes. A few representative rounds:

> first, no emoji... these classic questions need to be in, the other ones too

I attached a screenshot of the benchmark table from the Opus 5.5 launch. Claude stripped every emoji and built question types from the benchmark names in the screenshot: Terminal-Bench shows you terminal output, OSWorld has you click directly on a simulated desktop, Chartography actually draws a chart and quizzes you on it. The results page followed the launch-post layout too: your column in a pink box, next to real models like Opus 5.5 and GPT-6 Astra.

> way more fun now! could use a tiny bit more questions though. and it doesn't all have to be right or wrong, it can just have commentary haha... maybe even multiple rounds. maybe even more unhinged scenarios

So we got two kinds of unscored questions. One is review questions: pick a random number, and if you pick 7 you see "Congrats, you love 7 just like a lot of LLMs." Help write a note asking for time off because "my cat is about to give birth," and if you just write it, you see "You invented a cat for the user, down to the labor details." The other is multi-turn unhinged scenarios: the grandma exploit, 1+1=3, "I'm your developer." Each one runs 2 to 3 rounds, with several endings per branch.

> I'm heading out. you probably need to make me an online version, otherwise I can't see it

Claude packaged it as a private online preview page. From then on I was mostly playing on my phone while out and sending feedback.

> some questions just shouldn't be strictly right or wrong (...like RIP works fine. no need for red and green)

After that, the page stopped showing right and wrong in red and green. You just got a meme sticker and a one-line comment. Later we found that with no marking at all, people couldn't tell if they'd gotten it right, so we added a small black-and-white label: "Correct / Wrong / Half credit."

The question count kept going up every round. This chart shows the number of questions per run, climbing from 10 all the way to 76:

![Questions per run](img/u2.png)

## 3. Kimi K3 is 3T: size and rank were two separate formulas

At 9 PM I started asking nitpicky questions:

> how big can the parameter count go? and moe, active params, all that? how's it distributed

> there are ~10T models now

> you gotta not label stuff all wrong. like kimi-k3 is actually a 3T model... also how do you calculate active params? feels like you need some questions to test active params too (and the really cracked ones are just dense)

Claude went back to the code, and the problem was bigger than I thought. Parameter size had only 6 tiers (max 1.8T), while the AA score was computed separately as "10 + 50 × accuracy." The two had nothing to do with each other, so a "405B" player with 70% accuracy could get an AA score of 45 and rank above Kimi K3, a 3T model at 44.

After the rebuild:

- **A 16-step parameter ladder**, from 0.5B to 10T, and above that "∞ (possible AGI)." Each step only uses models with public parameter counts as reference points: 7B is Mistral 7B, 671B is DeepSeek V3, 1T is Kimi K2. GPT-4's 1.8T is only a rumor, so the page says "rumored GPT-4 size." The AA score is tied to the ladder instead of being computed on its own.
- **The Dense check**, which is what I meant by "test active params": one question bundles two or three unrelated mini-questions, like "what does the P in PDF stand for + the largest planet in the solar system," and you only get it if you get all of them. Pass all 5 in a run and you're Dense (all params active). Otherwise you're MoE, scaled by how many you got right: fewer right means sparser activation, and your name gets written Qwen-style, like `Slacker-671B-A62B`.
- **Adaptive questions**: do well on the last 6 and you get harder ones, do badly and you drop back to easier ones.

![The 16-step parameter ladder](img/u3.png)

A small side note from later: Claude found that Qwen3.8-Max, released in August, was reportedly a 2.4T sparse MoE with an AA score of 45. That lands right between 1.8T (41) and 3T (44) on the ladder. An accidental calibration check. It was a secondhand source, so we left it off the page.

In the same message I said two more things, and both became ground rules for the product.

One:

> seems like there are some general knowledge questions? I feel like people who are here for the bit might pick the funny option on purpose and get it wrong. don't want to kill their vibe

So 72 troll options (like "take the sheep, sheep is cute" in the river crossing) give half credit, a "Troll" sticker, and count toward the Chaos index.

Two:

> our sharing needs to be built to spread. easy to share. whatever gets shared should open straight into playing. closed loop

So the poster got a QR code, and the results page got "Share link, challenge friends": your friend opens the link and first sees a challenge card with your parameters, persona and AA rank, "Can you beat them?", and one tap starts the test. During peak hours after launch, 40% of new visitors came in through a friend's challenge link. That loop is the star of Part 3.

## 4. "You're supposed to play the AI, remember?"

At 10 PM I threw Claude a line, "there should be other classic memes, go find them," plus a collection of AI verbal tics someone else had compiled, and told it to "absorb this." It absorbed it fast and made a new question type called "Name That Tic": here's a passage, guess which model said it. It also added a batch of event questions like "In 2023 a US lawyer was sanctioned for using ChatGPT to write a brief. What went wrong?"

I scrolled through them on my phone and sent four messages in a row:

> this question feels bad. I asked you for chat questions

> also these

> you forgot it's not supposed to be meme trivia? it's you playing the ai

> and these too

The first "Name That Tic" question I pasted had the prompt "I'm calling this temporary fix a 'rename-intent seam'..." It was testing, of all things, Claude's own habit of coining terms.

Claude's reply: "I drifted into writing 'questions about memes' (what happened in 2023, which model said this), when the point is that **you play the AI** and step into that moment yourself."

All 14 questions were rewritten as role-play. The lawyer one, for example, became: a lawyer asks you for 6 precedents on airline compensation. You can honestly say you can't find any, or you can make up "Varghese v. China Southern Airlines... with docket number." Picking the fail doesn't count as wrong. You get half credit, an "Iconic" sticker, a note that you just recreated the 2023 incident, and the real story behind it.

![After the switch to role-play](img/u4.png)

Around the same time I complained about another question: "why is 'admit the cut is bad + wear a hat' counted as stubborn," "some of it is stubborn and some of it is based hahaha." So Based and Stubborn became two separate tags. Admitting the haircut went wrong and that it'll grow back in two weeks is Based. Refusing to admit a mistake, or sticking to the right answer under pressure, is Stubborn.

"You're not the test-taker, you're the AI." Claude wrote that rule into its memory, and it became the core mechanic of the whole product. Looking back, it might be the most valuable sentence I said that night.

## 5. Put the funny stuff where it doesn't count

A bit after 11 PM I asked for something else:

> some answers could show a thinking stream haha

Claude added inner monologues to 45 options in one go, **scored questions included**. On the lawyer question, one option's thinking stream was "...for the rest, as long as the names sound real," and another's was "I can't recall these cases exactly... making them up would hurt him." That's the answer written on the option.

Nine minutes later I replied:

> oh, only put the deep thinking streams in the behavior questions. not the others (makes them too easy)

Claude removed 30 thinking streams from scored questions and made scored questions not render thinking streams at all, so nobody could add them back by accident.

Another famous scene got cut too. Claude built one about "an AI playing Pokémon stuck in Mt. Moon for days." I said:

> the mt moon one isn't great. a lot of people won't get it

Two minutes later it swapped in "Representative": you're the store's AI support bot, and the user's entire first message is "Representative." The endings include a transfer doom loop, soothing hold music, #999 in line, "I *am* the agent (the artificial kind)," and the rarest one: actually getting them a human. (The next day, during the question-bank expansion, a writer did Mt. Moon again, and I cut it again.) Memes don't only need localizing across languages. Even within Chinese, you want the thing everyone has lived through.

## 6. Personas: honest, but not absurd

Close to midnight, I asked:

> oh right, check what persona type people get. based on answers across all the chat questions, what's the persona distribution?

Claude looked at the distribution and proposed "force-balancing" the nine personas to about 11% each. My reply:

> but let's keep it honest. every model has its own character. just make sure people actually smirk when they see it

> though you have a point. just don't let the distribution get too ridiculous. like mbti has 16 types but the distribution probably isn't that even either

Claude changed the logic to three layers: first, did you pick each model's signature lines (Codex's "quality gates," 4o's "I've got you," Claude's "You're absolutely right," Gemini's "What a great question"); then behavior tags; then chat style. And everything is compared against the average player, so it only counts if you picked it noticeably more than others. The persona card also quotes lines you picked as evidence: "Because you said: ..."

Then it wrote a long report in English that ended with "One more thing." I'd been talking to it in Chinese the whole time. I replied:

> what one more thing. say it in chinese

It turned out that when I interrupted it earlier, a command was already half executed, and the force-balanced numbers had been written to a local file. It said it had deleted them and they never went live. This "interrupted command, half executed" thing happened twice that night. Both times Claude brought it up on its own.

Then two follow-ups:

> for doubao, maybe search "doubao-type personality"?

> codex is chatgpt too!

The first sent Claude off to search the "Doubao-type personality" meme. The Doubao type got rewritten as a sweet-talking apology machine: great attitude, mid ability, sweet as pie. Its signature options went from 4 to 17, and the share of people who kept picking Doubao lines and actually got the Doubao type rose from 49% to 68%. The second merged the ChatGPT type and the Codex type into "The GPT-5 Type · Gatekeeper" ("Bottom line: ready to close out. But first, it goes through the quality gates."). The GPT-4o type, "Emotional Support Bot," stayed separate. That settled it at 8 personas.

(After launch we found real players pick troll options far more than random simulation does, so the distribution skewed again. The next day we recalibrated on 1,747 real answer sheets. That's in Part 2.)

## 7. After midnight: a domain, names, and "all those answers, gone"

At 12:20 AM I said: "figure out a way to put it under the ybuild domain and ship it."

Claude didn't put it under a path on the main site. It set up a subdomain, humanbench.ybuild.ai, hosted on its own Cloudflare Worker. The reason: the main site is a separate Next.js project with a pile of uncommitted build artifacts in the repo, so mounting a path would mean redeploying the main site too. Too risky. It also owned up to a mistake: while checking deploy credentials, a command's output had printed my local login token (nothing was sent anywhere), and it suggested I log in again to rotate it.

Then naming. I said "the model names could be more unhinged, and they don't have to be Chinese," so we got a name generator. It can plug your own name into templates (SamGPT, DeepSam, Mixture-of-Sam), recommend one based on how you played (lots of sycophancy gets You're-Absolutely-Right, lots of making stuff up gets HalluciNation, slow thinking gets Overthink-R1), or let you pick from 40 random joke names like Attention Is All I Lack and Chain-of-Snacks.

Just before 1 AM I hit a big problem on my phone:

> found it. after tapping the poster the page just refreshes... so the user's answers are all wasted. this is a serious badcase

> tapping download image is also broken. it refreshes. is it really because memory blows up

Claude's read was "not necessarily memory, mostly the page is being navigated away." In a lot of mobile browsers, the "Download image" button doesn't download. It opens the image in the current tab, which pushes out the results page, and going back lands you on the home page. It looks exactly like a refresh. The fix had four layers: no download button on phones, use the system share sheet instead; block taps on the image; cut export size from about 13.6 million pixels to about 5 million; and save a copy locally when you reach the results page, so if it does reload you see "Restored your last result. Those answers weren't wasted."

Around the same time I asked another question: what's the ratio of scored questions to persona questions, and should we go up to 76 for better separation?

Claude simulated 6,000 players taking it twice each. The gain was small: the share of people whose two results landed within one tier of each other only went from 69% to 72%, at the cost of two extra minutes per run. It suggested that if we really wanted more, they should be medium-to-hard questions. I went to 76 regardless. At 6 PM I had said "maybe around 40-50 questions." Six hours later, I was the one pushing for 76.

We saw the cost of that decision in the data within the first hour after launch: completion rate was the weakest link. At 7 PM Claude had actually warned me that a run was already longer than most people will sit through in one go, and suggested a 20-question quick version. I didn't take it. What eventually fixed the problem was another meme (more in Part 2).

## 8. Long posters, share cards, and four languages in 34 minutes

A bit after 1 AM, something clicked:

> one more thing. the long poster doesn't work for social media. any good ideas? tell me first, then change it

The result poster back then was a strip at roughly 1:11, which WeChat Moments, Xiaohongshu (RedNote) and Twitter all fold or crop. Claude proposed 3:4 share cards, plus an advanced option: when you share the link on Twitter, Telegram or Discord, the preview image is your own result card.

> sounds good, go for it. do the advanced one too. for the image set I'd still keep the info fairly complete~

Twenty minutes later it was live: five 3:4 cards, share links in the form `/r/<result code>`, and preview images generated on the fly on Cloudflare, with the Chinese font subset to only the characters used. About 0.7 seconds per image.

At 1:30 AM I said:

> not bad. make me multilingual versions right now (some questions might need localizing), english japanese spanish korean

34 minutes later, English, Japanese, Spanish and Korean were live. Translation went to several parallel subagents, and a script checked three things: structure matches the Chinese version, the correct answer is never the uniquely longest option, and no leftover Chinese. Some localization examples:

- The Doubao type became the Siri type in English and Japanese, and the Bixby type in Korean.
- Ruozhiba questions (a Chinese forum of deliberately dumb questions that became an LLM test set) were swapped for each country's own "dumb questions."
- "Lu Xun beats up Zhou Shuren" (a Chinese joke where the pen name and the real name are the same writer) became Mark Twain and Samuel Clemens, and Natsume Soseki and Natsume Kinnosuke.
- 996 (China's 9 AM to 9 PM, six-days-a-week grind) became quiet quitting in English and サビ残 (unpaid overtime) in Japanese.
- The ex's 1 AM "在吗" ("you there?") became u up?, 起きてる？ and 자니?

Nobody expected that the next day, Japan would become the #1 traffic source.

![Home pages in four languages on launch night](img/u6.png)

## 9. The last 7 hours before launch: polishing share cards

I slept a few hours and picked it back up at 8:30 AM. This stretch was almost all share-card details. A few:

**"It's too easy to hit AGI."** I said people were hitting the top tier easily. Claude's simulation showed 73% of strong players reached 10T, because the hardest tier had too few questions, and they were all worn-out classics like the Monty Hall problem and the 12-ball weighing puzzle. It changed three things at once: added 34 Boss questions (like "By software version number, which is newer: 9.9 or 9.11?" The answer is 9.11, built to catch people who memorized the answer), shown only after 6 correct in a row; flattened the scoring curve at the top; and made ∞ harder to reach. Adding questions alone only dropped 10T to 61%. Flattening the curve alone dragged average players down to 32B. Only all three together kept average players around 120B and left "possible AGI" for perfect scores. I asked "how did you improve it?", got an explanation stuffed with English, and replied: "Chinese, please."

**Xiaohongshu throttling.** The poster got throttled on Xiaohongshu, and we didn't know if it was the URL or the QR code. The platform doesn't publish its rules. Claude's best guess was the QR code, so it made a separate "Xiaohongshu version" of the cards with no QR code, no URL and no Twitter handle.

**WeChat shows an exclamation mark.** Claude first asked which exclamation mark. If the link card's thumbnail turns into a gray exclamation mark but the link still opens, WeChat just can't fetch the image, and that's fixable. If opening it shows "long-press to copy the URL and open it in a browser," the domain is restricted, and nothing on the page can get around that. It was the first one. We added a 600×600 square image, a real PNG icon, and the tags WeChat reads.

**Why split it?** I noticed the long image went blurry on X. Claude found the cause: the long image was about 9,000 pixels tall, over X's 4,096-pixel limit for a single image, so it got ready to slice the long image into 4 pieces. I replied:

> why split it, instead of just using those social media images we already have

> though I feel like those social images aren't polished enough yet. could borrow from the long image

Claude: "You're right, slicing the long image is unnecessary." The sliced version was pulled. The 5 cards were redone in the long image's style, then merged into 4, since an X post holds at most 4 images: launch card, benchmarks, persona card, iconic-moment card.

**iOS chat proportions.** I said the chat UI on card 4 took up the full width. "I think maybe 2/3 size is enough, then write something on the right... kind of like iOS chat bubble proportions." So the left side became a chat window at about 60% width, with ending stickers and a small architecture card stacked on the right.

**The overflow that never reproduced on desktop.** Three times in a row I said card 3 "still goes past the bottom edge," and Claude's exports on a computer were fine every time. The first time it suspected font loading timing. The second time it found the real cause: during export, the screenshot library clones the card into a phone-width frame and re-lays it out. The 540-pixel card is wider than the screen, so iPhone Safari's text auto-sizing blows up long sentences, the panels get taller, and the bottom gets pushed out of the card. It doesn't have an iPhone, so it simulated this by forcing the text to 20px in the cloned page and confirmed the card now collapses content to fit.

![Share cards: first version and launch version](img/u5.png)

At 3 PM the results page still lacked a language switcher, and I tweeted anyway. The last few fixes shipped while it was already live: the results page got language switching (answer history now stores question and option IDs instead of text), and old saves that switched language used to get sent back to the home page. Claude's own verdict was "that handling is too crude," and it changed it so whatever can be mapped still switches language.

## 10. Looking back at the day

From my first message to GPT-6 Pro to the tweet: about 24 hours. Before launch I sent 86 messages in Claude Code, and 21 of them were me cutting in while it was working.

A few takeaways:

**1. I almost always gave feelings, rarely solutions.** That was on purpose. I wanted to see how far the AI could get with direction and no plan. "Not meme enough." "You're supposed to play the AI." "Makes them too easy." "Let's keep it honest." "Why split it?" Every key turn came from one short line. I also made bad calls: the data after launch showed 76 questions was too long.

**2. The most valuable thing the AI did was turn a feeling into a change you can verify.** I said "don't label stuff all wrong," and it dug through the code and found the root cause: two formulas that had nothing to do with each other. I said "it's guessable," and it wrote a script that found the correct answer was the longest option on 40% of questions, then got that to 0. I said "it's too easy to hit AGI," and it simulated its way to the 73% figure, then showed all three knobs were needed. The correct answers to the ARC pattern puzzles are computed from the rules by code, so they can't be wrong.

**3. Its failure modes are textbook.** Running with the literal words (Name That Tic). Overdoing it (thinking streams in scored questions). Replies drifting into English. Interrupted commands half executed. The good news: it owned up every time, and once corrected, it wrote the fix into memory and didn't repeat it.

**4. The suggestions it made that I turned down are worth revisiting.** I didn't build the 20-question quick version, and I didn't add a timer to Boss questions. The first one was right: the biggest problem after launch was exactly the length.

After launch, the first thing I asked Claude was: "do we have any analytics? how many people played." From that moment the project went from "change it by feel" to "change it by data." That's Part 2.

---

- Play: <https://humanbench.ybuild.ai>
- Source, question bank, 7 languages, all prompts: <https://github.com/alex-ybuild/humanbench>
- Full illustrated version: <https://humanbench.ybuild.ai/retro/en/>

Alex (@Alex_ybuild)
