/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import C from './types';
import axios from 'axios';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurfs = () => async dispatch => {
  dispatch( {type: C.FETCH_SMURF_START} );
  try {
    const res = await axios.get( 'http://localhost:3333/smurfs' );
    dispatch( {
      type   : C.FETCH_SMURF_SUCCESS,
      payload: res.data
    } );
  } catch (error) {
    dispatch( {
      type   : C.FETCH_SMURF_FAILURE,
      payload: error
    } );
  }
};

export const addSmurf = smurf => async dispatch => {

  dispatch( {type: C.ADD_SMURF_START} );
  try {
    const res = await axios.post( 'http://localhost:3333/smurfs', smurf );
    dispatch( {
      type   : C.ADD_SMURF_SUCCESS,
      payload: res.data
    } );
  } catch (error) {
    dispatch( {
      type   : C.ADD_SMURF_FAIL,
      payload: error
    } );
  }
};

export const updateSmurf = smurf => async dispatch => {
  dispatch({type: C.UPDATE_SMURF_START});
  try {
    const res = await axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf);
    dispatch({type: C.UPDATE_SMURF_SUCCESS, payload: res.data})
  } catch(error) {
    dispatch({type: C.UPDATE_SMURF_FAILURE, payload: error});
  }
}

export const deleteSmurf = id => async dispatch => {
  dispatch({type: C.DELETE_SMURF_START});
  try {
    const res = await axios.delete(`http://localhost:3333/smurfs/${id}`);
    dispatch({type: C.DELETE_SMURF_SUCCESS, payload: res.data});
  } catch (error) {
    dispatch({type:C.DELETE_SMURF_FAILURE, payload: error})
  }
}