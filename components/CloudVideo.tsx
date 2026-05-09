interface CloudVideoProps {
  publicId: string
  alt: string
  caption?: string
  className?: string
}

export function CloudVideo({ publicId, alt, caption, className = "" }: CloudVideoProps) {
  const cloudName = "dl5kqhspv"
  const videoUrl = `https://res.cloudinary.com/${cloudName}/video/upload/q_auto/${publicId}`

  return (
    <figure className={`my-6 ${className}`}>
      <video
        src={videoUrl}
        aria-label={alt}
        autoPlay
        muted
        loop
        playsInline
        className="w-full rounded-lg"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
export default CloudVideo