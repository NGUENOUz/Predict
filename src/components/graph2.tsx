import React from 'react'
import { Cell, Pie, PieChart } from 'recharts'
import { datas } from './data/statistique';

const Graph2 = () => {
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF8042' ];

  return (
    <span className="graph graph2">
          
          <div className="Date">
          <span>
             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
            </svg>

          </span>
              
          <span>
            {/* ici c'est la date du jour en question ...  */}
                24 Juillet 2024
          </span>
          <span>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
            </svg>

          </span>


          </div>
        
          <PieChart width={200} height={200} className='pieChart'  >
        <Pie
          data={datas}
          cx={70}
          cy={100}
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {datas.map((entry,index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
  
          </PieChart>

          <div className="info">
             {
                datas.map((d)=>(
                    <span className="item">
                      <>
                       <span className='dot' style={{background:d.color}}></span>
                       <span>{d.name}</span>
                      </>
                       <span className='value' style={{fontWeight:'bold'}}>{d.value}</span>
                     </span>
                ))
             }
           

          </div>
            
          </span>
  )
}

export default Graph2
