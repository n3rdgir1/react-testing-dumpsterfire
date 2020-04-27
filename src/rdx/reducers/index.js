import { combineReducers } from 'redux';
import squares from './squares';
import nextPlayer from './nextPlayer';
import winner from './winner';

export default combineReducers({ squares, nextPlayer, winner });
