import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';


class Progress extends Component {
  render() {
    const {color, active, value} = this.props;
    const classes = classnames('progress-bar stripes', color, {
      animate: active,
    });

    return (
      <div className={classes}>
        <span style={{width: `${value}%`}}></span>
      </div>
    );
  }
}

Progress.propTypes = {
  color: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

export default Progress;
