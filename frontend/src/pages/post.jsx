import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const Post = ({ account, post }) => {
    const navigate = useNavigate();

    return <>
        <div className="card">

            <div className="row ms-2">
                Company contact: {post.company}
            </div>
            <div className="ms-2">{post.description}</div>
            {account.school != undefined && <button type="button"
                onClick={() => {
                    navigate("/home")
                }}>apply</button>}
        </div>
    </>
}