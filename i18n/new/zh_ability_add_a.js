// 新增能力题（中文）A 组：dense / cursor / terminal，各 6 道
const NEW_ABILITY = {

  dense: [
    { lv: 1, q: "同时回答：① 一打是几个？② 水的化学式是？", issue: "一打和一杯水不能同时处理", opts: [
      { t: "① 12 个 ② H₂O", ok: 1, r: "对。一打 = 12；两个氢一个氧。两个专家同时在线。" },
      { t: "① 10 个 ② H₂O", r: "① 一打是 12 个。十进制强迫症可以理解，但不对。" },
      { t: "① 12 个 ② H₂O₂", r: "② H₂O₂ 是过氧化氢，拿来消毒可以，别拿来喝。" },
      { t: "① 10 个 ② CO₂", r: "两个专家都在摸鱼。CO₂ 是你呼出来的那个。" },
    ] },
    { lv: 2, q: "同时回答：① 二进制 1010 等于十进制几？② 人体里分泌胰岛素的是哪个器官？", issue: "把二进制倒着念", opts: [
      { t: "① 10 ② 胰腺", ok: 1, r: "对。8 + 2 = 10；胰腺里的胰岛 β 细胞负责分泌胰岛素。" },
      { t: "① 5 ② 胰腺", r: "① 你从右往左读了，0101 才是 5。1010 = 8 + 2 = 10。" },
      { t: "① 10 ② 肝脏", r: "② 肝脏负责储存糖原，胰岛素是胰腺出的。" },
      { t: "① 5 ② 肝脏", r: "代码专家和医学专家同时掉线。" },
    ] },
    { lv: 2, q: "同时回答：① Python 里 \"ab\" * 3 的结果是？② 三角形三个内角加起来是多少度？", issue: "字符串乘法和几何一起算崩", opts: [
      { t: "① \"ababab\" ② 180°", ok: 1, r: "对。字符串乘整数就是重复；平面三角形内角和 180°。" },
      { t: "① 报错 ② 180°", r: "① Python 允许字符串乘整数，结果是重复 3 遍。换成 JavaScript 才会得到 NaN。" },
      { t: "① \"ababab\" ② 360°", r: "② 360° 是四边形。三角形少一个角，也就少 180°。" },
      { t: "① \"ab3\" ② 360°", r: "代码专家和几何专家一起请假了。" },
    ] },
    { lv: 2, q: "同时回答：① 一件商品先涨价 10%，再降价 10%，和原价比？② HTML 里的 H 代表什么？", issue: "以为涨 10% 再跌 10% 等于没动", opts: [
      { t: "① 便宜了 1% ② HyperText", ok: 1, r: "对。100 → 110 → 99；HTML 是 HyperText Markup Language。" },
      { t: "① 不变 ② HyperText", r: "① 降的 10% 是按 110 算的，降掉 11，最后是 99。" },
      { t: "① 便宜了 1% ② Hyperlink", r: "② 是 HyperText（超文本）。超链接只是超文本的一部分。" },
      { t: "① 不变 ② Hyperlink", r: "数学专家和网页专家一起下班了。" },
    ] },
    { lv: 3, q: "同时回答：① JavaScript 里 typeof NaN 的结果是？② 平年 365 天是 52 周零几天？③ 正常人类体细胞有几对染色体？", issue: "NaN 从代码线程传染到了别的线程", opts: [
      { t: "① \"number\" ② 1 天 ③ 23 对", ok: 1, r: "对。NaN 的类型就是 number，一个“不是数字”的数字；52 × 7 = 364；23 对，共 46 条。三个专家同时在线。" },
      { t: "① \"NaN\" ② 1 天 ③ 23 对", r: "① NaN 全称 Not a Number，但 typeof 它就是 \"number\"。JavaScript 的幽默感。" },
      { t: "① \"number\" ② 2 天 ③ 23 对", r: "② 52 × 7 = 364，只多 1 天。闰年才多 2 天。" },
      { t: "① \"number\" ② 1 天 ③ 46 对", r: "③ 46 是条数，不是对数。是 23 对。" },
    ] },
    { lv: 3, q: "同时回答：① 1 + 2 + 3 + … + 100 等于？② “光年”是什么单位？③ Git 里的 HEAD 通常指向？", issue: "把光年当成了时间单位", opts: [
      { t: "① 5050 ② 距离 ③ 当前所在的提交", ok: 1, r: "对。(1 + 100) × 100 ÷ 2 = 5050；光年是光走一年的距离；HEAD 就是“你现在站在哪”。" },
      { t: "① 5000 ② 距离 ③ 当前所在的提交", r: "① 首尾配对，50 组，每组 101，是 5050。" },
      { t: "① 5050 ② 时间 ③ 当前所在的提交", r: "② 名字里有“年”，量的却是距离，约 9.46 万亿公里。" },
      { t: "① 5050 ② 距离 ③ 仓库的第一个提交", r: "③ HEAD 指向你当前所在的位置，一般是当前分支的最新提交。" },
    ] },
  ],

  cursor: [
    { lv: 1, code: "try:\n    process_order(order)\nexcept Exception:\n    pass", q: "你让 AI 修一个偶发报错。它交上来这段，说“报错已经彻底消失了”。你应该？", issue: "把吞掉报错当成修好了", opts: [
      { t: "打回：报错没消失，只是被藏起来了", ok: 1, r: "对。except: pass 不是修 bug，是把火警铃拆了。订单失败了也没人知道。" },
      { t: "合并，至少用户看不到报错页面了，体验变好了", r: "用户看不到报错，也收不到货。你把一个响亮的 bug 换成了一个安静的 bug。" },
      { t: "没问题，这是 Python 官方推荐的写法", r: "Python 之禅原话：Errors should never pass silently（错误不该悄悄溜走）。" },
      { fun: 1, t: "让它在 pass 后面加一句注释：一切正常", r: "注释很乐观，订单还在默默失败。" },
    ] },
    { lv: 2, code: "sql = \"SELECT * FROM users WHERE name = '\" + name + \"'\"", q: "AI 写的登录查询里有这一行，name 来自用户输入。问题是？", issue: "看不出 SQL 注入", opts: [
      { t: "有 SQL 注入风险，应改用参数化查询", ok: 1, r: "对。用户名填 ' OR '1'='1，条件永远成立，整张表都出来了。参数化查询让输入永远只是数据。" },
      { t: "没问题，SELECT 只读不写，就算被注入也改不了数据", r: "能读就能拖库。何况有些环境还允许一次执行多条语句。" },
      { t: "应该把 SELECT * 换成具体字段，性能更好", r: "性能是小事，门没锁是大事。" },
      { fun: 1, t: "在输入框旁边写：请勿输入引号", r: "黑客很有礼貌地读完了提示，然后输入了引号。" },
    ] },
    { lv: 2, q: "AI 帮你升级一个依赖，顺手删掉了 package-lock.json，说“重新生成一份更干净”。你应该？", issue: "放任 AI 删锁文件", opts: [
      { t: "拦下：锁文件保证大家装到的版本一致，不能随手删", ok: 1, r: "对。锁文件记着每个依赖具体装了哪个版本，删了就等于放弃这份记录。" },
      { t: "同意，锁文件本来就是自动生成的，删了重新生成没有任何区别", r: "重新生成会按范围装当下最新的版本，几十个间接依赖可能一起变了。“我这能跑啊”就是这么来的。" },
      { t: "无所谓，只要 package.json 里的版本号没变就行", r: "package.json 里多半写的是 ^4.17.0 这种范围，具体装哪个版本只有锁文件记得。" },
      { fun: 1, t: "同意，顺便把 node_modules 也提交进仓库，更保险", r: "仓库喜提 800 MB，同事 clone 的时候可以去泡杯茶。" },
    ] },
    { lv: 2, code: "const user = data as any;\n// @ts-ignore\nconst id = (user as any).profile!.id as any;", q: "AI 说“已修复全部 TypeScript 报错”。diff 里全是这种写法。你应该？", issue: "被 as any 刷绿了类型检查", opts: [
      { t: "打回：这是把类型检查关掉了，不是修复", ok: 1, r: "对。as any 和 @ts-ignore 只是让编译器闭嘴，错误还在，等着运行时再炸。" },
      { t: "合并，报错数从 214 降到 0，这是可以量化的进步", r: "温度计砸了，烧还没退。" },
      { t: "合并，as any 是 TypeScript 官方语法，能用就说明合法", r: "合法不等于正确。“能编译”和“类型对”是两回事。" },
      { fun: 1, t: "让它把 tsconfig 里的 strict 也关掉，一劳永逸", r: "一劳永逸地回到了 JavaScript。" },
    ] },
    { lv: 3, code: "@lru_cache\ndef get_usd_rate():\n    return requests.get(RATE_API).json()[\"usd_cny\"]", q: "AI 说“加了缓存，汇率接口快了 100 倍”。这个服务会连续跑好几个月。问题在哪？", issue: "给实时汇率加了永久缓存", opts: [
      { t: "进程不重启，汇率就永远停在第一次查到的值", ok: 1, r: "对。lru_cache 没有过期时间，无参数的函数只会真正执行一次。几个月后你还在用开服那天的汇率。" },
      { t: "没问题，lru_cache 默认 5 分钟过期，会自动刷新", r: "lru_cache 没有过期时间，只按容量淘汰。要定时刷新得自己加 TTL。" },
      { t: "lru_cache 不能用在没有参数的函数上，运行会直接报错", r: "能用，而且只会缓存唯一一个结果，这正是问题所在。" },
      { t: "缓存会越积越多，最后把内存撑爆", r: "默认最多存 128 个结果，而这个函数只有一种调用方式，只会存 1 个。" },
    ] },
    { lv: 3, halluc: 1, code: "resp = requests.get(url, retry=3)  # 失败自动重试 3 次", q: "AI 写了这行来给接口加重试。实际运行会怎样？", issue: "相信了 AI 编出来的参数", opts: [
      { t: "报 TypeError：没有 retry 这个参数", ok: 1, r: "对。实测报错 unexpected keyword argument 'retry'。真要重试，得给 Session 挂上 HTTPAdapter(max_retries=…)。" },
      { t: "请求失败时自动重试 3 次，每次间隔 1 秒", r: "这个参数是 AI 编的。requests 不认识它，直接 TypeError。" },
      { t: "不认识的参数会被静默忽略，最后只请求一次、失败也不重试", r: "requests 不会悄悄吞掉未知参数，直接抛 TypeError。至少它比 AI 诚实。" },
      { t: "设置 3 秒超时，超时就抛异常", r: "那是 timeout=3。retry 这个参数压根不存在。" },
    ] },
  ],

  terminal: [
    { lv: 1, term: "$ ./deploy.sh\nzsh: permission denied: ./deploy.sh", q: "脚本是你刚写的。怎么让它跑起来？", issue: "脚本没加执行权限就先 sudo", opts: [
      { t: "chmod +x deploy.sh", ok: 1, r: "对。新建的文件默认没有执行权限，加上 x 就行。或者直接 sh deploy.sh。" },
      { t: "sudo ./deploy.sh", r: "不是你权限不够，是文件没被标记成可执行。一个 x 位都没有的文件，root 也没法直接执行。" },
      { t: "sudo chmod -R 777 /", r: "为了一个脚本，把整个系统的门都拆了。" },
      { fun: 1, t: "把 deploy.sh 改名成 deploy.exe", r: "这里是 Unix，不看后缀，看权限。" },
    ] },
    { lv: 2, term: "$ cd Documents/my project\ncd: string not in pwd: Documents/my", q: "文件夹名就叫 my project，中间有个空格。怎么进去？", issue: "被文件夹名里的空格绊倒", opts: [
      { t: "cd \"Documents/my project\"", ok: 1, r: "对。空格把参数拆成了两个，加引号或写成 my\\ project 就行。zsh 把两个参数理解成“把当前路径里的 A 换成 B”，才冒出这句怪报错。" },
      { t: "cd Documents/my_project", r: "目录名里是空格，不是下划线。这样只会得到 no such file or directory。" },
      { t: "cd Documents/my/project", r: "那是 my 目录里的 project 子目录，不是同一个地方。" },
      { fun: 1, t: "把电脑里所有文件夹名的空格都换成下划线，从根源解决", r: "根源解决了，你的周末也解决了。" },
    ] },
    { lv: 2, term: "$ wc -l important.log\n10000 important.log\n$ echo \"new line\" > important.log", q: "执行完最后一行，important.log 里是什么？", issue: "把 > 当成了 >>", opts: [
      { t: "只剩一行：new line", ok: 1, r: "对。> 是覆盖写入，先清空再写；想追加要用 >>。一万行日志，一个字符送走。" },
      { t: "原来的 10000 行，末尾多了一行 new line", r: "那是 >> 的效果。单个 > 会先把文件清空。" },
      { t: "报错：文件已存在，拒绝覆盖", r: "默认不会拦你。除非你提前开了 set -o noclobber。" },
      { t: "new line 被插到了文件第一行", r: "echo 不会插队。它直接占了整个文件。" },
    ] },
    { lv: 2, term: "$ ssh -i ~/.ssh/id_ed25519 me@server\n@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @\nPermissions 0644 for '/home/me/.ssh/id_ed25519' are too open.\nThis private key will be ignored.", q: "密钥是对的，就是连不上。怎么修？", issue: "看不懂 SSH 在嫌权限太大", opts: [
      { t: "chmod 600 ~/.ssh/id_ed25519", ok: 1, r: "对。私钥只能你自己读写。别人也能读，SSH 就拒绝用它。" },
      { t: "chmod 777 ~/.ssh/id_ed25519", r: "它嫌权限太开放，你直接全开。SSH 只会更生气。" },
      { t: "重新生成一对密钥", r: "钥匙没坏，只是放得不够严。新钥匙还得重新去服务器上登记。" },
      { t: "加上 -o StrictHostKeyChecking=no 再连", r: "那个选项管的是服务器指纹，和私钥权限没关系。" },
    ] },
    { lv: 3, term: "$ export PATH=/opt/tools/bin\n$ ls\nzsh: command not found: ls", q: "你只是想把一个工具目录加进 PATH。发生了什么？", issue: "一行 export 把 ls 送走了", opts: [
      { t: "PATH 被整个覆盖了，系统命令都找不到了", ok: 1, r: "对。ls 在 /bin 里，而 PATH 现在只剩一个目录。应该写 PATH=/opt/tools/bin:$PATH。当前窗口可以用 /bin/ls 应急，或者开个新终端。" },
      { t: "/opt/tools/bin 里有个同名的 ls，把系统自带的顶掉了", r: "被顶掉的话会运行那个同名程序，而不是“找不到”。这里是 PATH 里已经没有 /bin 了。" },
      { t: "系统文件被删了，需要重装系统", r: "一个文件都没删。开个新终端，一切如初。" },
      { t: "export 需要 sudo 才能生效", r: "export 只改当前 shell 的变量，用不着 sudo。问题出在等号右边。" },
    ] },
    { lv: 3, term: "$ git reset --hard HEAD~1\nHEAD is now at e0763ba one", q: "糟了，被 reset 掉的那个 commit 里有一下午的代码，还没 push。还有救吗？", issue: "以为 reset --hard 之后就没救了", opts: [
      { t: "有救：用 git reflog 找到它，再 reset 回去", ok: 1, r: "对。reflog 记着 HEAD 走过的每一步，git reset --hard HEAD@{1} 就能回来。提交过的东西，Git 很难真的弄丢。" },
      { t: "没救了，--hard 会把那个 commit 连同文件一起从磁盘上彻底删掉", r: "commit 对象还在，只是没有分支指着它，默认还能留好几周才会被清理。" },
      { t: "git revert HEAD", r: "revert 会新建一个反向提交，撤销的是现在的 HEAD。越救越少。" },
      { t: "git pull，从远端拉回来", r: "还没 push，远端根本没有这个 commit。" },
    ] },
  ],
};
