# Modular Viral Design Subagents

바이럴 & 하이퍼 캐주얼 서비스를 위한 4가지 모듈형 서브에이전트입니다. 상황에 따라 하나만 쓰거나 조합해서 사용할 수 있습니다.

## 서브에이전트 목록

| 서브에이전트 | 역할 |
|-------------|------|
| **viral-visual-hook** | 테마·무드 설정. 3초 안에 시선을 잡는 비주얼 훅. |
| **dopamine-typography** | 타이포·보이스. 텍스트를 '보이게' 만드는 폰트·이펙트. |
| **juicy-interaction-physics** | 인터랙션·모션. 클릭/넘기기에 손맛(Juice) 부여. |
| **share-bait-architecture** | 결과 페이지·바이럴 레이아웃. 밈 카드·공유·수익화 CTA. |
| **planner** | 아이디어·게임 로직 설계. 4결과 + 결과→상품 매핑 스펙. |
| **critic** | 아이디어 혹평/개선. K-factor/CTR 관점 Pass/Fail 및 리라이트. |
| **artist** | 프론트 구현. 훅/타이포/주스/밈카드 룰 적용해 화면 완성. |
| **manager** | 론칭 점검. OG/메타 태그, 배포 체크리스트, 공유 카피. |

## 오케스트레이션 사용법

작업 지시 시 서브에이전트와 스타일을 명시하면, 해당 스킬의 CSS·레이아웃·애니메이션 규칙을 따라 코드를 작성합니다.

**예시 프롬프트:**

> "오늘 만들 '사주 액땜 서비스'는 **viral-visual-hook**의 2번(Oriental-Occult) 스타일을 베이스로 해줘. 폰트는 **dopamine-typography** 규칙에 따라 궁서체와 픽셀 폰트를 섞어 쓰고, 결과 화면은 **share-bait-architecture**의 '부적(Talisman)' 형태로 디자인해."

**다른 예시:**

> "**viral-visual-hook**의 Y2K 무드에 **juicy-interaction-physics**로 주시한 버튼 반응 넣어줘."

각 서브에이전트는 `name`으로 호출 가능합니다 (예: `Use the viral-visual-hook subagent to ...`).

## Codex Skills로도 사용

Codex에서는 아래 스킬 이름으로 같은 역할을 호출할 수 있습니다:
- `vibe-planner`, `vibe-critic`, `vibe-artist`, `vibe-manager`
