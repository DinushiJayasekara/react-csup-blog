import "./BlogCard.css";

const BlogCard = (props) => {
    return (
        <div className="blog-card">
            <div className="blog-card-image">
                <img src={`https://source.unsplash.com/random/400x250?sig=${props.id}`} alt="" />
            </div>
            <div className="blog-card-title">
                <span>{props.title}</span>
            </div>
            <div className="blog-card-desc">
                <span>{props.body}</span>
            </div>
            <div className="blog-card-author">
                <span>By {props.author}</span>
            </div>
        </div>
    );
}

export default BlogCard;