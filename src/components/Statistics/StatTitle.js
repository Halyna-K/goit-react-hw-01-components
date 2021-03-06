import PropTypes from 'prop-types';

export const Title = ({ title }) => {
  return <h2 className="title">{title}</h2>;
};

Title.defaultProps = {
  title: 'Upload stats',
};

Title.propTypes = {
  title: PropTypes.string,
};
