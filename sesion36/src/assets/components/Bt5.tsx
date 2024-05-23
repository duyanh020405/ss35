import React, { useEffect, useState } from 'react'

export default function Bt5() {
        const a = new Date()
        const [second,setSecond]=useState<number>(a.getSeconds())
        const [minute,setMinute]=useState<number>(a.getMinutes())
        const [hour,setHour]=useState<number>(a.getHours())
        setTimeout(()=>{
           setSecond(second+1)
           if(second===60){
            setSecond(0)
            setMinute(minute+1)
           }
           if(minute===60){
            setMinute(0)
            setHour(hour+1)
           }
        },1000)
        
  return (
    <div>
        <h4>Bai 5</h4>
      <p>Thoi gian hien tai {hour}:{minute}:{second}</p>
    </div>
  )
}