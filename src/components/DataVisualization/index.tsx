import CarbonDioxideChart from "./CarbonDioxideChart";
import GlobalTemperatureChart from "./GlobalTemperatureChart";
import MethaneChart from "./MethaneChart";
import SeaLevelChart from "./SeaLevelChart";
import dataBG from "../../assets/data-bg.webp";

export default function DataVisualization() {

  return (
    <div className="w-full h-full p-4" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${dataBG}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="grid w-full h-full min-h-screen grid-cols-2 gap-4">
      <div className="flex flex-col py-4 bg-white rounded">
        <p className="pb-4 pl-4 text-2xl font-bold text-center text-orange-500">Carbon Dioxide</p>
        <CarbonDioxideChart/>
        <p className="pb-4 pl-4 text-center">Since the onset of industrial times in the 18th century, human activities have raised atmospheric CO2 by 50% – meaning the amount of CO2 is now 150% of its value in 1750. This human-induced rise is greater than the natural increase observed at the end of the last ice age 20,000 years ago.</p>
      </div>
      <div className="flex flex-col py-4 bg-white rounded">
        <p className="pb-4 pl-4 text-2xl font-bold text-center text-orange-500">Methane</p>
        <MethaneChart />
        <p className="pb-4 pl-4 text-center">The concentration of methane in the atmosphere has more than doubled over the past 200 years. Scientists estimate that this increase is responsible for 20 to 30% of climate warming since the Industrial Revolution (which began in 1750).</p>
      </div>
      <div className="flex flex-col py-4 bg-white rounded">
        <p className="pb-4 pl-4 text-2xl font-bold text-center text-orange-500">Global Temperature</p>
        <GlobalTemperatureChart />
        <p className="pb-4 pl-4 text-center">This graph shows the change in global surface temperature compared to the long-term average from 1951 to 1980. The year 2020 statistically tied with 2016 for the hottest year on record since recordkeeping began in 1880 (source: NASA/GISS). NASA’s analyses generally matches independent analyses prepared by National Oceanic and Atmospheric Administration (NOAA) and other research groups.</p>
      </div>
      <div className="flex flex-col py-4 bg-white rounded">
        <p className="pb-4 pl-4 text-2xl font-bold text-center text-orange-500">Sea Level</p>
        <SeaLevelChart />
        <p className="pb-4 pl-4 text-center">This graph tracks the change in sea level since 1993, as observed by satellites. The data shown are the latest available, with a four- to five-month delay needed for processing. (Source)</p>
      </div>
      </div>
      <p className="w-full mt-4 text-center text-white bg-transparent">Data Source: <a href="https://climate.nasa.gov/" className="underline" target="_blank">https://climate.nasa.gov/</a></p>
    </div>

  )
}