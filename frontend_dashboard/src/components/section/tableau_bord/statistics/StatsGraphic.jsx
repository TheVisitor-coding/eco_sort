import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts'

function StatsGraphic () {
  const data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Fev',
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: 'Avr',
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'Mai',
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: 'Juin',
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: 'Jul',
      uv: 3490,
      pv: 4300,
      amt: 2100
    },
    {
      name: 'Aou',
      uv: 3490,
      pv: 4300,
      amt: 2100
    },
    {
      name: 'Sep',
      uv: 3490,
      pv: 4300,
      amt: 2100
    },
    {
      name: 'Oct',
      uv: 3490,
      pv: 4300,
      amt: 2100
    },
    {
      name: 'Nov',
      uv: 3490,
      pv: 4300,
      amt: 2100
    },
    {
      name: 'Dec',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ]

  return (
    <>
      <AreaChart
        width={730} height={200} data={data}
        margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#17A638' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#17A638' stopOpacity={0} />
          </linearGradient>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#EFD600' stopOpacity={0.5} />
            <stop offset='95%' stopColor='#EFD600' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis tickLine={false} fontSize={10} dy={10} dataKey='name' />
        <YAxis tickLine={false} fontSize={10} dx={-10} />
        <CartesianGrid strokeDasharray='1 3' vertical={false} />
        <Tooltip />
        <Area type='monotone' dataKey='uv' stroke='#17A638' strokeWidth={4} fillOpacity={1} fill='url(#colorUv)' />
        <Area type='monotone' dataKey='pv' stroke='#EFD600' strokeWidth={4} fillOpacity={1} fill='url(#colorPv)' />
      </AreaChart>
    </>
  )
}

export default StatsGraphic
