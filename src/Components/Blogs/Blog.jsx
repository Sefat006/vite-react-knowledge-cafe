import React, { useEffect, useState } from 'react';
import Single_blog from '../Single_blog/Single_blog';
import PropTypes from 'prop-types';

const Blog = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=> {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs (data))
    }, [])
    return (
        <div className='md:w-2/3'>
            <h1 className='text-4xl'>Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Single_blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                    ></Single_blog>)
            }
        </div>
    );
};

Blog.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;