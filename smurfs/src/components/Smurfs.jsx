import React, { Component } from 'react';
import {connect} from 'react-redux';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    const {smurfs} = this.props;
    return (
      <div className="Smurfs text-center">
        <h1>Smurf Village</h1>
        <ul>
          {smurfs.map( smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          } )}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

const mapStateToProps = (state, ownProps) => {
  const displaySmurfs = ownProps.match.params.smurfId ? state.smurfs.filter(smurf => smurf.id.toString() === ownProps.match.params.smurfId) : state.smurfs;
  console.log(displaySmurfs);
  return {
    smurfs : displaySmurfs
  }
}

export default connect(mapStateToProps)(Smurfs);