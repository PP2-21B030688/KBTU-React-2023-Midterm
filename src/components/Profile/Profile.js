import { useState } from "react";

function Profile() {
    const [isEditorVisible, setIsEditorVisible] = useState(false);
    const [name, setName] = useState("Name");
    const [bio, setBio] = useState("Interesting bio");
    const [email, setEmail] = useState("email@email.com");
    const [password, setPassword] = useState("qwerty");

    function handleChange(e) {
        console.log(e.target.name);
        if(e.target.name === "name") {
            setName(e.target.value);
        } else if(e.target.name === "email") {
            setEmail(e.target.value);
        } else if(e.target.name === "bio") {
            setBio(e.target.value);
        } else if(e.target.name === "password") {
            setPassword(e.target.value);
        }
    }

    return (
        <div className="profile">
            <p className="profile-element">{name}</p>
            <p className="profile-element">{email}</p>
            <p className="profile-element">{bio}</p>
            <p className="profile-element">{password}</p>

            {
                isEditorVisible ? (
                    <>
                        <button onClick={() => setIsEditorVisible(!isEditorVisible)} className="profile-btn">Finish editing profile</button>
                        <div className="editor">
                            <input name="name" value={name} onChange={handleChange} className="editor-input"/>
                            <input name="email" value={email} onChange={handleChange} className="editor-input"/>
                            <input name="password" value={password} onChange={handleChange} className="editor-input"/>
                            <input name="bio" value={bio} onChange={handleChange} className="editor-input"/>
                        </div>
                    </>
                )
                    :
                (
                    <button onClick={() => setIsEditorVisible(!isEditorVisible)} className="profile-btn">Edit profile</button>
                )
            }
        </div>
    );
}

export default Profile;