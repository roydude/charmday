---
name: juicy-interaction-physics
description: Adds "Game Feel" to web interfaces. Ensures every user action triggers an immediate, exaggerated feedback loop. Use when implementing buttons, loading states, result reveals, or motion for viral/casual apps, or when the user asks for juicy or satisfying interactions.
---

# Juicy Interaction Physics

## The "Juice" Principles
1. **Input Feedback**:
   - When clicked, buttons must physically react (Scale down to 0.95, Move down 4px).
   - Inputs should shake when invalid, or sparkle when completed.
2. **Staged Reveals (The Drumroll)**:
   - NEVER show the result immediately.
   - Sequence: Loading Spinner (High tension) -> Flash/Explosion -> Result Card Reveal -> Confetti.
   - Use `animation-delay` to stagger list items appearing one by one.
3. **Motion Style**:
   - Avoid linear Easing. Use `cubic-bezier` that "bounces" or "snaps."
   - Use CSS keyframes for performant, continuous motion (e.g., floating elements, breathing buttons).

## High-Impact Moments
- **Page Load**: Elements shouldn't just appear; they should slide up, zoom in, or unroll.
- **The "Share" Button**: Make it pulse or wiggle continuously to beg for a click.

## When Applying This Skill
1. Apply press/click feedback to interactive elements (scale, translate).
2. Design a staged reveal sequence for the main result (spinner → flash → card → confetti).
3. Use bouncy/snappy easing and keyframe animations; avoid linear.
