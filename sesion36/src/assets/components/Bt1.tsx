import React, { useState } from 'react'

export default function Bt1() {
    
    const [tieuDe,setTieuDe]=useState<string>('')
    document.title=tieuDe
    const tieuDe2 =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setTieuDe(e.target.value)
    }
  return (
    <div>
        <h2>BTVN</h2>
        <h4>Bai 1</h4>
      <input type="text" onChange={tieuDe2} />
    </div>
  )
}
