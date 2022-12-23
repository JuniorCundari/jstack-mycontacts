import PropTypes from 'prop-types';

import { StyledSpinner } from './styles';

export default function Spinner({ size, borderSize }) {
  return (
    <StyledSpinner
      size={size}
      borderSize={borderSize}
    />
  );
}

Spinner.propTypes = {
  size: PropTypes.number,
  borderSize: PropTypes.number,
};

Spinner.defaultProps = {
  size: 32,
  borderSize: 10,
};
