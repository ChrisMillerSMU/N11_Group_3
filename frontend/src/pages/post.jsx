import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { delPost, findSubmissionByAthlete, addSubmission, addInterest } from "../api/api";

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
            addInterest({athlete:account.email, company:post.company, mutual:0});
        }
    }

    return <>
        {state && <div className="card mt-3">
            <div className="card-header fs-5">
                Company contact: {post.company}
            </div>
            <div className="card-body">
                <div className="card-text">{post.description}</div>
            </div>
            {account.isAthlete && <div className="text-center">
                <button type="button"
                className="btn btn-primary btn-sm m-2"
                onClick={() => {
                    findSubmissionByAthlete(post.postID, account.email, getSuccess);
                }}>{apply}</button>
            </div>}
            {!account.isAthlete && <div className="text-center clearfix m-2">
                <button type="button"
                className="btn btn-sm float-end btn-secondary"
                onClick={() => {
                    delPost(post.postID);
                    setState(false);
                }}>Delete</button>

                <button type="button"
                className="btn btn-primary btn-sm"
                onClick={() => {
                    navigate(`/postDetails/${post.postID}`);
                }}>View Applicants</button>
                </div>}
        </div>
        }
    </>
}