// Round 3 additions (English): terminal / cursor / automation, 9 each (lv1×1, lv2×4, lv3×3, lv4×1)
const ADD3 = {

  terminal: [
    { lv: 1, term: "$ git blame utils.js -L 42,42\na1b2c3d4 (me 2025-03-14 02:47:12 -0700 42)  // temp hack, fix tomorrow", q: "You want to find out who wrote the mess on line 42. Result?", issue: "git blame pointed at yourself", opts: [
      { t: "You did, at 2:47 a.m., a year and a half ago", ok: 1, r: "Correct. blame shows who last touched each line. That “tomorrow” was 500+ days ago." },
      { t: "A mysterious coworker named me. Time to confront him", r: "me is your own Git username. You’re about to confront yourself." },
      { t: "a1b2c3d4 is the author’s employee ID. Ask HR", r: "That’s the commit hash. HR can’t look it up. Your conscience can." },
      { fun: 1, t: "blame means Git takes the blame for you", r: "Git investigates. The blame is still yours." },
    ] },
    { lv: 2, term: "$ node server.js\nListening on :3000\n^Z\nzsh: suspended  node server.js\n$ node server.js\nError: listen EADDRINUSE: address already in use :::3000", q: "You hit Ctrl+Z to stop the server. Restarting says the port is taken. By whom?", issue: "Thought Ctrl+Z is the off switch", opts: [
      { t: "You: Ctrl+Z only suspended it", ok: 1, r: "Correct. Ctrl+Z pauses, it doesn’t quit. Type fg to bring it back, then Ctrl+C." },
      { t: "Another app grabbed port 3000 the instant you quit", r: "Nobody grabbed it. The one holding the port is the process you froze in the background." },
      { t: "Ctrl+Z is undo. It undid your start command", r: "The terminal has no undo. Ctrl+Z just puts the process in timeout." },
      { fun: 1, t: "Reboot. Free the port physically", r: "It works. The cost is your 38 open browser tabs." },
    ] },
    { lv: 2, term: "$ apt install cowsay\nE: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)\nE: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), are you root?\n$ sudo !!", q: "What does that last line, sudo !!, mean?", issue: "Thought sudo !! is yelling at the computer", opts: [
      { t: "Rerun the previous command as root", ok: 1, r: "Correct. !! means “last command.” Too lazy to retype it: that’s a veteran." },
      { t: "Force mode: ignore all errors and keep going", r: "The bangs aren’t yelling. The computer doesn’t respond to yelling anyway." },
      { t: "Rerun every command in your history as root", r: "Just the last one. Rerun them all and last week’s typos rise from the dead." },
      { fun: 1, t: "Shouting at the computer: INSTALL IT!", r: "Great energy. Sadly !! is just shorthand for “last command.”" },
    ] },
    { lv: 2, term: "$ ls\nhomework.docx\n$ cat .diary.txt\nSkipped homework again today.", q: "The diary isn’t in the ls output, but cat opens it. Where is it hiding?", issue: "Couldn’t find the dot-file diary", opts: [
      { t: "Right here. Dot files are hidden by default", ok: 1, r: "Correct. Names starting with . are hidden; ls -a shows them. In Finder, Cmd+Shift+. reveals them too." },
      { t: "In memory. cat can read files not yet saved to disk", r: "cat reads files on disk. It doesn’t read minds or your unsaved drafts." },
      { t: "Quarantined as suspicious. Only cat can see it", r: "The OS isn’t that bored. It just hides dot files, by the rules." },
      { fun: 1, t: "ls read it and politely didn’t show it", r: "ls doesn’t have that much tact. The homework really is undone, though." },
    ] },
    { lv: 2, term: "$ curl https://api.example.com/search?q=cat&page=2\nzsh: no matches found: https://api.example.com/search?q=cat", q: "The URL opens fine in a browser but errors in the terminal. Fix?", issue: "Fed an unquoted URL to the shell", opts: [
      { t: "Put the URL in quotes", ok: 1, r: "Correct. zsh treats ? as a glob and goes file hunting, and & splits the command. Quote it and it’s just text." },
      { t: "The site blocked the terminal. Use a browser", r: "The site never got a request. zsh is the one erroring, searching your disk for a file named that URL." },
      { t: "curl doesn’t do https. Use http", r: "curl has done https forever. You dropped encryption to avoid two quote marks." },
      { t: "Add sudo and try again", r: "sudo gives you permissions. It doesn’t give you quotes." },
    ] },
    { lv: 3, term: "$ ls -lh movie.mkv\n-rw-r--r--  1 me  staff   6.2G Sep 20 21:14 movie.mkv\n$ cp movie.mkv /Volumes/USB/\ncp: /Volumes/USB/movie.mkv: File too large", q: "The USB drive has 50 GB free but says a 6 GB movie is “too large.” Why?", issue: "50 GB free, can’t fit one movie", opts: [
      { t: "The drive is FAT32: 4 GB max per file", ok: 1, r: "Correct. FAT32 dates to 1996, when nobody imagined a 4 GB file. Back up, then reformat to exFAT." },
      { t: "It’s a fake-capacity drive: says 64 GB, holds 4", r: "Fake drives usually pretend the write worked, then quietly corrupt it. They don’t politely say “too large.”" },
      { t: "The movie is copy-protected, so the OS refuses", r: "cp doesn’t check copyright, only the filesystem. It didn’t even read the title." },
      { t: "cp can only copy 4 GB at a time", r: "cp copies hundreds of GB without breaking a sweat. The drive’s format is the problem." },
    ] },
    { lv: 3, term: "$ cat .gitignore\n.DS_Store\n$ git status\n  modified:   .DS_Store", q: "It’s in .gitignore, but Git still tracks it. Why?", issue: "Thought .gitignore applies retroactively", opts: [
      { t: "It was already committed; .gitignore skips those", ok: 1, r: "Correct. .gitignore isn’t retroactive. git rm --cached makes Git let go; the file stays." },
      { t: ".gitignore needs a reboot to take effect", r: "Git doesn’t need a reboot. It just has a very good memory." },
      { t: "You need *.DS_Store* for it to match", r: "No wildcard, however fancy, stops a file that’s already on the books." },
      { t: ".gitignore works on other people’s machines, not yours", r: "Works the same for everyone. It just grandfathers in the old stuff." },
    ] },
    { lv: 3, term: "$ ps aux | grep python\nme  48213  0.0  0.0  408628  1648 s001  S+  10:02AM  0:00.00 grep python", q: "You check if your python script is still alive. This is the only line. Meaning?", issue: "Went searching and only found itself", opts: [
      { t: "Python isn’t running; that line is grep itself", ok: 1, r: "Correct. While searching for python, grep’s own name is “grep python.” You found the searcher." },
      { t: "Python is running, PID 48213", r: "48213 is grep’s PID. You nearly killed a search box." },
      { t: "Python runs in the background, so it’s one line", r: "Background processes get listed too. Read the end: it’s called grep, not your script." },
      { fun: 1, t: "ps means “postscript.” Python left a note", r: "ps is process status. Save the postscript for the end of a love letter." },
    ] },
    { lv: 4, term: "$ ./build.sh 2>&1 > build.log\nerror: missing config.yml", q: "You wanted all output, errors included, in build.log. Errors still hit the screen. Why?", issue: "2>&1 in the wrong spot, errors escape", opts: [
      { t: "Wrong order. Write > build.log 2>&1", ok: 1, r: "Correct. Redirects apply left to right: at 2>&1, stdout still pointed at the screen, so stderr followed it there." },
      { t: "zsh doesn’t understand 2>&1; you need &>", r: "zsh understands 2>&1 fine. You just told stderr to follow the wrong guy." },
      { t: "Errors go to stderr; redirection can never catch it", r: "2> exists exactly for it. It just picked a destination before the file was opened." },
      { t: "build.log was locked, so errors printed instead", r: "Not locked. Open it: normal output is all there. Only the errors are missing." },
    ] },
  ],

  cursor: [
    { lv: 1, code: "- total = price * qty\n+ total = price * qty  # fixed", q: "The AI says “fixed the wrong-total bug.” This is the whole diff. You should?", issue: "Fooled by a “# fixed” comment", opts: [
      { t: "Reject: no code changed, just a comment", ok: 1, r: "Correct. Comments don’t compute. This “fix” only fixed your mood." },
      { t: "Merge. The AI marked it fixed, so it checked", r: "The only thing it checked was the comment’s syntax." },
      { t: "Merge. The comment reminds the program to compute right", r: "The program closes its eyes at #. It never reads comments. Like your coworkers." },
      { fun: 1, t: "Ask it to add “# actually fixed this time”", r: "Double the guarantee, zero lines changed." },
    ] },
    { lv: 2, code: "def is_prime(n):\n    return n in (2, 3, 5, 7, 11, 13)", q: "The AI’s prime checker passes every unit test. The tests cover exactly 1 to 13. This code?", issue: "An AI that memorized the answer key", opts: [
      { t: "It memorized the answers: only knows the tests", ok: 1, r: "Correct. Pass it 17 and it says not prime. Teaching to the test, exposed the moment the test ends." },
      { t: "Fine. Tests pass, and a lookup beats computing", r: "Fast, sure. There are infinitely many primes; the tuple can’t hold them." },
      { t: "Bug: it’s missing 1, which is prime", r: "1 isn’t prime. It’s missing 17, 19, 23 and infinitely many after." },
      { fun: 1, t: "Have it extend the tuple to a million. Done", r: "Up to a million, 1000003 still fails. It happens to be prime." },
    ] },
    { lv: 2, code: "function login(user) {\n  // new login logic\n}\n\n// ... rest of the code unchanged ...", q: "The AI replies with this. You select all, paste, and overwrite app.js. Result?", issue: "Pasted “rest of code unchanged” literally", opts: [
      { t: "app.js is now these few lines; the rest is gone", ok: 1, r: "Correct. “Rest unchanged” is for humans, not a spell. You swapped 800 lines for one comment." },
      { t: "The editor sees the comment and keeps the old code", r: "The editor doesn’t read that. It only knows you hit paste." },
      { t: "It runs fine; comments don’t execute anyway", r: "Comments don’t execute. Neither does anything else now." },
      { fun: 1, t: "Bundle 95% smaller, huge perf win", r: "Instant page load. Blank page." },
    ] },
    { lv: 2, code: "npm install is-odd\n\nconst isOdd = require('is-odd');\nif (isOdd(n)) { ... }", q: "To check if a number is odd, the AI added a package. Thoughts?", issue: "Installed a package to check odd/even", opts: [
      { t: "Unneeded. n % 2 is one line; every dep is a risk", ok: 1, r: "Correct. Every dependency is trust. In 2016, unpublishing the 11-line left-pad broke builds everywhere." },
      { t: "Professional. A dedicated, tested package beats handwritten", r: "n % 2 has never had a bug. This package, meanwhile, depends on is-number." },
      { t: "is-odd is a hallucinated package; it’s not on npm", r: "It’s real, and people really install it. That’s the wild part." },
      { fun: 1, t: "Add is-even too, for the full set", r: "is-even is also real. It depends on is-odd." },
    ] },
    { lv: 2, code: "app.post('/login', (req, res) => {\n  console.log('Login request:', req.body);  // AI: for debugging\n  ...", q: "The AI added this log to debug login, and it shipped as-is. The problem?", issue: "Plaintext passwords for the whole site in the logs", opts: [
      { t: "Users’ plaintext passwords end up in the logs", ok: 1, r: "Correct. req.body has the password. Hash the DB all you want; the logs have it in plaintext, line by line." },
      { t: "console.log slows the server and delays login", r: "Slower is minor. The log file is now the site’s password book." },
      { t: "Fine. Only the team can see logs", r: "Ops, the log platform, third-party monitoring, the guy who quits next month... all “the team.”" },
      { fun: 1, t: "CC the logs to users. Radical transparency", r: "So transparent users can see each other’s passwords." },
    ] },
    { lv: 3, code: "requests.get(PAY_API, verify=False)  # fix SSL error", q: "The payment API threw a certificate error, and the AI “fixed” it like this. You should?", issue: "Turned off cert verification in one line", opts: [
      { t: "Reject: now you don’t verify who you’re talking to", ok: 1, r: "Correct. The cert is their ID; verify=False waves anyone through. Find out why the cert failed." },
      { t: "Merge. It’s still HTTPS-encrypted, so it’s secure", r: "Encrypted, but with whom? A call with a scammer can be very private." },
      { t: "Merge, with a comment: “test environment only”", r: "“Test only” code usually lives in prod until retirement." },
      { t: "Cert errors are their problem; disabling is standard", r: "Standard is getting them to fix the cert, not closing your own eyes." },
    ] },
    { lv: 3, code: "ALTER TABLE users DROP COLUMN phone;\nALTER TABLE users ADD COLUMN mobile VARCHAR(20);", q: "You asked the AI to rename column phone to mobile. It wrote this migration. After it runs?", issue: "Wrote “rename” as “drop and recreate”", opts: [
      { t: "All phone numbers are gone; mobile is empty", ok: 1, r: "Correct. Drop the column, lose the data; the new one is empty. Renaming is RENAME COLUMN." },
      { t: "The DB automatically moves phone data into mobile", r: "Databases don’t read minds. DROP means delete. There’s no “moving” option." },
      { t: "Error: can’t drop and add in one migration", r: "Totally legal, which is the scary part. Both lines run clean, zero errors." },
      { fun: 1, t: "Phone numbers got upgraded to mobile numbers", r: "The name got upgraded. The numbers evaporated." },
    ] },
    { lv: 3, code: "name = filename.removeprefix(\"report_\")", q: "The AI’s line works on your machine (Python 3.12) but crashes on the server (Python 3.8). Why?", issue: "AI code newer than the server", opts: [
      { t: "3.8 has no removeprefix; it arrived in 3.9", ok: 1, r: "Correct. It throws AttributeError. The AI assumes latest; your server is still living in 2019." },
      { t: "Server filenames have non-ASCII chars, encoding fails", r: "It never got to look at a filename. It dies at “no such method.”" },
      { t: "String methods need import string first", r: "String methods don’t need an import. This one just wasn’t born yet in 3.8." },
      { t: "The server is too low on RAM for the new syntax", r: "It strips a prefix. A calculator could run it." },
    ] },
    { lv: 4, code: "const d = new Date(\"2026-03-04\");\nlabel.textContent = `Birthday: ${d.getMonth() + 1}/${d.getDate()}`;", q: "The AI’s birthday label looks right in Europe and Asia, but every US user sees theirs a day early. Why?", issue: "Made every US user celebrate a day early", opts: [
      { t: "Parsed as UTC midnight: still the day before in the US", ok: 1, r: "Correct. Date-only ISO strings parse as UTC. New York is hours behind, so it falls back to the evening of 3/3." },
      { t: "The US uses month/day, so March 4 reads as April 3", r: "That’s off by a month, not a day. And 2026-03-04 isn’t ambiguous." },
      { t: "getMonth() is zero-based and the code forgot to add 1", r: "The code does +1. And that would break the month, not the day." },
      { t: "The US servers’ clocks are a day slow, pushing it back", r: "This runs in the user’s browser, not on a server. It’s time zones." },
    ] },
  ],

  automation: [
    { lv: 1, q: "An Excel cell shows “########”. Most likely?", issue: "Thought #### is Excel cursing at you", opts: [
      { t: "The column is too narrow. Widen it", ok: 1, r: "Correct. Excel would rather show a row of hashes than half a number." },
      { t: "Excel encrypted the data; it needs a password", r: "Not encrypted. Widen the column and the secret’s out." },
      { t: "The formula is broken and Excel is bleeping it", r: "Broken formulas show #VALUE! and friends. A row of hashes just means “cramped.”" },
      { t: "The number exceeds Excel’s maximum", r: "Excel goes up to about 1 followed by 307 zeros. It’s just squeezed by the column." },
    ] },
    { lv: 2, code: "* 9 * * *  send_morning_report.sh", q: "You want the daily report sent once at 9 a.m. What does this do?", issue: "Boss gets 60 daily reports at 9", opts: [
      { t: "One email every minute 9:00–9:59, 60 total", ok: 1, r: "Correct. * in the minute slot means every minute. Once is 0 9 * * *. The boss’s inbox is flooding." },
      { t: "Once daily at 9:00; * means “any,” no effect", r: "The first * is minutes. “Any” means every minute of the 9 o’clock hour." },
      { t: "Once every 9 hours", r: "That’s 0 */9 * * *, and it fires at 0:00, 9:00 and 18:00." },
      { t: "Once a month, on the 9th", r: "9 is in slot two, the hour. Day of month is slot three." },
    ] },
    { lv: 2, code: "/^\\d{4}-\\d{2}-\\d{2}$/", q: "A sign-up form validates “date of birth” with this regex. Which input passes?", issue: "Let in someone born February 30", opts: [
      { t: "1999-02-30", ok: 1, r: "Correct. Regex checks format, not calendars. Welcome aboard, February 30th baby." },
      { t: "1999/02/03", r: "The regex wants hyphens. Slashes, please leave." },
      { t: "1999-2-3", r: "\\d{2} needs two digits, so 02. Regex doesn’t do “close enough.”" },
      { t: "99-02-03", r: "Year needs 4 digits. Y2K knows this one well." },
    ] },
    { lv: 2, q: "Cloud-drive automation: “When a new image appears in photos, compress it and save it back to photos.” You upload cat.jpg. Then?", issue: "Started an infinite compression loop", opts: [
      { t: "The compressed copy re-triggers the rule, forever", ok: 1, r: "Correct. cat_small.jpg, cat_small_small.jpg... Never put output in the input folder." },
      { t: "You get the original plus one compressed copy. Done", r: "The rule fires on “new image.” The compressed copy is a new image. It never stops." },
      { t: "The system recognizes its own output and skips it", r: "Automations have no self-awareness. They only know “new file.”" },
      { fun: 1, t: "The cat gets compressed into a kitten", r: "The cat stays the same size. Your free storage shrinks." },
    ] },
    { lv: 2, code: "0 8 * * *  push_good_morning.sh", q: "The server runs on UTC. You want a “good morning” push at 8 a.m. New York time (EDT). What happens?", issue: "Good-morning push lands at 4 a.m.", opts: [
      { t: "Users get “good morning” at 4 a.m. their time", ok: 1, r: "Correct. EDT is UTC−4, so 8:00 UTC is 4:00 a.m. in New York. “Good morning” at 4 a.m. reads like a threat." },
      { t: "Right on time at 8 a.m. New York time", r: "cron reads the server clock, and the server clock is 4 hours ahead of New York." },
      { t: "Users get it at noon New York time", r: "Wrong direction. UTC is ahead of New York; subtract 4 hours." },
      { t: "cron converts to each user’s time zone automatically", r: "cron doesn’t know who the users are, let alone where." },
    ] },
    { lv: 3, code: "/example\\.com$/", q: "You only want to accept mail from example.com, so you check the sender domain with this regex. What else gets through?", issue: "A scammer adds a prefix and walks in", opts: [
      { t: "evilexample.com", ok: 1, r: "Correct. It only checks the ending; anything can go in front. Use /(^|\\.)example\\.com$/. The scammer already bought the domain." },
      { t: "example.com.evil.net", r: "$ requires ending in example.com. This ends in evil.net. Blocked." },
      { t: "EXAMPLE.COM", r: "Regex is case-sensitive by default. The uppercase one gets turned away." },
      { t: "mail.example.co", r: "Missing an m. To a regex, one letter off is a stranger." },
    ] },
    { lv: 3, code: "# Run by hand, works fine:\n$ cd ~/proj && ./backup.sh\n\n# In crontab, never worked once:\n0 3 * * *  ./backup.sh", q: "The server runs 24/7 and the script works by hand. Why has the cron job never succeeded?", issue: "Works by hand, plays dead in cron", opts: [
      { t: "cron starts in your home dir; ./backup.sh isn’t there", ok: 1, r: "Correct. cron doesn’t cd into your project. Use an absolute path like /home/me/proj/backup.sh." },
      { t: "cron only runs root’s scripts, not regular users’", r: "Every user can have a crontab. It’s not snubbing you; it can’t find the address." },
      { t: "Servers rest at 3 a.m. and skip jobs", r: "Servers don’t sleep. The only thing asleep at 3 a.m. is you." },
      { t: "0 3 * * * runs every 3 minutes and got flagged as an attack", r: "0 3 * * * is daily at 3:00. And the system isn’t that jumpy." },
    ] },
    { lv: 3, q: "You log each order’s time with =NOW() next to it. You open the sheet the next day and find?", issue: "Stamped every past order with “now”", opts: [
      { t: "Every timestamp now shows the current time", ok: 1, r: "Correct. NOW() refreshes on every recalc. Use Ctrl+; for a fixed date, or copy and Paste Values." },
      { t: "Each row keeps the time it was entered", r: "That’s what you hoped. NOW() has no memory, only the present." },
      { t: "Only the last row updates to the current time", r: "It’s egalitarian: all of them refresh. Yesterday’s orders are all “just now.”" },
      { t: "Error: NOW() can only be used once per sheet", r: "Use it as often as you like. They’ll all show the same “now.”" },
    ] },
    { lv: 4, q: "Excel kept turning gene names MARCH1 and SEPT2 into dates (“1-Mar”, “2-Sep”). How was this finally solved in 2020?", issue: "Didn’t guess humans caved to Excel", opts: [
      { t: "Rename the genes: MARCH1 became MARCHF1", ok: 1, r: "Correct. In 2020 the HGNC renamed a batch of genes; SEPT2 became SEPTIN2. Humanity bowed to Excel." },
      { t: "Microsoft patched Excel to stop turning text into dates", r: "Excel only got an off switch for auto-conversion in 2023. The genes were renamed by then. Scientists folded first." },
      { t: "Journals required gene tables to be submitted as CSV", r: "Open a CSV in Excel and it still converts. The format isn’t the problem; the app is." },
      { t: "Put an apostrophe before gene names to force text", r: "Works, but someone always forgets. A 2016 study found about 1 in 5 papers with Excel gene lists had errors." },
    ] },
  ],
};
