import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

const SmurfForm       = props => {
  const [name, setName] = useState(props.smurf.name);
  const [age, setAge] = useState(props.smurf.age);
  const [height, setHeight] = useState(props.smurf.height);
  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf({name,age,height});
    if (!props.error) props.history.push('/');
  }
  return (
    <div>
      <h2 className='text-center'>{`Add / Update Your Chosen Smurf`}</h2>
      <form onSubmit={e=>handleSubmit(e)}>
        <div className='form-group'>
          <label className='mr-1' htmlFor='name'>Smurf Name: </label>
          <input
            onChange={e=>setName(e.target.value)}
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
            onChange={e=>setAge(e.target.value)}
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
            onChange={e=>setHeight(e.target.value)}
            placeholder="height"
            value={height}
            name="height"
            id="height"
            className='form-control'
          />
        </div>
        <button className='btn btn-success'
                type="submit">Submit</button>
      </form>
    </div>);
};
const mapStateToProps = ( state, ownProps ) => {
  const editSmurf = ownProps.match.params.id ? state.smurfs.filter( smurf => smurf.id.toString() === ownProps.match.params.smurfId )[0] : ({
    name  : '',
    age   : '',
    height: ''
  });
  return {
    smurf: editSmurf,
    error: state.error
  };
};

export default connect( mapStateToProps, {addSmurf} )( SmurfForm );