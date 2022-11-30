import { useEffect, useState } from "react"
import { Post } from "./post"
import { useNavigate } from "react-router-dom";

export const Home = ({ account, setAccount }) => {
  console.log(account);

  const [posts, setsPost] = useState([{ postID: 1, company: 1, date_time: new Date().toLocaleDateString(), description: "This is a test description" }, { postID: 1, company: 1, date_time: new Date().toLocaleDateString(), description: "This is a test description" }, { postID: 1, company: 1, date_time: new Date().toLocaleDateString(), description: "This is a test description" }]);
  const navigate = useNavigate();
  if (!account) {
    return <>loading...</>;
  }
  return <>
    <div className="container">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand">Recruiter</div>
          <div className="d-grid gap-2 d-md-block">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                setAccount(undefined);
                navigate("/");
              }}
            >
              Log Out
            </button>
            {account.isAthlete && <button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                navigate("/CreatePost");
              }}
            >Create Post</button>}
          </div>

        </div>

      </nav>
      <div className="mt-5">
        {posts.map((post) => <>
          <Post key={post.postID.toString()} account={account} post={post} />
        </>)}
      </div>
    </div>
  </>
}