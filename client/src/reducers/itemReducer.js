//State & actions comes from here
//Importing types from /actions/types
import {
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM,
    ITEMS_LOADING
    
  } from '../actions/types';

const initialState = {
    items: [],
    //When starts to get the data, loading is set to true, when it has de data, goes back to false
    loading: false
}
//When the object action comes in, the type of action is tested on the switch with action.type
export default function (state = initialState, action) {
    switch (action.type) {
      case GET_ITEMS:
        return {
          ...state,
          items: action.payload,
          loading: false
          
        };
        case DELETE_ITEM:
          return {
            ...state,
            items: state.items.filter(item => item._id !== action.payload)
          };


          case ADD_ITEM:  
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
      case ITEMS_LOADING:  
      return {
        ...state,
        loading: true
      };


        default:
            return state;
    }
}