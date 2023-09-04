import { useState } from "react"
import StatisticsCard from "./StatisticsCard"

type Props = {}

export default function SimulatorControl({ }: Props) {
  const [temperatureValue, setTemperatureValue] = useState(68)
  const [aqiValue, setAQIvalue] = useState(38)
  const [pm2Value, setPM2Value] = useState(72)
  const [pm10Value, setPM10Value] = useState(71)
  const [no2Value, setNO2Value] = useState(38)
  const [o3Value, setO3Value] = useState(71)
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <label htmlFor="temperature">Expected Temperature:</label>
        <div className="flex w-full">
          <input type="range" name="temperature" id="temperature" value={temperatureValue} onChange={(e) => setTemperatureValue(Number(e.target.value))} min={20} max={100} className="w-full" />
          <p className="px-2">{temperatureValue}<sup>o</sup>C</p>
        </div>
      </div>
      <div>
        <label htmlFor="aqi">Expected AQI:</label>
        <div className="flex w-full">
          <input type="range" name="aqi" id="aqi" value={aqiValue} onChange={(e) => setAQIvalue(Number(e.target.value))} min={20} max={100} className="w-full" />
          <p className="px-2">{aqiValue}<sup>o</sup>C</p>
        </div>
      </div>
      <div>
        <label htmlFor="pm2_5">Expected PM2.5:</label>
        <div className="flex w-full">
          <input type="range" name="pm2_5" id="pm2_5" value={pm2Value} onChange={(e) => setPM2Value(Number(e.target.value))} min={20} max={100} className="w-full" />
          <p className="px-2">{pm2Value}<sup>o</sup>C</p>
        </div>
      </div>
      <div>
        <label htmlFor="pm10">Expected PM10:</label>
        <div className="flex w-full">
          <input type="range" name="pm10" id="pm10" value={pm10Value} onChange={(e) => setPM10Value(Number(e.target.value))} min={20} max={100} className="w-full" />
          <p className="px-2">{pm10Value}<sup>o</sup>C</p>
        </div>
      </div>
      <div>
        <label htmlFor="no2">Expected NO2:</label>
        <div className="flex w-full">
          <input type="range" name="no2" id="no2" value={no2Value} onChange={(e) => setNO2Value(Number(e.target.value))} min={20} max={100} className="w-full" />
          <p className="px-2">{no2Value}<sup>o</sup>C</p>
        </div>
      </div>
      <div>
        <label htmlFor="o3">Expected O3:</label>
        <div className="flex w-full">
          <input type="range" name="o3" id="o3" value={o3Value} onChange={(e) => setO3Value(Number(e.target.value))} min={20} max={100} className="w-full" />
          <p className="px-2">{o3Value}<sup>o</sup>C</p>
        </div>
      </div>
    </div>
  )
}