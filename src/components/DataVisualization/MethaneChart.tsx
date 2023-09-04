import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {methaneData} from "./data.js"

export default function MethaneChart() {

  return (
    <div className='h-[300px]'>
      <ResponsiveContainer height={"100%"} width={"100%"} className="bg-white rounded">
        <LineChart
          data={methaneData}
          margin={{
            top: 5,
            right: 15,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" interval={3}/>
          <YAxis domain={[1500, 2100]}/>
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Line type="bump" name='Methane' dataKey="mean" stroke="#400082" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}