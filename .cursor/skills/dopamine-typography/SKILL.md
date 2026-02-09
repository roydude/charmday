---
name: dopamine-typography
description: Treats text as the primary UI element. Uses typography to convey emotion (humor, urgency, mystery) rather than just information. Use when choosing fonts, styling headlines, or applying text effects for viral/casual UIs, or when pairing display fonts with body text.
---

# Dopamine Typography

## Typography Strategy
- **Font Pairing**: Create tension. Pair a boring sans-serif (for readability) with a wild display font (for emotion).
  - *Example*: "Pretendard" (Body) + "Galmuri11" (Pixel Headers)
  - *Example*: "Noto Sans" (Body) + "Gungseo" (Serious/Funny Headers)
- **Hierarchy of Impact**:
  1. **The Result/Verdict** (Must be 300% size, impossible to miss)
  2. **The Hook/Question** (Bold, engaging)
  3. **The Description** (Small, minimal)

## Text Effects (CSS)
Do not just change color. Apply "Dopamine Effects":
- **Stroke**: `-webkit-text-stroke` for a sticker/cartoon look.
- **Shadow**: Hard, retro drop-shadows (no blur).
- **Transform**: Skew (`transform: skew(-10deg)`) for speed, or wavy animations.
- **Highlight**: CSS gradients on text (`background-clip: text`) to make words glow or shine.

## When Applying This Skill
1. Propose font pairings that match the current viral-visual-hook theme.
2. Define CSS classes or variables for the three hierarchy levels.
3. Suggest at least one text effect (stroke, shadow, transform, or gradient) for key copy.
