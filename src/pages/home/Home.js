import BlogCard from "../../components/blogCard/BlogCard";
import "./Home.css";

const Home = ({ blogList }) => {
    return (
        <div className="home">
            {
                blogList.map((blog) => (
                    <BlogCard key={blog.id} title={blog.title} author={blog.author} body={blog.body} id={blog.id} />
                ))
            }
        </div>
    );
}

export default Home;