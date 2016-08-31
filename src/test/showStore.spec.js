import { expect, assert } from 'chai';
import { List, Map } from 'immutable';
import { addShow, removeShow } from '../app/stores/showStore';

const friends = Map({
  'id': 'friends',
  'title':'Friends',
  'language':'English',
  'tags': ['comedy', 'sitcom', 'us']
});

const breakBad = Map({
  'id': 'breaking_bad',
  'title': 'Breaking Bad',
  'language': 'English',
  'tags': ['drama']
})

describe('storeTest', () => {
  it('prints if this test works', () => {
    console.log('This test works');
  });

  describe('addShow', () => {
    it('adds an entry to the state', () => {
      const entry = friends;
      const state = Map({
        shows: List()
      });
      const expected = Map({
        shows: List.of(friends)
      })
      const nextState = addShow(state, entry);

      assert.deepEqual(nextState.toJS(), expected.toJS());

    })
  });

  describe('removeShow', () => {
    it('removes the wanted entry from the showStore', () => {
      const state = Map({
        shows: List.of(friends, breakBad)
      });
      const removableItemId = breakBad.get('id');
      const nextState = removeShow(state, removableItemId);
      const expected = Map({
        shows: List.of(friends)
      })

      assert.deepEqual(nextState.toJS(), expected.toJS());
    })
  })
})