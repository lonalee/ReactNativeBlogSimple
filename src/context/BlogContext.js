import createDataContext from './createDataContext';

// add a Reducer
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'Add_Blog_Post':
            return [
                ...state, { 
                    id: Math.floor(Math.random() * 99999), 
                    title : `Blog Post #${state.length + 1}`
                }]
        case 'Delete_Blog_Post':
            return [
                ...state.filter(blog => blog.id !== action.targetId)
            ]
    
        default:
            return state;
    }
}


const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'Add_Blog_Post'})
    }
}

const deleteBlogPost = (dispatch) => {
    return (targetId) => {
        dispatch({ type: 'Delete_Blog_Post', targetId })
    }
}

const initialState = []

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, initialState);