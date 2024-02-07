import {
    CHANGE_TRANSPORT_SUM,
    CHANGE_COMMUNAL_SUM,
    CHANGE_SUPERMARKET_SUM,
    CHANGE_RESTAURANT_SUM,
    CHANGE_OTHER_SUM,
    CHANGE_TRANSPORT_LIMIT,
    CHANGE_COMMUNAL_LIMIT,
    CHANGE_SUPERMARKET_LIMIT,
    CHANGE_RESTAURANT_LIMIT,
    CHANGE_OTHER_LIMIT
} from './actions';


const initialState = {
    transportSum: 0,
    communalSum: 0,
    supermarketSum: 0,
    restaurantSum: 0,
    otherExpensesSum: 0,
    transportLimit: 400,
    communalLimit: 1500,
    supermarketLimit: 1000,
    restaurantLimit: 800,
    otherExpensesLimit: 250
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
        case CHANGE_TRANSPORT_LIMIT: {
            return {...state, transportLimit: action.transportLimit};
        }
        case CHANGE_COMMUNAL_LIMIT: {
            return {...state, communalLimit: action.communalLimit};
        }
        case CHANGE_SUPERMARKET_LIMIT: {
            return {...state, supermarketLimit: action.supermarketLimit};
        }
        case CHANGE_RESTAURANT_LIMIT: {
            return {...state, restaurantLimit: action.restaurantLimit};
        }
        case CHANGE_OTHER_LIMIT: {
            return {...state, otherExpensesLimit: action.otherExpensesLimit};
        }
        default: {
            return state;
        }
    }
}