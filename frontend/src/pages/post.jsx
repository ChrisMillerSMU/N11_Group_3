import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { delPost, findSubmissionByAthlete, addSubmission } from "../api/api";

export const Post = ({ account, post }) => {
    const navigate = useNavigate();
    const [state, setState] = useState(true);
    const [apply, setApply] = useState("Apply");

    const getSuccess = (output) => {
        if(output){
            setApply("Already applied!");
        }
        else{
            setApply("Application successful!");
            addSubmission({post:post.postID, athlete:account.email});
        }
    }

    return <>
        {state && <div className="card mt-3">
            <div className="card-header">
                Company contact: {post.company}
            </div>
            <div className="card-body">
                <div className="card-text">{post.description}</div>
            </div>
            {account.isAthlete && <button type="button"
                className="btn btn-primary"
                onClick={() => {
                    findSubmissionByAthlete(post.postID, account.email, getSuccess);
                }}>{apply}</button>}
            {!account.isAthlete && <>
                <button type="button"
                onClick={() => {
                    delPost(post.postID);
                    setState(false);
                }}>Delete</button>

                <button type="button"
                onClick={() => {
                    navigate(`/postDetails/${post.postID}`);
                }}>View Applicants</button>
                </>}
        </div>
        }
    </>
}