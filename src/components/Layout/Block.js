import PropTypes from 'prop-types';

function Block({ children, background= true }) {
  return (
    <div className={`px-5 py-3 mb-5 ${background ? 'bg-white shadow-fishHeader rounded-lg' : ''}`}>
      { children }
    </div>
  )
}

Block.propTypes = {
  background: PropTypes.bool,
};

Block.defaultProps = {
  background: true,
};

export default Block
