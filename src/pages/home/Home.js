import BlogCard from "../../components/blogCard/BlogCard";
import useFetch from "../../hooks/useFetch";
import "./Home.css";

const Home = () => {

    const { data: blogList } = useFetch('https://jsonplaceholder.typicode.com/posts');

    return (
        <div className="home">
            {
                blogList ? blogList.map((blog) => (
                    <BlogCard key={blog.id} title={blog.title} author={blog.author} body={blog.body} id={blog.id} />
                )) : (<span>Loading ...</span>)
            }
        </div>
    );
}

export default Home;