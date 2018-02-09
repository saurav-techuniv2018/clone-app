import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  constructor(props) {
    super(props);

    Card.propTypes = {
      id: PropTypes.string.isRequired,
      colorClass: PropTypes.string.isRequired,
      children: PropTypes.element.isRequired,
    };
  }

  render() {
    return (
      <div id={this.props.id} className={this.props.colorClass}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
