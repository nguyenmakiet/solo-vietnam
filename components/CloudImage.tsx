"use client"

import { useState } from "react"

interface CloudImageProps {
  publicId: string
  alt: string
  caption?: string
}

export default function CloudImage({ publicId, alt, caption }: CloudImageProps) {
  const [open, setOpen] = useState(false)
  const [failed, setFailed] = useState(false)

  // Unconfirmed publicIds end in "placeholder" (see CLAUDE.md) and do not exist on
  // Cloudinary; a missing or broken photo drops the whole figure instead of showing
  // the browser's broken-image icon. Uploaded files with a suffix
  // ("...placeholder_vmulfz") are real and still render.
  if (/placeholder$/.test(publicId) || failed) return null

  const thumbUrl = `https://res.cloudinary.com/dl5kqhspv/image/upload/w_900,q_auto,f_auto/${publicId}`
  const fullUrl  = `https://res.cloudinary.com/dl5kqhspv/image/upload/q_auto,f_auto/${publicId}`

  return (
    <>
      <figure className="mdx-figure">
        <img
          // A load error can fire before hydration attaches onError: check on attach
          ref={(img) => { if (img?.complete && img.naturalWidth === 0) setFailed(true) }}
          src={thumbUrl}
          alt={alt}
          className="mdx-img mdx-img--clickable"
          onError={() => setFailed(true)}
          onClick={() => setOpen(true)}
        />
        {caption && <figcaption className="mdx-caption">{caption}</figcaption>}
      </figure>

      {open && (
        <div className="lightbox-overlay" onClick={() => setOpen(false)}>
          <button className="lightbox-close" onClick={() => setOpen(false)}>✕</button>
          <img
            src={fullUrl}
            alt={alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          {caption && <p className="lightbox-caption">{caption}</p>}
        </div>
      )}
    </>
  )
}
