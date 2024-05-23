import React, { useState } from "react";
type Tabs = {
  id: number;
  title: string;
};

const tabs: Tabs[] = [
  {
    id: 1,
    title: "Trang chu",
  },
  {
    id: 2,
    title: "Gioi thieu",
  },
  {
    id: 3,
    title: "San pham",  
  },
  {
    id: 4,
    title: "Lien he",  
  },
];

export default function Bt3() {
  const [active, setActive] = useState<number>(2);
  return (
    <div>
        <h4>Bai 3</h4>
      {tabs.map((tab: Tabs) => (
        <button
          onClick={() => setActive(tab.id)}
          className={`${active === tab.id ? "active" : ""}`}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
}
