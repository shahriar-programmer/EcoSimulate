import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const carbonDioxideData = [
  {
    "year": 1958,
    "CO2": 315.7
  },
  {
    "year": 1959,
    "CO2": 315.58
  },
  {
    "year": 1960,
    "CO2": 316.19
  },
  {
    "year": 1961,
    "CO2": 317.01
  },
  {
    "year": 1962,
    "CO2": 317.7
  },
  {
    "year": 1963,
    "CO2": 318.35
  },
  {
    "year": 1964,
    "CO2": 318.71
  },
  {
    "year": 1965,
    "CO2": 319.42
  },
  {
    "year": 1966,
    "CO2": 321.03
  },
  {
    "year": 1967,
    "CO2": 321.96
  },
  {
    "year": 1968,
    "CO2": 322.89
  },
  {
    "year": 1969,
    "CO2": 324.12
  },
  {
    "year": 1970,
    "CO2": 324.01
  },
  {
    "year": 1971,
    "CO2": 326.01
  },
  {
    "year": 1972,
    "CO2": 327.55
  },
  {
    "year": 1973,
    "CO2": 328.64
  },
  {
    "year": 1974,
    "CO2": 329.35
  },
  {
    "year": 1975,
    "CO2": 330.77
  },
  {
    "year": 1976,
    "CO2": 331.62
  },
  {
    "year": 1977,
    "CO2": 333.6
  },
  {
    "year": 1978,
    "CO2": 334.91
  },
  {
    "year": 1979,
    "CO2": 336.81
  },
  {
    "year": 1980,
    "CO2": 337.9
  },
  {
    "year": 1981,
    "CO2": 339.29
  },
  {
    "year": 1982,
    "CO2": 340.93
  },
  {
    "year": 1983,
    "CO2": 341.57
  },
  {
    "year": 1984,
    "CO2": 344.21
  },
  {
    "year": 1985,
    "CO2": 345.48
  },
  {
    "year": 1986,
    "CO2": 346.78
  },
  {
    "year": 1987,
    "CO2": 348.73
  },
  {
    "year": 1988,
    "CO2": 350.51
  },
  {
    "year": 1989,
    "CO2": 353.07
  },
  {
    "year": 1990,
    "CO2": 353.86
  },
  {
    "year": 1991,
    "CO2": 354.93
  },
  {
    "year": 1992,
    "CO2": 356.34
  },
  {
    "year": 1993,
    "CO2": 357.1
  },
  {
    "year": 1994,
    "CO2": 358.36
  },
  {
    "year": 1995,
    "CO2": 360.04
  },
  {
    "year": 1996,
    "CO2": 362.2
  },
  {
    "year": 1997,
    "CO2": 363.24
  },
  {
    "year": 1998,
    "CO2": 365.39
  },
  {
    "year": 1999,
    "CO2": 368.35
  },
  {
    "year": 2000,
    "CO2": 369.45
  },
  {
    "year": 2001,
    "CO2": 370.76
  },
  {
    "year": 2002,
    "CO2": 372.7
  },
  {
    "year": 2003,
    "CO2": 375.07
  },
  {
    "year": 2004,
    "CO2": 377.17
  },
  {
    "year": 2005,
    "CO2": 378.63
  },
  {
    "year": 2006,
    "CO2": 381.58
  },
  {
    "year": 2007,
    "CO2": 383.1
  },
  {
    "year": 2008,
    "CO2": 385.78
  },
  {
    "year": 2009,
    "CO2": 387.17
  },
  {
    "year": 2010,
    "CO2": 388.91
  },
  {
    "year": 2011,
    "CO2": 391.5
  },
  {
    "year": 2012,
    "CO2": 393.31
  },
  {
    "year": 2013,
    "CO2": 395.78
  },
  {
    "year": 2014,
    "CO2": 398.04
  },
  {
    "year": 2015,
    "CO2": 400.18
  },
  {
    "year": 2016,
    "CO2": 402.73
  },
  {
    "year": 2017,
    "CO2": 406.36
  },
  {
    "year": 2018,
    "CO2": 408.15
  },
  {
    "year": 2019,
    "CO2": 411.03
  },
  {
    "year": 2020,
    "CO2": 413.59
  },
  {
    "year": 2021,
    "CO2": 415.49
  },
  {
    "year": 2022,
    "CO2": 418.13
  },
  {
    "year": 2023,
    "CO2": 419.48
  }
]

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