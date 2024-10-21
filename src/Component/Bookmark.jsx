import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    console.log(bookmark, "hello")
    const {title} = bookmark;
    return(
        <section >
        <div className='bg-white p-4 m-4 rounded-xl'>
            <h3 className='text-lg'>{title}</h3>
        </div>
        </section>
    )
}

Bookmark.prototypes ={
    bookmark: PropTypes.object,
}

export default Bookmark;