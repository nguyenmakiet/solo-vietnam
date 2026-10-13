"use client"
// Hero photo slot. If the photo fails to load, the whole slot is removed
// instead of showing a broken image or stand-in artwork.
// An image can fail before hydration (onError is then never called), so the
// mount effect also checks for an already-broken image.
import { useEffect, useRef, useState } from "react"
import CloudinaryImage from "@/components/CloudinaryImage"

export default function HeroMedia({ src, alt, className }: { src: string; alt: string; className: string }) {
  const [failed, setFailed] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    const img = imgRef.current
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing with a load error that happened before hydration
    if (img && img.complete && img.naturalWidth === 0) setFailed(true)
  }, [src])
  if (failed) return null
  return (
    <div className={className}>
      <CloudinaryImage
        ref={imgRef}
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1200px) 1200px, 100vw"
        loading="eager"
        fetchPriority="high"
        onError={() => setFailed(true)}
      />
    </div>
  )
}
