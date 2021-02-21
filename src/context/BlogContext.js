import createDataContext from './createDataContext';

// add a Reducer
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'Add_Blog_Post':
            return [
                ...state, { 
                    id: Math.floor(Math.random() * 99999), 
                    title : `${action.payload.title} ${state.length + 1}`,
                    content: action.payload.content
                    
                }]
        case 'Delete_Blog_Post':
            return state.filter(blog => blog.id !== action.targetId)
    
        default:
            return state;
    }
}


const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'Add_Blog_Post', payload: { title, content }});
        callback();
    }
}

const deleteBlogPost = (dispatch) => {
    return (targetId) => {
        dispatch({ type: 'Delete_Blog_Post', targetId })
    }
}

const initialState = []

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, initialState);