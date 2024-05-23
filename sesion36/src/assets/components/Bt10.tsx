import React, { useEffect, useState } from 'react'
export default function Bt10() {
    const [key,setKey]=useState("");
    const [keyCode,setKeyCode]=useState<number>();
    useEffect(()=>{
        document.addEventListener('keydown', function(event) {
            setKey(event.key);
            setKeyCode((event.key.charCodeAt(0)));
        });
    })
  return (
    <div>
      <h4>Bai 10</h4>
        <p>'Bạn đã nhấn phím: ' {key}</p>
        <p>'Mã phím: '{keyCode}</p>
    </div>
  )
}