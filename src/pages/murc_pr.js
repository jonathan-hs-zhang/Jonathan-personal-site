import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const murc = () => (
  <Main
    title="Presentation"
    description="MURC Presenation happened on March 28, 2023"
  >
    <article className="post" id="murc">
      <header>
        <div className="title">
          <h2><Link to="/murc">3D printer temperature controller presentation</Link></h2>
        </div>
      </header>
      <div className="details">
        <div className="description">
          <p> Kezi Li (on the right), a UBC PhD student, who mentored me this research.</p>
          <p><a href="https://www.linkedin.com/in/kezi-li/">His linkedin webpage</a></p>
          <img src="/images/murc/kezi.jpeg" alt="1" width="450" height="600" />
          <p> Our design can be seen in the poster.</p>
          <p> Presented this poster at MURC finally on March 28, 2023. </p>
          <img src="/images/murc/poster.png" alt="1" width="800" height="600" />
          <p> There are some pictures of me presenting at MURC. </p>
          <img src="/images/murc/audience1.jpeg" alt="1" width="800" height="600" />
          <img src="/images/murc/audience2.jpeg" alt="1" width="800" height="600" />
        </div>
      </div>
    </article>
  </Main>
);

export default murc;
