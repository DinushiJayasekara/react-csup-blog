import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CreateBlog.css";

const CreateBlog = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBlog = { title: title, userId: author, body: body }

        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newBlog),
        }).then((response) =>
            response.json()
        ).then((json) => {
            alert(`Blog added successfully.`);
            history.push('/');
        })
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