import { useEffect, useState } from "react";
import { Post } from "./post";
import { useNavigate } from "react-router-dom";
import { getPosts, getCompanyPosts } from "../api/api";

export const Home = ({ account, setAccount, setPost }) => {
  const [posts, setPosts] = useState(undefined);

  useEffect(() => {
    if (account.isAthlete) {
      getPosts().then((x) => {
        setPosts(x);
      });
    }
    else{
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
          {!account.isAthlete && (
            <button
              type="button"
              onClick={() => {
                navigate("/CreatePost");
              }}
            >
              Create Post
            </button>
          )}
        </nav>
        <div className="mt-5">
          {posts.map((post) => (
            <>
              <Post
                account={account}
                post={post}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};
