// import { createStore } from "redux";
// import { productList } from "./productList";

// const initialState = {
//     post: 0,
//     name: "Hammad Ur Rehman",
//     followers: 19,
// }

// const INCREMENT = "post/increment";
// const DECREMENT = "post/decrement";
// const INCREMENTBY = "post/incrementBy";

// function reducer(state = initialState, action) {
//     if (action.type === INCREMENT) {
//         return { ...state, post: state.post + 1 }
//     }
//     else if (action.type === DECREMENT) {
//         return { ...state, post: state.post - 1 }
//     }
//     else if (action.type === INCREMENT) {
//         return { ...state, post: state.post + 1 }
//     }
//     else if (action.type === INCREMENTBY) {
//         return { ...state, followers: state.followers + action.payload }
//     }
// }

// const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__?.());


// store.dispatch({ type: INCREMENT });

// console.log(store.getState());

// store.dispatch({ type: DECREMENT })

// console.log(store.getState());

// store.dispatch({ type: INCREMENT })

// console.log(store.getState());

// store.dispatch({ type: INCREMENTBY, payload: 12 })

// console.log(store.getState());


//// ******** PRODUCTS ******** /////


import { createStore } from "redux";
import { productList } from "./productList";

const initialState = {
    products: productList,
    cardItems: [],
    wishList: [],
}

// Variables for action types
const ADD_CART_ITEMS = 'cart/addItem'
const REMOVE_CART_ITEMS = 'cart/removeItem';
const ADD_CART_ITEMS_QUANTITY = 'cart/addItemQuantity';
const REMOVE_CART_ITEMS_QUANTITY = 'cart/removeItemQuantity';
const ADD_WISHLIST_ITEM = 'wishList/addItem';
const REMOVE_WISHLIST_ITEM = 'wishList/removeItem';

function reducer(state = initialState, action) {
    if (action.type === ADD_CART_ITEMS) {
        return { ...state, cardItems: [...state.cardItems, action.payload] }
    }
    else if (action.type === REMOVE_CART_ITEMS) {
        return { ...state, cardItems: [...state.cardItems, state.cardItems.filter(cardItem => cardItem.productId !== action.payload.productId)] }
    }
    else if (action.type === ADD_CART_ITEMS_QUANTITY) {
        return {
            ...state,
            cardItems: state.cardItems.map((cardItem) => {
                if (cardItem.productId === action.payload.productId) {
                    return { ...cardItem, quantity: cardItem.quantity + 1 }
                }
                return cardItem
            })
        }
    }
    else if (action.type === REMOVE_CART_ITEMS_QUANTITY) {
        return {
            ...state,
            cardItems: state.cardItems.map((cardItem) => {
                if (cardItem.productId === action.payload.productId) {
                    return { ...cardItem, quantity: cardItem.quantity - 1 }
                }
                return cardItem;
            })
        }
    }
    else if (action.type === ADD_WISHLIST_ITEM) {
        return { ...state, wishList: [...state.wishList, action.payload] }
    }
    else if (action.type === REMOVE_WISHLIST_ITEM) {
        return { ...state, wishList: [...state.wishList, state.wishList.filter(item => item.productId !== action.payload.productId)] }
    }
    else {
        return state;
    }
}

const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch({ type: ADD_CART_ITEMS, payload: { productId: 1, quantity: 1 } })
store.dispatch({ type: ADD_CART_ITEMS, payload: { productId: 5, quantity: 2 } })
store.dispatch({ type: REMOVE_CART_ITEMS, payload: { productId: 5 } })
store.dispatch({ type: ADD_CART_ITEMS, payload: { productId: 7, quantity: 1 } })
store.dispatch({ type: ADD_CART_ITEMS_QUANTITY, payload: { productId: 7 } })
store.dispatch({ type: ADD_CART_ITEMS_QUANTITY, payload: { productId: 7 } })
store.dispatch({ type: REMOVE_CART_ITEMS_QUANTITY, payload: { productId: 7 } })
store.dispatch({ type: REMOVE_CART_ITEMS_QUANTITY, payload: { productId: 7 } })
store.dispatch({ type: ADD_WISHLIST_ITEM, payload: { productId: 12 } })
store.dispatch({ type: ADD_WISHLIST_ITEM, payload: { productId: 15 } })
store.dispatch({ type: REMOVE_WISHLIST_ITEM, payload: { productId: 12 } })

console.log("store ====>", store.getState());

