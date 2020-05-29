import { combineReducers } from 'redux';
import builder from './builder';
import orders from './orders';

export default combineReducers({ builder, orders });