import React from 'react';
import PropTypes from 'prop-types';

export default function CourseCard(props) {
  const englishName = props.course.englishName ?
    `(🇺🇸→ ${props.course.englishName})`
    : '(🇺🇸→ No translation available)';
  const separator = '-';
  return (
    <div>
      <nav
        className="navbar navbar-light bg-light justify-content-between"
      >
        <span>{props.course.courseNumber} {separator} {props.course.name} {englishName}</span>
      </nav>
      <p className="card-subcontent">{props.course.description}</p>
    </div>
  );
}

CourseCard.defaultProps = {
  onClickLink: () => {},
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    courseNumber: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ua: PropTypes.string.isRequired,
    description: PropTypes.string,
    englishName: PropTypes.string,
  }).isRequired,
  onClickLink: PropTypes.func,
};
