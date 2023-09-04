import { useState } from 'react';
import './App.css'
import MapView from './components/MapView';
import Header from './components/root/Header';
import Sidebar from './components/root/Sidebar';
import TreeSimulator from './components/TreeSimulator';
import DataVisualization from './components/DataVisualization';
import ImpactCalculator from './components/ImpactCalculator';

export type PageProps = "/tree-simulator" | "/impact-calculator" | "/data-visualization" | "/about" | "/github" | "/";

function App() {
  const [page, setPage] = useState<PageProps>("/tree-simulator");

  return (
    <div className='w-full h-full min-h-screen overflow-hidden'>
      <Header page={page} setPage={setPage}/>
      <div className='flex w-full h-full'>
        {
          page == '/tree-simulator' ? (
            <Sidebar children={<TreeSimulator/>} />
          ) : null
        }
        {
          page == "/tree-simulator" ? (
            <MapView/>
          ) : page == "/impact-calculator" ? (
            <ImpactCalculator/> 
          ) : page == "/data-visualization" ? (
            <DataVisualization/>
          ) : null
        }
      </div>
    </div>
  )
}

export default App
