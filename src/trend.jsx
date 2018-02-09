import React from 'react';
import PropTypes from 'prop-types';

import './trend.css';

class Trend extends React.Component {
  constructor(props) {
    super(props);

    Trend.propTypes = {
      title: PropTypes.string.isRequired,
      isTrending: PropTypes.bool.isRequired,
    };
  }

  render() {
    return (
      <div className="trend-items">{this.props.title} {this.props.isTrending ?
        <i className="material-icons">trending_up</i> : null}
      </div>
    );
  }
}

export default Trend;
