// Quiet editorial stand-in for a location without a photo yet: paper tone
// and a small label. No artwork, no icon, no frame, no gradient.
// Fills its parent (give the parent the image's aspect ratio).
export default function PhotoPlaceholder({ label = "Photo coming soon" }: { label?: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-paper">
      <span className="px-2 text-center text-[10px] font-semibold tracking-[0.14em] uppercase text-ink-2">
        {label}
      </span>
    </div>
  )
}
