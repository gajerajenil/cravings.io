const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice"
const appStore = configureStore({
    // main reducer
    reducer: {
        cart: cartReducer,    //sub reducer
    },
})

export default appStore;