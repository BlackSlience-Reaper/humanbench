# English edition: make it land with English-speaking players

HumanBench (“How many B are you?”) is a meme quiz: 76 questions, you play the AI; the result page gives you a parameter count, a launch-day benchmark table, “known issues”, an AI personality type and 4 share cards. It went viral in Chinese and Japanese. **The English edition is underperforming badly** and you are a native-English editor who lives on AI Twitter/X (think: posts about Claude/GPT/Gemini, knows every meme from “strawberry” to “You’re absolutely right!”, 25–35, low patience, allergic to cringe).

## Data (since launch, same content in every language)
| | start rate (visitors who tap Start) | finish rate (no helper) | finish rate (with Jev auto-skip helper) |
|---|---|---|---|
| Chinese | 74% | 38.5% | 69.5% |
| Japanese | 72% | 27.6% | 61% |
| Korean | 82% | 47% | 74% |
| **English** | **57.5%** | **17.6%** | **36.8%** |

English players churn steadily at *every* question (Q1 7.3%, Q3 6.6%, Q4 6.4%, Q6 5.3% …), not at one broken question. Even when the helper skips ~30 questions for them they still quit. So it’s not only length: the jokes, references and reading load aren’t landing. English visitors mostly arrive from X (t.co).

Our hypotheses (verify or refute them yourself):
1. The opening is wall-to-wall 2024 AI-Twitter memes (strawberry r-count, 9.11 vs 9.9, Alice’s sisters, car wash 50 m) that English AI Twitter has seen a thousand times; the home page cards advertise the same ones.
2. Early “world knowledge” items are stale internet trivia (tomato is a berry, Turing test year, HTML isn’t a programming language) with no joke.
3. English text is much longer than the Chinese and heavy to read on a phone (e.g. the “Slop Check” options).
4. Translated jokes feel translated: Chinese-internet humor carried over literally, flat punchlines, explanations of the joke.

## Files
- English content: `i18n/en/bank.js`, `chats.js`, `lv4.js` (arc.js has no text worth touching); UI strings: `i18n/en/ui.json` + `ui_extra.json` (keys are Chinese UI segments, values are English); hero/title/meta: `i18n/langs.json` (the `en` entry).
- Chinese originals for reference: repo root `bank.js`, `chats.js`, `lv4.js`, `app.js`.
- What a player sees in the first 15 questions (RUN_PLAN order): traps_fixed:0, traps_fixed:1, slop (SLOP_VIBES, random), traps (random, low level), traps_fixed:2, persona (PERSONA_Q, random axis), knowledge, osworld, knowledge, arc, chat (CHATS index 12 or 15), knowledge, terminal, dense, knowledge. Before Q20 ability items are drawn at difficulty ≤ 3 and adaptively (mostly lv 1–2 at the start).
- Screenshots of the current English home + first 16 questions: `<scratchpad>/enopen/` (look at them).

## Rules
- **Do not change structure**: number/order of items and options, `ok`/`half`/`fun`/`halluc`/`meme` flags, `lv`, `tr`, `ax`, `id`, `go`, node names, `term`/`code`/`ui`/`chart` presence, model ids (“Claude”, “豆包”, “GPT-5 系” … stay as-is; 豆包 is rendered as Siri in English). Item indices must stay aligned with the Chinese version.
- You **may replace an item’s content entirely** with a fresher English-native equivalent of the same type and difficulty (same pool, same number of options, correct option stays the one flagged `ok`). Prefer this over polishing a dead joke. Facts must be 100% correct; memes/events must be real and correctly dated (up to Sept 2026). No emoji. Don’t name private individuals.
- **Correct option must not be the uniquely longest option.**
- Keep it short: question ≤ ~110 chars where possible, options ≤ ~60 chars, comments `r`/`c` punchy (one line). Cut explanations of the joke.
- Voice: dry, online, specific. Model tics should be the ones English AI Twitter actually mocks (Claude “You’re absolutely right!”, GPT “Great question!”/em-dashes/“delve”, 4o glazing, Gemini “insightful”, Grok edgelord, etc.).
- JS strings: no bare straight double quotes inside strings; use “ ” and ’.

## Check before finishing
`node qa/validate_lang.cjs en` (must show 0 structure problems, 0 correct-is-longest, 0 leftover Chinese) and `node --check` on every file you touched. Then `NOSYNC=1 python3 build.py >/dev/null && echo built`.

Report in ≤ 8 lines (in Chinese is fine): what you changed and why, how many items replaced vs. edited, anything structural you recommend (e.g. different opening order for English) that needs code changes.
