import { List } from 'immutable';

const showList = [
  {
    'id': 'friends',
    'title':'Friends',
    'language':'English',
    'tags': ['comedy', 'sitcom', 'us']
  },
  {
    'id': 'breaking_bad',
    'title': 'Breaking Bad',
    'language': 'English',
    'tags': ['drama']
  },
  {
    'id':'star_trek',
    'title': 'Star Trek',
    'language': 'English',
    'tags': ['drama', 'comedy', 'scifi']
  }
];


export const shows = List.of(showList);