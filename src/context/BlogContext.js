import createDataContext from './createDataContext';

// add a Reducer
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'Add_Blog_Post':
            return [...state, { title : `Blog Post #${state.length + 1}`}]
    
        default:
            return state;
    }
}


const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'Add_Blog_Post'})
    }
}

const initialState = []

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, initialState);