# cravings.io

1) Lazy loading is a technique that delays loading resources until they are needed, which can improve performance and save system resources. 

# How it works

    1) Lazy loading identifies non-critical resources and only loads them when needed. 
    2) For example, a web page might display a placeholder image for an image that's below the fold, and only load the full image when the user scrolls down. 
    3) Lazy loading can occur during user interactions like scrolling or navigation. 


2) What Does Lifting State Up Mean in React?
In React, lifting state up refers to the technique of moving a shared state to a common ancestor of the components that need to access or modify it. Instead of maintaining separate state values in each component, the state is kept in the parent component. This parent component then passes the state and any necessary functions as props to its child components.

By doing this, the child components can access and interact with the shared state, ensuring consistency across the application.

3) Higher Order component
 a higher-order component is a function that takes a component and returns a new component.

const EnhancedComponent = higherOrderComponent(WrappedComponent);

Whereas a component transforms props into UI, a higher-order component transforms a component into another component.

4) props driling

Prop drilling is a React technique for passing props, or data, down through multiple layers of components. It can be problematic because it can lead to code that's difficult to maintain and understand. 

# How it works
A parent component passes data to a child component 
The child component then passes the data to another child component 
This process continues until the data reaches the component that needs it 

# Potential issues
Code duplication: The same data is passed to multiple components, even if they don't need it 

Debugging: It can be difficult to debug code that's tightly coupled and has unexpected behavior 

Reusability: It can be difficult to reuse components that are tightly coupled 

# Solutions
Component composition
Put components in areas where they can access the props they need without passing them through intermediaries 
Avoid context
Using context can make it easier to overuse it, which can make components harder to reuse 

5) context

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

create context using  user = createContext()
use context = useContext(user)

NOTE : in class base component we can not acess the usecontext() hook so for that we can use <UserContect.Consumer> inside  this we have to call the callback fuction to access the data.

6) Redux - it offers easy debugging

-> Two Types writing redux
    1) React Redux(venilla) - older version   
     cons:
        "Configuring a Redux store is too complicated"
        "I have to add a lot of packages to get Redux to do anything useful"
        "Redux requires too much boilerplate code"

    2) React Redux Toolkit - letest version

 3.  const appStorage = configureStore({})
    4. <Provider store={appStorage}> <Provider>  // add this to main app , provider is used to connect configure storage to react app , provider is coming from react-redux

    5. 
    # modify the cart

            import { createSlice } from "@reduxjs/toolkit";

        const cartSlice = createSlice({
            name: "Cart",
            initialState: {
                items:[]
            },
            reducers: {
                addItem: (state,action) => {
                    state.items.push(action.payload)
                },
                removeItem: (state) => {
                    state.items.pop();
                },
                clearCart: () => {
                    state.items.length = 0;
                }
            }
        })

        export const { addItem, removeItem, clearCart} = cartSlice.actions;
        export default cartSlice.reducer;

    6. add reducer to main Reducer

    const { configureStore } = require("@reduxjs/toolkit");
        import cartReducer from "./cartSlice"
        const appStorage = configureStore({
            // main reducer
            reducer: {
                cart: cartReducer,    //sub reducer
            },
        })

        export default appStorage;

    7. 
      //Subscribing to store using selector
      const cartItems = useSelector((store) => store.cart.items);   //store obj is coming from provider

    8. dispatch an action when click to add
     const dispatch = useDispatch();
  
        const handleAddItem = () => {
            //Dispatch an action
            dispatch(addItem("pizza")); 
        }