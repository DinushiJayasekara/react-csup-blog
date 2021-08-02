import BlogCard from "../../components/blogCard/BlogCard";
import useFetch from "../../hooks/useFetch";
import "./Home.css";
import { uniqueNamesGenerator, names } from 'unique-names-generator';


const Home = () => {

    const { data: blogList } = useFetch('https://jsonplaceholder.typicode.com/posts');

    const authorList = [];

    for (let i = 0; i < 100; i++) {
        authorList.push(uniqueNamesGenerator({
            dictionaries: [names, names],
            style: 'capital',
            length: 2,
            separator: ' ',
        }));
    }

    return (
        <div className="home">
            {
                blogList ? blogList.map((blog) => (
                    <BlogCard key={blog.id} title={blog.title} author={`${authorList[blog.id]}`} body={blog.body} id={blog.id} />
                )) : (<span>Loading ...</span>)
            }
        </div>
    );
}

export default Home;