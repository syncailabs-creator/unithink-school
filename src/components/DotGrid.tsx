/**
 * DotGrid — full-section ambient dot texture
 *
 * Covers the entire section with a repeating amber dot grid and
 * fades it softly at all four edges so adjacent sections blend
 * seamlessly with no hard borders. Static — no float animation.
 *
 * Usage:
 *   <section className="relative overflow-hidden ...">
 *     <DotGrid />          ← subtle (default)
 *     <DotGrid intensity="medium" />
 *     ...content...
 *   </section>
 */

interface DotGridProps {
  /**
   * subtle — 0.12 dot opacity, good for most sections
   * medium — 0.20 dot opacity, for high-contrast sections (stats, pricing)
   */
  intensity?: 'subtle' | 'medium';
}

// Encode a single crisp dot in a transparent SVG tile.
// Keeping opacity=1 inside SVG; overall fade is handled by the mask.
function dotSvgUrl(tileSize: number, radius: number) {
  const c = tileSize / 2;
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${tileSize}' height='${tileSize}'%3E%3Ccircle cx='${c}' cy='${c}' r='${radius}' fill='%23FBB03B'/%3E%3C/svg%3E")`;
}

export function DotGrid({ intensity = 'subtle' }: DotGridProps) {
  const opacity = intensity === 'medium' ? 0.20 : 0.12;

  /*
   * Two-axis mask strategy (intersect):
   *   • Vertical mask  — fades top 20% and bottom 20% → sections blend
   *   • Horizontal mask — fades left 8% and right 8%  → never clips wide screens
   * CSS mask-composite:intersect and -webkit-mask-composite:source-in
   * are supported in all modern browsers (Chrome 120+, FF 112+, Safari 15.4+).
   */
  const verticalMask =
    'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)';
  const horizontalMask =
    'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)';

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: dotSvgUrl(22, 0.9),
        backgroundSize: '22px 22px',
        backgroundPosition: '0 0',
        opacity,
        WebkitMaskImage: `${verticalMask}, ${horizontalMask}`,
        WebkitMaskComposite: 'source-in',
        maskImage: `${verticalMask}, ${horizontalMask}`,
        maskComposite: 'intersect',
      }}
    />
  );
}
