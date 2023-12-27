const { createSlice } = require("@reduxjs/toolkit");

const grandTotalSlice = createSlice({
    name:'sum',
    initialState: [],
    reducers:{
        addPrice(state, action){
            state.push(action.payload)
        }
    },
});
export const { addPrice } = grandTotalSlice.actions;
export default grandTotalSlice.reducer;