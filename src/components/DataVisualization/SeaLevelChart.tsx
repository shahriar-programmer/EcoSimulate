import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const seaLevelData = [
  {
    "year": 1993,
    "height": -38.57
  },
  {
    "year": 1994,
    "height": -31.44
  },
  {
    "year": 1995,
    "height": -26.52
  },
  {
    "year": 1996,
    "height": -28.45
  },
  {
    "year": 1997,
    "height": -27.26
  },
  {
    "year": 1998,
    "height": -21.5
  },
  {
    "year": 1999,
    "height": -26.73
  },
  {
    "year": 2000,
    "height": -18.48
  },
  {
    "year": 2001,
    "height": -16.65
  },
  {
    "year": 2002,
    "height": -12.58
  },
  {
    "year": 2003,
    "height": -7.56
  },
  {
    "year": 2004,
    "height": -4.29
  },
  {
    "year": 2005,
    "height": -2.18
  },
  {
    "year": 2006,
    "height": 0.44
  },
  {
    "year": 2007,
    "height": 1.91
  },
  {
    "year": 2008,
    "height": 1.43
  },
  {
    "year": 2009,
    "height": 4.85
  },
  {
    "year": 2010,
    "height": 10.97
  },
  {
    "year": 2011,
    "height": 5.68
  },
  {
    "year": 2012,
    "height": 14.11
  },
  {
    "year": 2013,
    "height": 23.7
  },
  {
    "year": 2014,
    "height": 22.6
  },
  {
    "year": 2015,
    "height": 28.02
  },
  {
    "year": 2016,
    "height": 38.56
  },
  {
    "year": 2017,
    "height": 36.32
  },
  {
    "year": 2018,
    "height": 41.44
  },
  {
    "year": 2019,
    "height": 45.28
  },
  {
    "year": 2020,
    "height": 48.09
  },
  {
    "year": 2021,
    "height": 52.02
  },
  {
    "year": 2022,
    "height": 56.3
  },
  {
    "year": 2023,
    "height": 60.09
  }
]

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