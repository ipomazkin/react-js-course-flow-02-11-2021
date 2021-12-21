import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NewsFilters } from "./NewsFilters";

export class News extends PureComponent {
  state = {
    isHasPhoto: false,
    isHasLink: false,
    isSpecial: false,
  };

  handleSetIsHasPhoto = (value) => {
    this.setState({
      isHasPhoto: value,
    });
  };

  render() {
    return (
      <div className="">
        <NewsFilters
          isHasPhoto={this.state.isHasPhoto}
          handleSetIsHasPhoto={this.handleSetIsHasPhoto}
        />
      </div>
    );
  }
}

export default News;

News.propTypes = {};

News.defaultProps = {};
