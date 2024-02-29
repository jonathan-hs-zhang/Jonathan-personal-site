import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree"><Link to="/graduation">{data.degree}</Link></h4>
      <p className="school"><a href={data.link}>{data.school}</a>, {data.year}</p>
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Degree;
