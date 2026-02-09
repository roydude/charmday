const COUPANG_PARTNER_BASE = "";
const LOADING_SECONDS = 5;

const ELEMENTS = [
  { key: "wood", label: { ko: "목", en: "Wood", ja: "木", es: "Madera" }, color: "var(--wood)" },
  { key: "fire", label: { ko: "화", en: "Fire", ja: "火", es: "Fuego" }, color: "var(--fire)" },
  { key: "earth", label: { ko: "토", en: "Earth", ja: "土", es: "Tierra" }, color: "var(--earth)" },
  { key: "metal", label: { ko: "금", en: "Metal", ja: "金", es: "Metal" }, color: "var(--metal)" },
  { key: "water", label: { ko: "수", en: "Water", ja: "水", es: "Agua" }, color: "var(--water)" },
];

const ELEMENT_COLORS = {
  wood: "#3f9565",
  fire: "#d9583f",
  earth: "#9f7a3e",
  metal: "#6a7287",
  water: "#2e6fb0",
};

const PRODUCT_CATALOG = {
  wood: [
    { name: "미니 식물 키우기 키트", keyword: "미니 식물 키우기 키트", reason: "성장/확장 에너지를 일상 루틴으로 붙여준다." },
    { name: "우드 브러시", keyword: "우드 헤어 브러시", reason: "우드 소재는 목 기운 보강에 직관적이다." },
    { name: "그린 다이어리", keyword: "그린 다이어리", reason: "시작과 정리의 감각을 함께 잡아준다." },
    { name: "플랜테리어 무드등", keyword: "식물 무드등", reason: "공간 톤을 목 기운 중심으로 맞춰준다." },
    { name: "자연향 디퓨저", keyword: "숲향 디퓨저", reason: "답답함을 줄이고 확장감을 만든다." },
  ],
  fire: [
    { name: "온열 아이마스크", keyword: "온열 안대", reason: "화 기운의 체온/활력을 가장 빠르게 채운다." },
    { name: "코랄 립틴트", keyword: "코랄 립틴트", reason: "표현력과 자신감의 결을 올려준다." },
    { name: "핫팩 세트", keyword: "핫팩 대용량", reason: "냉한 흐름을 끊고 에너지 점화를 돕는다." },
    { name: "웜톤 가디건", keyword: "웜톤 가디건", reason: "착용 즉시 분위기와 온도를 올린다." },
    { name: "레드 포인트 케이스", keyword: "레드 폰케이스", reason: "작은 컬러 포인트로 화 기운을 보완한다." },
  ],
  earth: [
    { name: "데일리 루틴 플래너", keyword: "투두리스트 플래너", reason: "토 기운의 핵심인 안정/지속성을 만들어준다." },
    { name: "데스크 수납함", keyword: "데스크 정리함", reason: "공간 정돈으로 멘탈 노이즈를 줄인다." },
    { name: "바디필로우", keyword: "바디필로우", reason: "신체 안정감이 감정 기복을 낮춘다." },
    { name: "베이지 니트", keyword: "베이지 니트", reason: "토 기운 컬러로 안정된 인상을 만든다." },
    { name: "아로마 캔들", keyword: "릴랙스 캔들", reason: "느리지만 단단한 리듬을 만든다." },
  ],
  metal: [
    { name: "스테인리스 텀블러", keyword: "스테인리스 텀블러", reason: "금 기운의 결단/정리를 루틴에 붙인다." },
    { name: "실버 액세서리", keyword: "실버 액세서리", reason: "선명하고 단단한 분위기를 만든다." },
    { name: "메탈 프레임 안경", keyword: "메탈 프레임 안경", reason: "시선과 인상을 또렷하게 정렬한다." },
    { name: "심플 메탈 시계", keyword: "메탈 손목시계", reason: "시간 감각과 경계선을 강화한다." },
    { name: "화이트 셔츠", keyword: "화이트 셔츠 여성", reason: "금 기운 컬러로 판단력을 보정한다." },
  ],
  water: [
    { name: "미니 가습기", keyword: "미니 가습기", reason: "수 기운의 회복/유연성을 공간 단위로 채운다." },
    { name: "수분 미스트", keyword: "수분 미스트", reason: "메마른 흐름을 빠르게 부드럽게 만든다." },
    { name: "아쿠아 향수", keyword: "아쿠아 향수", reason: "수 기운 향 계열로 긴장을 완화한다." },
    { name: "블루 텀블러", keyword: "블루 텀블러", reason: "수분 루틴을 자연스럽게 유지시킨다." },
    { name: "수분 크림", keyword: "수분 크림", reason: "회복성과 컨디션 유지에 직접적으로 기여한다." },
  ],
};

const ELEMENT_TRAITS = {
  wood: {
    luckyMood: { ko: "그린 + 우드", en: "Green + Wood", ja: "グリーン + ウッド", es: "Verde + madera" },
    action: {
      ko: "오늘 할 일 1개를 작은 단계로 쪼개서 바로 시작해.",
      en: "Split one task into tiny steps and start now.",
      ja: "今日のタスクを小さく分けて、すぐ着手して。",
      es: "Divide una tarea en pasos pequeños y empieza ya.",
    },
  },
  fire: {
    luckyMood: { ko: "코랄 + 레드", en: "Coral + Red", ja: "コーラル + レッド", es: "Coral + rojo" },
    action: {
      ko: "따뜻한 음료를 마시고 미루던 연락 1개를 보내.",
      en: "Drink something warm and send one delayed message.",
      ja: "温かい飲み物を飲んで、保留していた連絡を1件送って。",
      es: "Bebe algo caliente y envía ese mensaje pendiente.",
    },
  },
  earth: {
    luckyMood: { ko: "베이지 + 샌드", en: "Beige + Sand", ja: "ベージュ + サンド", es: "Beige + arena" },
    action: {
      ko: "책상 위를 3분만 정리하고 오늘 루틴을 고정해.",
      en: "Tidy your desk for 3 minutes and lock today\'s routine.",
      ja: "机を3分だけ整えて、今日のルーティンを固定して。",
      es: "Ordena tu escritorio 3 minutos y fija tu rutina de hoy.",
    },
  },
  metal: {
    luckyMood: { ko: "화이트 + 실버", en: "White + Silver", ja: "ホワイト + シルバー", es: "Blanco + plata" },
    action: {
      ko: "미루던 선택 1개를 지금 결정하고 체크해.",
      en: "Make one delayed decision right now and check it off.",
      ja: "保留していた選択を今決めてチェックして。",
      es: "Toma ahora una decisión pendiente y márcala.",
    },
  },
  water: {
    luckyMood: { ko: "블루 + 아쿠아", en: "Blue + Aqua", ja: "ブルー + アクア", es: "Azul + aqua" },
    action: {
      ko: "물 한 컵을 천천히 마시고 5분 산책으로 리셋해.",
      en: "Drink a glass of water slowly and reset with a 5-min walk.",
      ja: "水をゆっくり1杯飲んで、5分散歩でリセットして。",
      es: "Bebe agua despacio y reinicia con una caminata de 5 min.",
    },
  },
};

const RESULT_PERSONA = {
  wood: { ko: { alias: "새싹 모드", symbol: "🌿" }, en: { alias: "Seed Mode", symbol: "🌿" }, ja: { alias: "芽モード", symbol: "🌿" }, es: { alias: "Modo Brote", symbol: "🌿" } },
  fire: { ko: { alias: "점화 모드", symbol: "🔥" }, en: { alias: "Ignite Mode", symbol: "🔥" }, ja: { alias: "点火モード", symbol: "🔥" }, es: { alias: "Modo Chispa", symbol: "🔥" } },
  earth: { ko: { alias: "고정 모드", symbol: "🧱" }, en: { alias: "Anchor Mode", symbol: "🧱" }, ja: { alias: "固定モード", symbol: "🧱" }, es: { alias: "Modo Base", symbol: "🧱" } },
  metal: { ko: { alias: "컷팅 모드", symbol: "✂️" }, en: { alias: "Cut Mode", symbol: "✂️" }, ja: { alias: "カットモード", symbol: "✂️" }, es: { alias: "Modo Corte", symbol: "✂️" } },
  water: { ko: { alias: "회복 모드", symbol: "💧" }, en: { alias: "Recover Mode", symbol: "💧" }, ja: { alias: "回復モード", symbol: "💧" }, es: { alias: "Modo Reset", symbol: "💧" } },
};

const ABSURD_LINES = {
  wood: {
    ko: ["요즘 너, 시작 버튼만 누르고 멈춤.", "계획은 완벽한데 실행이 1cm 부족.", "다시 처음으로 돌아가면 오히려 빨라져."],
    fallback: ["You are one tiny action away from momentum."],
  },
  fire: {
    ko: ["오늘은 말이 먼저 달리는 날.", "연락하고 싶은 사람 1명 바로 떠오르지?", "과열만 낮추면 승률이 확 올라가."],
    fallback: ["High energy day. Keep the spark, drop the overheat."],
  },
  earth: {
    ko: ["오늘은 안정이 최고 스펙.", "작게 정리하면 크게 안 무너져.", "불안할수록 루틴이 너를 살려."],
    fallback: ["Stability is your superpower today."],
  },
  metal: {
    ko: ["결정 미루면 손해 보는 날.", "오늘은 정리가 곧 운빨.", "깔끔하게 끊으면 속도가 붙어."],
    fallback: ["Decisive cuts unlock your speed today."],
  },
  water: {
    ko: ["오늘은 회복이 실력.", "무리하면 티 나게 흔들려.", "부드럽게 가면 오히려 빨라져."],
    fallback: ["Recovery first. Then everything flows."],
  },
};

const DONT_LINES = {
  wood: {
    ko: ["완벽주의로 첫 발을 늦추지 말기.", "비교하다가 기운 빼지 말기.", "새 일 벌리기 전에 5분 실행 먼저."],
    fallback: ["Do not wait for perfect conditions to start."],
  },
  fire: {
    ko: ["감정 올라올 때 바로 보내기 금지.", "밤에 충동 결제하지 말기.", "말로 이기려는 모드 잠깐 끄기."],
    fallback: ["Avoid impulsive messages and purchases today."],
  },
  earth: {
    ko: ["걱정으로 현재 루틴 깨지 말기.", "정리만 하다 시작을 미루지 말기.", "배고픈 상태에서 결정하지 말기."],
    fallback: ["Do not let anxiety replace execution."],
  },
  metal: {
    ko: ["디테일 집착으로 완료를 늦추지 말기.", "상대 반응 테스트하지 말기.", "한 번에 다 끊으려다 폭발하지 말기."],
    fallback: ["Avoid over-editing; ship one clean decision."],
  },
  water: {
    ko: ["카페인으로 버티기 모드 금지.", "기분 다운일 때 쇼핑으로 메우지 말기.", "의리 약속 남발로 회복 시간 태우지 말기."],
    fallback: ["Do not trade recovery time for short-term stimulation."],
  },
};

const STEMS = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
const BRANCHES = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];
const STEM_ELEMENTS = ["wood", "wood", "fire", "fire", "earth", "earth", "metal", "metal", "water", "water"];
const BRANCH_ELEMENTS = ["water", "earth", "wood", "wood", "earth", "fire", "fire", "earth", "metal", "metal", "earth", "water"];

const GAPJA_VARIATION_POOL = {
  ko: {
    tone: ["전진", "정비", "집중", "회복", "정렬", "확장", "완급조절", "재정비", "점화", "고정"],
    social: ["연락운", "협업운", "관계운", "소통운", "팀운", "지지운"],
    work: ["작은 실행 누적", "중요 결정 1건 완료", "루틴 재설계", "미룬 일 정리", "속도보다 정확성", "정확성보다 속도"],
    caution: ["과열 금지", "과소평가 금지", "지연 금지", "충동구매 주의", "완벽주의 주의", "감정 과투입 주의"],
  },
  fallback: {
    tone: ["focus", "reset", "momentum", "balance"],
    social: ["connection", "collaboration", "communication"],
    work: ["ship one key task", "clean up pending tasks", "optimize routine"],
    caution: ["avoid overheat", "avoid overthinking", "avoid impulse"],
  },
};

const I18N = {
  ko: {
    heroEyebrow: "Saju x Daily Item",
    heroSubhead: "오늘 나에게 필요한 부적템이 뭘까?",
    languageLabel: "언어 / Language",
    inputTitle: "생년월일시 입력",
    inputHint: "디테일 분석: 출생 정보가 자세할수록 정확도가 높아져",
    labelYear: "출생 연도",
    labelMonth: "출생 월",
    labelDay: "출생 일",
    labelHour: "출생 시 (24시간)",
    labelMinute: "출생 분",
    unknownTimeLabel: "정확한 시간을 몰라요 (시/분 스킵)",
    analyzeBtn: "오늘의 부적템은?",
    loadingEyebrow: "Step 2",
    loadingTitle: "오늘의 부적템 찾는 중",
    loadingSubtitle: "오행, 음양, 오늘의 기운을 조합해서 가장 잘 맞는 아이템을 찾고 있어.",
    loadingTexts: ["기운 캘리브레이션 진행 중...", "오늘의 오행 편차 계산 중...", "추천템 매칭 마무리 중..."],
    adCaption: "오늘의 추천 쇼핑",
    adTitle: "쿠팡에서 오늘의 기운템 미리 보기",
    adDescription: "결과 분석이 끝나면 네 오행에 맞는 링크를 바로 열어줄게.",
    adLink: "쿠팡 베스트 보기",
    gapjaTitle: "오늘의 60갑자 해석",
    gapjaPillarLabel: "사주 기둥",
    gapjaDayLabel: "오늘의 핵심 갑자",
    balanceTitle: "오늘의 오행 밸런스",
    detailTitle: "분석 인사이트",
    chipDominantLabel: "우세 기운",
    chipLackingLabel: "보강 기운",
    chipYinyangLabel: "음양 흐름",
    chipLuckyLabel: "럭키 무드",
    recommendTitle: "오늘의 메인 추천 아이템",
    lightCta: "그 외 추천 아이템 보기",
    strongCta: "행동 팁까지 보기",
    mainCta: "쿠팡에서 찾아보기",
    moreTitle: "그 외 추천 아이템",
    actionTitle: "오늘의 행동 부적",
    shareBtn: "결과 링크 복사",
    sharePrimary: "친구 소환",
    copied: "복사 완료",
    whyTitle: "왜 이 결과?",
    doTitle: "Do",
    dontTitle: "Don't",
    wheelGuide: "굵은 링=강한 기운 · 점선 링=보강 기운",
    strongEnergyLabel: "강한 기운",
    weakEnergyLabel: "보강 기운",
    luckyTemplate: "{item} 하나만 챙겨도 오늘 리듬이 덜 흔들릴거야.",
    restartBtn: "다시 분석하기",
    footerAdNote: "안내: 쿠팡 파트너스 활동을 통해 일정 수수료를 받을 수 있습니다.",
    modeDetailed: "정밀 분석 모드",
    modeTimeUnknown: "시간 미상 보정 모드",
    yinyangBalanced: "음양 균형형",
    yinyangYin: "음 우세형",
    yinyangYang: "양 우세형",
    confidenceDetailed: "출생 시각까지 반영해서 분석 정밀도가 높은 편이야.",
    confidenceApprox: "일부 정보가 미상이어서 월/연도 중심 추정 결과야.",
    summaryTemplate: "오늘은 {lack} 기운 보강이 우선. 현재 우세 기운은 {dominant}.",
    detailTemplate: "{yinyang} 흐름이라 {tip}에 집중하면 컨디션과 선택력이 올라가.",
    tipBalance: "리듬 유지",
    tipAdjust: "리듬 조절",
    errorRequired: "연도/월/일은 필수야. 시간 미상만 체크해서 스킵해줘.",
    errorMonth: "출생 월은 1~12 사이로 입력해줘.",
    errorDay: "출생 일은 1~31 사이로 입력해줘.",
    errorHour: "출생 시는 0~23 사이로 입력해줘.",
    errorMinute: "출생 분은 0~59 사이로 입력해줘.",
    moreReason: "추천 이유",
  },
  en: {
    heroEyebrow: "Saju x Daily Item",
    heroSubhead: "Find the charm item that fits your energy today",
    languageLabel: "Language",
    inputTitle: "Birth Date & Time",
    inputHint: "Detailed mode: the more precise your birth data, the better",
    labelYear: "Birth year",
    labelMonth: "Birth month",
    labelDay: "Birth day",
    labelHour: "Birth hour (24h)",
    labelMinute: "Birth minute",
    unknownTimeLabel: "I do not know exact time (skip hour/minute)",
    analyzeBtn: "Find My Daily Charm Item",
    loadingEyebrow: "Step 2",
    loadingTitle: "Finding your daily charm item",
    loadingSubtitle: "Mixing Five Elements, Yin/Yang, and today\'s flow to find your best match.",
    loadingTexts: ["Calibrating your energy...", "Computing element balance...", "Finishing item matching..."],
    adCaption: "Today\'s shopping pick",
    adTitle: "Preview your mood-matching picks on Coupang",
    adDescription: "Your final links will open right after the analysis.",
    adLink: "View Coupang best picks",
    gapjaTitle: "Sexagenary Read",
    gapjaPillarLabel: "Pillars",
    gapjaDayLabel: "Core Day Pillar",
    balanceTitle: "Today\'s Five-Element Balance",
    detailTitle: "Insights",
    chipDominantLabel: "Dominant",
    chipLackingLabel: "Need Boost",
    chipYinyangLabel: "Yin/Yang",
    chipLuckyLabel: "Lucky Mood",
    recommendTitle: "Main Recommended Item",
    lightCta: "View Other Picks",
    strongCta: "See Action Tips",
    mainCta: "Open Main Pick on Coupang",
    moreTitle: "Other Recommended Items",
    actionTitle: "Today\'s Action Charm",
    shareBtn: "Copy Result Link",
    sharePrimary: "Summon Friends",
    copied: "Copied",
    whyTitle: "Why this result?",
    doTitle: "Do",
    dontTitle: "Don't",
    wheelGuide: "Solid ring = dominant energy · dashed ring = boost target",
    strongEnergyLabel: "Strong",
    weakEnergyLabel: "Boost",
    luckyTemplate: "{item} helps lock your rhythm today.",
    restartBtn: "Analyze Again",
    footerAdNote: "Notice: This page may earn fees through Coupang Partners links.",
    modeDetailed: "Detailed analysis",
    modeTimeUnknown: "Unknown-time adjusted",
    yinyangBalanced: "Balanced",
    yinyangYin: "Yin dominant",
    yinyangYang: "Yang dominant",
    confidenceDetailed: "Birth time is included, so this is a higher-precision read.",
    confidenceApprox: "Some data is unknown, so this is a lighter estimate.",
    summaryTemplate: "Focus on boosting {lack} today. Your dominant flow is {dominant}.",
    detailTemplate: "Your {yinyang} trend suggests focusing on {tip} for better rhythm.",
    tipBalance: "stability",
    tipAdjust: "adjustment",
    errorRequired: "Year, month, and day are required. Only time can be unknown.",
    errorMonth: "Birth month must be between 1 and 12.",
    errorDay: "Birth day must be between 1 and 31.",
    errorHour: "Birth hour must be between 0 and 23.",
    errorMinute: "Birth minute must be between 0 and 59.",
    moreReason: "Why",
  },
  ja: {
    heroEyebrow: "Saju x Daily Item",
    heroSubhead: "今日のあなたに合うお守りアイテムを探します",
    languageLabel: "言語 / Language",
    inputTitle: "生年月日・時間入力",
    inputHint: "詳細モード: 情報が多いほど精度が上がります",
    labelYear: "生年",
    labelMonth: "生月",
    labelDay: "生日",
    labelHour: "出生時間 (24h)",
    labelMinute: "出生分",
    unknownTimeLabel: "正確な時間が不明です (時/分スキップ)",
    analyzeBtn: "今日のお守りアイテムを見る",
    loadingEyebrow: "Step 2",
    loadingTitle: "今日のお守りアイテムを検索中",
    loadingSubtitle: "五行と陰陽、今日の流れを組み合わせて最適なアイテムを探しています。",
    loadingTexts: ["気のキャリブレーション中...", "五行バランスを計算中...", "アイテム照合を仕上げ中..."],
    adCaption: "今日のショッピング",
    adTitle: "Coupangで先にチェック",
    adDescription: "分析完了後、結果リンクをすぐ表示します。",
    adLink: "Coupangを見る",
    gapjaTitle: "六十干支の解釈",
    gapjaPillarLabel: "四柱",
    gapjaDayLabel: "本日のコア干支",
    balanceTitle: "今日の五行バランス",
    detailTitle: "分析インサイト",
    chipDominantLabel: "優勢",
    chipLackingLabel: "補強",
    chipYinyangLabel: "陰陽",
    chipLuckyLabel: "ラッキームード",
    recommendTitle: "今日のメインおすすめ",
    lightCta: "他のおすすめを見る",
    strongCta: "行動ヒントを見る",
    mainCta: "メイン商品をCoupangで見る",
    moreTitle: "その他のおすすめ",
    actionTitle: "今日の行動お守り",
    shareBtn: "結果リンクをコピー",
    sharePrimary: "友だち召喚",
    copied: "コピー完了",
    whyTitle: "なぜこの結果？",
    doTitle: "Do",
    dontTitle: "Don't",
    wheelGuide: "太線リング=強い気 ・ 点線リング=補強ポイント",
    strongEnergyLabel: "強い気",
    weakEnergyLabel: "補強",
    luckyTemplate: "{item}を1つ持つだけで、今日のリズムが整います。",
    restartBtn: "もう一度分析",
    footerAdNote: "案内: Coupang Partners経由で手数料を受け取る場合があります。",
    modeDetailed: "詳細分析モード",
    modeTimeUnknown: "時間不明補正モード",
    yinyangBalanced: "陰陽バランス型",
    yinyangYin: "陰優勢型",
    yinyangYang: "陽優勢型",
    confidenceDetailed: "出生時刻まで反映した、比較的精度の高い分析です。",
    confidenceApprox: "一部情報が不明のため、推定ベースの結果です。",
    summaryTemplate: "今日は{lack}の補強が優先。優勢な気は{dominant}です。",
    detailTemplate: "{yinyang}傾向なので、{tip}を意識するとリズムが整います。",
    tipBalance: "維持",
    tipAdjust: "調整",
    errorRequired: "年/月/日は必須です。時刻のみ不明チェックでスキップできます。",
    errorMonth: "月は1〜12で入力してください。",
    errorDay: "日は1〜31で入力してください。",
    errorHour: "時は0〜23で入力してください。",
    errorMinute: "分は0〜59で入力してください。",
    moreReason: "理由",
  },
  es: {
    heroEyebrow: "Saju x Daily Item",
    heroSubhead: "Encontramos el amuleto ideal para tu energia de hoy",
    languageLabel: "Idioma / Language",
    inputTitle: "Fecha y hora de nacimiento",
    inputHint: "Modo detallado: mas precision, mejor resultado",
    labelYear: "Ano de nacimiento",
    labelMonth: "Mes",
    labelDay: "Dia",
    labelHour: "Hora (24h)",
    labelMinute: "Minuto",
    unknownTimeLabel: "No conozco la hora exacta (omitir hora/min)",
    analyzeBtn: "Ver mi amuleto de hoy",
    loadingEyebrow: "Step 2",
    loadingTitle: "Buscando tu amuleto de hoy",
    loadingSubtitle: "Combinando Cinco Elementos, Yin/Yang y energia del dia.",
    loadingTexts: ["Calibrando energia...", "Calculando balance elemental...", "Cerrando recomendaciones..."],
    adCaption: "Compra sugerida",
    adTitle: "Vista previa en Coupang",
    adDescription: "Al terminar, abrimos tus links recomendados.",
    adLink: "Ver destacados de Coupang",
    gapjaTitle: "Lectura de 60 Ganzhi",
    gapjaPillarLabel: "Pilares",
    gapjaDayLabel: "Pilar central del dia",
    balanceTitle: "Balance elemental de hoy",
    detailTitle: "Insights",
    chipDominantLabel: "Dominante",
    chipLackingLabel: "A reforzar",
    chipYinyangLabel: "Yin/Yang",
    chipLuckyLabel: "Lucky mood",
    recommendTitle: "Producto principal recomendado",
    lightCta: "Ver otras opciones",
    strongCta: "Ver consejo de accion",
    mainCta: "Abrir principal en Coupang",
    moreTitle: "Otros recomendados",
    actionTitle: "Accion amuleto de hoy",
    shareBtn: "Copiar link",
    sharePrimary: "Llamar amigos",
    copied: "Copiado",
    whyTitle: "Por que este resultado?",
    doTitle: "Do",
    dontTitle: "Don't",
    wheelGuide: "Anillo solido = energia fuerte · anillo punteado = a reforzar",
    strongEnergyLabel: "Fuerte",
    weakEnergyLabel: "Refuerzo",
    luckyTemplate: "{item} te ayuda a estabilizar tu ritmo hoy.",
    restartBtn: "Analizar de nuevo",
    footerAdNote: "Aviso: Esta pagina puede generar comision con links de Coupang Partners.",
    modeDetailed: "Analisis detallado",
    modeTimeUnknown: "Modo hora desconocida",
    yinyangBalanced: "Balanceado",
    yinyangYin: "Yin dominante",
    yinyangYang: "Yang dominante",
    confidenceDetailed: "Incluye hora de nacimiento, con mayor precision.",
    confidenceApprox: "Hay datos faltantes, asi que es una estimacion ligera.",
    summaryTemplate: "Hoy conviene reforzar {lack}. Tu flujo dominante es {dominant}.",
    detailTemplate: "Tu tendencia {yinyang} mejora si te enfocas en {tip}.",
    tipBalance: "estabilidad",
    tipAdjust: "ajuste",
    errorRequired: "Ano, mes y dia son obligatorios. Solo la hora puede omitirse.",
    errorMonth: "El mes debe estar entre 1 y 12.",
    errorDay: "El dia debe estar entre 1 y 31.",
    errorHour: "La hora debe estar entre 0 y 23.",
    errorMinute: "El minuto debe estar entre 0 y 59.",
    moreReason: "Motivo",
  },
};

const elementIndex = { wood: 0, fire: 1, earth: 2, metal: 3, water: 4 };

const refs = {
  views: {
    start: document.getElementById("view-start"),
    loading: document.getElementById("view-loading"),
    result: document.getElementById("view-result"),
  },
  form: document.getElementById("saju-form"),
  error: document.getElementById("input-error"),
  unknownTime: document.getElementById("unknown-time"),
  year: document.getElementById("birth-year"),
  month: document.getElementById("birth-month"),
  day: document.getElementById("birth-day"),
  hour: document.getElementById("birth-hour"),
  minute: document.getElementById("birth-minute"),
  loadingText: document.getElementById("loading-text"),
  countdown: document.getElementById("countdown-sec"),
  adLink: document.getElementById("ad-link"),
  bars: document.getElementById("element-bars"),
  moreList: document.getElementById("more-list"),
  linkMain: document.getElementById("link-main"),
  sharePrimary: document.getElementById("share-primary"),
  share: document.getElementById("share-btn"),
  restart: document.getElementById("restart-btn"),
  memeCard: document.querySelector(".meme-card"),
  memeAlias: document.getElementById("meme-alias"),
  memeSymbol: document.getElementById("meme-symbol"),
  memeLine: document.getElementById("meme-line"),
  whyList: document.getElementById("why-list"),
  whyTitle: document.getElementById("why-title"),
  doTitle: document.getElementById("do-title"),
  dontTitle: document.getElementById("dont-title"),
  doCopy: document.getElementById("do-copy"),
  dontCopy: document.getElementById("dont-copy"),
  luckyLine: document.getElementById("lucky-line"),
  gapjaPillars: document.getElementById("gapja-pillars"),
  gapjaDay: document.getElementById("gapja-day"),
  gapjaVariation: document.getElementById("gapja-variation"),
  wheelSvg: document.getElementById("energy-wheel-svg"),
  wheelCenter: document.getElementById("energy-wheel-center"),
  wheelGuide: document.getElementById("energy-wheel-guide"),
  revealFlash: document.getElementById("reveal-flash"),
  confettiLayer: document.getElementById("confetti-layer"),
};

let currentLang = "ko";
let countdownTimer = null;
let loadingTextTimer = null;
let currentResult = null;

setup();

function setup() {
  bindLanguageButtons();
  bindInputToggles();
  bindFormSubmit();
  bindActions();
  refs.adLink.href = buildCoupangLink("여성 뷰티 패션 인기상품");
  applyTexts();
}

function bindLanguageButtons() {
  document.querySelectorAll(".language-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.getAttribute("data-lang");
      if (!I18N[lang]) {
        return;
      }
      currentLang = lang;
      document.querySelectorAll(".language-btn").forEach((item) => item.classList.remove("is-selected"));
      button.classList.add("is-selected");
      applyTexts();
      if (currentResult) {
        renderResult(currentResult);
      }
    });
  });
}

function bindInputToggles() {
  refs.unknownTime.addEventListener("change", () => {
    const isUnknown = refs.unknownTime.checked;
    refs.hour.disabled = isUnknown;
    refs.minute.disabled = isUnknown;
    refs.hour.required = !isUnknown;
    if (isUnknown) {
      refs.hour.value = "";
      refs.minute.value = "";
    }
  });
}

function bindFormSubmit() {
  refs.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = collectInput();
    if (!input) {
      return;
    }

    const result = analyze(input);
    currentResult = result;
    startLoadingStage(result);
  });
}

function bindActions() {
  const copyResult = async (button) => {
    if (!currentResult) {
      return;
    }
    const text = `${refs.memeAlias.textContent}\n${refs.memeLine.textContent}\n${document.getElementById("product-name").textContent}\n${refs.linkMain.href}`;
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = I18N[currentLang].copied;
      setTimeout(() => {
        refs.share.textContent = I18N[currentLang].shareBtn;
        refs.sharePrimary.textContent = I18N[currentLang].sharePrimary;
      }, 1400);
    } catch {
      // no-op
    }
  };

  refs.sharePrimary.addEventListener("click", () => copyResult(refs.sharePrimary));
  refs.share.addEventListener("click", () => copyResult(refs.share));

  refs.restart.addEventListener("click", () => {
    showView("start");
  });
}

function applyTexts() {
  const t = I18N[currentLang];
  const mapping = {
    "hero-eyebrow": t.heroEyebrow,
    "hero-subhead": t.heroSubhead,
    "language-label": t.languageLabel,
    "input-title": t.inputTitle,
    "input-hint": t.inputHint,
    "label-year": t.labelYear,
    "label-month": t.labelMonth,
    "label-day": t.labelDay,
    "label-hour": t.labelHour,
    "label-minute": t.labelMinute,
    "unknown-time-label": t.unknownTimeLabel,
    "analyze-btn": t.analyzeBtn,
    "loading-eyebrow": t.loadingEyebrow,
    "loading-title": t.loadingTitle,
    "loading-subtitle": t.loadingSubtitle,
    "ad-caption": t.adCaption,
    "ad-title": t.adTitle,
    "ad-description": t.adDescription,
    "ad-link": t.adLink,
    "gapja-title": t.gapjaTitle,
    "gapja-pillar-label": t.gapjaPillarLabel,
    "gapja-day-label": t.gapjaDayLabel,
    "balance-title": t.balanceTitle,
    "detail-title": t.detailTitle,
    "chip-dominant-label": t.chipDominantLabel,
    "chip-lacking-label": t.chipLackingLabel,
    "chip-yinyang-label": t.chipYinyangLabel,
    "chip-lucky-label": t.chipLuckyLabel,
    "recommend-title": t.recommendTitle,
    "more-title": t.moreTitle,
    "action-title": t.actionTitle,
    "share-btn": t.shareBtn,
    "share-primary": t.sharePrimary,
    "why-title": t.whyTitle,
    "do-title": t.doTitle,
    "dont-title": t.dontTitle,
    "energy-wheel-guide": t.wheelGuide,
    "restart-btn": t.restartBtn,
    "footer-ad-note": t.footerAdNote,
  };

  Object.entries(mapping).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  });

  refs.linkMain.textContent = t.mainCta;
  refs.loadingText.textContent = t.loadingTexts[0];
}

function collectInput() {
  const t = I18N[currentLang];
  const yearRaw = refs.year.value.trim();
  const monthRaw = refs.month.value.trim();
  const dayRaw = refs.day.value.trim();
  const hourRaw = refs.hour.value.trim();
  const minuteRaw = refs.minute.value.trim();

  const timeKnown = !refs.unknownTime.checked;

  if (!yearRaw || !monthRaw || !dayRaw) {
    return showError(t.errorRequired);
  }

  const year = Number(yearRaw);
  const month = Number(monthRaw);
  const day = Number(dayRaw);
  const hour = timeKnown ? Number(hourRaw) : null;
  const minute = timeKnown && minuteRaw !== "" ? Number(minuteRaw) : null;

  if (month < 1 || month > 12 || Number.isNaN(month)) {
    return showError(t.errorMonth);
  }
  if (Number.isNaN(day) || day < 1 || day > 31) {
    return showError(t.errorDay);
  }
  if (timeKnown && (hourRaw === "" || Number.isNaN(hour) || hour < 0 || hour > 23)) {
    return showError(t.errorHour);
  }
  if (timeKnown && minuteRaw !== "" && (Number.isNaN(minute) || minute < 0 || minute > 59)) {
    return showError(t.errorMinute);
  }

  refs.error.classList.add("hidden");
  refs.form.classList.remove("is-invalid");
  return {
    year,
    month,
    day,
    timeKnown,
    hour,
    minute,
  };
}

function showError(message) {
  refs.error.textContent = message;
  refs.error.classList.remove("hidden");
  refs.form.classList.remove("is-invalid");
  void refs.form.offsetWidth;
  refs.form.classList.add("is-invalid");
  return null;
}

function analyze(input) {
  const scores = [0, 0, 0, 0, 0];
  let yin = 0;
  let yang = 0;

  addEnergy(scores, input.year % 5, 1.5);
  addPolarity(input.year, 1.2);

  addEnergy(scores, input.month % 5, 2);
  addPolarity(input.month, 1.8);

  addEnergy(scores, input.day % 5, 2.7);
  addPolarity(input.day, 2.4);

  if (input.timeKnown && input.hour !== null) {
    addEnergy(scores, Math.floor(input.hour / 2) % 5, 2.3);
    addPolarity(input.hour, 2.1);

    if (typeof input.minute === "number") {
      addEnergy(scores, input.minute % 5, 0.7);
      addPolarity(input.minute, 0.5);
    }
  }

  const today = new Date();
  const todayElement = (today.getFullYear() + today.getMonth() + 1 + today.getDate()) % 5;
  addEnergy(scores, todayElement, 1.4);
  addPolarity(today.getDate(), 0.8);

  const lackingIndex = scores.indexOf(Math.min(...scores));
  const dominantIndex = scores.indexOf(Math.max(...scores));
  const lacking = ELEMENTS[lackingIndex].key;
  const dominant = ELEMENTS[dominantIndex].key;
  const yinyangGap = Math.abs(yin - yang);

  const pool = shuffleArray(PRODUCT_CATALOG[lacking]);
  const mainItem = pool[0];
  const lightItem = pool[1] || pool[0];
  const strongItem = pool[2] || pool[0];
  const extras = pool.slice(2, 5);
  const gapja = buildGapjaProfile(input);
  const variation = buildGapjaVariation(gapja, lacking, dominant);

  return {
    input,
    scores,
    lacking,
    dominant,
    yinyang: yin === yang ? "balanced" : yin > yang ? "yin" : "yang",
    yinyangGap,
    mode: resolveMode(input),
    confidence: input.timeKnown,
    mainItem,
    extras,
    gapja,
    variation,
  };

  function addPolarity(value, amount) {
    if (value % 2 === 0) {
      yin += amount;
    } else {
      yang += amount;
    }
  }
}

function resolveMode(input) {
  if (!input.timeKnown) {
    return "timeUnknown";
  }
  return "detailed";
}

function buildGapjaProfile(input) {
  const dateForDay = new Date(Date.UTC(input.year, input.month - 1, input.day));
  const yearPillar = getYearPillar(input.year);
  const monthPillar = getMonthPillar(input.year, input.month);
  const dayPillar = getDayPillar(dateForDay);
  const hourBase = input.timeKnown && input.hour !== null ? input.hour : 12;
  const hourPillar = getHourPillar(dayPillar.stemIndex, hourBase);

  return {
    year: yearPillar,
    month: monthPillar,
    day: dayPillar,
    hour: hourPillar,
  };
}

function buildGapjaVariation(gapja, lacking, dominant) {
  const tonePool = GAPJA_VARIATION_POOL[currentLang] || GAPJA_VARIATION_POOL.fallback;
  const dayIndex = gapja.day.cycleIndex;
  const monthIndex = gapja.month.cycleIndex;
  const hourIndex = gapja.hour.cycleIndex;
  const pick = (pool, seed) => pool[seed % pool.length];

  const tone = pick(tonePool.tone, dayIndex);
  const social = pick(tonePool.social, monthIndex + dayIndex);
  const work = pick(tonePool.work, hourIndex + dayIndex * 2);
  const caution = pick(tonePool.caution, monthIndex + hourIndex * 3);
  const lackingLabel = getElementLabel(lacking);
  const dominantLabel = getElementLabel(dominant);

  if (currentLang === "ko") {
    return `${gapja.day.label} 일주는 ${tone} 운이 강해. ${dominantLabel} 기운을 축으로 ${social}을 넓히고, ${work}에 집중하면 좋아. 오늘은 ${lackingLabel} 보강을 우선하고 ${caution}.`;
  }
  return `${gapja.day.label} day pillar favors ${tone}. Build around ${dominantLabel}, expand ${social}, and focus on ${work}. Prioritize ${lackingLabel} boost and ${caution}.`;
}

function getYearPillar(year) {
  const stemIndex = mod(year - 4, 10);
  const branchIndex = mod(year - 4, 12);
  return buildPillar(stemIndex, branchIndex);
}

function getMonthPillar(year, month) {
  const yearStemIndex = mod(year - 4, 10);
  const firstMonthStem = mod((yearStemIndex % 5) * 2 + 2, 10);
  const stemIndex = mod(firstMonthStem + (month - 1), 10);
  const branchIndex = mod(month + 1, 12);
  return buildPillar(stemIndex, branchIndex);
}

function getDayPillar(dateUTC) {
  const reference = Date.UTC(1984, 1, 2);
  const diffDays = Math.floor((dateUTC.getTime() - reference) / 86400000);
  const cycleIndex = mod(diffDays, 60);
  const stemIndex = cycleIndex % 10;
  const branchIndex = cycleIndex % 12;
  return buildPillar(stemIndex, branchIndex, cycleIndex);
}

function getHourPillar(dayStemIndex, hour) {
  const hourBranchIndex = mod(Math.floor((hour + 1) / 2), 12);
  const startStemIndex = mod((dayStemIndex % 5) * 2, 10);
  const stemIndex = mod(startStemIndex + hourBranchIndex, 10);
  return buildPillar(stemIndex, hourBranchIndex);
}

function buildPillar(stemIndex, branchIndex, cycleIndex = findCycleIndex(stemIndex, branchIndex)) {
  return {
    stemIndex,
    branchIndex,
    cycleIndex,
    label: `${STEMS[stemIndex]}${BRANCHES[branchIndex]}`,
    stemElement: getElementLabel(STEM_ELEMENTS[stemIndex]),
    branchElement: getElementLabel(BRANCH_ELEMENTS[branchIndex]),
  };
}

function mod(value, divisor) {
  return ((value % divisor) + divisor) % divisor;
}

function findCycleIndex(stemIndex, branchIndex) {
  for (let index = 0; index < 60; index += 1) {
    if (index % 10 === stemIndex && index % 12 === branchIndex) {
      return index;
    }
  }
  return 0;
}

function startLoadingStage(result) {
  clearTimers();
  showView("loading");

  const loadingTexts = I18N[currentLang].loadingTexts;
  let textIndex = 0;
  refs.loadingText.textContent = loadingTexts[0];
  loadingTextTimer = setInterval(() => {
    textIndex = (textIndex + 1) % loadingTexts.length;
    refs.loadingText.textContent = loadingTexts[textIndex];
  }, 1100);

  let left = LOADING_SECONDS;
  refs.countdown.textContent = String(left);
  countdownTimer = setInterval(() => {
    left -= 1;
    refs.countdown.textContent = String(Math.max(left, 0));
    if (left <= 0) {
      clearTimers();
      renderResult(result);
      showView("result");
      playResultReveal();
    }
  }, 1000);
}

function clearTimers() {
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }
  if (loadingTextTimer) {
    clearInterval(loadingTextTimer);
    loadingTextTimer = null;
  }
}

function renderResult(result) {
  const t = I18N[currentLang];
  const dominantLabel = getElementLabel(result.dominant);
  const lackingLabel = getElementLabel(result.lacking);

  const modeText =
    result.mode === "detailed"
      ? t.modeDetailed
      : t.modeTimeUnknown;

  const yinyangText =
    result.yinyang === "balanced"
      ? t.yinyangBalanced
      : result.yinyang === "yin"
        ? t.yinyangYin
        : t.yinyangYang;

  document.getElementById("result-mode").textContent = modeText;
  document.getElementById("result-headline").textContent =
    interpolate(t.summaryTemplate, { lack: lackingLabel, dominant: dominantLabel });
  document.getElementById("result-summary").textContent =
    interpolate(t.detailTemplate, {
      yinyang: yinyangText,
      tip: result.yinyangGap >= 2 ? t.tipAdjust : t.tipBalance,
    });

  document.getElementById("confidence-text").textContent = result.confidence ? t.confidenceDetailed : t.confidenceApprox;
  document.getElementById("chip-dominant").textContent = dominantLabel;
  document.getElementById("chip-lacking").textContent = lackingLabel;
  document.getElementById("chip-yinyang").textContent = yinyangText;
  document.getElementById("chip-lucky").textContent = ELEMENT_TRAITS[result.lacking].luckyMood[currentLang];
  document.getElementById("detail-description").textContent = buildDetailDescription(result);
  refs.wheelCenter.textContent = yinyangText;

  const main = localizeItem(result.mainItem, result.lacking);

  renderEnergyWheel(result);
  renderMemeCard(result, main);
  renderWhySignals(result);
  renderGapjaResult(result);
  document.getElementById("product-name").textContent = main.name;
  document.getElementById("product-reason").textContent = main.reason;
  document.getElementById("daily-action").textContent = ELEMENT_TRAITS[result.lacking].action[currentLang];
  refs.doCopy.textContent = ELEMENT_TRAITS[result.lacking].action[currentLang];
  refs.dontCopy.textContent = pickCopy(DONT_LINES[result.lacking]);
  refs.luckyLine.textContent = interpolate(I18N[currentLang].luckyTemplate, { item: main.name });

  refs.linkMain.href = buildCoupangLink(main.keyword);

  renderBars(result.scores);
  renderExtraItems(result.extras, result.lacking);
}

function buildDetailDescription(result) {
  const t = I18N[currentLang];
  if (currentLang === "ko") {
    return `오늘 부족한 ${getElementLabel(result.lacking)} 기운을 보강하면 감정 리듬이 안정돼. ${getElementLabel(result.dominant)} 기운이 강한 편이라 강점은 살리고 과열은 줄이는 전략이 좋아.`;
  }
  if (currentLang === "ja") {
    return `${getElementLabel(result.lacking)}を補強すると、感情と集中のリズムが安定します。${getElementLabel(result.dominant)}が強めなので、強みを活かしつつ過剰さは抑えるのがおすすめです。`;
  }
  if (currentLang === "es") {
    return `Refuerza ${getElementLabel(result.lacking)} para estabilizar energia y foco. ${getElementLabel(result.dominant)} esta fuerte, asi que conviene usar su ventaja sin exceso.`;
  }
  return `Boosting ${getElementLabel(result.lacking)} helps stabilize your rhythm today. ${getElementLabel(result.dominant)} is already strong, so leverage it without overloading.`;
}

function renderGapjaResult(result) {
  const pillars = result.gapja;
  refs.gapjaPillars.textContent = `${pillars.year.label}년 · ${pillars.month.label}월 · ${pillars.day.label}일 · ${pillars.hour.label}시`;
  refs.gapjaDay.textContent = `${pillars.day.label}일주 (${pillars.day.stemElement}/${pillars.day.branchElement})`;
  refs.gapjaVariation.textContent = result.variation;
}

function renderEnergyWheel(result) {
  const keys = ["water", "wood", "fire", "earth", "metal"];
  const cx = 120;
  const cy = 120;
  const lineRadius = 78;
  const nodeRadius = 92;
  const max = Math.max(...result.scores);
  const normalize = (value) => (max === 0 ? 0 : value / max);
  const linePoints = keys.map((key, index) => {
    const angle = ((-90 + index * 72) * Math.PI) / 180;
    return { key, x: cx + Math.cos(angle) * lineRadius, y: cy + Math.sin(angle) * lineRadius };
  });
  const cycle = linePoints.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
  const star = [0, 2, 4, 1, 3].map((idx) => `${linePoints[idx].x.toFixed(1)},${linePoints[idx].y.toFixed(1)}`).join(" ");

  let nodesMarkup = "";
  keys.forEach((key, index) => {
    const angle = ((-90 + index * 72) * Math.PI) / 180;
    const score = result.scores[elementIndex[key]];
    const nodeSize = 17 + normalize(score) * 7;
    const x = cx + Math.cos(angle) * nodeRadius;
    const y = cy + Math.sin(angle) * nodeRadius;
    const color = ELEMENT_COLORS[key];
    const borderWidth = key === result.dominant ? 3.5 : key === result.lacking ? 2.5 : 2;
    const dash = key === result.lacking ? "stroke-dasharray='2.8 2.8'" : "";
    const glow = key === result.dominant ? "filter='url(#dominantGlow)'" : "";

    nodesMarkup += `
      <g ${glow}>
        <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${nodeSize.toFixed(1)}" fill="#fefaf0" stroke="${color}" stroke-width="${borderWidth}" ${dash}></circle>
        <text x="${x.toFixed(1)}" y="${(y - 2).toFixed(1)}" text-anchor="middle" class="wheel-node-label">${getElementLabel(key)}</text>
        <text x="${x.toFixed(1)}" y="${(y + 11).toFixed(1)}" text-anchor="middle" class="wheel-node-score">${score.toFixed(1)}</text>
      </g>
    `;
  });

  refs.wheelSvg.innerHTML = `
    <defs>
      <filter id="dominantGlow">
        <feDropShadow dx="0" dy="0" stdDeviation="1.2" flood-color="#122943" flood-opacity="0.45"></feDropShadow>
      </filter>
    </defs>
    <circle cx="${cx}" cy="${cy}" r="${lineRadius + 12}" class="wheel-ring"></circle>
    <polygon points="${cycle}" class="wheel-cycle"></polygon>
    <polygon points="${star}" class="wheel-star"></polygon>
    <circle cx="${cx}" cy="${cy}" r="35" class="wheel-core"></circle>
    ${nodesMarkup}
  `;

  refs.wheelGuide.textContent = `${I18N[currentLang].strongEnergyLabel}: ${getElementLabel(result.dominant)} · ${I18N[currentLang].weakEnergyLabel}: ${getElementLabel(result.lacking)}`;
}

function renderBars(scores) {
  const max = Math.max(...scores);
  refs.bars.innerHTML = "";

  ELEMENTS.forEach((element, index) => {
    const ratio = max === 0 ? 0 : (scores[index] / max) * 100;
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <div class="bar-labels">
        <span>${getElementLabel(element.key)}</span>
        <span>${scores[index].toFixed(1)}</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width: ${ratio}%; background: ${element.color};"></div>
      </div>
    `;
    refs.bars.appendChild(row);
  });
}

function renderExtraItems(items, lackingKey) {
  const t = I18N[currentLang];
  refs.moreList.innerHTML = "";

  items.forEach((item) => {
    const localized = localizeItem(item, lackingKey);
    const card = document.createElement("article");
    card.className = "more-item";
    card.style.setProperty("--stagger", `${refs.moreList.children.length * 90}ms`);
    card.innerHTML = `
      <p class="name">${localized.name}</p>
      <p class="reason">${t.moreReason}: ${localized.reason}</p>
    `;
    refs.moreList.appendChild(card);
  });
}

function renderMemeCard(result, mainItem) {
  const persona = RESULT_PERSONA[result.lacking][currentLang] || RESULT_PERSONA[result.lacking].en;
  refs.memeAlias.textContent = persona.alias;
  refs.memeSymbol.textContent = persona.symbol;
  refs.memeLine.textContent = pickCopy(ABSURD_LINES[result.lacking]);
  refs.memeCard.setAttribute("data-item", mainItem.name);
}

function renderWhySignals(result) {
  const t = I18N[currentLang];
  const lackingLabel = getElementLabel(result.lacking);
  const dominantLabel = getElementLabel(result.dominant);
  const max = Math.max(...result.scores);
  const min = Math.min(...result.scores);
  const gap = (max - min).toFixed(1);
  const yinyangText =
    result.yinyang === "balanced"
      ? t.yinyangBalanced
      : result.yinyang === "yin"
        ? t.yinyangYin
        : t.yinyangYang;
  const modeText =
    result.mode === "detailed"
      ? t.modeDetailed
      : t.modeTimeUnknown;

  const signals = [
    currentLang === "ko"
      ? `${lackingLabel} 점수가 가장 낮게 찍혀서 보강 우선 신호가 떴어.`
      : `Lowest score landed on ${lackingLabel}, so boost-first mode is active.`,
    currentLang === "ko"
      ? `${dominantLabel}가 강하고 ${yinyangText} 흐름이라 밸런스 보정이 핵심이야.`
      : `${dominantLabel} is strong and the flow is ${yinyangText}, so balance matters now.`,
    currentLang === "ko"
      ? `현재 분석은 ${modeText} (${gap}pt 편차) 기준으로 계산됐어.`
      : `This read uses ${modeText} with a ${gap}pt element spread.`,
  ];

  refs.whyList.innerHTML = "";
  signals.forEach((line) => {
    const item = document.createElement("li");
    item.textContent = line;
    refs.whyList.appendChild(item);
  });
}

function localizeItem(item, lackingKey) {
  if (currentLang === "ko") {
    return item;
  }

  const map = {
    en: {
      "미니 식물 키우기 키트": "Mini plant growing kit",
      "우드 브러시": "Wooden hair brush",
      "그린 다이어리": "Green diary",
      "플랜테리어 무드등": "Botanic mood lamp",
      "자연향 디퓨저": "Forest diffuser",
      "온열 아이마스크": "Heated eye mask",
      "코랄 립틴트": "Coral lip tint",
      "핫팩 세트": "Heat pack set",
      "웜톤 가디건": "Warm-tone cardigan",
      "레드 포인트 케이스": "Red accent phone case",
      "데일리 루틴 플래너": "Daily routine planner",
      "데스크 수납함": "Desk organizer box",
      "바디필로우": "Body pillow",
      "베이지 니트": "Beige knit",
      "아로마 캔들": "Aroma candle",
      "스테인리스 텀블러": "Stainless tumbler",
      "실버 액세서리": "Silver accessories",
      "메탈 프레임 안경": "Metal frame glasses",
      "심플 메탈 시계": "Minimal metal watch",
      "화이트 셔츠": "White shirt",
      "미니 가습기": "Mini humidifier",
      "수분 미스트": "Hydration mist",
      "아쿠아 향수": "Aqua perfume",
      "블루 텀블러": "Blue tumbler",
      "수분 크림": "Moisture cream",
    },
    ja: {},
    es: {},
  };

  return {
    ...item,
    name: map[currentLang]?.[item.name] || item.name,
    reason: localizeReason(item.reason, lackingKey),
  };
}

function localizeReason(reason, lackingKey) {
  if (currentLang === "ko") {
    return reason;
  }

  const elementLabel = getElementLabel(lackingKey);
  if (currentLang === "ja") {
    return `${elementLabel}の補強に向いていて、今日のリズムを安定させる。`;
  }
  if (currentLang === "es") {
    return `Ayuda a reforzar ${elementLabel} y estabiliza tu ritmo de hoy.`;
  }
  return `Helps boost ${elementLabel} and stabilize your rhythm today.`;
}

function showView(name) {
  Object.entries(refs.views).forEach(([key, element]) => {
    element.classList.toggle("hidden", key !== name);
    element.classList.toggle("is-active", key === name);
  });

  if (name !== "loading") {
    clearTimers();
  }
}

function addEnergy(scores, index, amount) {
  if (index >= 0 && index < scores.length) {
    scores[index] += amount;
  }
}

function getElementLabel(key) {
  const element = ELEMENTS[elementIndex[key]];
  return element.label[currentLang];
}

function buildCoupangLink(keyword) {
  const searchUrl = `https://www.coupang.com/np/search?component=&q=${encodeURIComponent(keyword)}&channel=user`;
  if (COUPANG_PARTNER_BASE.trim()) {
    return `${COUPANG_PARTNER_BASE}${encodeURIComponent(searchUrl)}`;
  }
  return searchUrl;
}

function interpolate(template, values) {
  return template.replace(/\{(.*?)\}/g, (_, key) => values[key] ?? "");
}

function shuffleArray(source) {
  const array = [...source];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function pickCopy(pool) {
  const fromLang = pool[currentLang] && pool[currentLang].length ? pool[currentLang] : pool.fallback;
  return fromLang[Math.floor(Math.random() * fromLang.length)];
}

function playResultReveal() {
  refs.memeCard.classList.remove("is-revealed");
  void refs.memeCard.offsetWidth;
  refs.memeCard.classList.add("is-revealed");

  refs.revealFlash.classList.remove("is-on");
  void refs.revealFlash.offsetWidth;
  refs.revealFlash.classList.add("is-on");

  burstConfetti(24);
}

function burstConfetti(count) {
  refs.confettiLayer.innerHTML = "";
  const colors = ["#c32f27", "#11253f", "#c99e48", "#3f9565", "#2e6fb0"];
  for (let i = 0; i < count; i += 1) {
    const node = document.createElement("span");
    node.className = "confetti";
    node.style.left = `${Math.random() * 100}%`;
    node.style.background = colors[i % colors.length];
    node.style.animationDelay = `${Math.random() * 120}ms`;
    refs.confettiLayer.appendChild(node);
  }
  setTimeout(() => {
    refs.confettiLayer.innerHTML = "";
  }, 1100);
}
