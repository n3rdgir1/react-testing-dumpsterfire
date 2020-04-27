import { combineReducers } from 'redux';
import squares from './squares';
import nextPlayer from './nextPlayer';

export default combineReducers({ squares, nextPlayer });
