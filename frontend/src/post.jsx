import { useEffect } from "react"

export const Post = () => {

    
    useEffect(() => {
        //load all posts
    }, []);
   
    return <>
        <div className="card">
            
            <div className="row">
                Username
            </div>

            <div class="text-center">
                Job title
            </div>
            <div>job description</div>
            <button type="button">apply</button>
        </div>
    </>
}