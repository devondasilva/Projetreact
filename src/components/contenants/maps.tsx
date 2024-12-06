import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '400px',
}

const center = {
  lat: 6.379448,
  lng: 2.451324,
}

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAUuk7utjpc0Gj43w6aqPQa4QGjFMmglAI', // Replace with your actual API key
  })

  const [map, setMap] = React.useState<google.maps.Map | null>(null)

  const onLoad = React.useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(() => {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  )
}

export default MyComponent
