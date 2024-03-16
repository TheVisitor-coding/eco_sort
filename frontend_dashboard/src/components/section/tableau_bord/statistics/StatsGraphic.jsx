import { XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from 'recharts'
import { dataChart } from '../../../../data/stats'

function StatsGraphic () {
  return (
    <>
      <AreaChart
        width={730} height={200} data={dataChart}
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
