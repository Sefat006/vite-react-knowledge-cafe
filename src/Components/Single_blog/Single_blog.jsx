import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Single_blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {title, cover,author, author_img, hashtags, reading_time, posted_date} = blog ;
    // console.log(blog);
    return (
        <div className='mb-20'>
            <img className='w-full mb-4' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex mb-10 justify-between'>
                <div className='w-14 h-20 gap-5 flex'>
                    <img src={author_img} alt={`author pic ${author_img}`} />
                    <div>
                        <h3 className='font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>Reading time: {reading_time}</span>
                    <button onClick={ () => handleAddToBookmark(blog)} className='ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p className='mt-3 mb-3'>
                {
                    hashtags.map( (hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=> handleMarkAsRead(reading_time)} className='p-2 bg-gray-300 font-bold rounded-xl'>Mark As Read</button>
        </div>
    );
};

Single_blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Single_blog;