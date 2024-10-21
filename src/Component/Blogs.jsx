import { useState } from "react"
import "../../public/Blogs.json"
import { useEffect } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=> {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])


    return(
        <h1>Blogs</h1>
    )
}

export default Blogs