# Modular Viral Design Skills

바이럴 & 하이퍼 캐주얼 서비스를 위한 4가지 모듈형 **Skill** (`.cursor/skills/`).

| Skill | 역할 |
|-------|------|
| **viral-visual-hook** | 테마·무드 (Y2K, Oriental-Occult, Brutalist, Soft-Pop) |
| **dopamine-typography** | 타이포·보이스 (폰트 페어링, 계층, 텍스트 이펙트) |
| **juicy-interaction-physics** | 인터랙션·모션 (Juice, 스테이지드 리빌, 이징) |
| **share-bait-architecture** | 결과 페이지·바이럴 (밈 카드 9:16, CTA 계층) |

에이전트는 description과 대화 맥락에 따라 이 스킬을 자동으로 적용할 수 있습니다. 작업 지시 시 스킬 이름이나 스타일을 명시하면 해당 규칙을 따라 코드를 작성합니다.

## 예시 프롬프트

> "오늘 만들 '사주 액땜 서비스'는 **viral-visual-hook**의 2번(Oriental-Occult) 스타일을 베이스로 해줘. 폰트는 **dopamine-typography** 규칙에 따라 궁서체와 픽셀 폰트를 섞어 쓰고, 결과 화면은 **share-bait-architecture**의 '부적(Talisman)' 형태로 디자인해."

> "**viral-visual-hook**의 Y2K 무드에 **juicy-interaction-physics**로 주시한 버튼 반응 넣어줘."

## (선택) Codex Skills로 설치

Codex가 이 4개를 “스킬”로 인식하게 하려면, 각 폴더를 `~/.codex/skills/` 아래로 복사하세요.
