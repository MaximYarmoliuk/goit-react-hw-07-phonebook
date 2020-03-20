import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactActions from "./contactsAction";

const onAddAction = (state, action) => {
  return [...state, action.payload];
};

const onRemoveAction = (state, { type, payload }) => {
  return state.filter(contact => contact.id !== payload);
};

const onChangeFilter = (state, { type, payload }) => {
  return payload;
};

const items = createReducer([], {
  [contactActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactActions.addContactsSuccess]: onAddAction,
  [contactActions.removeContactsSuccess]: onRemoveAction
});

const filter = createReducer("", {
  [contactActions.changeFilter]: onChangeFilter
});

//ERROR

const loading = createReducer(false, {
  [contactActions.fetchContactsRequest]: () => true,
  [contactActions.fetchContactsSuccess]: () => false,
  [contactActions.fetchContactsError]: () => false,

  [contactActions.addContactsRequest]: () => true,
  [contactActions.addContactsSuccess]: () => false,
  [contactActions.addContactsError]: () => false,
  
  [contactActions.removeContactsRequest]: () => true,
  [contactActions.removeContactsSuccess]: () => false,
  [contactActions.removeContactsError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading
});
