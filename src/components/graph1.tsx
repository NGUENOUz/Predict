import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { data } from './data/visiteurs'

const Graph1 = () => {
  return (
    <span className="graph graph1">
    <h3>Nombre de visite par jours</h3>

    <ResponsiveContainer width="100%" height="100%">
    <BarChart
 
      data={data}
      margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
             }}
      barSize={25}
      >
    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} tickLine={false}/>
    <Tooltip />
    <Legend />
    <CartesianGrid strokeDasharray="3 3" />
   <Bar dataKey="nbre_visiteurs" fill="#1c8ff0" background={{ fill: '#eee' }} />
   </BarChart>
 </ResponsiveContainer>

 </span>
  )
}

export default Graph1
