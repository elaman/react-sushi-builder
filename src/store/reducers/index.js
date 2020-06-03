import { combineReducers } from 'redux';
import builder from './builder';
import orders from './orders';
import auth from './auth';

export default combineReducers({ builder, orders, auth });