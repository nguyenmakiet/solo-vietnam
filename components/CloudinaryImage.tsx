"use client"
// next/image for Cloudinary delivery URLs. The loader maps every srcset width
// to one of two fixed transformations, so images are resized at the CDN
// instead of going through the Next.js image optimizer twice.
import Image, { type ImageLoaderProps } from "next/image"
import type { ComponentProps } from "react"

const UPLOAD = "/image/upload/"

// Deliberately NOT the exact srcset width: every new width x format pair is a
// new Cloudinary transformation, which blew through the Free quota. These two
// strings are the derived images that already existed before October, so they
// are reused instead of generated again. Must match character for character.
// Next.js dev may warn that the loader ignores width: that is intended.
const SMALL = "w_600,h_400,c_fill,q_auto,f_auto"
const LARGE = "w_1200,h_630,c_fill,q_auto,f_auto"

function cloudinaryLoader({ src, width }: ImageLoaderProps) {
  const i = src.indexOf(UPLOAD)
  if (i === -1) return src
  const head = src.slice(0, i + UPLOAD.length)
  const rest = src.slice(i + UPLOAD.length).split("/")
  // Drop an existing transformation segment (e.g. "w_1200,h_630,c_fill,q_auto,f_auto")
  if (rest.length > 1 && /^[a-z]{1,3}_[^/]*$/.test(rest[0]) && !/^v\d+$/.test(rest[0])) rest.shift()
  return `${head}${width <= 640 ? SMALL : LARGE}/${rest.join("/")}`
}

export default function CloudinaryImage(props: Omit<ComponentProps<typeof Image>, "loader">) {
  // eslint-disable-next-line jsx-a11y/alt-text -- alt is required by ImageProps and passed through
  return <Image loader={cloudinaryLoader} {...props} />
}
