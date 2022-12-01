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
    <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="navbar-brand">Recruiter</div>
            <div className="bg-dark text-white fs-5 font-weight-bold p-2 text-center">
              Create Post
            </div>
            <div className="d-grid gap-2 d-md-block">
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => {
                  navigate("/home");
                }}
              >Back
              </button>
            </div>
          </div>
        </nav>
    
        <ul className="list-group mt-5">
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