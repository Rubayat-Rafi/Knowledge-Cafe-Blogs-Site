import Bookmark from "./Bookmark";
import PropTypes from "prop-types";

const Bookmarks = ({bookmarks}) => {

    console.log(bookmarks,"bookmarks");
    return(
        <section className="md:w-1/3 bg-[rgba(17,17,17,5%)] py-5 rounded-lg">
            <h1 className="text-center text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </section>
    )
}

Bookmarks.prototype = {
    bookmarks: PropTypes.array,
}

export default Bookmarks;