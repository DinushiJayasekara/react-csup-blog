import { useState } from "react";
import "./CreateBlog.css";

const CreateBlog = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBlog = { title: title, body: body, author: author }

        console.log(newBlog);
    }

    return (
        <div className="create-blog">
            <h1>Add a New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label>Body: </label>
                <textarea
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea>
                <label>Author: </label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <button>Publish Blog</button>
            </form>
        </div>
    );
}

export default CreateBlog;