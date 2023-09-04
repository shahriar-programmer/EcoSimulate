import SimulatorControl from "./SimulatorControl"
import StatisticsCard from "./StatisticsCard"

export default function TreeSimulator() {
    return (
        <div className="flex flex-col mb-12 overflow-y-scroll gap-y-2">
            <div className="flex items-center mt-2 text-gray-600">
                <div className="w-2/4 border border-gray-600"></div>
                <p className="w-full text-lg text-center">Simulate Data</p>
                <div className="w-2/4 border border-gray-600"></div>
            </div>
            <SimulatorControl />
            <div className="flex items-center mt-2 text-gray-600">
                <div className="w-2/4 border border-gray-600"></div>
                <p className="w-full text-lg text-center">Current Real Data</p>
                <div className="w-2/4 border border-gray-600"></div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <StatisticsCard cardTitle='Temperature' cardPoint="34" />
                <StatisticsCard cardTitle='AQI' cardPoint="78" />
                <StatisticsCard cardTitle='PM2.5' cardPoint="41" />
                <StatisticsCard cardTitle='PM10' cardPoint="31" />
                <StatisticsCard cardTitle='NO2' cardPoint="15" />
                <StatisticsCard cardTitle='O3' cardPoint="12" />
            </div>
        </div>
    )
}