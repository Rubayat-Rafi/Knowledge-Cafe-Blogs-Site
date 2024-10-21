import Bookmark from "./Bookmark";

const Bookmarks = ({bookmarks}) => {

    // console.log(bookmarks,"bookmarks");
    return(
        <section className="w-1/3">
            <h1 >Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </section>
    )
}
export default Bookmarks;