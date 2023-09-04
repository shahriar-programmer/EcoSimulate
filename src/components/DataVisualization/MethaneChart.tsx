import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const methaneData = [{year: 1984, mean: 1644.85},
  {year: 1985, mean: 1657.29},
  {year: 1986, mean: 1670.09},
  {year: 1987, mean: 1682.70},
  {year: 1988, mean: 1693.15},
  {year: 1989, mean: 1704.53},
  {year: 1990, mean: 1714.43},
  {year: 1991, mean: 1724.82},
  {year: 1992, mean: 1735.48},
  {year: 1993, mean: 1736.50},
  {year: 1994, mean: 1742.07},
  {year: 1995, mean: 1748.88},
  {year: 1996, mean: 1751.28},
  {year: 1997, mean: 1754.53},
  {year: 1998, mean: 1765.54},
  {year: 1999, mean: 1772.34},
  {year: 2000, mean: 1773.33},
  {year: 2001, mean: 1771.22},
  {year: 2002, mean: 1772.66},
  {year: 2003, mean: 1777.33},
  {year: 2004, mean: 1777.05},
  {year: 2005, mean: 1774.16},
  {year: 2006, mean: 1774.96},
  {year: 2007, mean: 1781.37},
  {year: 2008, mean: 1787.01},
  {year: 2009, mean: 1793.53},
  {year: 2010, mean: 1798.93},
  {year: 2011, mean: 1803.15},
  {year: 2012, mean: 1808.12},
  {year: 2013, mean: 1813.41},
  {year: 2014, mean: 1822.57},
  {year: 2015, mean: 1834.26},
  {year: 2016, mean: 1843.12},
  {year: 2017, mean: 1849.58},
  {year: 2018, mean: 1857.33},
  {year: 2019, mean: 1866.58},
  {year: 2020, mean: 1878.93},
  {year: 2021, mean: 1895.27},
  {year: 2022, mean: 1911.80}]

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