import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  addSmurf,
  updateSmurf
} from '../actions';

const SmurfForm       = props => {
  if (props.smurf === 'Reroute') props.history.push( '/' );
  const [name, setName]     = useState( props.smurf.name );
  const [age, setAge]       = useState( props.smurf.age );
  const [height, setHeight] = useState( props.smurf.height );
  const [id, setId]         = useState( props.smurf.id );
  const handleSubmit        = e => {
    e.preventDefault();
    console.log(id);
    id !== null ? props.updateSmurf( {
      id,
      name,
      height,
      age
    } ) : props.addSmurf( {
      name,
      age,
      height
    } );
    if (!props.error) props.history.push( '/' );
  };
  return (
    <div>
      <h2 className='text-center'>{`Add / Update Your Chosen Smurf`}</h2>
      <form onSubmit={e => handleSubmit( e )}>
        <div className='form-group'>
          <label className='mr-1' htmlFor='name'>Smurf Name: </label>
          <input
            onChange={e => setName( e.target.value )}
            placeholder="name"
            value={name}
            name="name"
            id="name"
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='age'>Smurf Age:</label>
          <input
            onChange={e => setAge( e.target.value )}
            placeholder="age"
            value={age}
            name="age"
            id='age'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='height'>Smurf Height</label>
          <input
            onChange={e => setHeight( e.target.value )}
            placeholder="height"
            value={height}
            name="height"
            id="height"
            className='form-control'
          />
        </div>
        <button className='btn btn-success'
                type="submit">Submit
        </button>
      </form>
    </div>);
};
const mapStateToProps = ( state, ownProps ) => {
  const editSmurf = ownProps.match.params.smurfId ? state.smurfs.filter( smurf => smurf.id.toString() === ownProps.match.params.smurfId )[0] : ({
    name  : '',
    age   : '',
    height: '',
    id    : null
  });

  return {
    smurf: editSmurf === undefined ? 'Reroute' : editSmurf,
    error: state.error
  };
};

export default connect( mapStateToProps, {
  addSmurf,
  updateSmurf
} )( SmurfForm );