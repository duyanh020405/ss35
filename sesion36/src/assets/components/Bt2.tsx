import React, { useState } from 'react'

export default function Bt2() {
    const [hi,setHi]=useState<number>(1)
    const len =()=>{
        setHi(hi+1)
        document.title = "count "+hi
    }
  return (
    <div>
      <h4>Bai 2</h4>
      <button onClick={len}>Tang Count</button>
    </div>
  )
}
