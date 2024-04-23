import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w-1/3 my-7 justify-center '>
            <h2 className='text-4xl'>
                Reading Time : {readingTime}
            </h2>
            <div className='rounded-xl  p-5 bg-slate-500 '>
                <h2 className='text-3xl text-white'>Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map( (bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};

export default Bookmarks;