import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/life';

const Life = () => (
  <Main
    title="Life updates"
    description="My life updates."
  >
    <article className="post" id="life">
      <header>
        <div className="title">
          <h2><Link to="/life">Life updates</Link></h2>
          <p>I will keep updating my life here.</p>
        </div>
      </header>
      {data.map((life) => (
        <Cell
          data={life}
          key={life.title}
        />
      ))}
    </article>
  </Main>
);

export default Life;
