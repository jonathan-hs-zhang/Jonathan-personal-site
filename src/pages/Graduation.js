import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const graduation = () => (
  <Main
    title="Graduation"
    description="info about graduation"
  >
    <article className="post" id="Graduation ">
      <header>
        <div className="title">
          <h2><Link to="/graduation">All my graduation inforamtion </Link></h2>
        </div>
      </header>
      <div className="details">
        <div className="description">
          <p> Got me degree on May 2023</p>
          <img src={`${process.env.PUBLIC_URL}${'/images/degree.pdf'}`} alt="1" />
          <p> Some photos taken with my best friends and in front of IKB library </p>
          <img src={`${process.env.PUBLIC_URL}${'/images/grad1.pdf'}`} alt="1" />
          <img src={`${process.env.PUBLIC_URL}${'/images/grad2.pdf'}`} alt="1" />
          <img src={`${process.env.PUBLIC_URL}${'/images/grad3.pdf'}`} alt="1" />
          <p> Here is my program completion letter attached.</p>
          <img src={`${process.env.PUBLIC_URL}${'/images/program_completion_letter.pdf'}`} alt="1" />
          <p> Below is my ubc official transcript. </p>
          <img src={`${process.env.PUBLIC_URL}${'/images/transcript1.pdf'}`} alt="1" />
          <img src={`${process.env.PUBLIC_URL}${'/images/transcript2.pdf'}`} alt="1" />
          <img src={`${process.env.PUBLIC_URL}${'/images/transcript3.pdf'}`} alt="1" />
        </div>
      </div>
    </article>
  </Main>
);

export default graduation;
