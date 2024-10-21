import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    console.log(bookmark, "hello")
    const {title} = bookmark;
    return(
        <section >
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
        </section>
    )
}

Bookmark.prototypes ={
    bookmark: PropTypes.object,
}

export default Bookmark;