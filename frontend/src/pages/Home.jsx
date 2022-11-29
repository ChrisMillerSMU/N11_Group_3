import { useEffect, useState } from "react"
import { Post } from "./post"
import { useNavigate } from "react-router-dom";

export const Home = ({ account, setAccount }) => {
  console.log(account);

  const [posts, setsPost] = useState([{ postID: 1, company: 1, date_time: new Date().toLocaleDateString(), description: "This is a test description" }, { postID: 1, company: 1, date_time: new Date().toLocaleDateString(), description: "This is a test description" }, { postID: 1, company: 1, date_time: new Date().toLocaleDateString(), description: "This is a test description" }]);
  const navigate = useNavigate();
  return <>
    <div className="container">
      <nav>
        <button
          type="button"
          onClick={() => {
            setAccount(undefined);
            navigate("/");
          }}
        >
          Log Out
        </button>
        {account.isAthlete == 'true' && <button
          type="button"
          onClick={() => {
            navigate("/CreatePost");
          }}
        >Create Post</button>}
      </nav>
      <div className="mt-5">
        {posts.map((post) => <>
          <Post key={post.postID.toString()} account={account} post={post} />
        </>)}
      </div>
    </div>
  </>
}