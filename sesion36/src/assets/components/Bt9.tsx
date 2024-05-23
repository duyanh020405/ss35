import React, { useState } from 'react'

export default function Bt9() {
    const [i,setI]=useState<number>(0)
    setTimeout(()=>{
        setI(i+1)

    },1000)
  return (
    <div>
        <h4>Bai 9</h4>
      <p>Thoi gian da troi qua : {i} giay</p>
    </div>
  )
}
