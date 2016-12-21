import React, {Component, PropTypes} from 'react';
import ArtlingEdit from '../../artling/src/main';

class Artling extends Component {
  render() {
    return (
      <div className="artling">
        <h3>Artling</h3>
        <ArtlingEdit />
      </div>
    );
  }
}

Artling.contextTypes = {
  actions: PropTypes.object.isRequired,
};

export default Artling;
