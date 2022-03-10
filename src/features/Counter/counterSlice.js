const { createSlice } = require ('@reduxjs/toolkit')

const userSlice = createSlice({
    name: ' user',
    initialState: 0,
    reducers: {
        increase(state){
            return state + 1;
        },

        decrease(state){
            return state -1;
        }
    }
});

const { actions , reducer } = userSlice;
export const { increse, decrease } = actions;
export default reducer;