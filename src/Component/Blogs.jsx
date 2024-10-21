import "../../public/Blogs.json"
import { useState } from "react"
import { useEffect } from "react";
import Blog from "./blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=> {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])


    return(
        <section className="md:w-2/3">
            {
                blogs.map(blog => <Blog key={blogs.id} blog={blog}></Blog>)
            }
        </section>

    )
}

export default Blogs