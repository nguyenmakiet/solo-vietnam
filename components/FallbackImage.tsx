"use client"

import { useEffect, useRef } from "react"

interface FallbackImageProps {
  src: string
  alt: string
  className?: string
}

export default function FallbackImage({ src, alt, className }: FallbackImageProps) {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return
    const handleError = () => {
      img.onerror = null
      img.src = "/images/coming-soon.jpg"
    }
    img.addEventListener("error", handleError)
    return () => img.removeEventListener("error", handleError)
  }, [src])

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
    />
  )
}