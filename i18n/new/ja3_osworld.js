/* 第三轮扩题 · 电脑操作（osworld 池）新增 12 道 · 日本語版。样式见 i18n/new/add3_ui.css（x3- 前缀） */
const ADD3_UIS = {

  x3meet: `<div class="mock x3-meet"><div class="mock-bar"><i></i><i></i><i></i><b>定例会議 · 42:17 経過</b></div>
    <div class="x3-mt-grid">
      <div class="x3-tile x3-talk"><span class="x3-av">上</span><em>上司</em></div>
      <div class="x3-tile"><span class="x3-av">A</span><em>同僚 A</em><span class="x3-ic x3-mic off"></span></div>
      <div class="x3-tile"><span class="x3-av">B</span><em>同僚 B</em><span class="x3-ic x3-mic off"></span></div>
      <div class="x3-tile x3-me"><span class="x3-av">私</span><em>あなた</em><span class="x3-wave"><i></i><i></i><i></i></span></div>
    </div>
    <div class="x3-mt-bar">
      <button class="hs x3-mt-btn" data-opt="0"><span class="x3-ic x3-mic"></span>ミュート</button>
      <button class="hs x3-mt-btn" data-opt="1"><span class="x3-ic x3-cam off"></span>ビデオの開始</button>
      <button class="hs x3-mt-btn" data-opt="2"><span class="x3-ic x3-bub"></span>チャット</button>
      <button class="hs x3-mt-btn x3-leave" data-opt="3">退出</button>
    </div></div>`,

  x3recall: `<div class="phone x3-wxp"><div class="ph-bar">9:41</div>
    <div class="x3-chat">
      <div class="x3-ct">プロジェクト全体（58）</div>
      <div class="x3-msg"><span class="x3-ava">上司</span><p>今夜8時までに企画書をグループに送って。</p></div>
      <div class="x3-msg me"><p>また無茶振り。自分の企画書もろくに書けないくせに</p><span class="x3-ava me">私</span></div>
      <div class="x3-menu">
        <button class="hs x3-mi" data-opt="0"><span class="x3-mic2 del"></span>削除</button>
        <button class="hs x3-mi" data-opt="1"><span class="x3-mic2 fwd"></span>転送</button>
        <button class="hs x3-mi" data-opt="2"><span class="x3-mic2 quo"></span>リプライ</button>
        <button class="hs x3-mi" data-opt="3"><span class="x3-mic2 rec"></span>送信取消</button>
      </div>
      <div class="x3-time">既読 3</div>
    </div></div>`,

  x3print: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>印刷 · 年次報告書.pdf</b></div>
    <div class="mock-body x3-pr">
      <div class="x3-pr-row"><span>送信先</span><button class="hs x3-sel" data-opt="3">オフィス3F レーザー<i>▾</i></button></div>
      <div class="x3-pr-row"><span>部数</span><button class="hs x3-inp" data-opt="1">1</button></div>
      <div class="x3-pr-row top"><span>ページ</span><div class="x3-pr-pages">
        <div class="x3-radio"><span class="x3-rd on"></span>すべて（全 300 ページ）</div>
        <button class="hs x3-radio" data-opt="0"><span class="x3-rd"></span>カスタム<span class="x3-inp ph">例: 1-5, 8</span></button>
      </div></div>
      <div class="x3-pr-foot"><span>使用する用紙：300 枚</span><button class="hs x3-pr-go" data-opt="2">印刷</button></div>
    </div></div>`,

  x3share: `<div class="dialog x3-ss">
      <div class="x3-ss-t">共有する内容を選択</div>
      <div class="x3-ss-cap">画面</div>
      <button class="hs x3-th wide on" data-opt="0">
        <span class="x3-desk"><i class="w1"></i><i class="w2"></i><i class="w3"></i><em>エージェント：年収は交渉可、明日面談どう？</em><u>退職届.docx</u></span>
        <b>画面全体</b></button>
      <div class="x3-ss-cap">ウィンドウ</div>
      <div class="x3-ss-row">
        <button class="hs x3-th" data-opt="1"><span class="x3-ppt"><i></i><em>Q3 企画</em></span><b>企画.pptx - PowerPoint</b></button>
        <button class="hs x3-th" data-opt="2"><span class="x3-wxs"><i class="l"></i><i class="r"></i><i class="l s"></i></span><b>LINE（3）</b></button>
      </div>
      <div class="x3-ss-foot"><span><span class="fakebox"></span>コンピューターの音声も共有</span><button class="hs x3-ss-go" data-opt="3">共有</button></div>
    </div>`,

  x3install: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>〇〇プレイヤー セットアップ</b></div>
    <div class="mock-body x3-in">
      <div class="x3-in-logo"><span></span><b>〇〇プレイヤー 2026</b><small>高画質 · サクサク · 永久無料</small></div>
      <button class="hs x3-in-go" data-opt="0">かんたんインストール</button>
      <div class="x3-in-bundle">かんたんインストールでは次も同時にインストールされます：〇〇ブラウザ（既定に設定）、〇〇セキュリティ、〇〇日本語入力。ホームページも〇〇ポータルに変更されます</div>
      <div class="x3-in-path">インストール先：C:\\Program Files\\〇〇Player<button class="hs x3-in-lnk" data-opt="3">変更</button></div>
      <div class="x3-in-foot"><span><span class="fakebox on">✓</span><button class="hs x3-in-lnk" data-opt="2">使用許諾契約書</button>に同意する</span><button class="hs x3-in-lnk" data-opt="1">カスタムインストール ›</button></div>
    </div></div>`,

  x3clickfix: `<div class="mock"><div class="tabs"><span class="tab">受信トレイ</span><span class="tab on">無料 履歴書テンプレート<button class="hs tab-x" data-opt="2" aria-label="タブを閉じる">×</button></span></div>
    <div class="mock-body x3-cf">
      <div class="x3-cf-box">
        <div class="x3-cf-top"><span class="fakebox on">✓</span><b>私はロボットではありません</b><small>本人確認</small></div>
        <div class="x3-cf-t">あと少し：次の手順で確認を完了してください</div>
        <ol class="x3-cf-steps"><li><kbd>Win</kbd> + <kbd>R</kbd> を押す</li><li><kbd>Ctrl</kbd> + <kbd>V</kbd> を押す</li><li><kbd>Enter</kbd> を押す</li></ol>
        <div class="x3-cf-id">確認 ID：#71362</div>
        <button class="hs x3-cf-go" data-opt="0">上の手順を完了しました</button>
        <div class="x3-cf-links"><button class="hs x3-cf-lnk" data-opt="1">別の方法で確認</button><button class="hs x3-cf-lnk" data-opt="3">わからない方は動画で</button></div>
      </div>
    </div></div>`,

  x3sort: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>成績表.xlsx - Excel</b></div>
    <div class="mock-body x3-xl">
      <table class="x3-sheet"><tr><th></th><th>A</th><th class="sel">B</th></tr>
        <tr><th>1</th><td>氏名</td><td class="sel">点数</td></tr>
        <tr><th>2</th><td>佐藤</td><td class="sel">78</td></tr>
        <tr><th>3</th><td>鈴木</td><td class="sel">92</td></tr>
        <tr><th>4</th><td>高橋</td><td class="sel">65</td></tr></table>
      <div class="x3-xl-dlg">
        <div class="x3-xl-t">並べ替えの前に</div>
        <div class="x3-xl-p">選択範囲の隣にデータがあります。このデータは選択されていないため、並べ替えの対象になりません。</div>
        <div class="x3-xl-p b">実行する処理を選んでください</div>
        <button class="hs x3-radio" data-opt="0"><span class="x3-rd"></span>選択範囲を拡張する(E)</button>
        <button class="hs x3-radio" data-opt="1"><span class="x3-rd"></span>現在選択されている範囲を並べ替える(C)</button>
        <div class="x3-xl-foot"><button class="hs x3-xl-btn" data-opt="2">キャンセル</button></div>
      </div>
    </div></div>`,

  x3link: `<div class="dialog x3-sh">
      <div class="x3-sh-t">「2026 全社員給与.xlsx」を共有</div>
      <div class="x3-sh-in">ユーザー、グループ、メールアドレスを追加</div>
      <div class="x3-sh-cap">アクセスできるユーザー</div>
      <div class="x3-sh-p"><span class="x3-sh-av">私</span><span>あなた<small>オーナー</small></span></div>
      <div class="x3-sh-p"><span class="x3-sh-av g">経</span><span>経理部<small>finance@ourco.co.jp</small></span><em>閲覧者</em></div>
      <div class="x3-sh-cap">一般的なアクセス</div>
      <div class="x3-sh-gen"><span class="x3-globe"></span>
        <div><button class="hs x3-sh-dd" data-opt="1">リンクを知っている全員 ▾</button><small>インターネット上でこのリンクを知っている人なら誰でも編集できます</small></div>
        <button class="hs x3-sh-dd" data-opt="2">編集者 ▾</button></div>
      <div class="x3-sh-foot"><button class="hs x3-sh-copy" data-opt="3">リンクをコピー</button><button class="hs x3-sh-done" data-opt="0">完了</button></div>
    </div>`,

  x3mfa: `<div class="phone x3-night"><div class="ph-bar">03:07</div>
    <div class="x3-mfa">
      <div class="x3-mfa-app"><span></span>アカウントのセキュリティ · 今</div>
      <div class="x3-mfa-t">サインインを承認しますか？</div>
      <div class="x3-mfa-info">Windows PC · 不明な場所 · たった今</div>
      <div class="x3-mfa-hint">PC の画面に表示されている番号をタップ</div>
      <div class="x3-mfa-nums"><button class="hs x3-num" data-opt="0">27</button><button class="hs x3-num" data-opt="1">45</button><button class="hs x3-num" data-opt="2">81</button></div>
      <button class="hs x3-mfa-no" data-opt="3">いいえ、私ではありません</button>
    </div>
    <div class="x3-mfa-cnt">今夜 5 回目のリクエスト</div></div>`,

  x3replyto: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>受信トレイ</b></div>
    <div class="mock-body x3-ml">
      <div class="x3-ml-subj">【至急】本日中にお振込みを</div>
      <button class="hs x3-ml-hd" data-opt="0"><span>差出人</span><b>山田社長</b>&lt;yamada@ourco.co.jp&gt;</button>
      <div class="x3-ml-hd"><span>宛先</span>自分</div>
      <button class="hs x3-ml-hd x3-ml-rt" data-opt="1"><span>返信先</span>yamada.ourco@gmail.com</button>
      <div class="x3-ml-body">お疲れさまです。<button class="hs x3-ml-s" data-opt="3">会議中のため電話には出られません。</button>仕入先の振込口座が変わりました。請求書を添付するので、本日中に必ず振り込んで、済んだらこのメールに直接返信してください。<small>iPhoneから送信</small></div>
      <button class="hs x3-ml-att" data-opt="2"><span>PDF</span>請求書_新口座.pdf<small>86 KB</small></button>
    </div></div>`,

  x3macro: `<div class="mock x3-wd"><div class="x3-wd-bar"><span>請求書_0927.doc [保護ビュー] - Word</span><button class="hs x3-wd-x" data-opt="2" aria-label="閉じる">×</button></div>
    <div class="x3-pv"><b>保護ビュー</b>注意 — インターネットから入手したファイルは、ウイルスに感染している可能性があります。編集する必要がなければ、保護ビューのままにしておくことをお勧めします。<button class="hs x3-pv-btn" data-opt="0">編集を有効にする</button></div>
    <div class="x3-page"><i></i><i class="s"></i>
      <button class="hs x3-lure" data-opt="1"><b>Microsoft Office</b>この文書は新しいバージョンの Office で作成されました。内容を表示するには、上の「編集を有効にする」をクリックし、次に「コンテンツの有効化」をクリックしてください。<span>請求書を表示</span></button>
      <i></i><i class="s"></i><i></i></div>
  </div>`,

  x3ext: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>拡張機能ストア · スクショ</b></div>
    <div class="mock-body x3-ex">
      <button class="hs x3-ex-c" data-opt="3"><span class="x3-ex-ic p">AI</span><span class="x3-ex-m"><b>AI スクショアシスタント<em>スポンサー</em></b><small>★ 4.9 · 50万ユーザー · AIに無料で質問</small><u>権限：すべてのウェブサイト上にある自分のデータの読み取りと変更、クリップボードの読み取りと変更</u></span></button>
      <button class="hs x3-ex-c" data-opt="0"><span class="x3-ex-ic b">P</span><span class="x3-ex-m"><b>スクショマスター Pro<em class="f">おすすめ</em></b><small>★ 4.9 · 300万ユーザー</small><u>権限：すべてのウェブサイト上にある自分のデータの読み取りと変更、閲覧履歴の読み取り</u></span></button>
      <button class="hs x3-ex-c" data-opt="1"><span class="x3-ex-ic o">爆</span><span class="x3-ex-m"><b>爆速スクショ</b><small>★ 4.8 · 120万ユーザー</small><u>権限：すべてのウェブサイト上にある自分のデータの読み取りと変更、ダウンロードの管理、連携するネイティブ アプリケーションとの通信</u></span></button>
      <button class="hs x3-ex-c" data-opt="2"><span class="x3-ex-ic g">シ</span><span class="x3-ex-m"><b>シンプルスクショ</b><small>★ 4.4 · 6万ユーザー</small><u>権限：特になし（クリックしたときだけ今のページにアクセス）</u></span></button>
    </div></div>`,
};

const ADD3 = {
  osworld: [
    { lv: 3, q: "会議中、横にいる家族に上司の愚痴をこぼしたい。まず上司に聞こえないようにするには、どれを押す？", ui: "x3meet", issue: "ボタンに「ミュート」とあれば消音中だと思った",
      opts: [
        { t: "ミュート", ok: 1, r: "正解。ボタンに書いてあるのは「押すとどうなるか」。まだ「ミュート」と出ているなら、マイクはずっとオン。さっきのため息、全員に聞こえてた。" },
        { t: "ビデオの開始", r: "上司には聞こえない。でも見える。あきれ顔のあなたを高画質で生配信。" },
        { t: "チャット", r: "愚痴を会議チャットに打ち込んだ。送信先のデフォルト：全員。" },
        { t: "退出", r: "確かに上司には聞こえなくなった。3秒後に個別チャット：「落ちた？」" },
      ] },
    { lv: 2, q: "上司もいる58人のLINEグループに、上司の悪口を送ってしまった。メッセージを長押し。どれを押す？", ui: "x3recall", issue: "「削除」すれば上司からも消えると思った",
      opts: [
        { t: "削除", r: "消えたのはあなたのスマホの中だけ。上司の画面にはくっきり残ってる。見なかったことにしただけ。" },
        { t: "転送", r: "どこに転送しても、グループからは消えない。知ってる人が一人増えるだけ。" },
        { t: "リプライ", r: "自分の悪口にリプライした。これで上司は2回読める。" },
        { t: "送信取消", ok: 1, r: "正解。送信から24時間以内なら取り消せる。ただしグループには「メッセージの送信を取り消しました」と残り、しかももう既読3。何を言ったのか、58人が気になってる。" },
      ] },
    { lv: 2, q: "300ページのPDFで、3ページ目だけ印刷したい。どこを押す？", ui: "x3print", issue: "「部数」を「何ページ目」だと思った",
      opts: [
        { t: "ページ：カスタム", ok: 1, r: "正解。カスタムに3と入れれば紙1枚で済む。プリンターも総務もほっと一息。" },
        { t: "部数：3にする", r: "300ページを3部印刷した。プリンターは午前から定時まで吐き続け、総務があなたを探しに来た。" },
        { t: "そのまま印刷", r: "300ページ漏れなく。欲しかった3ページ目はその中のどこか、自分でめくって。" },
        { t: "プリンターを変える", r: "プリンターを変えても300ページ。吐き出す場所が変わるだけ。" },
      ] },
    { lv: 2, q: "顧客に企画を説明する。見せたいのはPowerPointだけ。どれを押す？", ui: "x3share", issue: "画面全体を共有して、エージェントの通知が映った",
      opts: [
        { t: "画面全体", r: "顧客が見たもの：あなたのデスクトップ、「退職届.docx」、そして届いたばかりの「年収は交渉可」。" },
        { t: "企画.pptx のウィンドウ", ok: 1, r: "正解。顧客に見えるのはスライドだけ。「退職届.docx」も、エージェントの「明日面談どう？」も映らない。" },
        { t: "LINE のウィンドウ", r: "顧客はあなたと母親のトークを最後まで観賞した：「寒くなったけど、ちゃんと厚着してる？」" },
        { t: "そのまま共有", r: "デフォルトで選ばれてるのは「画面全体」。ワンクリックでデスクトップを生配信、ちょうどエージェントの通知もポップアップ。" },
      ] },
    { lv: 2, q: "入れたいのはプレイヤーだけ、他は一切いらない。どこを押す？", ui: "x3install", issue: "「かんたんインストール」でおまけ一式をお迎え",
      opts: [
        { t: "かんたんインストール", r: "入った：プレイヤー、ブラウザ、セキュリティソフト、日本語入力。ホームページも〇〇ポータルに。ご家族そろってお引っ越し。" },
        { t: "カスタムインストール", ok: 1, r: "正解。「かんたん」なのはメーカーのインストール数稼ぎ。カスタムを開いて、最初からチェックの入った項目を全部外す。" },
        { t: "使用許諾契約書", r: "1万8千字を真面目に読み切ったら、ちゃんと書いてあった：おまけ一式をインストールします。" },
        { t: "インストール先を変更", r: "おまけ一式をDドライブに入れた。住所が変わっても、家族は家族。" },
      ] },
    { lv: 3, q: "テンプレートをダウンロードする前に本人確認。「私はロボットではありません」にチェックしたら、こうなった。どこを押す？", ui: "x3clickfix", issue: "本人確認でWin+Rを押せと言われ、押した",
      opts: [
        { t: "上の手順を完了しました", r: "Win+Rで「ファイル名を指定して実行」が開き、Ctrl+Vで貼られるのはページがこっそりクリップボードに仕込んだコマンド。Enterで実行。3ステップで自分をハッキング、効率的。" },
        { t: "別の方法で確認", r: "偽ページの「別の方法」は：Win+Xでターミナルを開いて貼り付け。行き着く先は同じ。" },
        { t: "このタブを閉じる", ok: 1, r: "正解。本物の本人確認は信号機の画像を選ばせるくらいで、Win+Rなんて絶対に言わない。この手口はClickFix、2024年からネット中で大流行。" },
        { t: "わからない方は動画で", r: "動画はとても丁寧：マルウェアを自分の手で招き入れる方法。" },
      ] },
    { lv: 3, q: "「点数」の列だけ選んで降順を押したら、これが出た。名前も点数と一緒に動かしたい。どれを選ぶ？", ui: "x3sort", issue: "1列だけ並べ替えて、佐藤が92点を拾った",
      opts: [
        { t: "選択範囲を拡張する", ok: 1, r: "正解。行ごとお引っ越し。鈴木の92点はちゃんと鈴木についていく。" },
        { t: "現在選択されている範囲を並べ替える", r: "点数は並んだ、名前は微動だにしない。佐藤が鈴木の92点をタダで拾った。千行の表なら、もう誰が何点だったか誰にもわからない。" },
        { t: "キャンセル", r: "表は守られたけど、並べ替えもされてない。ダイアログを閉じても、問題は残ってる。" },
      ] },
    { lv: 3, q: "給与表は経理だけが見られるようにしたい。経理はもう追加済み。次にどこを押す？", ui: "x3link", issue: "給与表を「リンクを知っている全員が編集可」にした",
      opts: [
        { t: "完了", r: "経理には届いた。ついでに、リンクを知っている全員にも編集権が。明日には社内の誰もが、誰の給料が一番高いか知ってる。" },
        { t: "リンクを知っている全員", ok: 1, r: "正解。「制限付き」に変えれば世界中がこの表から退場して、残るのはあなたと経理だけ。" },
        { t: "編集者", r: "閲覧者に変えたら、世界中が「編集できる」から「見られる」になっただけ。おめでとう、給与表は読み取り専用の公開情報になった。" },
        { t: "リンクをコピー", r: "世界中が編集できるリンクを貼り出した。誰かがついでに自分の欄を1000万円に書き換えた。" },
      ] },
    { lv: 2, q: "深夜3時、寝ているとスマホがこれで震えた。今夜もう5回目。どれを押す？", ui: "x3mfa", issue: "深夜3時にハッカーのために番号を当てた",
      opts: [
        { t: "27", r: "ハズレ、危なかった。焦らなくても6回目、7回目が来る。あなたが当てるまで。" },
        { t: "45", r: "おめでとう、正解！3択で、自分の手で相手を招き入れた。2022年のUberへの侵入も、社員がプッシュ通知の嵐に負けて承認したのが始まり。" },
        { t: "81", r: "適当に押したその一回を、向こうはずっと待ってた。眠気はハッカー最高の相棒。" },
        { t: "いいえ、私ではありません", ok: 1, r: "正解。あなたは寝てた。だから「正しい番号」なんて存在しない。拒否して、泣く泣く起きてパスワード変更。" },
      ] },
    { lv: 4, q: "「社長」から、今日中に新しい仕入先へ振り込めというメール。送る前に返信で本人に確認したい。最大の穴を指摘して。", ui: "x3replyto", issue: "「返信先」が詐欺師のGmailだと気づかない",
      opts: [
        { t: "差出人：山田社長", r: "アドレスは確かに会社のもの。この行にケチはつけられない。あなたがここを見ることは詐欺師も承知で、仕掛けは別の場所にある。" },
        { t: "返信先：Gmail アドレス", ok: 1, r: "正解。差出人は社長なのに、返信はGmail行き。返信した瞬間、確認メールは詐欺師に直行。「そう、振り込んで」と即レスが来る。" },
        { t: "添付：請求書", r: "ファイル名だけでは何も証明できない。本当に開いて「確認」したら、確認されるのはあなたのPCのほうかも。" },
        { t: "「電話には出られません」", r: "怪しいけど、会議中の社長が電話に出ないのはよくある話。決定的な証拠はヘッダーにある：あなたの返信は社長に届かない。" },
      ] },
    { lv: 3, q: "メールの添付「請求書_0927.doc」を開いたらこうなった。何か買った覚えはない。どこを押す？", ui: "x3macro", issue: "文書に「編集を有効に」と言われ、押した",
      opts: [
        { t: "編集を有効にする", r: "第1段階クリア。次は「コンテンツの有効化」を押せと言われ、そこからマクロがあなたの代わりに働き出す。たとえばディスクを暗号化して身代金を要求するとか。" },
        { t: "文書内の「請求書を表示」", r: "それは文書に貼られた画像で、押しても何も起きない。本物のボタンの押し方を教えてる。あと一歩で覚えるところだった。" },
        { t: "右上の × で閉じる", ok: 1, r: "正解。まともな請求書は、保護を外さないと見られないなんて言わない。閉じて、相手に電話で何を送ってきたのか確かめる。" },
      ] },
    { lv: 3, q: "欲しいのはスクショ用の拡張機能だけ。ストアで検索したらこれが出た。どれを入れる？", ui: "x3ext", issue: "スクショのために全サイトのデータを差し出した",
      opts: [
        { t: "スクショマスター Pro", r: "300万ユーザー、全員のネットバンキング画面が丸見え。スクショは副業、閲覧履歴を読むのが本業。" },
        { t: "爆速スクショ", r: "ダウンロードも管理したい、PCの他のアプリとも通信したい。スクショツールのくせに、あなたより先のことを考えてる。" },
        { t: "シンプルスクショ", ok: 1, r: "正解。評価も利用者もちょっと少ないけど、クリックしたときに今のページを一目見るだけ。スクショツールは、スクショだけできればいい。" },
        { t: "AI スクショアシスタント（スポンサー）", r: "全サイトとクリップボードを読みたがる。あなたがコピーしたパスワード、全部「スマート保存」してくれる。" },
      ] },
  ],
};
