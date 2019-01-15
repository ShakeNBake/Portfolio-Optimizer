import * as ACTIONS from '../constants/action_types.jsx';

const defaultState = {
};

export default function (currentState = defaultState, action) {
 let newState;
 switch (action.type) {

   case ACTIONS.TEST_ACTION_CONSTANT: {
     newState = {...currentState};
     return newState;
   }

   default:
     return currentState;
 }
}