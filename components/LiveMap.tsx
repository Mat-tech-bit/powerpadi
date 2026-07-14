'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix leaflet icon issue in Next.js
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

export default function LiveMap() {
  const [position, setPosition] = useState<[number, number] | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude])
        },
        (err) => {
          console.error('Geolocation error:', err)
          // Default to Lagos, Nigeria if location denied/fails
          setPosition([6.5244, 3.3792])
        },
        { enableHighAccuracy: true, timeout: 5000 }
      )
    } else {
      setPosition([6.5244, 3.3792])
    }
  }, [])

  if (!position) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted/20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <MapContainer 
      center={position} 
      zoom={14} 
      style={{ height: '100%', width: '100%', zIndex: 0, borderRadius: 'inherit' }}
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <Circle 
        center={position} 
        radius={800} 
        pathOptions={{ color: '#E5C387', fillColor: '#E5C387', fillOpacity: 0.15, weight: 1 }} 
      />
      <Marker position={position} icon={icon}>
        <Popup className="text-black rounded-lg">
          <div className="font-semibold">Your Location</div>
          <div className="text-sm text-green-600 font-bold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse block"></span>
            Power Available
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
