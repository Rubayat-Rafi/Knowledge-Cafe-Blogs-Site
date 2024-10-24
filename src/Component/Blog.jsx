import PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";
const Blog = ({blog, handleBookmarks, handleMarkAsRead}) => {

    const {id, cover, title, author_img, author, reading_time, hashtags, posted_date} = blog;

    return(
        <div className='border-b-2 mb-8'>
            <img src={cover} alt={`cover picture of the title ${title}`} className="rounded-lg" />

            <div className='my-6'>
            <div className="flex justify-between items-center">
                <div className='flex items-center'>
                <img src={author_img} alt="" className='w-12 h-12'/> 
                <div className="ml-4">
                    <h3 className='text-xl font-bold leading-10'>{author}</h3>
                    <p className='text-sm font-semibold opacity-60'>{posted_date}</p>
                </div>
                </div>
                <div>
                <p className='text-base opacity-60 font-medium flex items-center  '><a href="#">{reading_time} min read</a> <button className='p-2 text-xl' onClick={() => handleBookmarks(blog)}>
                <BsBookmarks /></button></p>
                </div>
            </div>
            <h2 className='mt-4 text-4xl font-bold leading-10'>{title}</h2>
            <p className='space-x-4 mt-2'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="#" className='text-base font-medium opacity-60 leading-10'>{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(id, reading_time)} className='mt-4 text-[#6047EC] underline text-base font-semibold'>Mark as read</button>
            
            </div>
        </div>
    )
}
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}
export default Blog

