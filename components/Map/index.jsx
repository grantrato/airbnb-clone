import { useState } from 'react'
import ReactMapGl, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'

export default function Map ({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({})
  const coordinates = searchResults.map(result => {
    return {
      latitude: result.lat,
      longitude: result.long
    }
  })

  const center = getCenter(coordinates)

  const [viewPort, setViewPort] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  })

  return (
    <ReactMapGl
      {...viewPort}
      mapStyle='mapbox://styles/msolork/cl1cmukw6001914lq67cu7yg2'
      mapboxAccessToken={process.env.mapbox_key}
      onViewportChange={(data) => setViewPort(viewPort)}
    >
      {
        searchResults.map((result, index) => (
          <div key={index} className=''>
            <Marker
              latitude={result.lat}
              longitude={result.long}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p
                role='img'
                onClick={() => setSelectedLocation(result)}
                aria-label='push-pin'
                className='cursor-pointer text-2xl'
              >
                📌
              </p>
            </Marker>
            {/* The popup that should show if we click on a Marker */}
            {
              selectedLocation.long === result.long && (
                <Popup
                  latitude={result.lat}
                  longitude={result.long}
                  closeOnClick
                  onClose={() => setSelectedLocation({})}
                >
                  <div className='bg-white p-4 rounded-lg shadow-lg'>
                    <h3 className='text-xl font-semibold mb-3'>{result.title}</h3>
                  </div>
                </Popup>
              )
            }
          </div>
        ))
      }
    </ReactMapGl>
  )
}
