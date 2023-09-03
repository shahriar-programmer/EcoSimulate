import './App.css'
import GoogleMapReact from 'google-map-react';

function App() {

  const defaultProps = {
    center: {
      lat: 23.8769005,
      lng: 90.3175843
    },
    zoom: 11
  };

  return (
    <div className='w-full h-full max-h-screen'>
      <div className='flex items-center justify-between w-full h-20 bg-blue-400 px-44'>
        <div className="text-3xl font-semibold text-white logo">EcoSimulate</div>
        <div className='flex text-lg font-semibold text-white gap-x-8'>
          <a href="#" className='px-6 py-1 transition bg-transparent border rounded hover:bg-blue-600/50'>About</a>
          <a href="#" className='px-6 py-1 transition bg-transparent border rounded hover:bg-blue-600/50'>Github</a>
        </div>
      </div>
      <div className='flex w-full h-full'>
        <div className='w-1/4 h-full'>Sidebar</div>
        <div style={{ height: '91vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
        </div>
    </div>
  )
}

export default App
