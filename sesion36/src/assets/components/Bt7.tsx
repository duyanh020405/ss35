import React, { useState } from 'react'

export default function Bt7() {
    const [in1,set1]=useState<number>()
    const [in2,set2]=useState<number>(0)
    const count =()=>{
        if(in1===undefined){
            set1(0)
            set2(1)
        }
        else{
            set1(in1+1)
            set2(in2+1)
        }
        
    }

  return (
    <div>
        <h4>Bai 7</h4>
      <p>Gia tri truoc :{in1}</p>
      <p>Gia tri sau :{in2}</p>
      <button onClick={count}>Tang count</button>
      
    </div>
  )
}
