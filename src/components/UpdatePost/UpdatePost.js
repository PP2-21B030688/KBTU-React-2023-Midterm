import { useState } from "react";

function UpdatePost(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const handlePostUpdate = props.handlePostUpdate;

    function handleChange(e) {
        if(e.target.name === "title") {
            setTitle(e.target.value);
        } else if(e.target.name === "content") {
            setContent(e.target.value);
        }
    }

    function handleSubmit() {
        handlePostUpdate({title: title, content: content});
        setTitle("");
        setContent("");
    }

    return (
        <div>
            <p>New Title: </p>
            <input name="title" value={title} onChange={handleChange} placeholder="Title"/>
            <p>New Content: </p>
            <input name="content" value={content} onChange={handleChange} placeholder="Content"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default UpdatePost;