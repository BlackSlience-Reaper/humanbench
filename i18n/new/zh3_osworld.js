/* 第三轮扩题 · 电脑操作（osworld 池）新增 12 道。样式见 i18n/new/add3_ui.css（x3- 前缀） */
const ADD3_UIS = {

  x3meet: `<div class="mock x3-meet"><div class="mock-bar"><i></i><i></i><i></i><b>周会 · 已进行 42:17</b></div>
    <div class="x3-mt-grid">
      <div class="x3-tile x3-talk"><span class="x3-av">老</span><em>老板</em></div>
      <div class="x3-tile"><span class="x3-av">A</span><em>同事 A</em><span class="x3-ic x3-mic off"></span></div>
      <div class="x3-tile"><span class="x3-av">B</span><em>同事 B</em><span class="x3-ic x3-mic off"></span></div>
      <div class="x3-tile x3-me"><span class="x3-av">我</span><em>你</em><span class="x3-wave"><i></i><i></i><i></i></span></div>
    </div>
    <div class="x3-mt-bar">
      <button class="hs x3-mt-btn" data-opt="0"><span class="x3-ic x3-mic"></span>静音</button>
      <button class="hs x3-mt-btn" data-opt="1"><span class="x3-ic x3-cam off"></span>开启视频</button>
      <button class="hs x3-mt-btn" data-opt="2"><span class="x3-ic x3-bub"></span>聊天</button>
      <button class="hs x3-mt-btn x3-leave" data-opt="3">离开</button>
    </div></div>`,

  x3recall: `<div class="phone x3-wxp"><div class="ph-bar">9:41</div>
    <div class="x3-chat">
      <div class="x3-ct">项目大群（58）</div>
      <div class="x3-msg"><span class="x3-ava">老板</span><p>今晚 8 点前把方案发群里。</p></div>
      <div class="x3-msg me"><p>又画饼，他自己的方案都写不明白</p><span class="x3-ava me">我</span></div>
      <div class="x3-menu">
        <button class="hs x3-mi" data-opt="0"><span class="x3-mic2 del"></span>删除</button>
        <button class="hs x3-mi" data-opt="1"><span class="x3-mic2 fwd"></span>转发</button>
        <button class="hs x3-mi" data-opt="2"><span class="x3-mic2 quo"></span>引用</button>
        <button class="hs x3-mi" data-opt="3"><span class="x3-mic2 rec"></span>撤回</button>
      </div>
      <div class="x3-time">刚刚</div>
    </div></div>`,

  x3print: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>打印 · 年度报告.pdf</b></div>
    <div class="mock-body x3-pr">
      <div class="x3-pr-row"><span>打印机</span><button class="hs x3-sel" data-opt="3">办公室-3F 激光<i>▾</i></button></div>
      <div class="x3-pr-row"><span>份数</span><button class="hs x3-inp" data-opt="1">1</button></div>
      <div class="x3-pr-row top"><span>页面</span><div class="x3-pr-pages">
        <div class="x3-radio"><span class="x3-rd on"></span>全部（共 300 页）</div>
        <button class="hs x3-radio" data-opt="0"><span class="x3-rd"></span>自定义<span class="x3-inp ph">例如 1-5, 8</span></button>
      </div></div>
      <div class="x3-pr-foot"><span>预计用纸：300 张</span><button class="hs x3-pr-go" data-opt="2">打印</button></div>
    </div></div>`,

  x3share: `<div class="dialog x3-ss">
      <div class="x3-ss-t">选择要共享的内容</div>
      <div class="x3-ss-cap">屏幕</div>
      <button class="hs x3-th wide on" data-opt="0">
        <span class="x3-desk"><i class="w1"></i><i class="w2"></i><i class="w3"></i><em>猎头：薪资可以再谈，明天面？</em><u>离职.docx</u></span>
        <b>整个屏幕</b></button>
      <div class="x3-ss-cap">窗口</div>
      <div class="x3-ss-row">
        <button class="hs x3-th" data-opt="1"><span class="x3-ppt"><i></i><em>Q3 方案</em></span><b>方案.pptx - PowerPoint</b></button>
        <button class="hs x3-th" data-opt="2"><span class="x3-wxs"><i class="l"></i><i class="r"></i><i class="l s"></i></span><b>微信（3）</b></button>
      </div>
      <div class="x3-ss-foot"><span><span class="fakebox"></span>同时共享电脑声音</span><button class="hs x3-ss-go" data-opt="3">共享</button></div>
    </div>`,

  x3install: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>某某影音 安装向导</b></div>
    <div class="mock-body x3-in">
      <div class="x3-in-logo"><span></span><b>某某影音 2026</b><small>高清 · 流畅 · 永久免费</small></div>
      <button class="hs x3-in-go" data-opt="0">一键快速安装</button>
      <div class="x3-in-bundle">快速安装将同时安装：某某浏览器（设为默认）、某某安全卫士、某某输入法，并将某某导航设为主页</div>
      <div class="x3-in-path">安装到：C:\\Program Files\\某某影音<button class="hs x3-in-lnk" data-opt="3">更改</button></div>
      <div class="x3-in-foot"><span><span class="fakebox on">✓</span>我已阅读并同意<button class="hs x3-in-lnk" data-opt="2">《用户许可协议》</button></span><button class="hs x3-in-lnk" data-opt="1">自定义安装 ›</button></div>
    </div></div>`,

  x3clickfix: `<div class="mock"><div class="tabs"><span class="tab">收件箱</span><span class="tab on">免费简历模板下载<button class="hs tab-x" data-opt="2" aria-label="关闭标签页">×</button></span></div>
    <div class="mock-body x3-cf">
      <div class="x3-cf-box">
        <div class="x3-cf-top"><span class="fakebox on">✓</span><b>我不是机器人</b><small>人机验证</small></div>
        <div class="x3-cf-t">还差一步：请完成以下验证</div>
        <ol class="x3-cf-steps"><li>按下 <kbd>Win</kbd> + <kbd>R</kbd></li><li>按下 <kbd>Ctrl</kbd> + <kbd>V</kbd></li><li>按下 <kbd>Enter</kbd></li></ol>
        <div class="x3-cf-id">验证 ID：#71362</div>
        <button class="hs x3-cf-go" data-opt="0">我已完成以上步骤</button>
        <div class="x3-cf-links"><button class="hs x3-cf-lnk" data-opt="1">换一种验证方式</button><button class="hs x3-cf-lnk" data-opt="3">看不懂？看视频教程</button></div>
      </div>
    </div></div>`,

  x3sort: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>成绩表.xlsx - Excel</b></div>
    <div class="mock-body x3-xl">
      <table class="x3-sheet"><tr><th></th><th>A</th><th class="sel">B</th></tr>
        <tr><th>1</th><td>姓名</td><td class="sel">成绩</td></tr>
        <tr><th>2</th><td>张三</td><td class="sel">78</td></tr>
        <tr><th>3</th><td>李四</td><td class="sel">92</td></tr>
        <tr><th>4</th><td>王五</td><td class="sel">65</td></tr></table>
      <div class="x3-xl-dlg">
        <div class="x3-xl-t">排序提醒</div>
        <div class="x3-xl-p">Microsoft Excel 发现在选定区域旁边还有数据。该数据未被选择，将不参加排序。</div>
        <div class="x3-xl-p b">给出排序依据</div>
        <button class="hs x3-radio" data-opt="0"><span class="x3-rd"></span>扩展选定区域(E)</button>
        <button class="hs x3-radio" data-opt="1"><span class="x3-rd"></span>以当前选定区域排序(C)</button>
        <div class="x3-xl-foot"><button class="hs x3-xl-btn" data-opt="2">取消</button></div>
      </div>
    </div></div>`,

  x3link: `<div class="dialog x3-sh">
      <div class="x3-sh-t">共享“2026 全员工资.xlsx”</div>
      <div class="x3-sh-in">添加人员、群组或邮箱</div>
      <div class="x3-sh-cap">有权访问的人员</div>
      <div class="x3-sh-p"><span class="x3-sh-av">我</span><span>你<small>所有者</small></span></div>
      <div class="x3-sh-p"><span class="x3-sh-av g">财</span><span>财务部<small>finance@ourco.com</small></span><em>查看者</em></div>
      <div class="x3-sh-cap">常规访问权限</div>
      <div class="x3-sh-gen"><span class="x3-globe"></span>
        <div><button class="hs x3-sh-dd" data-opt="1">知道链接的任何人 ▾</button><small>互联网上知道此链接的任何人都能编辑</small></div>
        <button class="hs x3-sh-dd" data-opt="2">编辑者 ▾</button></div>
      <div class="x3-sh-foot"><button class="hs x3-sh-copy" data-opt="3">复制链接</button><button class="hs x3-sh-done" data-opt="0">完成</button></div>
    </div>`,

  x3mfa: `<div class="phone x3-night"><div class="ph-bar">03:07</div>
    <div class="x3-mfa">
      <div class="x3-mfa-app"><span></span>账号安全 · 现在</div>
      <div class="x3-mfa-t">是你在尝试登录吗？</div>
      <div class="x3-mfa-info">Windows 电脑 · 未知地区 · 刚刚</div>
      <div class="x3-mfa-hint">点按电脑屏幕上显示的数字</div>
      <div class="x3-mfa-nums"><button class="hs x3-num" data-opt="0">27</button><button class="hs x3-num" data-opt="1">45</button><button class="hs x3-num" data-opt="2">81</button></div>
      <button class="hs x3-mfa-no" data-opt="3">否，不是我</button>
    </div>
    <div class="x3-mfa-cnt">今晚第 5 次请求</div></div>`,

  x3replyto: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>收件箱</b></div>
    <div class="mock-body x3-ml">
      <div class="x3-ml-subj">【急】今天下班前付款</div>
      <button class="hs x3-ml-hd" data-opt="0"><span>发件人</span><b>张总</b>&lt;zhang@ourco.com&gt;</button>
      <div class="x3-ml-hd"><span>收件人</span>我</div>
      <button class="hs x3-ml-hd x3-ml-rt" data-opt="1"><span>回复至</span>zhang.ourco@gmail.com</button>
      <div class="x3-ml-body">你好，<button class="hs x3-ml-s" data-opt="3">我在开会，不方便接电话。</button>供应商换了收款账户，付款单见附件，今天务必付掉，办完直接回复我。<small>发自我的 iPhone</small></div>
      <button class="hs x3-ml-att" data-opt="2"><span>PDF</span>付款单_新账户.pdf<small>86 KB</small></button>
    </div></div>`,

  x3macro: `<div class="mock x3-wd"><div class="x3-wd-bar"><span>发票_0927.doc [受保护的视图] - Word</span><button class="hs x3-wd-x" data-opt="2" aria-label="关闭">×</button></div>
    <div class="x3-pv"><b>受保护的视图</b>请注意——来自 Internet 的文件可能包含病毒。除非需要编辑，否则保持在受保护的视图中比较安全。<button class="hs x3-pv-btn" data-opt="0">启用编辑</button></div>
    <div class="x3-page"><i></i><i class="s"></i>
      <button class="hs x3-lure" data-opt="1"><b>Microsoft Office</b>此文档由更高版本的 Office 创建。要查看内容，请点击上方的“启用编辑”，然后点击“启用内容”。<span>查看发票</span></button>
      <i></i><i class="s"></i><i></i></div>
  </div>`,

  x3ext: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>扩展商店 · 截图</b></div>
    <div class="mock-body x3-ex">
      <button class="hs x3-ex-c" data-opt="3"><span class="x3-ex-ic p">AI</span><span class="x3-ex-m"><b>AI 截图助手<em>赞助</em></b><small>★ 4.9 · 50 万用户 · 截图后免费问 AI</small><u>需要：读取和更改你在所有网站上的数据、读取和修改剪贴板</u></span></button>
      <button class="hs x3-ex-c" data-opt="0"><span class="x3-ex-ic b">P</span><span class="x3-ex-m"><b>截图大师 Pro<em class="f">精选</em></b><small>★ 4.9 · 300 万用户</small><u>需要：读取和更改你在所有网站上的数据、读取你的浏览记录</u></span></button>
      <button class="hs x3-ex-c" data-opt="1"><span class="x3-ex-ic o">极</span><span class="x3-ex-m"><b>极速截图</b><small>★ 4.8 · 120 万用户</small><u>需要：读取和更改你在所有网站上的数据、管理下载内容、与电脑上的其他程序通信</u></span></button>
      <button class="hs x3-ex-c" data-opt="2"><span class="x3-ex-ic g">简</span><span class="x3-ex-m"><b>简单截图</b><small>★ 4.4 · 6 万用户</small><u>需要：无特殊权限（只在你点它时访问当前网页）</u></span></button>
    </div></div>`,
};

const ADD3 = {
  osworld: [
    { lv: 3, q: "开会中，你想转头跟室友吐槽老板两句。先确保老板听不见，点哪个？", ui: "x3meet", issue: "以为按钮写着“静音”就是已静音",
      opts: [
        { t: "静音", ok: 1, r: "对。按钮写的是“点了会怎样”。它还写着“静音”，说明你的麦一直开着，刚才那声叹气全员都听见了。" },
        { t: "开启视频", r: "老板没听见，但看见了。高清直播你翻白眼。" },
        { t: "聊天", r: "你把吐槽打进了会议聊天，默认发送给：所有人。" },
        { t: "离开", r: "老板确实听不见了。三秒后他私聊你：“掉线了？”" },
      ] },
    { lv: 2, q: "你把吐槽老板的话发进了有老板的 58 人大群。长按这条消息，点哪个？", ui: "x3recall", issue: "以为“删除”能让老板看不到",
      opts: [
        { t: "删除", r: "删掉的只是你手机上的这条。老板那边清清楚楚，你这叫眼不见为净。" },
        { t: "转发", r: "转到哪都没法让它从大群消失。倒是又多了一个知情人。" },
        { t: "引用", r: "你引用了自己的吐槽。现在老板能看两遍。" },
        { t: "撤回", ok: 1, r: "对，两分钟内手要快。只是群里会留下一行“你撤回了一条消息”，58 个人都在好奇你说了啥。" },
      ] },
    { lv: 2, q: "300 页的 PDF，你只想打印第 3 页。点哪里？", ui: "x3print", issue: "把“份数”当成了“第几页”",
      opts: [
        { t: "页面：自定义", ok: 1, r: "对。自定义里填个 3，一张纸搞定。打印机和行政同时松了口气。" },
        { t: "份数：改成 3", r: "你打了 3 份，每份 300 页。打印机从上午吐到下班，行政来找你了。" },
        { t: "直接点打印", r: "300 页一页不落。你要的第 3 页夹在里面，自己翻吧。" },
        { t: "换一台打印机", r: "换台打印机还是 300 页，只是换个地方吐纸。" },
      ] },
    { lv: 2, q: "给客户讲方案，你只想让对方看到 PPT。点哪个？", ui: "x3share", issue: "开会共享了整个屏幕，猎头消息入镜",
      opts: [
        { t: "整个屏幕", r: "客户看到了你的桌面、那个叫“离职.docx”的文件，以及猎头刚发来的“薪资可以再谈”。" },
        { t: "方案.pptx 窗口", ok: 1, r: "对。客户只看得到 PPT，看不到“离职.docx”，也看不到猎头问你“明天面？”。" },
        { t: "微信窗口", r: "客户全程观看了你和你妈的对话：“降温了，穿秋裤没？”" },
        { t: "直接点共享", r: "默认选中的是“整个屏幕”。你一键直播了自己的桌面，猎头的消息正好弹出来。" },
      ] },
    { lv: 2, q: "你只想装个播放器，别的一概不要。点哪里？", ui: "x3install", issue: "装软件点了“快速安装”，喜提全家桶",
      opts: [
        { t: "一键快速安装", r: "装好了：播放器、浏览器、安全卫士、输入法，主页也换成了某某导航。一家人就要整整齐齐。" },
        { t: "自定义安装", ok: 1, r: "对。“快速”快的是厂商的装机量。点自定义，把那排默认勾好的全取消掉。" },
        { t: "《用户许可协议》", r: "你认真读完了一万八千字，发现它早就写明了：会给你装全家桶。" },
        { t: "更改安装路径", r: "全家桶被你装进了 D 盘。换了个地方住，还是一家人。" },
      ] },
    { lv: 3, q: "下载模板前要人机验证，勾完“我不是机器人”变成了这样。点哪？", ui: "x3clickfix", issue: "人机验证让按 Win+R，照做了",
      opts: [
        { t: "我已完成以上步骤", r: "Win+R 打开“运行”，Ctrl+V 粘进去的是网页偷偷塞进剪贴板的命令，回车就执行。你亲手黑了自己，三步，很高效。" },
        { t: "换一种验证方式", r: "假页面的“另一种验证”是：按 Win+X，打开终端，粘贴。殊途同归。" },
        { t: "关掉这个标签页", ok: 1, r: "对。真的人机验证顶多让你找红绿灯，从不让你按 Win+R。这招叫 ClickFix，2024 年起满网都是。" },
        { t: "看不懂？看视频教程", r: "教程讲得特别清楚：如何亲手把木马请进门。" },
      ] },
    { lv: 3, q: "你只选中了“成绩”这一列，点降序，弹出了这个。想让名字跟着成绩走，选哪个？", ui: "x3sort", issue: "排序只排了一列，张三捡了 92 分",
      opts: [
        { t: "扩展选定区域", ok: 1, r: "对。整行一起搬家，李四的 92 分还跟着李四。" },
        { t: "以当前选定区域排序", r: "成绩排好了，名字纹丝不动：张三白捡了李四的 92 分。一千行的表，从此没人知道谁考了多少。" },
        { t: "取消", r: "表格保住了，成绩也没排。你关掉了一个问题，问题还在。" },
      ] },
    { lv: 3, q: "工资表只能给财务看。财务已经加进列表了，下一步点哪？", ui: "x3link", issue: "工资表设成了“知道链接的任何人可编辑”",
      opts: [
        { t: "完成", r: "财务收到了。顺便，知道链接的任何人也拿到了编辑权。明天全公司都知道谁工资最高。" },
        { t: "知道链接的任何人", ok: 1, r: "对。改成“受限”，全世界就退出了这张表，只剩你和财务。" },
        { t: "编辑者", r: "改成查看者，全世界从“能改”变成“只能看”。恭喜，工资表成了只读版的公开信息。" },
        { t: "复制链接", r: "你把一个全网可编辑的链接贴了出去。有人顺手把自己那格改成了 10 万。" },
      ] },
    { lv: 2, q: "凌晨 3 点你在睡觉，手机被这个震醒，今晚已经第 5 次了。点哪个？", ui: "x3mfa", issue: "凌晨三点帮黑客猜中了数字",
      opts: [
        { t: "27", r: "猜错了，好险。别急，它会弹第 6 次、第 7 次，直到你猜对为止。" },
        { t: "45", r: "恭喜猜中！三选一，你亲手把人放了进来。2022 年 Uber 被黑，就是员工被推送轰炸到点了同意。" },
        { t: "81", r: "你随手点了一个，对面正好在等你这一下。困意，是黑客最好的队友。" },
        { t: "否，不是我", ok: 1, r: "对。你在睡觉，就不存在“正确的数字”。点拒绝，然后含泪起床改密码。" },
      ] },
    { lv: 4, q: "“老板”发邮件让你今天给新供应商付款。你想先回邮件跟他确认。发之前，点出最大的破绽。", ui: "x3replyto", issue: "没发现“回复至”是骗子的 Gmail",
      opts: [
        { t: "发件人：张总", r: "地址确实是公司的，这行挑不出毛病。骗子也知道你会看这里，所以功夫下在了别处。" },
        { t: "回复至：一个 Gmail 地址", ok: 1, r: "对。发件人写着老板，回复却寄往一个 Gmail。你一点回复，确认信就直达骗子，他会秒回：“对，付。”" },
        { t: "附件：付款单", r: "光看文件名证明不了什么。真打开“验证”一下，被验证的可能是你的电脑。" },
        { t: "“不方便接电话”", r: "确实可疑，但老板开会不接电话也很常见。铁证在信头：你的回复根本到不了老板手里。" },
      ] },
    { lv: 3, q: "邮件附件“发票_0927.doc”打开是这样。你不记得买过什么。点哪？", ui: "x3macro", issue: "文档让点“启用编辑”，就真点了",
      opts: [
        { t: "启用编辑", r: "第一步完成。下一步它会请你“启用内容”，然后宏就开始替你干活，比如把硬盘加密了再找你要赎金。" },
        { t: "文档里的“查看发票”", r: "那是文档里的一张图，点了没反应。它在教你点真按钮，你差一点就学会了。" },
        { t: "右上角 × 关掉", ok: 1, r: "对。正经发票不会教你先关掉防护才能看。关掉，打电话问对方到底寄了个啥。" },
      ] },
    { lv: 3, q: "你只想要个截图插件。商店搜出来这几个，装哪个？", ui: "x3ext", issue: "为了截个图，交出了所有网页数据",
      opts: [
        { t: "截图大师 Pro", r: "300 万用户，每个人的网银页面它都看得见。截图是副业，读你的浏览记录才是主业。" },
        { t: "极速截图", r: "又要管下载、又要和你电脑上的程序通信。一个截图工具，想得比你还远。" },
        { t: "简单截图", ok: 1, r: "对。分低一点、人少一点，但它只在你点它时看一眼当前网页。截图工具，就该只会截图。" },
        { t: "AI 截图助手（赞助）", r: "它要读你所有网站和剪贴板。你复制过的每个密码，它都帮你“智能收藏”了。" },
      ] },
  ],
};
