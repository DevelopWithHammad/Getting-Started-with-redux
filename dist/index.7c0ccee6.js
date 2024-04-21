let initialState = {
    count: 0,
    name: "Hammad Ur Rehman",
    age: 19
};
function reducer(state, action) {
    if (action.type === "post/increment") return {
        ...state,
        count: state.count + 1
    };
    else if (action.type === "post/decrement") return {
        ...state,
        count: state.count - 1
    };
    else if (action.type === "post/incrementBy") return {
        ...state,
        count: state.count + action.payload
    };
    return state;
}
initialState = reducer(initialState, {
    type: "post/increment"
});
console.log(initialState);
initialState = reducer(initialState, {
    type: "post/decrement"
});
console.log(initialState);
initialState = reducer(initialState, {
    type: "post/incrementBy",
    payload: 20
});
console.log(initialState);

//# sourceMappingURL=index.7c0ccee6.js.map
