import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {seaLevelData} from "./data.js"

export default function SeaLevelChart() {

  return (
    <div className='h-[300px]'>
      <ResponsiveContainer height={"100%"} width={"100%"} className="bg-white rounded">
        <LineChart
          data={seaLevelData}
          margin={{
            top: 5,
            right: 15,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" interval={3}/>
          <YAxis/>
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Line type="bump" name='Sea Level' dataKey="height" stroke="#1450A3" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}