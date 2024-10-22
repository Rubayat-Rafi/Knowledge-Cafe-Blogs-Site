import Bookmark from "./Bookmark";
import PropTypes from "prop-types";

const Bookmarks = ({bookmarks, readTime}) => {

    console.log(bookmarks,"bookmarks");
    return(
        <section className="md:w-1/3 bg-[rgba(17,17,17,5%)] py-5 rounded-lg">
            <div className="border border-[#6047EC]  py-5 rounded-lg mx-5 mb-6 bg-[#6047EC] bg-opacity-10">
                <h1 className="text-center text-[#6047EC] font-bold">Spent time on read : {readTime} min</h1>
            </div>

            <div className="">
            <h1 className="text-center text-xl font-bold">Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </section>
    )
}

Bookmarks.prototype = {
    bookmarks: PropTypes.array,
}

export default Bookmarks;