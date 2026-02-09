---
name: vibe-planner
description: Viral game concept planner for hyper-casual web services (Trend Hunter). Use when the user asks for ideas, planning, game logic, result types, or a concept that bridges entertainment with Coupang/product monetization. Produces a tight <30s flow and a clear result→item mapping spec.
---

# Vibe Planner — Trend Hunter

Generate viral game concepts that bridge entertainment with product monetization.

## Workflow
1. Identify the hook keyword, audience, and monetization goal.
2. Keep the end-to-end flow under 30 seconds; reduce steps aggressively.
3. Design 4 distinct result types that are screenshot-worthy and easy to label.
4. Architect the **Result** as two layers:
   - **Result Card (1s):** meme-readable, screenshot-first.
   - **Result Report (10–20s):** scrollable justification + product intent.
5. Ensure every result maps to a concrete product category or search term (Coupang-ready phrasing).

## Heuristics
- Prefer Korean Gen-Z hooks (MBTI, Saju/사주, 심리테스트, 밈, 생존/벌칙).
- Optimize for shareability: the “result card” should read like a meme in 1 second.
- Bake suspense into the flow (countdown/loading beat) but do not add friction.
- Keep copy “labelable”: short noun-ish titles that can become hashtags.
- The result should feel *personal* (specific) but be generated from *simple* inputs (low effort).

## Result design (what was missing most often)
### 1) Result Card (share bait)
The card must be understandable with **zero context**.
- Title: 6–12 chars (KR) / 2–4 words (EN)
- Subtitle: 1 line (max ~24 chars KR) that explains the vibe
- “One absurdly specific line”: makes it feel targeted (“요즘 너 그거 티남” energy)
- Visual anchor: 1 icon/emoji/obj (used consistently per result type)
- Share CTA: 4–8 chars (“공유하기”, “친구 소환”)

### 2) Result Report (conversion bait)
The report must answer “왜 내가 이 결과?” and gently create a shopping reason.
Recommended modules (keep to 1 screen each; users won’t read essays):
- **3 Signals**: what inputs led here (bullet x3)
- **Today’s Buff/Debuff**: one pro + one con (fun + actionable)
- **Do / Don’t**: 1 line each (easy to screenshot)
- **Lucky Item**: a product-shaped prop that fits the narrative
- **Gift Angle** (optional): “이 결과인 친구에게 선물하면 딱” (drives sharing + purchase)

## Quality gates (ship/no-ship checklist)
- Flow time: first result shown in ≤ 30s (ideal 12–20s)
- Results: 4 outcomes are clearly different at a glance (title + icon + tone)
- Card: readable in 1 second; no paragraphs; no hedging words
- Report: contains “why”, “what to do”, and “what to buy” (soft)
- Monetization: each result has a concrete search query (not just a category)
- Safety: avoid medical/legal claims; avoid shaming; keep it playful

## Output (copy/paste spec)
Return **Markdown or JSON** with these sections (agents should be able to implement directly):
1) **Title + hook**
2) **30s flow** (screens/steps list; include the suspense beat)
3) **Game logic** (Input → Scoring/Rules → Output)
4) **Result types (exactly 4)** — each with:
   - `id` (snake_case), `label` (short), `icon` (single anchor), `tone` (e.g. savage/cute/mystic)
   - **Result Card copy**: `headline`, `subhead`, `absurd_specific_line`, `share_cta`
   - **Result Report copy**:
     - `why_signals` (3 bullets), `buff`, `debuff`, `do`, `dont`, `lucky_item_line`, `gift_angle` (optional)
5) **Monetization mapping table** (per result):
   - `product_search_query` (Coupang-friendly), `product_angle` (why it fits), `price_band` (e.g. 1만/3만/5만)
6) **Share caption options** (3 lines users can paste)
7) **Analytics events** (minimal): `start`, `complete`, `result_view`, `share_click`, `outbound_click`
