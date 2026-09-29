/* Round 3 · computer use (osworld pool): 12 new. Styles in i18n/new/add3_ui.css (x3- prefix) */
const ADD3_UIS = {

  x3meet: `<div class="mock x3-meet"><div class="mock-bar"><i></i><i></i><i></i><b>Weekly Sync · 42:17</b></div>
    <div class="x3-mt-grid">
      <div class="x3-tile x3-talk"><span class="x3-av">B</span><em>Boss</em></div>
      <div class="x3-tile"><span class="x3-av">J</span><em>Jess</em><span class="x3-ic x3-mic off"></span></div>
      <div class="x3-tile"><span class="x3-av">S</span><em>Sam</em><span class="x3-ic x3-mic off"></span></div>
      <div class="x3-tile x3-me"><span class="x3-av">Me</span><em>You</em><span class="x3-wave"><i></i><i></i><i></i></span></div>
    </div>
    <div class="x3-mt-bar">
      <button class="hs x3-mt-btn" data-opt="0"><span class="x3-ic x3-mic"></span>Mute</button>
      <button class="hs x3-mt-btn" data-opt="1"><span class="x3-ic x3-cam off"></span>Start Video</button>
      <button class="hs x3-mt-btn" data-opt="2"><span class="x3-ic x3-bub"></span>Chat</button>
      <button class="hs x3-mt-btn x3-leave" data-opt="3">Leave</button>
    </div></div>`,

  x3recall: `<div class="phone x3-wxp"><div class="ph-bar">9:41</div>
    <div class="x3-chat">
      <div class="x3-ct">Project Team (58)</div>
      <div class="x3-msg"><span class="x3-ava">Boss</span><p>Proposal in this chat by 8 tonight.</p></div>
      <div class="x3-msg me"><p>More empty promises. He can’t even write his own proposals</p><span class="x3-ava me">Me</span></div>
      <div class="x3-menu">
        <button class="hs x3-mi" data-opt="0" style="white-space:nowrap;font-size:11px;padding:4px 2px"><span class="x3-mic2 del"></span>Delete<br>for me</button>
        <button class="hs x3-mi" data-opt="1"><span class="x3-mic2 fwd"></span>Forward</button>
        <button class="hs x3-mi" data-opt="2"><span class="x3-mic2 quo"></span>Reply</button>
        <button class="hs x3-mi" data-opt="3" style="white-space:nowrap;font-size:11px;padding:4px 2px"><span class="x3-mic2 rec"></span>Delete for<br>everyone</button>
      </div>
      <div class="x3-time">Just now</div>
    </div></div>`,

  x3print: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Print · Annual Report.pdf</b></div>
    <div class="mock-body x3-pr">
      <div class="x3-pr-row"><span>Printer</span><button class="hs x3-sel" data-opt="3">Office 3F Laser<i>▾</i></button></div>
      <div class="x3-pr-row"><span>Copies</span><button class="hs x3-inp" data-opt="1">1</button></div>
      <div class="x3-pr-row top"><span>Pages</span><div class="x3-pr-pages">
        <div class="x3-radio"><span class="x3-rd on"></span>All (300 pages)</div>
        <button class="hs x3-radio" data-opt="0"><span class="x3-rd"></span>Custom<span class="x3-inp ph">e.g. 1-5, 8</span></button>
      </div></div>
      <div class="x3-pr-foot"><span>Sheets: 300</span><button class="hs x3-pr-go" data-opt="2">Print</button></div>
    </div></div>`,

  x3share: `<div class="dialog x3-ss">
      <div class="x3-ss-t">Choose what to share</div>
      <div class="x3-ss-cap">SCREEN</div>
      <button class="hs x3-th wide on" data-opt="0">
        <span class="x3-desk"><i class="w1"></i><i class="w2"></i><i class="w3"></i><em>Recruiter: We can go higher. Interview tomorrow?</em><u>resignation.docx</u></span>
        <b>Entire Screen</b></button>
      <div class="x3-ss-cap">WINDOW</div>
      <div class="x3-ss-row">
        <button class="hs x3-th" data-opt="1"><span class="x3-ppt"><i></i><em>Q3 Plan</em></span><b>Plan.pptx - PowerPoint</b></button>
        <button class="hs x3-th" data-opt="2"><span class="x3-wxs"><i class="l"></i><i class="r"></i><i class="l s"></i></span><b>Messages (3)</b></button>
      </div>
      <div class="x3-ss-foot"><span><span class="fakebox"></span>Also share computer audio</span><button class="hs x3-ss-go" data-opt="3">Share</button></div>
    </div>`,

  x3install: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>MaxPlayer Setup Wizard</b></div>
    <div class="mock-body x3-in">
      <div class="x3-in-logo"><span></span><b>MaxPlayer 2026</b><small>HD · Smooth · Free Forever</small></div>
      <button class="hs x3-in-go" data-opt="0">Express Install</button>
      <div class="x3-in-bundle">Express install also installs MaxBrowser (set as default), MaxShield Antivirus and MaxKeyboard, and sets MaxSearch as your homepage</div>
      <div class="x3-in-path">Install to: C:\\Program Files\\MaxPlayer<button class="hs x3-in-lnk" data-opt="3">Change</button></div>
      <div class="x3-in-foot"><span><span class="fakebox on">✓</span>I accept the<button class="hs x3-in-lnk" data-opt="2">License Agreement</button></span><button class="hs x3-in-lnk" data-opt="1">Custom Install ›</button></div>
    </div></div>`,

  x3clickfix: `<div class="mock"><div class="tabs"><span class="tab">Inbox</span><span class="tab on">Free Resume Templates<button class="hs tab-x" data-opt="2" aria-label="Close tab">×</button></span></div>
    <div class="mock-body x3-cf">
      <div class="x3-cf-box">
        <div class="x3-cf-top"><span class="fakebox on">✓</span><b>I’m not a robot</b><small>Verification</small></div>
        <div class="x3-cf-t">One more step: complete the verification</div>
        <ol class="x3-cf-steps"><li>Press <kbd>Win</kbd> + <kbd>R</kbd></li><li>Press <kbd>Ctrl</kbd> + <kbd>V</kbd></li><li>Press <kbd>Enter</kbd></li></ol>
        <div class="x3-cf-id">Verification ID: #71362</div>
        <button class="hs x3-cf-go" data-opt="0">I’ve completed these steps</button>
        <div class="x3-cf-links"><button class="hs x3-cf-lnk" data-opt="1">Try another method</button><button class="hs x3-cf-lnk" data-opt="3">Stuck? Watch a video</button></div>
      </div>
    </div></div>`,

  x3sort: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Grades.xlsx - Excel</b></div>
    <div class="mock-body x3-xl">
      <table class="x3-sheet"><tr><th></th><th>A</th><th class="sel">B</th></tr>
        <tr><th>1</th><td>Name</td><td class="sel">Score</td></tr>
        <tr><th>2</th><td>Alice</td><td class="sel">78</td></tr>
        <tr><th>3</th><td>Bob</td><td class="sel">92</td></tr>
        <tr><th>4</th><td>Carol</td><td class="sel">65</td></tr></table>
      <div class="x3-xl-dlg">
        <div class="x3-xl-t">Sort Warning</div>
        <div class="x3-xl-p">Microsoft Excel found data next to your selection. Since you have not selected this data, it will not be sorted.</div>
        <div class="x3-xl-p b">What do you want to do?</div>
        <button class="hs x3-radio" data-opt="0"><span class="x3-rd"></span>Expand the selection</button>
        <button class="hs x3-radio" data-opt="1"><span class="x3-rd"></span>Continue with the current selection</button>
        <div class="x3-xl-foot"><button class="hs x3-xl-btn" data-opt="2">Cancel</button></div>
      </div>
    </div></div>`,

  x3link: `<div class="dialog x3-sh">
      <div class="x3-sh-t">Share “2026 Payroll.xlsx”</div>
      <div class="x3-sh-in">Add people, groups or emails</div>
      <div class="x3-sh-cap">People with access</div>
      <div class="x3-sh-p"><span class="x3-sh-av">Me</span><span>You<small>Owner</small></span></div>
      <div class="x3-sh-p"><span class="x3-sh-av g">F</span><span>Finance<small>finance@ourco.com</small></span><em>Viewer</em></div>
      <div class="x3-sh-cap">General access</div>
      <div class="x3-sh-gen"><span class="x3-globe"></span>
        <div><button class="hs x3-sh-dd" data-opt="1">Anyone with the link ▾</button><small>Anyone on the internet with the link can edit</small></div>
        <button class="hs x3-sh-dd" data-opt="2">Editor ▾</button></div>
      <div class="x3-sh-foot"><button class="hs x3-sh-copy" data-opt="3">Copy link</button><button class="hs x3-sh-done" data-opt="0">Done</button></div>
    </div>`,

  x3mfa: `<div class="phone x3-night"><div class="ph-bar">03:07</div>
    <div class="x3-mfa">
      <div class="x3-mfa-app"><span></span>Account Security · now</div>
      <div class="x3-mfa-t">Are you trying to sign in?</div>
      <div class="x3-mfa-info">Windows PC · Unknown location · Just now</div>
      <div class="x3-mfa-hint">Tap the number shown on your computer</div>
      <div class="x3-mfa-nums"><button class="hs x3-num" data-opt="0">27</button><button class="hs x3-num" data-opt="1">45</button><button class="hs x3-num" data-opt="2">81</button></div>
      <button class="hs x3-mfa-no" data-opt="3">No, it’s not me</button>
    </div>
    <div class="x3-mfa-cnt">5th request tonight</div></div>`,

  x3replyto: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Inbox</b></div>
    <div class="mock-body x3-ml">
      <div class="x3-ml-subj">[URGENT] Payment due today</div>
      <button class="hs x3-ml-hd" data-opt="0"><span>From</span><b>Mike Hall</b>&lt;mike.hall@ourco.com&gt;</button>
      <div class="x3-ml-hd"><span>To</span>me</div>
      <button class="hs x3-ml-hd x3-ml-rt" data-opt="1"><span style="width:auto;white-space:nowrap">Reply-To</span>mike.hall.ourco@gmail.com</button>
      <div class="x3-ml-body">Hi, <button class="hs x3-ml-s" data-opt="3">I’m in a meeting and can’t take calls.</button> The vendor changed bank accounts; payment form attached. It has to go out today. Reply to me when it’s done.<small>Sent from my iPhone</small></div>
      <button class="hs x3-ml-att" data-opt="2"><span>PDF</span>Payment_NewAccount.pdf<small>86 KB</small></button>
    </div></div>`,

  x3macro: `<div class="mock x3-wd"><div class="x3-wd-bar"><span>Invoice_0927.doc [Protected View] - Word</span><button class="hs x3-wd-x" data-opt="2" aria-label="Close">×</button></div>
    <div class="x3-pv"><b>PROTECTED VIEW</b>Be careful: files from the Internet can contain viruses. Unless you need to edit, it’s safer to stay in Protected View.<button class="hs x3-pv-btn" data-opt="0">Enable Editing</button></div>
    <div class="x3-page"><i></i><i class="s"></i>
      <button class="hs x3-lure" data-opt="1"><b>Microsoft Office</b>This document was created in a newer version of Office. To view the content, click “Enable Editing” above, then click “Enable Content.”<span>View Invoice</span></button>
      <i></i><i class="s"></i><i></i></div>
  </div>`,

  x3ext: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>Extensions · “screenshot”</b></div>
    <div class="mock-body x3-ex">
      <button class="hs x3-ex-c" data-opt="3"><span class="x3-ex-ic p">AI</span><span class="x3-ex-m"><b>AI Screenshot Helper<em>Sponsored</em></b><small>★ 4.9 · 500K users · Ask AI about any screenshot</small><u>Needs: Read and change all your data on all websites. Read and modify data you copy and paste</u></span></button>
      <button class="hs x3-ex-c" data-opt="0"><span class="x3-ex-ic b">P</span><span class="x3-ex-m"><b>Screenshot Master Pro<em class="f">Featured</em></b><small>★ 4.9 · 3M users</small><u>Needs: Read and change all your data on all websites. Read your browsing history</u></span></button>
      <button class="hs x3-ex-c" data-opt="1"><span class="x3-ex-ic o">Z</span><span class="x3-ex-m"><b>ZapShot</b><small>★ 4.8 · 1.2M users</small><u>Needs: Read and change all your data on all websites. Manage your downloads. Communicate with cooperating native applications</u></span></button>
      <button class="hs x3-ex-c" data-opt="2"><span class="x3-ex-ic g">S</span><span class="x3-ex-m"><b>Simple Snip</b><small>★ 4.4 · 60K users</small><u>Needs: no special permissions (only sees the current page when you click it)</u></span></button>
    </div></div>`,
};

const ADD3 = {
  osworld: [
    { lv: 3, q: "Mid-meeting, you want to vent about the boss to your roommate. First make sure the boss can’t hear. Tap?", ui: "x3meet", issue: "Thought a button saying “Mute” meant muted",
      opts: [
        { t: "Mute", ok: 1, r: "Correct. Buttons say what they’ll do. It still says “Mute,” so your mic’s been live. Everyone heard that sigh." },
        { t: "Start Video", r: "The boss can’t hear you. He can see you. HD eye-roll livestream." },
        { t: "Chat", r: "You typed your rant into meeting chat. Default recipient: Everyone." },
        { t: "Leave", r: "He definitely can’t hear you. Three seconds later he DMs: “You dropped?”" },
      ] },
    { lv: 2, q: "You roasted the boss in the 58-person group chat he’s in. Long-press the message. Tap?", ui: "x3recall", issue: "Thought “Delete for me” hid it from the boss",
      opts: [
        { t: "Delete for me", r: "Gone from your phone only. The boss still sees it just fine. Out of sight, out of your mind." },
        { t: "Forward", r: "Forwarding won’t pull it from the group. It just adds a witness." },
        { t: "Reply, quoting the message", r: "You quoted your own roast. Now the boss can read it twice." },
        { t: "Delete for everyone", ok: 1, r: "Correct, and hurry. It leaves “This message was deleted,” and 57 people now wonder what it said." },
      ] },
    { lv: 2, q: "A 300-page PDF. You only want page 3. Tap where?", ui: "x3print", issue: "Mixed up “Copies” with the page number",
      opts: [
        { t: "Pages: Custom", ok: 1, r: "Correct. Type 3 in Custom. One sheet. The printer and the office manager both exhale." },
        { t: "Copies: change to 3", r: "3 copies, 300 pages each. The printer runs till 5 p.m. The office manager is on the way." },
        { t: "Just hit Print", r: "All 300 pages. Page 3 is in there somewhere. Happy hunting." },
        { t: "Switch printers", r: "Different printer, same 300 pages. Just a new place to spew paper." },
      ] },
    { lv: 2, q: "Presenting to a client. You only want them to see the slides. Tap?", ui: "x3share", issue: "Shared the whole screen, recruiter DM included",
      opts: [
        { t: "Entire Screen", r: "The client saw your desktop, a file called “resignation.docx,” and the recruiter’s “We can go higher.”" },
        { t: "The Plan.pptx window", ok: 1, r: "Correct. Slides only. No “resignation.docx,” no recruiter asking about tomorrow." },
        { t: "The Messages (3) window", r: "The client got to watch your mom text: “It’s cold out. Wear a jacket.”" },
        { t: "Just hit Share", r: "“Entire Screen” was preselected. You livestreamed your desktop right as the recruiter pinged." },
      ] },
    { lv: 2, q: "You just want the media player. Nothing else. Tap where?", ui: "x3install", issue: "Hit Express Install, got the whole bundle",
      opts: [
        { t: "Express Install", r: "Installed: player, browser, antivirus, keyboard app, and a new homepage. The whole family moved in." },
        { t: "Custom Install", ok: 1, r: "Correct. “Express” is fast for their install numbers. Go Custom and untick every pre-ticked box." },
        { t: "License Agreement", r: "You read all 18,000 words. It said, very clearly, that it would install the whole bundle." },
        { t: "Change install path", r: "The bundle now lives on D:. New address, same family." },
      ] },
    { lv: 3, q: "A CAPTCHA before a template download. After ticking “I’m not a robot,” you get this. Tap?", ui: "x3clickfix", issue: "CAPTCHA said press Win+R. They did.",
      opts: [
        { t: "I’ve completed these steps", r: "Win+R opens Run. Ctrl+V pastes a command the page slipped into your clipboard. Enter runs it. Self-hack in 3 steps." },
        { t: "Try another method", r: "The fake page’s alternative: Win+X, open Terminal, paste. Same destination." },
        { t: "Close this tab", ok: 1, r: "Correct. Real CAPTCHAs want traffic lights, never Win+R. It’s called ClickFix, and it’s been everywhere since 2024." },
        { t: "Stuck? Watch a video", r: "A very clear tutorial on personally inviting malware in." },
      ] },
    { lv: 3, q: "You selected only the Score column and hit Sort Descending. This popped up. To keep names with scores?", ui: "x3sort", issue: "Sorted one column; Alice got Bob’s 92",
      opts: [
        { t: "Expand the selection", ok: 1, r: "Correct. Whole rows move together. Bob’s 92 stays with Bob." },
        { t: "Continue with the current selection", r: "Scores sorted, names frozen. Alice just got Bob’s 92. On a 1,000-row sheet, nobody will ever know who scored what." },
        { t: "Cancel", r: "Sheet safe, still unsorted. You closed the popup, not the problem." },
      ] },
    { lv: 3, q: "Payroll is for Finance’s eyes only. Finance is already added. What do you tap next?", ui: "x3link", issue: "Set payroll to “anyone with the link can edit”",
      opts: [
        { t: "Done", r: "Finance got it. So did anyone with the link, with edit rights. Tomorrow everyone knows who earns the most." },
        { t: "Anyone with the link", ok: 1, r: "Correct. Switch it to Restricted. The internet leaves; just you and Finance remain." },
        { t: "Editor", r: "Switch to Viewer and the internet goes from “can edit” to “can read.” Congrats, payroll is now a public record." },
        { t: "Copy link", r: "You pasted a link anyone can edit. Someone already added a zero to their own salary." },
      ] },
    { lv: 2, q: "3 a.m. You’re asleep and this buzzes you awake, for the fifth time tonight. Tap?", ui: "x3mfa", issue: "Helped a hacker guess the number at 3 a.m.",
      opts: [
        { t: "27", r: "Wrong number. Close one. Don’t worry, it’ll ping a 6th and 7th time until you get it right." },
        { t: "45", r: "You got it! One in three, and you let them in. Uber, 2022: an employee got push-bombed until they approved." },
        { t: "81", r: "You tapped one at random. The other side was waiting for exactly that. Sleepiness is a hacker’s best teammate." },
        { t: "No, it’s not me", ok: 1, r: "Correct. You’re asleep, so there is no “right number.” Deny, then groggily change your password." },
      ] },
    { lv: 4, q: "“Boss” emails: pay a new vendor today. You’ll reply to confirm first. Before sending, spot the biggest red flag.", ui: "x3replyto", issue: "Missed a Reply-To pointing at a Gmail",
      opts: [
        { t: "From: Mike Hall", r: "That’s the real company address. Scammers know you check there, so they did their work elsewhere." },
        { t: "Reply-To: a Gmail address", ok: 1, r: "Correct. From says boss; replies go to Gmail. Hit Reply and the scammer answers in seconds: “Yes, pay it.”" },
        { t: "Attachment: the payment PDF", r: "A filename proves nothing. Open it to “check,” and what gets checked is your PC." },
        { t: "“Can’t take calls”", r: "Suspicious, but bosses in meetings skip calls all the time. The smoking gun is the header: your reply never reaches him." },
      ] },
    { lv: 3, q: "Email attachment “Invoice_0927.doc” opens like this. You don’t remember buying anything. Tap?", ui: "x3macro", issue: "Doc said “Enable Editing,” so they did",
      opts: [
        { t: "Enable Editing", r: "Step one done. Next it asks for “Enable Content,” then the macro gets to work, like encrypting your drive for ransom." },
        { t: "“View Invoice” in the doc", r: "It’s just an image in the doc. Tapping does nothing. It’s training you to hit the real buttons. You almost learned." },
        { t: "The × in the top right", ok: 1, r: "Correct. Real invoices don’t make you drop protection to view them. Close it and call the sender." },
      ] },
    { lv: 3, q: "You just want a screenshot extension. The store shows these. Which one do you install?", ui: "x3ext", issue: "Gave up all web data for a screenshot",
      opts: [
        { t: "Screenshot Master Pro", r: "3 million users, and it can see every one of their bank pages. Screenshots are the side gig." },
        { t: "ZapShot", r: "Manages downloads, talks to other apps on your PC. A screenshot tool with bigger plans than you." },
        { t: "Simple Snip", ok: 1, r: "Correct. Lower rating, fewer users, but it only looks at the current page when you click. A screenshot tool that just screenshots." },
        { t: "AI Screenshot Helper (Sponsored)", r: "Wants all your sites and your clipboard. Every password you’ve copied, “smartly saved.”" },
      ] },
  ],
};
