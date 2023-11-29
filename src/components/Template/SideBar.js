import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Haosen Zhang</h2>
        <p><a href="mailto:zhanghaosen328@gmail.com">zhanghaosen328@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Greetings! I&apos;m Haosen Zhang, or Jonathan Zhang as I preferred. I&apos;m a 2023 graduate holding a Bachelor&apos;s degree in <a href="https://ece.ubc.ca/">Electrical Engineering from the esteemed University of British Columbia</a>. I&apos;m thrilled to use this page to record my journey, skills, and aspirations when stepping into the area of a professional engieer as a new graduate.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jonathan Zhang <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
