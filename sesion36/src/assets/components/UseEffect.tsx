import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    useEffect(()=>{
        console.log("useEffect duoc goi");
    })
    const [count,setCount]=useState<number>(0)
    const [name,setName]=useState<string>('')
    const tang =()=>{
        setCount(count+1)
    }


    useEffect(()=>{
        console.log("UseEffect duoc goi");
        
    },[])


    

    
  return (
    <div>
      {
        /*Sinh ra de lam gi 
        - giai quyet cac van de side effect :(tac dung phu ben canh tac dung chinh)



          useEffect : là một hook sinh ra để làm gì ?, cú pháp như thế nào ?,
          cách sử dụng như thế nào ?
          useEffect là hàm nhận vào 2 tham số
           Cú pháp useEffect
          1.là callback function(arrow function)
           + khi component duoc mount vao DOM thii useEffect duoc goi
           + Khi moi lan component re-render thi useState duoc goi
          2.nhận vào một tham số là callback function  (arrow function) 
          và tham số thứ 2 là 1 mảng []
           + khi component duoc mount vao DOM thi useEffect duoc goi
           + khi moi lan component re-render thi useState khong duoc goi
          3.nhận vào 1 tham số là callback function (arrow function) 
          và tham só thứ 2 là 1 mảng (dependency) (sự phụ thuộc)
          +useEffect duoc goi khi component duoc mount vao DOM
        */
      }
      <button onClick={tang}>Click tang count</button>
    </div>
  )
}
