import React, { useState, useReducer } from 'react';

const BlogContext = React.createContext(); 
// like a pipe-line between provider and a component

// add a Reducer
const blogReducer = (state, action) => {
    console.log('what is state in blogReducer', state)
    switch (action.type) {
        case 'Add_Blog_Post':
            return [...state, { title : `Blog Post #${state.length + 1}`}]
    
        default:
            return state;
    }
}

export const BlogProvider = ({ children }) => {

    // const [blogPosts, setBlogPosts] = useState([]);
    const [blogPosts, dispatch] = useReducer(blogReducer, [{ title: 'test'}]);

    // const addBlogPost = () => {
    //     setBlogPosts([
    //         ...blogPosts,
    //         {
    //             title: `Blog Post #${blogPosts.length + 1}`
    //         }
    //     ])
    // }

    const addBlogPost = () => {
        dispatch({ type: 'Add_Blog_Post'})
    }

    return <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
        {children}
        {/*  */}
    </BlogContext.Provider>
}

export default BlogContext;