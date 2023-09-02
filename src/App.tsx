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
    <div className='max-h-screen h-full w-full'>
      <div className='w-full h-20 bg-blue-400 flex justify-between items-center px-44'>
        <div className="logo text-3xl text-white font-semibold">Forest Futurist</div>
        <div className='flex gap-x-8 text-white text-lg font-semibold'>
          <a href="#" className='transition px-6 py-1 border rounded bg-transparent hover:bg-blue-600/50'>About</a>
          <a href="#" className='transition px-6 py-1 border rounded bg-transparent hover:bg-blue-600/50'>Github</a>
        </div>
      </div>
      <div className='w-full h-full flex'>
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
