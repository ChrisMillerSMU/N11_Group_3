import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const Post = ({ account, post }) => {
    const navigate = useNavigate();

    return <>
        <div className="card mt-3">
            <div className="card-header">
                Company contact: {post.company}
            </div>
            <div className="card-body">
                <div className="card-text">{post.description}</div>
            </div>

            {account.isAthlete && <button type="button"
                className="btn btn-primary"
                onClick={() => {
                    navigate("/home")
                }}>apply</button>}
        </div>
    </>
}