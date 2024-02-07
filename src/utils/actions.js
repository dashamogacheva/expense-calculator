export const CHANGE_TRANSPORT_SUM = 'CHANGE_TRANSPORT_SUM';
export const CHANGE_COMMUNAL_SUM = 'CHANGE_COMMUNAL_SUM';
export const CHANGE_SUPERMARKET_SUM = 'CHANGE_SUPERMARKET_SUM';
export const CHANGE_RESTAURANT_SUM = 'CHANGE_RESTAURANT_SUM';
export const CHANGE_OTHER_SUM = 'CHANGE_OTHER_SUM';
export const CHANGE_TRANSPORT_LIMIT = 'CHANGE_TRANSPORT_LIMIT';
export const CHANGE_COMMUNAL_LIMIT = 'CHANGE_COMMUNAL_LIMIT';
export const CHANGE_SUPERMARKET_LIMIT = 'CHANGE_SUPERMARKET_LIMIT';
export const CHANGE_RESTAURANT_LIMIT = 'CHANGE_RESTAURANT_LIMIT';
export const CHANGE_OTHER_LIMIT = 'CHANGE_OTHER_LIMIT';


export function changeTransportSum(transportSum) {
    return { type: CHANGE_TRANSPORT_SUM, transportSum };
}
export function changeCommunalSum(communalSum) {
    return { type: CHANGE_COMMUNAL_SUM, communalSum };
}
export function changeSupermarketSum(supermarketSum) {
    return { type: CHANGE_SUPERMARKET_SUM, supermarketSum };
}
export function changeRestaurantSum(restaurantSum) {
    return { type: CHANGE_RESTAURANT_SUM, restaurantSum };
}
export function changeOtherExpensesSum(otherExpensesSum) {
    return { type: CHANGE_OTHER_SUM, otherExpensesSum };
}
export function changeTransportLimit(transportLimit) {
    return { type: CHANGE_TRANSPORT_LIMIT, transportLimit };
}
export function changeCommunalLimit(communalLimit) {
    return { type: CHANGE_COMMUNAL_LIMIT, communalLimit };
}
export function changeSupermarketLimit(supermarketLimit) {
    return { type: CHANGE_SUPERMARKET_LIMIT, supermarketLimit };
}
export function changeRestaurantLimit(restaurantLimit) {
    return { type: CHANGE_RESTAURANT_LIMIT, restaurantLimit };
}
export function changeOtherExpensesLimit(otherExpensesLimit) {
    return { type: CHANGE_OTHER_LIMIT, otherExpensesLimit };
}