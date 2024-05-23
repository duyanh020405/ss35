import React, { useState, useEffect } from 'react';

export default function Bt8() {
  const [month, setMonth] = useState<number>();
  const [season, setSeason] = useState<string>('');

  useEffect(() => {
    const a = new Date();
    const month1 = a.getMonth() + 1
    let season1 = '';

    if (month1 === 1 || month1 === 2 || month1 === 3) {
      season1 = 'Xuan';
    } else if (month1 === 4 || month1 === 5 || month1 === 6) {
      season1 = 'Ha';
    } else if (month1 === 7 || month1 === 8 || month1 === 9) {
      season1 = 'Thu';
    } else {
      season1 = 'Dong';
    }

    setMonth(month1);
    setSeason(season1);
  }, []);

  return (
    <div>
        <h4>Bai 8</h4>
      <p>Tháng: {month}</p>
      <p>Mùa: {season}</p>
    </div>
  );
}

