"use client"

import { useState, useEffect, useCallback } from "react"

interface GalleryLightboxProps {
  publicIds: string[]
  locationName: string
}

export default function GalleryLightbox({ publicIds, locationName }: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])

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

  // lock scroll when open
  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [activeIndex])

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
      </div>

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
    </>
  )
}
