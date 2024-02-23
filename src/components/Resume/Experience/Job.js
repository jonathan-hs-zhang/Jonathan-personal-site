import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import { Link } from 'react-router-dom';

const Job = ({
  data: {
    name, position, url, startDate, endDate, jumpto, summary, highlights,
  },
}) => (
  <article className="jobs-container">
    <header>
      <h4><a href={url}>{name}</a> - {position}</h4>
      <p className="daterange"> {dayjs(startDate).format('MMMM YYYY')} - {endDate ? dayjs(endDate).format('MMMM YYYY') : 'PRESENT'}</p>
    </header>
    {jumpto ? (
      <h4><Link to={jumpto}>details page click here</Link></h4>
    ) : null}
    {summary ? (
      <Markdown
        options={{
          overrides: {
            p: {
              props: {
                className: 'summary',
              },
            },
          },
        }}
      >
        {summary}
      </Markdown>
    ) : null}
    {highlights ? (
      <ul className="points">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    ) : null}
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    jumpto: PropTypes.string.isRequired,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default Job;
