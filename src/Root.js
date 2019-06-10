//helper file for creates and export redux provider and store
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducers from 'reducers'

export default ({ children, initialState = {}}) => {
    
    const store = createStore(reducers, 
                              initialState, 
                              applyMiddleware(reduxPromise))

    return (
        <Provider store = {store}>
       {/* props.children is a react constructor it allows
        us to take the component we just created
        and use it to wrap other components */}
        {children} 
        </Provider>
    )
}