'use client';

import { MarketInstrument } from '@/app/types/markets';
import { useEffect, useState } from 'react';
import Card from '../molecules/Card';

const Cards = () => {
  const [graphs, setGraphs] = useState<MarketInstrument[]>();

  useEffect(() => {
    fetch('/api/graph')
      .then((res) => res.json())
      .then((data) => setGraphs(data));
  }, []);

  return graphs?.map((graph) => <Card {...graph} />);
};

export default Cards;
