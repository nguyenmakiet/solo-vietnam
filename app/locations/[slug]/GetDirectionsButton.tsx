interface GetDirectionsButtonProps {
  lat: number
  lng: number
  label: string
}

export default function GetDirectionsButton({ lat, lng, label }: GetDirectionsButtonProps) {
  const coords = `${lat},${lng}`
  const viewUrl = `https://www.google.com/maps/search/?api=1&query=${coords}`
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coords}`

  return (
    <a
      href={directionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="map-action-btn--directions"
      aria-label={`Get directions to ${label}`}
    >
      🧭 Get Directions
    </a>
  )
}
