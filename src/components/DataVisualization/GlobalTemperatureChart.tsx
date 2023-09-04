import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {globalTemperatureData} from "./data.js"

export default function GlobalTemperatureChart() {
  return (
    <div className='h-[300px]'>
      <ResponsiveContainer height={"100%"} width={"100%"} className="bg-white rounded">
        <LineChart
          data={globalTemperatureData}
          margin={{
            top: 5,
            right: 15,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" interval={19}/>
          <YAxis domain={[-0.6, 1.3]} />
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Line type="monotone" name='Lowess Smoothing' dataKey="no_smoothing" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" name='Annual Mean' dataKey="lowess" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}