import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./BlogDetails.css";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    // http://names.drycodes.com/100?nameOptions=girl_names&separator=space

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
                        <span>By: {blog.userId}</span>
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