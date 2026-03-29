"use client"

import { useState, useEffect, useCallback } from "react"

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
          <img
            key={publicId}
            src={`https://res.cloudinary.com/dl5kqhspv/image/upload/w_600,h_450,c_fill,q_auto,f_auto/${publicId}`}
            alt={`${locationName} ${i + 1}`}
            className="gallery-img gallery-img--clickable"
            onClick={() => setActiveIndex(i)}
          />
        ))}
        {streetViewUrl && (
          <div
            className="gallery-streetview-tile gallery-img--clickable"
            onClick={() => setStreetViewOpen(true)}
          >
            <img
              src="/images/streetview.avif"
              alt="Street View"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div className="gallery-streetview-overlay">
              <span className="gallery-streetview-badge">🌐 Street View · Click to explore</span>
            </div>
          </div>
        )}
      </div>

      {/* Photo lightbox */}
      {activeIndex !== null && (
        <div className="lightbox-overlay" onClick={close}>
          <button className="lightbox-close" onClick={close} aria-label="Close">✕</button>

          {publicIds.length > 1 && (
            <>
              <button
                className="lightbox-nav lightbox-nav--prev"
                onClick={(e) => { e.stopPropagation(); prev() }}
                aria-label="Previous"
              >‹</button>
              <button
                className="lightbox-nav lightbox-nav--next"
                onClick={(e) => { e.stopPropagation(); next() }}
                aria-label="Next"
              >›</button>
            </>
          )}

          <img
            src={`https://res.cloudinary.com/dl5kqhspv/image/upload/w_1600,q_auto,f_auto/${publicIds[activeIndex]}`}
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
        <div className="lightbox-overlay" onClick={closeStreetView}>
          <button className="lightbox-close" onClick={closeStreetView} aria-label="Close">✕</button>
          <div
            className="streetview-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={streetViewUrl}
              allowFullScreen
              style={{ width: "100%", height: "100%", border: 0 }}
            />
          </div>
        </div>
      )}
    </>
  )
}
