import React from 'react'
import { commentaire } from './data/commentaires';

const Commentaire = () => {
  return (
    <span className="graph graph3">
        <h3>Last Comment</h3>

         <div className="container">

              
        {
            commentaire.map((commentaire,index)=>(    
                  
                  <span className="content">
                    <img src="https://img.icons8.com/?&id=2951&format=png&color=1c8ff0" alt=""  />

                      <span className='descrip'>

                      <span style={{display:'flex',gap:"10px" , alignItems:'center'}}>
                         <span style={{fontWeight:'bold'}}>{commentaire.userName}</span>
                        {commentaire.content}

                      </span>
                      <span className="time">{commentaire.time}</span>
                      </span>
              
                   </span>
                   
                  ))
                }
                   
       
           </div>
        
    </span>
  )
}

export default Commentaire ;
