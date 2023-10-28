import { useContext, useState } from "react";

function CreatePost(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const handlePostCreation = props.handlePostCreation;

    function handleChange(e) {
        if(e.target.name === "title") {
            setTitle(e.target.value);
        } else if(e.target.name === "content") {
            setContent(e.target.value);
        }
    }

    function handleSubmit() {
        handlePostCreation({title: title, content: content});
        setTitle("");
        setContent("");
    }

    return (
        <div>
            <p>Title: </p>
            <input name="title" value={title} onChange={handleChange} placeholder="Title"/>
            <input name="content" value={content} onChange={handleChange} placeholder="Content"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default CreatePost;