import React from 'react'
import './acceuil.scss'
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { data } from '../../components/data/visiteurs'
import Graph1 from '../../components/graph1';
import Graph2 from '../../components/graph2';
import Commentaire from '../../components/commentaire';

const Acceuil = () => {

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF8042' ];
   const datas = [
    { name: 'Nombre inscrit', value: 400  },
    { name: 'Nombre de visiteurs ', value: 300  },
    { name: 'Nombre de commentaires ', value: 300 },
    { name: 'Nombre de Likes', value: 200 },
    
  ];


  return (
    <div className='Container'>
     
      <div className="graphContainer">
        <div className="container">
          <Graph1/>
          <Graph2/>
          <Commentaire/>
        </div>
      </div>
    </div>
  )
}

export default Acceuil
