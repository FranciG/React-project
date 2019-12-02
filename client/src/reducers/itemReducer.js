//State & actions comes from here
import uuid from "uuid";
import {
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM
    
  } from '../actions/types';

const initialState = {
    items: [
        {id: uuid(), name: "El paellas"},
        {id: uuid(), name: "Paellero regulero"},
        {id: uuid(), name: "El paellitas"},
        {id: uuid(), name: "El paellitas paella mixta"}
    ]
}
export default function (state = initialState, action) {
    switch (action.type) {
      case GET_ITEMS:
        return {
          ...state,
          
        }
        default:
            return state;
    }
}