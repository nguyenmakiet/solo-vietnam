"use client"
// next/image for Cloudinary delivery URLs. The loader asks Cloudinary for the
// exact width next/image needs (srcset), so images are resized at the CDN
// instead of going through the Next.js image optimizer twice.
import Image, { type ImageLoaderProps, type ImageProps } from "next/image"

const UPLOAD = "/image/upload/"

function cloudinaryLoader({ src, width, quality }: ImageLoaderProps) {
  const i = src.indexOf(UPLOAD)
  if (i === -1) return src
  const head = src.slice(0, i + UPLOAD.length)
  const rest = src.slice(i + UPLOAD.length).split("/")
  // Drop an existing transformation segment (e.g. "w_1200,h_630,c_fill,q_auto,f_auto")
  if (rest.length > 1 && /^[a-z]{1,3}_[^/]*$/.test(rest[0]) && !/^v\d+$/.test(rest[0])) rest.shift()
  return `${head}w_${width},c_limit,q_${quality ?? "auto"},f_auto/${rest.join("/")}`
}

export default function CloudinaryImage(props: Omit<ImageProps, "loader">) {
  // eslint-disable-next-line jsx-a11y/alt-text -- alt is required by ImageProps and passed through
  return <Image loader={cloudinaryLoader} {...props} />
}
