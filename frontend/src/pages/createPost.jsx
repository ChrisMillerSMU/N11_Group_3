import { useState } from "react";
import { TextField } from '../components/TextField';
import { TextAreaField } from '../components/textAreaField';
import { editPost, addPost } from "../api/api";
import { useNavigate } from "react-router-dom";

export const CreatePost = (account, description) => {
    const [newJobDescription, setNewJobDescription] = useState("");

    const navigate = useNavigate(description);

    const postSuccess = () => {
        navigate('/home');
    }

    return <>
    <button type="button"
    onClick={() => { navigate('/home'); }}> Back </button>
        <ul className="list-group">
            <li className="list-group-item">
                <div className="row">
                    <div className="col-12">
                        <TextAreaField label="Description of post"
                            value={newJobDescription}
                            setValue={setNewJobDescription} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <button type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                    addPost({company:account.account.email, date_time:new Date().toLocaleString(), description:newJobDescription}, postSuccess);
                            }}>
                            Add Post
                        </button>
                    </div>
                </div>
            </li>
        </ul>

    </>

}