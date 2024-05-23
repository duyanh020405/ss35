import React, { useState } from 'react'

export default function Bt12() {
    const [minute,setMinute]=useState<number>(0)
    const [second,setSecond]=useState<number>(0)
    const [check,setCheck]=useState<boolean>(false)
    const [underSecond,setUnderSecond]=useState<number>(0)
    setTimeout(()=>{
       if(check===true){
        setUnderSecond(underSecond+1)
        if(underSecond===100){
            setSecond(second+1)
            setUnderSecond(0)
            if(second===60){
                setMinute(minute+1)
                setSecond(0)
            }
        }
        else{
            return
        }
       }
    },10)
    const stoped=()=>{
        if(check===true){
            setCheck(false)
        }
        else{
            setCheck(true)
        }
    }
    const start=()=>{
        setCheck(true)
        setSecond(0)
        setMinute(0)
        setUnderSecond(0)
    }


  return (
    <div>
      <p>Dem thoi gian  {minute}:{second}:{underSecond}</p>
      <button onClick={stoped}>Dung</button>
      <button onClick={start}>Bat dau</button>
    </div>
  )
}
