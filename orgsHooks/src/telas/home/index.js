import React from 'react';
import Topo from './compotentes/Topo';
import Produtores from './compotentes/Produtores';

export default function Home() {
  return <Produtores topo={Topo} />;
}
