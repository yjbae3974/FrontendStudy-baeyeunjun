import React, { useState, useEffect } from "react";

export default function FunctionalComponent() {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };
  useEffect(() => {
    const interval = setInterval(() => 
      tick(), 1000
    );
    return () => {
        clearInterval(interval)
    };
  },[]);

  return <h1>It is {date.toLocaleTimeString()}</h1>;
}
