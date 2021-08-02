import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { User } from "../../App";
import useFetch from "../../hooks/useFetch";
import "./BlogDetails.css";

const BlogDetails = () => {

    const { id, author } = useParams();

    const history = useHistory();
    const user = useContext(User);

    const [admin, setAdmin] = useState();

    useEffect(() => {
        setAdmin(user);
    }, [user])

    const blogUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const { data: blog } = useFetch(blogUrl);

    const handleClick = () => {
        fetch(blogUrl, {
            method: 'DELETE',
        }).then(() => {
            alert(`Blog deleted successfully.`);
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {blog &&
                <>
                    <div className="blog-details-image">
                        <img src={`https://source.unsplash.com/random/800x450?sig${id}`} alt="" />
                    </div>
                    <div className="blog-details-title">
                        <h2>{blog.title}</h2>
                    </div>
                    <div className="blog-details-body">
                        <p>{blog.body}</p>
                        <p>{blog.body}</p>
                    </div>
                    <div className="blog-details-author">
                        <span>By: {author}</span>
                    </div>
                    {admin && <button className="blog-details-delete" onClick={handleClick}>Delete</button>}
                </>
            }
        </div>
    );
}

export default BlogDetails;