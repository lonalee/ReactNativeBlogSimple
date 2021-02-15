import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
    // Context, Provider의 모듈화 (BlogContext,BlogProvider)

    // actions === { addBlogPost: (dispatch) => { return () => { dispatch}}}

    const Context = React.createContext();
    // like a pipe-line between provider and a component

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        const boundActions = {};
        for (const key in actions) {
            if (Object.hasOwnProperty.call(actions, key)) {
                boundActions[key] = actions[key](dispatch);
            }
        }

        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    }
    return { Context, Provider }
}

