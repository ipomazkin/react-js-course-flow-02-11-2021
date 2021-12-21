import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class NewsFilters extends PureComponent {
  render() {
    const { isHasPhoto, handleSetIsHasPhoto } = this.props;

    return (
      <div className="">
        <button onClick={() => handleSetIsHasPhoto(!isHasPhoto)}>{isHasPhoto ? 'has photo' : 'has no photo'}</button>
      </div>
    );
  }
}

export default NewsFilters;

NewsFilters.propTypes = {
  isHasPhoto: PropTypes.bool,
  handleSetIsHasPhoto: PropTypes.func,
};

NewsFilters.defaultProps = {};
