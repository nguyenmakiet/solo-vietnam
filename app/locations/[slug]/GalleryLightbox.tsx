"use client"

import { useState, useEffect, useCallback, useRef } from "react"

const CDN = "https://res.cloudinary.com/dl5kqhspv/image/upload"

interface GalleryLightboxProps {
  publicIds: string[]
  locationName: string
  streetViewUrl?: string
}

export default function GalleryLightbox({ publicIds, locationName, streetViewUrl }: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [streetViewOpen, setStreetViewOpen] = useState(false)

  const close = useCallback(() => setActiveIndex(null), [])
  const closeStreetView = useCallback(() => setStreetViewOpen(false), [])

  // Focus: into the dialog on open, back to the tile that opened it on close
  const opener = useRef<HTMLElement | null>(null)
  const dialogClose = useRef<HTMLButtonElement>(null)
  const isOpen = activeIndex !== null || streetViewOpen
  useEffect(() => {
    if (isOpen) dialogClose.current?.focus()
    else if (opener.current) { opener.current.focus(); opener.current = null }
  }, [isOpen])
  const open = (e: React.MouseEvent<HTMLElement>, action: () => void) => { opener.current = e.currentTarget; action() }

  const prev = useCallback(() => {
    setActiveIndex((i) => (i !== null ? (i - 1 + publicIds.length) % publicIds.length : null))
  }, [publicIds.length])

  const next = useCallback(() => {
    setActiveIndex((i) => (i !== null ? (i + 1) % publicIds.length : null))
  }, [publicIds.length])

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [activeIndex, close, prev, next])

  useEffect(() => {
    if (!streetViewOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeStreetView() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [streetViewOpen, closeStreetView])

  // lock scroll when any modal is open
  useEffect(() => {
    document.body.style.overflow = (activeIndex !== null || streetViewOpen) ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [activeIndex, streetViewOpen])

  return (
    <>
      <div className="gallery-grid">
        {publicIds.map((publicId, i) => (
          <button
            key={publicId}
            type="button"
            className={`gallery-tile${i === 0 ? " gallery-tile--lead" : ""}`}
            aria-label={`Open photo ${i + 1} of ${publicIds.length}`}
            onClick={(e) => open(e, () => setActiveIndex(i))}
          >
            <img
              // lead photo spans two columns, so it gets a larger source
              src={`${CDN}/${i === 0 ? "w_1000,h_750" : "w_600,h_450"},c_fill,q_auto,f_auto/${publicId}`}
              alt={`${locationName} ${i + 1}`}
              className="gallery-img"
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
        {streetViewUrl && (
          <button
            type="button"
            className="gallery-tile"
            aria-label={`Open Street View of ${locationName}`}
            onClick={(e) => open(e, () => setStreetViewOpen(true))}
          >
            <span className="gallery-streetview">
              <span className="gallery-streetview-label">Street View</span>
              <span className="gallery-streetview-cta">Look around →</span>
            </span>
          </button>
        )}
      </div>

      {/* Photo lightbox */}
      {activeIndex !== null && (
        <div className="lightbox-overlay" onClick={close} role="dialog" aria-modal="true" aria-label={`${locationName} photos`}>
          <button ref={dialogClose} className="lightbox-close" onClick={close} aria-label="Close photo">×</button>

          {publicIds.length > 1 && (
            <>
              <button
                className="lightbox-nav lightbox-nav--prev"
                onClick={(e) => { e.stopPropagation(); prev() }}
                aria-label="Previous photo"
              >‹</button>
              <button
                className="lightbox-nav lightbox-nav--next"
                onClick={(e) => { e.stopPropagation(); next() }}
                aria-label="Next photo"
              >›</button>
            </>
          )}

          <img
            src={`${CDN}/w_1600,q_auto,f_auto/${publicIds[activeIndex]}`}
            alt={`${locationName} ${activeIndex + 1}`}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />

          {publicIds.length > 1 && (
            <p className="lightbox-counter">{activeIndex + 1} / {publicIds.length}</p>
          )}
        </div>
      )}

      {/* Street View modal */}
      {streetViewOpen && streetViewUrl && (
        <div className="lightbox-overlay" onClick={closeStreetView} role="dialog" aria-modal="true" aria-label={`Street View of ${locationName}`}>
          <button ref={dialogClose} className="lightbox-close" onClick={closeStreetView} aria-label="Close Street View">×</button>
          <div
            className="streetview-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={streetViewUrl}
              title={`Street View of ${locationName}`}
              allowFullScreen
              style={{ width: "100%", height: "100%", border: 0 }}
            />
          </div>
        </div>
      )}
    </>
  )
}
