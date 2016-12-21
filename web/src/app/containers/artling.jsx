import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Artling from '../components/artling';

class ArtlingContainer extends Component {

  render() {
    return (
      <div className="artling-container">
        <Artling />
      </div>
    )
  }

}

ArtlingContainer.contextTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(
  state => state,
  dispatch => ({}),
)(ArtlingContainer);
