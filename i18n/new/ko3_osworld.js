/* 3차 문제 추가 · 컴퓨터 조작(osworld 풀) 12문제. 스타일은 i18n/new/add3_ui.css (x3- 접두사) */
const ADD3_UIS = {

  x3meet: `<div class="mock x3-meet"><div class="mock-bar"><i></i><i></i><i></i><b>주간 회의 · 42:17 진행 중</b></div>
    <div class="x3-mt-grid">
      <div class="x3-tile x3-talk"><span class="x3-av">팀</span><em>팀장님</em></div>
      <div class="x3-tile"><span class="x3-av">A</span><em>동료 A</em><span class="x3-ic x3-mic off"></span></div>
      <div class="x3-tile"><span class="x3-av">B</span><em>동료 B</em><span class="x3-ic x3-mic off"></span></div>
      <div class="x3-tile x3-me"><span class="x3-av">나</span><em>나</em><span class="x3-wave"><i></i><i></i><i></i></span></div>
    </div>
    <div class="x3-mt-bar">
      <button class="hs x3-mt-btn" data-opt="0"><span class="x3-ic x3-mic"></span>음소거</button>
      <button class="hs x3-mt-btn" data-opt="1"><span class="x3-ic x3-cam off"></span>비디오 시작</button>
      <button class="hs x3-mt-btn" data-opt="2"><span class="x3-ic x3-bub"></span>채팅</button>
      <button class="hs x3-mt-btn x3-leave" data-opt="3">나가기</button>
    </div></div>`,

  x3recall: `<div class="phone x3-wxp"><div class="ph-bar">9:41</div>
    <div class="x3-chat" style="background:#BACEE0">
      <div class="x3-ct" style="border-bottom-color:#a9bccd">프로젝트 단톡방 58</div>
      <div class="x3-msg"><span class="x3-ava">팀장</span><p>오늘 저녁 8시까지 기획안 단톡방에 올려 주세요.</p></div>
      <div class="x3-msg me"><p style="background:#FEE500">또 뜬구름 잡네. 본인 기획안도 제대로 못 쓰면서</p><span class="x3-ava me">나</span></div>
      <div class="x3-menu" style="word-break:keep-all;text-align:center;line-height:1.3;margin-left:0;padding:6px 2px">
        <button class="hs x3-mi" style="padding:4px 3px;font-size:11px;flex:none" data-opt="0"><span class="x3-mic2 del"></span>이 기기에서<br>삭제</button>
        <button class="hs x3-mi" style="padding:4px 3px;font-size:11px;flex:none" data-opt="1"><span class="x3-mic2 fwd"></span>전달</button>
        <button class="hs x3-mi" style="padding:4px 3px;font-size:11px;flex:none" data-opt="2"><span class="x3-mic2 quo"></span>답장</button>
        <button class="hs x3-mi" style="padding:4px 3px;font-size:11px;flex:none" data-opt="3"><span class="x3-mic2 rec"></span>모든 대화<br>상대에게서 삭제</button>
      </div>
      <div class="x3-time">방금</div>
    </div></div>`,

  x3print: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>인쇄 · 연간 보고서.pdf</b></div>
    <div class="mock-body x3-pr">
      <div class="x3-pr-row"><span>프린터</span><button class="hs x3-sel" data-opt="3">사무실-3F 레이저<i>▾</i></button></div>
      <div class="x3-pr-row"><span>매수</span><button class="hs x3-inp" data-opt="1">1</button></div>
      <div class="x3-pr-row top"><span>페이지</span><div class="x3-pr-pages">
        <div class="x3-radio"><span class="x3-rd on"></span>전체(총 300페이지)</div>
        <button class="hs x3-radio" data-opt="0"><span class="x3-rd"></span>맞춤설정<span class="x3-inp ph">예: 1-5, 8</span></button>
      </div></div>
      <div class="x3-pr-foot"><span>예상 용지: 300매</span><button class="hs x3-pr-go" data-opt="2">인쇄</button></div>
    </div></div>`,

  x3share: `<div class="dialog x3-ss">
      <div class="x3-ss-t">공유할 항목 선택</div>
      <div class="x3-ss-cap">화면</div>
      <button class="hs x3-th wide on" data-opt="0">
        <span class="x3-desk"><i class="w1"></i><i class="w2"></i><i class="w3"></i><em>헤드헌터: 연봉 더 조율 가능해요, 내일 면접?</em><u>퇴사.docx</u></span>
        <b>전체 화면</b></button>
      <div class="x3-ss-cap">창</div>
      <div class="x3-ss-row">
        <button class="hs x3-th" data-opt="1"><span class="x3-ppt"><i></i><em>Q3 기획안</em></span><b>기획안.pptx - PowerPoint</b></button>
        <button class="hs x3-th" data-opt="2"><span class="x3-wxs" style="background:#BACEE0;border-top-color:#FEE500"><i class="l"></i><i class="r" style="background:#FEE500"></i><i class="l s"></i></span><b>카카오톡 (3)</b></button>
      </div>
      <div class="x3-ss-foot"><span><span class="fakebox"></span>컴퓨터 소리도 공유</span><button class="hs x3-ss-go" data-opt="3">공유</button></div>
    </div>`,

  x3install: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>OO플레이어 설치 마법사</b></div>
    <div class="mock-body x3-in">
      <div class="x3-in-logo"><span></span><b>OO플레이어 2026</b><small>고화질 · 끊김 없이 · 평생 무료</small></div>
      <button class="hs x3-in-go" data-opt="0">원클릭 빠른 설치</button>
      <div class="x3-in-bundle">빠른 설치 시 함께 설치됩니다: OO브라우저(기본 브라우저로 설정), OO백신, OO툴바. 시작 페이지는 OO포털로 변경됩니다</div>
      <div class="x3-in-path">설치 경로: C:\\Program Files\\OO플레이어<button class="hs x3-in-lnk" data-opt="3">변경</button></div>
      <div class="x3-in-foot"><span><span class="fakebox on">✓</span><button class="hs x3-in-lnk" data-opt="2">이용약관</button> 동의</span><button class="hs x3-in-lnk" data-opt="1">사용자 지정 설치 ›</button></div>
    </div></div>`,

  x3clickfix: `<div class="mock"><div class="tabs"><span class="tab">받은편지함</span><span class="tab on">무료 이력서 양식 다운로드<button class="hs tab-x" data-opt="2" aria-label="탭 닫기">×</button></span></div>
    <div class="mock-body x3-cf">
      <div class="x3-cf-box">
        <div class="x3-cf-top"><span class="fakebox on">✓</span><b>로봇이 아닙니다.</b><small>보안 인증</small></div>
        <div class="x3-cf-t">한 단계 남았습니다: 아래 인증을 완료하세요</div>
        <ol class="x3-cf-steps"><li><kbd>Win</kbd> + <kbd>R</kbd> 누르기</li><li><kbd>Ctrl</kbd> + <kbd>V</kbd> 누르기</li><li><kbd>Enter</kbd> 누르기</li></ol>
        <div class="x3-cf-id">인증 ID: #71362</div>
        <button class="hs x3-cf-go" data-opt="0">위 단계를 완료했습니다</button>
        <div class="x3-cf-links"><button class="hs x3-cf-lnk" data-opt="1">다른 방법으로 인증</button><button class="hs x3-cf-lnk" data-opt="3">어려우신가요? 영상 가이드</button></div>
      </div>
    </div></div>`,

  x3sort: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>성적표.xlsx - Excel</b></div>
    <div class="mock-body x3-xl">
      <table class="x3-sheet"><tr><th></th><th>A</th><th class="sel">B</th></tr>
        <tr><th>1</th><td>이름</td><td class="sel">성적</td></tr>
        <tr><th>2</th><td>김철수</td><td class="sel">78</td></tr>
        <tr><th>3</th><td>이영희</td><td class="sel">92</td></tr>
        <tr><th>4</th><td>박민수</td><td class="sel">65</td></tr></table>
      <div class="x3-xl-dlg">
        <div class="x3-xl-t">정렬 경고</div>
        <div class="x3-xl-p">Microsoft Excel에서 선택 영역 옆에 데이터가 있음을 발견했습니다. 이 데이터는 선택하지 않았으므로 정렬되지 않습니다.</div>
        <div class="x3-xl-p b">원하는 작업을 선택하십시오.</div>
        <button class="hs x3-radio" data-opt="0"><span class="x3-rd"></span>선택 영역 확장(E)</button>
        <button class="hs x3-radio" data-opt="1"><span class="x3-rd"></span>현재 선택 영역으로 정렬(C)</button>
        <div class="x3-xl-foot"><button class="hs x3-xl-btn" data-opt="2">취소</button></div>
      </div>
    </div></div>`,

  x3link: `<div class="dialog x3-sh">
      <div class="x3-sh-t">‘2026 전 직원 급여.xlsx’ 공유</div>
      <div class="x3-sh-in">사용자, 그룹 또는 이메일 추가</div>
      <div class="x3-sh-cap">액세스 권한이 있는 사용자</div>
      <div class="x3-sh-p"><span class="x3-sh-av">나</span><span>나<small>소유자</small></span></div>
      <div class="x3-sh-p"><span class="x3-sh-av g">재</span><span>재무팀<small>finance@ourco.com</small></span><em>뷰어</em></div>
      <div class="x3-sh-cap">일반 액세스</div>
      <div class="x3-sh-gen"><span class="x3-globe"></span>
        <div><button class="hs x3-sh-dd" data-opt="1">링크가 있는 모든 사용자 ▾</button><small>링크가 있는 인터넷상의 모든 사용자가 편집할 수 있습니다</small></div>
        <button class="hs x3-sh-dd" data-opt="2">편집자 ▾</button></div>
      <div class="x3-sh-foot"><button class="hs x3-sh-copy" data-opt="3">링크 복사</button><button class="hs x3-sh-done" data-opt="0">완료</button></div>
    </div>`,

  x3mfa: `<div class="phone x3-night"><div class="ph-bar">03:07</div>
    <div class="x3-mfa">
      <div class="x3-mfa-app"><span></span>계정 보안 · 지금</div>
      <div class="x3-mfa-t">로그인을 시도하는 분이 본인인가요?</div>
      <div class="x3-mfa-info">Windows PC · 알 수 없는 위치 · 방금</div>
      <div class="x3-mfa-hint">PC 화면에 표시된 숫자를 누르세요</div>
      <div class="x3-mfa-nums"><button class="hs x3-num" data-opt="0">27</button><button class="hs x3-num" data-opt="1">45</button><button class="hs x3-num" data-opt="2">81</button></div>
      <button class="hs x3-mfa-no" data-opt="3">아니요, 본인이 아닙니다</button>
    </div>
    <div class="x3-mfa-cnt">오늘 밤 5번째 요청</div></div>`,

  x3replyto: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>받은편지함</b></div>
    <div class="mock-body x3-ml">
      <div class="x3-ml-subj">[긴급] 오늘 퇴근 전 송금 요망</div>
      <button class="hs x3-ml-hd" data-opt="0"><span>보낸사람</span><b>김 대표</b>&lt;kim@ourco.com&gt;</button>
      <div class="x3-ml-hd"><span>받는사람</span>나</div>
      <button class="hs x3-ml-hd x3-ml-rt" data-opt="1"><span>회신주소</span>kim.ourco@gmail.com</button>
      <div class="x3-ml-body">수고 많아요. <button class="hs x3-ml-s" data-opt="3">회의 중이라 전화는 어렵습니다.</button> 거래처 입금 계좌가 바뀌었으니 첨부한 지급요청서 보고 오늘 꼭 처리해 주세요. 끝나면 바로 회신 바랍니다.<small>iPhone에서 보냄</small></div>
      <button class="hs x3-ml-att" data-opt="2"><span>PDF</span>지급요청서_새계좌.pdf<small>86 KB</small></button>
    </div></div>`,

  x3macro: `<div class="mock x3-wd"><div class="x3-wd-bar"><span>청구서_0927.doc [제한된 보기] - Word</span><button class="hs x3-wd-x" data-opt="2" aria-label="닫기">×</button></div>
    <div class="x3-pv"><b>제한된 보기</b>주의하세요. 인터넷에서 가져온 파일은 바이러스를 포함할 수 있습니다. 편집할 필요가 없으면 제한된 보기를 유지하는 것이 안전합니다.<button class="hs x3-pv-btn" data-opt="0">편집 사용</button></div>
    <div class="x3-page"><i></i><i class="s"></i>
      <button class="hs x3-lure" data-opt="1"><b>Microsoft Office</b>이 문서는 상위 버전의 Office에서 작성되었습니다. 내용을 보려면 위의 ‘편집 사용’을 클릭한 다음 ‘콘텐츠 사용’을 클릭하세요.<span>청구서 보기</span></button>
      <i></i><i class="s"></i><i></i></div>
  </div>`,

  x3ext: `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i><b>확장 프로그램 스토어 · 캡처</b></div>
    <div class="mock-body x3-ex">
      <button class="hs x3-ex-c" data-opt="3"><span class="x3-ex-ic p">AI</span><span class="x3-ex-m"><b>AI 캡처 도우미<em>스폰서</em></b><small>★ 4.9 · 사용자 50만 명 · 캡처 후 AI에게 무료 질문</small><u>권한: 모든 웹사이트에서 내 데이터 읽기 및 변경, 클립보드 읽기 및 수정</u></span></button>
      <button class="hs x3-ex-c" data-opt="0"><span class="x3-ex-ic b">P</span><span class="x3-ex-m"><b>캡처 마스터 Pro<em class="f">추천</em></b><small>★ 4.9 · 사용자 300만 명</small><u>권한: 모든 웹사이트에서 내 데이터 읽기 및 변경, 방문 기록 읽기</u></span></button>
      <button class="hs x3-ex-c" data-opt="1"><span class="x3-ex-ic o">초</span><span class="x3-ex-m"><b>초고속 캡처</b><small>★ 4.8 · 사용자 120만 명</small><u>권한: 모든 웹사이트에서 내 데이터 읽기 및 변경, 다운로드 관리, 컴퓨터의 다른 프로그램과 통신</u></span></button>
      <button class="hs x3-ex-c" data-opt="2"><span class="x3-ex-ic g">심</span><span class="x3-ex-m"><b>심플 캡처</b><small>★ 4.4 · 사용자 6만 명</small><u>권한: 특별 권한 없음(클릭할 때만 현재 페이지에 접근)</u></span></button>
    </div></div>`,
};

const ADD3 = {
  osworld: [
    { lv: 3, q: "재택 회의 중에 고개 돌려 룸메이트한테 팀장님 뒷담 좀 하려고 함. 팀장님이 못 듣게 하려면 뭘 눌러야 함?", ui: "x3meet", issue: "버튼에 “음소거”라 써 있으면 음소거된 줄 앎",
      opts: [
        { t: "음소거", ok: 1, r: "정답. 버튼에 써 있는 건 “누르면 일어날 일”. 아직 “음소거”라고 써 있다는 건 마이크가 계속 켜져 있었다는 뜻. 방금 그 한숨, 전원이 들었음." },
        { t: "비디오 시작", r: "팀장님이 못 듣긴 함. 대신 봄. 네 눈 흘기는 걸 고화질 생중계로." },
        { t: "채팅", r: "뒷담을 회의 채팅에 쳐 버림. 기본 수신자: 모두." },
        { t: "나가기", r: "팀장님이 못 듣긴 함. 3초 뒤 개인 메시지: “튕겼어요?”" },
      ] },
    { lv: 2, q: "팀장님 뒷담을 팀장님도 있는 58명 단톡방에 보내 버림. 방금 보낸 메시지를 길게 눌렀음. 뭘 눌러야 함?", ui: "x3recall", issue: "“이 기기에서 삭제”면 팀장님도 못 볼 줄 앎",
      opts: [
        { t: "이 기기에서 삭제", r: "지워진 건 네 폰에 있는 것뿐. 팀장님 폰엔 선명하게 남아 있음. 이건 그냥 눈 가리고 아웅." },
        { t: "전달", r: "어디로 보내도 단톡방에선 안 사라짐. 오히려 아는 사람만 한 명 늘어남." },
        { t: "답장", r: "자기 욕에 답장을 닮. 이제 팀장님은 두 번 봄." },
        { t: "모든 대화 상대에게서 삭제", ok: 1, r: "정답. 보낸 지 5분 안에만 되니까 손이 빨라야 함. 다만 방에 “삭제된 메시지입니다.”가 남아서 58명 전원이 뭐라고 썼는지 궁금해함." },
      ] },
    { lv: 2, q: "300페이지짜리 PDF에서 3페이지만 인쇄하고 싶음. 어디를 눌러야 함?", ui: "x3print", issue: "“매수”를 “몇 페이지”로 착각",
      opts: [
        { t: "페이지: 맞춤설정", ok: 1, r: "정답. 맞춤설정에 3 입력하면 종이 한 장으로 끝. 프린터와 총무팀이 동시에 한숨 돌림." },
        { t: "매수: 3으로 변경", r: "3부 뽑음, 부당 300페이지. 프린터가 오전부터 퇴근까지 종이를 토해 내고, 총무팀이 찾아옴." },
        { t: "바로 인쇄", r: "300페이지 한 장도 안 빠짐. 원하던 3페이지는 그 안에 끼어 있으니 알아서 찾으셈." },
        { t: "프린터 변경", r: "프린터를 바꿔도 300페이지. 종이 토하는 장소만 바뀜." },
      ] },
    { lv: 2, q: "고객한테 기획안 발표 중. 상대한테 PPT만 보여 주고 싶음. 뭘 눌러야 함?", ui: "x3share", issue: "회의에서 전체 화면 공유, 헤드헌터 메시지 노출",
      opts: [
        { t: "전체 화면", r: "고객이 네 바탕화면, “퇴사.docx”라는 파일, 방금 온 헤드헌터의 “연봉 더 조율 가능해요”까지 다 봄." },
        { t: "기획안.pptx 창", ok: 1, r: "정답. 고객은 PPT만 봄. “퇴사.docx”도, 헤드헌터의 “내일 면접?”도 안 보임." },
        { t: "카카오톡 창", r: "고객이 너랑 엄마 대화를 풀관람함: “날 추워졌다, 내복은 입었니?”" },
        { t: "바로 공유 누르기", r: "기본 선택은 “전체 화면”. 원클릭으로 바탕화면 생중계, 마침 헤드헌터 메시지가 뜸." },
      ] },
    { lv: 2, q: "플레이어 하나만 깔고 싶음. 딴 건 하나도 필요 없음. 어디를 눌러야 함?", ui: "x3install", issue: "“빠른 설치” 눌렀다가 번들 풀세트 당첨",
      opts: [
        { t: "원클릭 빠른 설치", r: "설치 완료: 플레이어, 브라우저, 백신, 툴바, 시작 페이지는 OO포털. 가족은 역시 다 같이 다녀야 제맛." },
        { t: "사용자 지정 설치", ok: 1, r: "정답. “빠른” 건 제조사 설치 수가 빨리 느는 것. 사용자 지정 눌러서 기본으로 체크된 것들 전부 해제." },
        { t: "이용약관", r: "1만 8천 자를 성실히 다 읽었더니 거기 이미 적혀 있었음: 번들 풀세트 깔아 드립니다." },
        { t: "설치 경로 변경", r: "번들 풀세트를 D 드라이브에 깔아 줌. 이사만 갔지 여전히 한 가족." },
      ] },
    { lv: 3, q: "양식 다운로드 전에 보안 인증이 떠서 “로봇이 아닙니다”를 체크했더니 이렇게 바뀜. 뭘 눌러야 함?", ui: "x3clickfix", issue: "보안 인증이 Win+R 누르라고 해서 그대로 함",
      opts: [
        { t: "위 단계를 완료했습니다", r: "Win+R로 “실행” 창이 열리고, Ctrl+V로 붙여 넣는 건 웹페이지가 몰래 클립보드에 넣은 명령어, 엔터 치면 실행. 세 단계로 셀프 해킹, 효율 좋음." },
        { t: "다른 방법으로 인증", r: "가짜 페이지의 “다른 방법”: Win+X 눌러서 터미널 열고 붙여 넣기. 길만 다르고 도착지는 같음." },
        { t: "이 탭 닫기", ok: 1, r: "정답. 진짜 보안 인증은 기껏해야 신호등을 찾게 하지, Win+R은 절대 안 시킴. 이 수법 이름은 ClickFix, 2024년부터 온 인터넷에 깔림." },
        { t: "어려우신가요? 영상 가이드", r: "가이드가 아주 친절함: 트로이 목마를 내 손으로 모셔 오는 법." },
      ] },
    { lv: 3, q: "“성적” 열만 선택하고 내림차순을 눌렀더니 이게 뜸. 이름도 성적 따라 같이 움직이게 하려면?", ui: "x3sort", issue: "한 열만 정렬해서 김철수가 92점 주움",
      opts: [
        { t: "선택 영역 확장", ok: 1, r: "정답. 행 전체가 같이 이사 감. 이영희의 92점은 계속 이영희 거." },
        { t: "현재 선택 영역으로 정렬", r: "성적은 정렬됐는데 이름은 꿈쩍도 안 함: 김철수가 이영희의 92점을 공짜로 주움. 천 줄짜리 표라면 이제 누가 몇 점인지 아무도 모름." },
        { t: "취소", r: "표는 지켰는데 정렬도 안 됨. 문제 창은 닫았지만 문제는 그대로." },
      ] },
    { lv: 3, q: "급여 파일은 재무팀만 봐야 함. 재무팀은 이미 목록에 추가함. 다음엔 뭘 눌러야 함?", ui: "x3link", issue: "급여 파일을 “링크가 있는 모든 사용자 편집 가능”으로 둠",
      opts: [
        { t: "완료", r: "재무팀은 받음. 덤으로 링크 가진 모든 사람도 편집 권한을 받음. 내일이면 누가 연봉 제일 많은지 전사가 앎." },
        { t: "링크가 있는 모든 사용자", ok: 1, r: "정답. “제한됨”으로 바꾸면 전 세계가 이 파일에서 퇴장하고 너랑 재무팀만 남음." },
        { t: "편집자", r: "뷰어로 바꾸면 전 세계가 “수정 가능”에서 “보기만 가능”이 됨. 축하함, 급여표가 읽기 전용 공개 정보가 됐음." },
        { t: "링크 복사", r: "전 인터넷 편집 가능 링크를 뿌려 버림. 누가 슬쩍 자기 칸을 1억으로 고침." },
      ] },
    { lv: 2, q: "새벽 3시에 자고 있는데 폰이 이걸로 울려서 깸. 오늘 밤만 벌써 5번째. 뭘 눌러야 함?", ui: "x3mfa", issue: "새벽 3시에 해커 대신 숫자 맞혀 줌",
      opts: [
        { t: "27", r: "틀렸음, 다행. 걱정 마, 6번째, 7번째도 뜰 거임. 네가 맞힐 때까지." },
        { t: "45", r: "정답 축하! 셋 중 하나 골라서 네 손으로 문 열어 줌. 2022년 Uber 해킹도 직원이 푸시 폭탄에 지쳐서 승인 눌러서 뚫렸음." },
        { t: "81", r: "대충 하나 눌렀는데 상대는 딱 그 한 번을 기다리는 중이었음. 졸음은 해커의 최고 팀원." },
        { t: "아니요, 본인이 아닙니다", ok: 1, r: "정답. 넌 자고 있었으니 “맞는 숫자” 같은 건 없음. 거부 누르고, 눈물 머금고 일어나서 비번 바꾸기." },
      ] },
    { lv: 4, q: "“대표님”이 오늘 새 거래처에 송금하라고 메일 보냄. 먼저 답장으로 확인하려 함. 보내기 전에 가장 큰 허점을 찾아봐.", ui: "x3replyto", issue: "“회신 주소”가 사기꾼 Gmail인 걸 못 봄",
      opts: [
        { t: "보낸사람: 김 대표", r: "주소는 진짜 회사 거라 이 줄은 흠잡을 데 없음. 네가 여길 볼 줄 사기꾼도 알아서, 공은 딴 데 들였음." },
        { t: "회신 주소: Gmail 주소", ok: 1, r: "정답. 보낸사람은 대표님인데 답장은 Gmail로 감. 답장 누르면 확인 메일이 사기꾼한테 직행하고, 칼답이 옴: “네, 보내세요.”" },
        { t: "첨부: 지급요청서", r: "파일 이름만으론 아무것도 증명 못 함. 진짜 열어서 “확인”해 보면 확인당하는 건 네 컴퓨터일 수도." },
        { t: "“전화는 어렵습니다”", r: "수상하긴 한데, 대표님이 회의 중이라 전화 못 받는 건 흔한 일. 결정적 증거는 헤더: 네 답장은 대표님한테 가지도 않음." },
      ] },
    { lv: 3, q: "메일 첨부 “청구서_0927.doc”를 열었더니 이렇게 나옴. 뭘 산 기억은 없음. 어디를 눌러야 함?", ui: "x3macro", issue: "문서가 “편집 사용” 누르래서 진짜 누름",
      opts: [
        { t: "편집 사용", r: "1단계 완료. 다음엔 “콘텐츠 사용”을 눌러 달라고 할 거고, 그다음부터 매크로가 알아서 일함. 예를 들면 하드 암호화하고 몸값 요구하기." },
        { t: "문서 안의 “청구서 보기”", r: "그건 문서에 박힌 그림이라 눌러도 반응 없음. 진짜 버튼 누르는 법을 가르치는 중이었고, 거의 배울 뻔함." },
        { t: "오른쪽 위 × 눌러 닫기", ok: 1, r: "정답. 정상적인 청구서는 보호 기능부터 끄라고 안 함. 닫고, 상대한테 전화해서 대체 뭘 보냈는지 물어보기." },
      ] },
    { lv: 3, q: "캡처 확장 프로그램 하나만 있으면 됨. 스토어에서 이렇게 검색됨. 뭘 깔아야 함?", ui: "x3ext", issue: "캡처 하나 하려고 모든 웹 데이터 넘김",
      opts: [
        { t: "캡처 마스터 Pro", r: "사용자 300만 명, 그 모두의 인터넷뱅킹 화면이 다 보임. 캡처는 부업, 방문 기록 읽기가 본업." },
        { t: "초고속 캡처", r: "다운로드도 관리하고 컴퓨터 속 프로그램이랑 통신까지 하겠다고 함. 캡처 도구가 너보다 멀리 내다봄." },
        { t: "심플 캡처", ok: 1, r: "정답. 평점 좀 낮고 사용자 좀 적지만, 네가 누를 때만 현재 페이지를 한 번 봄. 캡처 도구는 캡처만 하면 됨." },
        { t: "AI 캡처 도우미(스폰서)", r: "모든 웹사이트랑 클립보드를 읽겠다고 함. 네가 복사한 비밀번호 하나하나를 “스마트 저장”해 줌." },
      ] },
  ],
};
