import * as AcionTypes from './ActionTypes';
import { actionTypes } from 'react-redux-form';


export const Promotions = (state = { isLoading: true,
                                        errMess: null,
                                        promotions: []}, action ) => {
    switch (action.type) {
        case AcionTypes.ADD_PROMOS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case AcionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []};

        case AcionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};