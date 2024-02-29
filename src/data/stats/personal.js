import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2001-11-26T08:35:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'Metropolis visited',
    label: 'Metropolis visited',
    value: 59,
    link:
      'https://www.google.com/maps/d/embed?mid=1nfvx87iZdcmmsT4EX1MTMtezSZRzFw8&ehbc=2E312F',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Vancouver, BC, Canada',
  },
];

export default data;
