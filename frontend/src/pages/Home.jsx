import { useEffect, useState } from "react";
import { Post } from "./post";
import { useNavigate } from "react-router-dom";
import { getPosts, getCompanyPosts } from "../api/api";

export const Home = ({ account, setAccount }) => {
  const [posts, setPosts] = useState(undefined);

  useEffect(() => {
    if (account.isAthlete) {
      getPosts().then((x) => {
        setPosts(x);
      });
    } else {
      getCompanyPosts(account.email).then((x) => {
        setPosts(x);
      });
    }
  }, []);

  const navigate = useNavigate();
  if (!posts) {
    return <>loading...</>;
  }
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="navbar-brand">Recruiter</div>
            <div className="bg-dark text-white fs-5 font-weight-bold p-2 text-center">
              Home
            </div>
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
              {!account.isAthlete && (
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => {
                    navigate("/CreatePost");
                  }}
                >
                  Create Post
                </button>
              )}
            </div>
          </div>
        </nav>
        <div className="mt-5">
          {posts.map((post) => (
            <>
              <Post account={account} post={post} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};
