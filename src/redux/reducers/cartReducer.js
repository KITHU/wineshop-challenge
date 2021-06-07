const initial_state = {
    cart:[]
}
export default (state=[],action)=>{
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            return {

            }
        case 'REMOVE_PRODUCT_FROM_CART':
            return {}
        default:
            return state
    }
}
