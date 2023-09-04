import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {carbonDioxideData} from "./data.js"

export default function CarbonDioxideChart() {

  return (
    <div className='h-[300px]'>
      <ResponsiveContainer height={"100%"} width={"100%"} className="bg-white rounded">
        <LineChart
          data={carbonDioxideData}
          margin={{
            top: 5,
            right: 15,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" interval={6}/>
          <YAxis domain={[300,450]}/>
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Line type="bump" dataKey="CO2" stroke="orange" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}