import { useEffect } from "react"

export const Post = ({account, post}) => {
    useEffect(() => {
        //load all posts
    }, []);
   
    return <>
        <div className="card">
            
            <div className="row ms-2">
                Company contact: {post.company}
            </div>

            <div className="text-center">
                Job title
            </div>
            <div className="ms-2">{post.description}</div>
            { account.isAthlete && <button type="button">apply</button> }
        </div>
    </>
}