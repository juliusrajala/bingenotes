import actions from './actions';
import { Map, List } from 'immutable';
import { shows } from '../mockdata/mockdata';

const initialState = Map({
  shows: shows
});

const showReducer = (state = initalState, action) => {
  switch(action.type){
    case ADD_SHOW:
      console.log('ADD_SHOW');
      return state.set('shows', List.of(show))

    case REMOVE_SHOW:

  }
}

export function addShow(state, show){
  return state.set('shows', List.of(show, ...state.get('shows')));
};

export function removeShow(state, showId){
  return state.set('shows', state.get('shows')
    .filter(show => show.get('id') !== showId && show));
}

export const showActions = {
  addShow(show){
    return {
      type: ADD_SHOW,
      payload: show
    }
  },
  removeShow(showId){
    return {
      type: REMOVE_SHOW,
      payload: showId
    }
  }
}