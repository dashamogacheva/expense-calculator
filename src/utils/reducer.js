import {
    CHANGE_TRANSPORT_SUM,
    CHANGE_COMMUNAL_SUM,
    CHANGE_SUPERMARKET_SUM,
    CHANGE_RESTAURANT_SUM,
    CHANGE_OTHER_SUM
} from './actions';


const initialState = {
    transportSum: 0,
    communalSum: 0,
    supermarketSum: 0,
    restaurantSum: 0,
    otherExpensesSum: 0
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TRANSPORT_SUM: {
            return {...state, transportSum: action.transportSum};
        }
        case CHANGE_COMMUNAL_SUM: {
            return {...state, communalSum: action.communalSum};
        }
        case CHANGE_SUPERMARKET_SUM: {
            return {...state, supermarketSum: action.supermarketSum};
        }
        case CHANGE_RESTAURANT_SUM: {
            return {...state, restaurantSum: action.restaurantSum};
        }
        case CHANGE_OTHER_SUM: {
            return {...state, otherExpensesSum: action.otherExpensesSum};
        }
        default: {
            return state;
        }
    }
}