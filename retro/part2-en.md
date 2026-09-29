# How many B are you? Retro, Part 2: 36 hours after launch, and a question-by-question drop-off table

![Traffic curve](img/f3.png)

> Second of three. Part 1 went from 4 messages to launch. This one covers what happened after launch, from the afternoon of September 27 to late at night on the 28th, as Claude and I watched the data and changed the product. Part 3 is about how it spread and what we found in 12.7K answer sheets.

At the end of Part 1, I asked Claude: "do we have any analytics? how many people played."

In the 36 hours from then to late the next night, I sent about 140 more messages in Claude Code, and we shipped 30+ changes, big and small. Almost every one followed the same loop: look at the data, guess why, change something, look at the data again. Some changes worked, some didn't, and once Claude overturned its own conclusion from two hours earlier.

This post goes through the most important ones in order.

> On the data: analytics are self-built and anonymous. No IPs, no names (details in the privacy section of Part 3). Tracking started at 3:58 PM on September 27, so the first hour of traffic after launch wasn't recorded. "Completion rate" only counts people whose run started at least 40 minutes before we measured, and the exact definition shifted a bit over time, so I only compare before and after within the same table. All times are local time.

---

## 1. Analytics: no Google Analytics, no IPs

After I asked about analytics, Claude first laid out where things stood: all we had was total request counts from the Cloudflare dashboard, with no way to tell who actually played or how far they got. Then the plan:

- **No Google Analytics.** It doesn't load in mainland China, so everyone coming from Xiaohongshu and WeChat would go missing.
- **Build a small database ourselves** (Cloudflare D1). No cookies, no IPs, no names. The browser keeps a random ID locally, used only to tell whether it's the same person.
- **Track these events**: visit (language, referrer, country), start, finish (tier, persona, time taken), save share card, tap share link, switch language. Later we added "reached question N," "left at question N," which app it was opened in, export failures, and so on.
- **Query from the terminal**: Claude writes the query scripts directly. I say "check the data" and it pulls a table.

The first version hit a bug right away: the endpoint replied "received" before reading the request body, and by then the body was gone. All data lost. Fixed a few minutes later.

The first numbers, 16 minutes in: 222 visitors, 67% hit start. Half an hour later: of the 42 people who had finished, 32 had saved a share card or tapped share. Claude's take: "For a typical quiz product, 20% is considered good."

It also did a rough calculation: each person who finishes brings about 1.6 friends who open the challenge link. Multiply by a completion rate of around 30%, and the viral coefficient is about 0.5. Then it said the line that set the direction:

> If completion rate gets above 50%, this number gets close to 1.

That set the main thread for the next day and a half: **the biggest lever isn't share rate, it's completion rate.**

![Funnel](img/f2.png)

## 2. Jev: I vetoed "fewer questions"

76 questions took a median of 18 to 20 minutes to finish (the home page said about 13). If the problem is "too long," the obvious fix is fewer questions. I didn't want that:

> I don't think it's about cutting questions. it's more like, if it's taking a long time and they're likely to drop off, then something pops up saying: let Jev play for you (search JEV, it's actually a meme too). then it skips some questions (can be ones that barely affect the score, so progress goes up, and play up how fast jev is and the output probabilities blabla)

Jev was a model that had taken over X two weeks earlier. It can't chat. It only picks from a limited set of options and gives each option a probability. Using it as a stand-in player fixes the length problem and is a meme in itself.

Claude looked Jev up, and the first version went live ten minutes later. At questions 18, 36 and 54, if you'd been going longer than a threshold, a popup asked "Let Jev play for you?" Jev only answered low-impact questions like reviews and persona chats. The screen ran a green-on-black decision log that ended with "Played N questions · 0.xx s · cost $0.000x · Explanation: none (Jev doesn't explain)."

I added one line: "not fewer questions, faster progress." So the total stayed fixed at 76, questions Jev answered counted as done, and the progress bar jumped from 18/76 straight to 30/76.

**The first version's numbers were ugly: 23 popups, only 8 people accepted.**

I stared at the popup for a while and sent three messages:

> is the Jev copy unclear? like you should say Jev answers some of the questions for you, not all of them

> ohh maybe the prices make it look like we're charging. need to adjust the copy

> the cost part too

The popup said "$7 for an hour of Doom" and "cost $0.0006." The idea was to riff on the Jev meme, but it read like a paywall. The second version dropped every price, changed the title to "Let Jev answer 15 questions for you?", added a bold line, "You answer everything else yourself," and moved the popup up to question 12. We also made refreshes keep your progress.

After the change: 339 popups, 201 accepted. **Acceptance went from 35% to 59%**, and completion rate went from 29% to 40%. (These shipped together, so I can't separate how much each contributed.)

Later I thought about "quietly adding a little potion bottle" as the entry point instead. Two minutes later I took it back: "ok we still need the auto popup haha." The potion bottle became a small Jev icon in the top bar. The data later confirmed that a quiet entry point alone isn't enough: only 3% to 4% of people opened Jev on their own in the first 3 questions.

### Jev v3: a step backward

A bit after 9 PM, Jev's numbers looked great: people who accepted finished at 67%. But 28% of people left before question 5 and never got the invite. So I proposed a new mode: from question 1, the top bar shows "Play with Jev." Once it's on, questions Jev can take still show up, but Jev picks the answer, an output box appears ("Q13 read · 32 tokens → B p=0.83 · 6ms"), and after about 1.5 seconds it moves to the next question.

It was fun to watch. The Jev meme was front and center. The data from the first hour was great too: people who turned it on finished at 63%, people who didn't, only 23%.

But at the midnight review, Claude split players into cohorts by start time and compared:

| Start time | Completion, with Jev | Without Jev |
|---|---|---|
| 8–9 PM (old version: skip 15 at once) | 70.5% | about 27% |
| 10 PM (Play with Jev: one question at a time) | **59.3%** | 25.3% |

People without Jev barely moved. People with Jev dropped 11 points, so the problem was the new mode itself. That earlier "63% vs 23%" had selection bias: the "didn't turn it on" group included everyone who left in the first few questions.

Claude's read: in the old version the progress bar jumps a big chunk at once, which gives a strong "almost done" push. Answering one at a time chopped that payoff into pieces, and each question added a 1.5-second animation. I said:

> I think once Jev is on it should jump a whole batch hard. skip a bunch of questions at once, and every time skip several (but with a fast-forward animation). otherwise players won't stick with it. figure out what the pacing should be, discuss with me first

This time we talked before building. Claude simulated four pacing patterns with character strings (like `[8]·····[4]·····`) and found that some would use up all the skippable questions early and leave 14 hard ones at the end, and some would sometimes skip only 1. Then it set the parameters from live data: 52% of people turned Jev on at the auto invite on question 12, and 90% of people who reached question 45 went on to finish.

The final design: the moment you turn it on, it skips up to 10 of the next 18 questions. After that, every 4 you answer yourself, it skips another batch of 3 to 5. The fast-forward animation runs 0.25 seconds per question, 2.5 seconds max per batch. Afterward it says "Jev skipped 10 for you · saved ~3 min."

![Four versions of Jev](img/m2.png)

| Version | Overall completion | Completion, with Jev |
|---|---|---|
| Old: skip 15 at once | 41.4% | 71.0% |
| Play with Jev: one at a time | 39.9% | 62.3% |
| One at a time, higher cap | 45.1% | 65.8% |
| **Batch skips** | **45.5%** | **67.1%** |

The next morning we raised the opening skip to up to 15, the same punch as the old version. By noon the next day, 39% of players had turned Jev on.

**Players didn't want to "watch Jev work." They wanted the progress bar to lurch forward.**

## 3. The 12% on Q3

Two hours after launch, Claude saw that 23% of people didn't make it to question 5, and suspected the opening was too hard: question 2 was an ARC grid pattern puzzle. It proposed reordering so the first 5 were strawberry, 9.11, **the Deep Think Mode chat**, a random classic fail, and the car wash, with ARC moved later. I agreed.

Deep Think Mode is the "I could really go for a big bowl of white rice" chat: halfway through a reasoning puzzle, the thinking trace wanders off with "man, I'm kinda hungry." It's the most meme-dense of all the iconic chats, and by the rule "put the funniest stuff first," it went to question 3.

Four hours later we had per-question tracking on the first 5, and the data came in:

| Left at | Question | Share of starters |
|---|---|---|
| Q1 | strawberry | 4% |
| Q2 | 9.11 vs 9.9 | 3% |
| **Q3** | **Deep Think Mode** | **12%** |
| Q4 | random classic fail | 9% |
| Q5 | car wash | 2% |

Questions 6 to 15 lost about 2% each on average. Question 3 was 6 times that. "Left at Q4" actually means people who finished the Q3 chat and then left, so the combined 21% was most likely all caused by that one chat.

The cause wasn't hard to find. The chat opens with a liar logic puzzle: "A says B is lying, B says C is lying, C says A and B are both lying..." Five nodes and a 315-character thinking stream, the longest of any chat. Putting it at question 3 meant handing people a logic puzzle right out of the gate.

First fix: swap in a one-tap Slop Check question and move Deep Think to question 11. Drop-off at question 3 fell from 11.7% to 3.8% (3.2% once the sample grew). But the share getting past question 15 only went up 2 points, because the drop-off followed the chat to question 11.

I saw it in the replies too:

> ohh is Q11 just a bad question? feels like a lot of people are complaining about it. maybe swap it out

So we pulled it. Question 11 became a random pick from three short chats: "A Car for $1," the AI snack shop ("Tungsten Cubes" on the English site), and "Representative."

| Cohort | Left at Q3 | Past Q5 | Past Q15 |
|---|---|---|---|
| Deep Think at Q3 | 11.7% | 71.8% | 54.0% |
| Moved to Q11 | 3.2% | 83.6% | 57.3% |
| **Removed** | **1.3%** | **85.1%** | **62.6%** |

![Question 3](img/m1.png)

Past question 15 went up a net 8.6 points. At the time about 1,500 people an hour were starting, so that's roughly 130 more people an hour making it past question 15.

There's a detail I only noticed while writing this. At 2 a.m., after one more round of fixes, I messaged Claude: "hehe, I want to savor this a bit. praise me." (Yes, I'm a sucker for this.) It wrote a whole paragraph of praise, including this line: "You put the Deep Think question at Q3 yourself, and the moment the data said it was driving people away, you swapped it out without a second thought." Going back through the logs, putting it at Q3 was Claude's suggestion, and I just agreed. The AI gives credit to the human. I find that interesting in itself.

## 4. The drop-off table

The Q3 thing made me realize looking at the first 5 wasn't enough:

> do we have a per-question drop-off table? our goal is to go viral hehe

Claude added a "leave" event: if you switch away or close the page mid-run, it records which question number you were on and which question it was. An hour later we had the first full 76-question drop-off table. It became the thing we looked at most:

- 61% were still there at question 16, and from there to the end we only lost another 14 points. After question 30, each question lost under 0.5%. **Nearly all drop-off happened in the first 16 questions.**
- The worst questions: Q16 (the second iconic chat), Q10 (ARC pattern puzzle; one specific puzzle lost 11 people on its own), Q4, Q6, and Q14 (the Dense check).

Then we found one cause. The code served ARC one tier harder than the player's current level, so anyone who did well on the first 9 hit a Boss-level ARC on question 10. Questions 7 and 9 also served Boss-level trivia to strong players. We capped everything before question 20 at tier 3 (Boss is tier 4).

| | Drop-off, Q6–15 combined | Past Q15 | Completion rate |
|---|---|---|---|
| Before cap | 21.8% | 64.1% | 45.3% |
| After cap | 18.7% | 66.0% | 45.3% |

Midgame drop-off fell 3 points, **but completion rate didn't move at all**: some people just quit later instead. Not a failure, but a reminder: a better intermediate metric doesn't mean a better final metric. A few hours later we learned that lesson again, and it hurt more.

The same table showed that "A Car for $1" at question 11 lost twice as many people as the other two chats, so question 11 now only picks between the AI snack shop and "Representative."

## 5. Personas: recalibrated on real players

An hour and a half after launch, of the 512 people who had finished, 34% got the GPT-5 Type, 28% the Grok Type and 22% the GPT-4o Type. The top three added up to 84%.

The reason: the persona baselines had been simulated with random picks, and real players love troll options, so everyone skewed toward Grok and 4o. Claude first added raw persona features to the finish event (just 25 numbers, no option text), then recomputed the baselines once we had 1,747 answer sheets.

After recalibration, the top three added up to 51%, and the eight personas ranged from 17% down to 6%. The most common were 4o and GPT-5, the rarest was Kimi. What I said in Part 1, "keep it honest, but don't let the distribution get ridiculous," only now had real data under it.

## 6. Traditional Chinese: "isn't spot-checking kind of sloppy"

In the early evening I asked Claude whether we should add more languages, like French. It pulled the data and argued against it: France had 10 visitors total, and the Spanish version had been opened by 7 people since launch. **What we were actually missing was Traditional Chinese**: Hong Kong and Taiwan together had 625 visitors, 17% of the total, 6 times more than Korea. They could only read the Simplified version, and 100+ of them had been routed to English.

I said: "just do it now, traditional and french."

French went the way Claude predicted: 31 visitors and 9 finishes by midnight. At least it was cheap and barely took time away from the main work.

The plan for Traditional was to auto-convert with OpenCC, then spot-check. I cut in:

> isn't spot-checking kind of sloppy

Then two more:

> also for traditional chinese, hong kong doesn't say it that way i think

> the wording is different too right. like software is 软件 vs 软体

So instead we sent out 14 reviewers, one pass for Taiwanese usage and one for Hong Kong usage, checking line by line. They found 600+ problems:

- "通過" (to pass, as in tests passing) had been auto-converted to "透過" ("via"), which wrecks the meaning. Nine of those in one section of the question bank alone.
- "质量" (quality in mainland usage) means physical mass in Taiwan. You need "品質."
- Mainland terms swapped for local ones: 西红柿 became 番茄 (tomato), and koala became 無尾熊 in Taiwan and 樹熊 in Hong Kong.
- **It also caught a build bug**: the conversion script had mistaken some ending descriptions for model names and protected them, so 290 ending descriptions had been sitting in Simplified Chinese on the Traditional site the whole time.

The Traditional version has a single "繁體" entry and switches vocabulary based on the visitor's region: 軟件 or 軟體 for software, 的士 or 計程車 for taxi.

By midnight the Traditional pages had 742 visitors and a 47% completion rate, higher than the Simplified pages' 42%.

## 7. The English version: fixed the back half, broke the opening

The next morning, completion rates across languages were between 40% and 60%. English alone was at 18% to 23%. The English pages also had the lowest start rate: 57.5%, versus 74% for Chinese and 82% for Korean.

> sounds good. give the english side special treatment, they're probably even less patient

> could also be the memes and the language context, take a look

Claude first ruled out "Americans just don't like it": US IPs overall finished at 41%, it was only the English pages that were low. And English drop-off was even, 4% to 7% per question across the first 6, not one broken question. Conclusion: it was the content.

We came up with four hypotheses. The opening was all 2024 memes English AI Twitter was long sick of (strawberry, 9.11). The trivia was dated internet factoids (tomatoes are berries, goldfish have a 7-second memory). English runs much longer than Chinese and is tiring to read on a phone. And translationese: the jokes died in translation.

Then we sent two teams of "English editors" to rewrite for English AI Twitter's taste. The opening got fresh 2025 memes ("how many b's in blueberry" from GPT-5's launch week, "5.9 = x + 5.11"). 27 of the 41 trivia questions were replaced. The Three-Body Problem was swapped for Dune. And they wrote a 40-line English style guide.

The first look at the data after the rewrite was mixed:

| Left at | Before rewrite | After rewrite | Question |
|---|---|---|---|
| Q2 | 3.8% | **7.0%** | 9.11 vs 9.9 → 5.9 − 5.11 |
| Q3 | 8.2% | 13.4% | Slop Check |
| Q5–11 combined | 23.6% | **12.0%** | |

Drop-off in the middle and back roughly halved, but more people left at the start, and overall completion fell from 26% to 20%. Q2 drop-off doubled: solving an equation takes a lot more thought than eyeballing which number is bigger.

The fix: Q2 went back to 9.11, and all 22 Slop Check questions had their options cut to 60 characters or less. By evening completion was back to 25.4%, close to the pre-rewrite 26.8%.

![English version, per question](img/m3.png)

Two lessons. First, **the meme you think is stale may be exactly what gets people in the door**: strawberry and 9.11 really are worn out on English AI Twitter, but because everyone gets them, they belong at the entrance. Second, **the value of a per-question table is that it breaks "worse overall" into which questions got better and which got worse**. Looking only at the total, we would have concluded "the rewrite failed" and thrown out the back-half improvements along with it.

## 8. "No A/B, just watch the AA numbers," and Claude corrects itself

At noon the next day I had Claude pull a "channel × drop-off" table:

| Opened in | Past Q12 | Finished | Finished, with Jev | Finished, without Jev |
|---|---|---|---|---|
| Regular browser | 73% | 48% | 66% | 40% |
| QQ | 68% | 42% | 73% | 32% |
| WeChat | 62% | 37% | 65% | 27% |
| X | 57% | 30% | 58% | 20% |

(QQ is Tencent's other big messaging app.) By question 12, where Jev's first invite shows up, 43% of X visitors were already gone. Most never saw the invite. Claude proposed an A/B test. I made the call:

> 1. these players get the Jev invite at Q4... opened in X's in-app browser; opened in WeChat's in-app browser; came in from an X link; everyone on the English version. 2. everyone else stays at Q12. I think that's it, go with this strategy. no need for AB, just watch the AA numbers

(By "AA numbers" I meant the overall numbers, not the AA score.)

Over the next two hours Claude reported twice: in the channels with the early invite, getting past question 15 was up about 4 points, and "midgame retention is improving."

A bit over an hour after that, it overturned itself:

> What I said earlier, that "the midgame is keeping more people," doesn't hold. When Jev turns on it skips up to 15 questions at once, and skipped questions also count as "reached"... The only reliable metric is completion rate. After subtracting the control group's natural drift, completion actually went down about 2 points with the early invite.

Jev usage did go from 26% to 49%, and past-Q15 went from 60% to 67%, but that was all Jev skipping people forward, not people actually staying. Completion went from 37.6% to 36.8%, while the control group went from 46.0% to 47.2% over the same period.

I replied: "ok, I think we can revert." Every channel went back to the Q12 invite.

This was the only time in the whole project that the AI admitted on its own that it had misread the data and suggested rolling back a change. Looking back, skipping A/B bought us speed. The price was relying on control channels to subtract time-of-day effects, and nearly getting fooled by a metric definition.

## 9. Growing the question bank 46%: an AI pipeline

The next morning, Claude noticed that 11% of players who finished had played two or more times, so it calculated the odds of seeing a repeat question. Between friends, persona chats repeated 50% of the time, iconic chats 40%, Slop Check 33%. **The most visible content on the share cards came from the three smallest pools in the bank.**

The first two rounds doubled those three. At 10 AM I said:

> expand it! I'd say grow the question bank by at least 45%. what do you think?

> more questions, same quality! needs to be just as meme-heavy as before

Claude ranked pools by "questions drawn per run ÷ questions in the pool." The most repeat-prone were chart questions (4 per run from a pool of 9) and computer-use questions. The target went from about 404 questions to 589, adding 185, or 46%. Then it set up a pipeline:

1. Write one shared writing brief and a self-check script.
2. **11 subagent groups write in Chinese in parallel**, each owning one pool. Every command, regex and piece of code has to actually be run.
3. **Two "meme editors" review**, scoring each question on funny, accurate, short, translatable and not offensive. Anything under 4 gets rewritten or replaced.
4. 5 languages × 3 groups: 15 translation groups in parallel.
5. One **native-speaker final reviewer** per language, reading start to finish.
6. Two review passes for Traditional Chinese.
7. Smoke tests in all 7 languages, clicking every new chat through to an ending.

Work started at 10:30 AM and went live at 1:30 PM. The brief for every step is in `prompts/03-agent-briefs.md` in the open-source repo, ready to reuse.

![Question-bank expansion pipeline](img/m4.png)

The most interesting part of the pipeline was the reviewers catching errors in the source:

- **Reviewers for four countries independently found the same error.** In an earlier round of localization, the Chinese source said gaokao math was on "the morning of June 7." That morning is actually the Chinese-language exam; math is in the afternoon. The English, Japanese, Korean and French reviewers couldn't see each other's notes, and all of them flagged it. In that round my only worry had been "does Japan even have a gaokao?" Claude initially thought the original sentence was fine, but sent reviewers anyway.
- The Chinese source described "3 successes out of 17" as "a 30% success rate." It's 18%.
- A Python snippet in an English question used curly quotes, so copying it would throw an error.
- One Japanese line had the meaning reversed. One Korean word is now considered a slur, so it was replaced.
- In Traditional Chinese, "对象" (a romantic partner) got converted by Taiwan's rules into "物件," the programming term for "object," which killed a pun.
- Writers wrote "AI playing Pokémon stuck in Mt. Moon" twice, and I cut it twice: "Pokémon Mt. Moon doesn't land outside the bubble."

**The translation process ended up fact-checking the original.**

We had one accident too: a translation group ran a full build, and the live Traditional site auto-converted a fresh copy from Simplified, including new questions that hadn't been reviewed yet. As soon as we caught it, we sent reviewers to patch it.

## 10. Safari and the four-pointed star

The next morning I gave the 8 personas their own color themes: a red scarf for the Doubao type (Doubao is ByteDance's chatbot; this persona is the Siri type on the English site), a four-pointed-star background for the Gemini type, slashes and caution tape for the Grok type. They went to a private preview first and only shipped after I reviewed them.

Two hours later I got the Gemini type myself, and the share card failed to generate:

> I got chinese 1.5B dense gemini persona and it failed. no idea why. or is it related to ip?

> safari

> it was fine last night at least. no idea what happened

Claude found the cause within two minutes. Gemini's stars and Grok's slashes were SVGs embedded as CSS backgrounds. Once Safari draws that kind of image onto a canvas, it won't let you export the canvas as an image. Doubao's red scarf happened to use a regular image tag, so it was fine. We had always tested in Chromium and never triggered it.

For the two hours between the themes going live and the fix, everyone on Safari who got the Gemini or Grok type couldn't export a share card. The fix: swap the three textures to PNG, test all 9 themes under Safari's engine, and add an "export failed" event.

That event then caught another problem: for a few people, the screenshot library hadn't loaded from the public CDN. After adding a fallback that loads it from our own domain, export failures went to zero.

## 11. What 36 hours taught me

**1. Find the biggest lever first.** For a quiz that takes 20 minutes, the biggest lever is completion rate. Share rate was already high (more than half of finishers share), so more finishers means more shares on its own.

**2. A per-question table is far more useful than totals.** The 12% on Q3, the Boss ARC on Q10, the doubling on Q2 in English: none of that ever shows up in totals.

**3. Metric definitions lie, and they do it very naturally.** Questions Jev skipped counted as "reached." "63% with Jev vs 23% without" had selection bias. The first few tables had the wrong time zone. The completion-rate threshold differed at different times. Each one nearly led us to the wrong conclusion.

**4. I handle direction, the AI handles measurement.** Several key decisions came from one line of mine: "not fewer questions," "isn't spot-checking kind of sloppy," "it should jump a whole batch." Several key findings came from Claude: the Q3 drop-off, French not being worth it, and the time it overturned itself. It cuts the other way too: my call to skip A/B nearly left a regression live, and the chat Claude put at Q3 on the "funniest stuff first" rule drove away 12% of people.

**5. If you can't see an effect, don't count on it.** More on this in Part 3: some features didn't move the data at all after launch. We kept them, but stopped spending time on them.

---

After 36 hours, completion rate had gone from around 29% at the start to a steady 45% or so. Traffic started its natural decline on the second evening.

But before that, something else was happening at the same time: players were passing it around. 40% of new visitors came through a friend's challenge link, each Japanese player who finished brought in 2.3 new visitors on average, and 70% of the people who came in through a challenge link lost to the friend who sent it.

That's Part 3.

- Play: <https://humanbench.ybuild.ai>
- Source, question bank, all prompts: <https://github.com/alex-ybuild/humanbench>
- Full illustrated version: <https://humanbench.ybuild.ai/retro/en/>

Alex (@Alex_ybuild)
