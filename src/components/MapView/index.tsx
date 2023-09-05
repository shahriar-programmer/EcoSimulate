import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';

type Props = {
  showLocation: boolean
}

export default function MapView({showLocation}: Props) {
  const [zoom, setZoom] = useState(8)

  const defaultProps = {
    center: {
      lat: 23.8768902,
      lng: 90.3200976
    },
    zoom: 8
  }
    
      useEffect(() => {
        if (showLocation){
          setZoom(14)
        }
      }, [showLocation]);

  return (
    <div style={{ height: '91.5vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDQPVEYxKO6wJvkesc9ZgT4aK2qbHlK8iQ" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            zoom={zoom}
          >
          </GoogleMapReact>
        </div>
  )
}