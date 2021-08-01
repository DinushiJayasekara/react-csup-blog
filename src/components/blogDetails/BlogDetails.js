import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./BlogDetails.css";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);


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
                        <span>{blog.body}</span>
                    </div>
                    <div className="blog-details-author">
                        <span>Written By User No: {blog.userId}</span>
                    </div>
                    <Link to="/create">
                        <button className="blog-details-delete">Delete</button>
                    </Link>
                </>
            }
        </div>
    );
}

export default BlogDetails;