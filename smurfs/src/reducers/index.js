/*
  Be sure to import in all of the action types from `../actions`
*/
import C from '../actions/types';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs   : [],
  isLoading: false,
  error    : null
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default ( state = initialState, action ) => {
  const {type, payload} = action;
  switch (type) {
    case C.FETCH_SMURF_START:
      return {
        ...state,
        isLoading: true,
        error    : null
      };
    case C.FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs   : payload,
        error    : null
      };

    case C.FETCH_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error    : payload
      };
    case C.ADD_SMURF_START:
      return {
        ...state,
        isLoading: true,
        error    : null
      };
    case C.ADD_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs   : payload,
        error    : null
      };
    case C.ADD_SMURF_FAIL:
      return {
        ...state,
        isLoading: false,
        error    : payload
      };
    case C.UPDATE_SMURF_START:
      return {
        ...state,
        isLoading: true,
        error    : null
      }
    case C.UPDATE_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs   : payload,
        error    : null
      }
    case C.UPDATE_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error    : payload
      }
    default:
      return state;
  }
}