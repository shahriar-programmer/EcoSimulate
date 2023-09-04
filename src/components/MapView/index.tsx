import GoogleMapReact from 'google-map-react';

export default function MapView() {

    const defaultProps = {
        center: {
          lat: 23.8769005,
          lng: 90.3175843
        },
        zoom: 11
      };

  return (
    <div style={{ height: '91.5vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
          </GoogleMapReact>
        </div>
  )
}