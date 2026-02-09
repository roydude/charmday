# Charmday

**오늘 나에게 필요한 부적템**을 사주·오행 기반으로 추천하는 모바일 퍼스트 미니 서비스입니다.  
React 없이 정적 SPA(멀티 뷰)로 구성해 빠르게 테스트·배포할 수 있습니다.

---

## 한 줄 요약

생년월일시 입력 → 5초 로딩 → **오행 밸런스 + 60갑자 해석 + Do/Don't + 메인/추가 상품 추천** → 쿠팡 링크 연결.

---

## 반영된 UX

- **입력**: 연/월/일/시/분 모두 **타이핑** (셀렉트 없음)
- **미상 옵션**: "정확한 시간을 몰라요" 체크 시 시/분 스킵
- **3단계 화면**
  - **시작**: 언어 선택(한/영/일/스) + 생년월일시 폼
  - **로딩**: "오늘의 부적템 찾는 중" + 오브 애니메이션 + 5초 카운트
  - **결과**: Result Card(한줄 멘트 + 친구 소환) → 60갑자 → 오행 밸런스 휠/바 → 인사이트 → 왜 이 결과(Do/Don't) → 메인 추천 + 추가 추천 → 행동 부적 → 다시 분석
- **결과 강화**
  - 오행 밸런스(휠 + 바), 우세/보강 기운, 음양 흐름, 럭키 무드
  - 결과 공개 시 **플래시 + confetti** 연출
  - 메인 추천 1개 + 추가 추천 리스트, 쿠팡 검색 링크
- **폰트**: Pretendard(본문) + Black Han Sans / Hahmlet(강조)
- **다국어**: 한국어 / English / 日本語 / Español

---

## 실행

```bash
cd charmday
python3 -m http.server 5173
```

브라우저: **http://localhost:5173**

---

## 쿠팡 파트너스

`app.js` 상단 **`COUPANG_PARTNER_BASE`** 로 파트너스 래핑 URL을 설정합니다.

- `""` (기본): 일반 쿠팡 검색 링크
- 값 지정: 쿠팡 검색 URL을 인코딩해 파트너스 링크로 연결

---

## 주요 파일

| 파일 | 역할 |
|------|------|
| `index.html` | 시작/로딩/결과 3뷰 마크업, 메타·폰트 |
| `styles.css` | 모바일 퍼스트 스타일, 로딩 오브·결과 카드·confetti |
| `app.js` | 다국어, 입력 검증, 사주·오행 분석, 추천/링크 매핑, 뷰 전환 |

---

## 배포 메타데이터 체크

- `index.html`에 SEO/OG/Twitter/canonical/JSON-LD 반영
- `robots.txt`, `sitemap.xml` 반영
- `favicon.svg`, `og-image.svg` 기본 자산 반영
- 현재 기본 배포 URL: `https://roydude.github.io/charmday/`

> 참고: SNS 공유(카카오/트위터/디스코드) 호환을 최대로 맞추려면 `og-image.svg` 대신 `1200x630 PNG`를 추가하고 `og:image`를 PNG 경로로 교체하는 것을 권장합니다.

---

## 기획/문서

- `docs/plans/charmday-result-report.md` — 결과 리포트 스펙(Result Card, MVP 스코프, 카피 뱅크 등)
