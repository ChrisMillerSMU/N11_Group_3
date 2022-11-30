import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { findSubmission } from "../api/api";
import { Submission } from "./submission";
import { useParams } from "react-router-dom";

export const PostDetails = () => {
    const postID = useParams().postID;
    const [submissions, setSubmissions] = useState(undefined);

  useEffect(() => {
    findSubmission(postID).then((x) => {
        setSubmissions(x);
    });
  }, []);

  const navigate = useNavigate();
  if (!submissions) {
    return <>loading...</>;
  }
  return (
    <>
      <div className="container">
        <nav>
          <button
            type="button"
            onClick={() => {
              navigate("/home");
            }}
          >
            Back
          </button>
        </nav>
        <div className="mt-5">
          {submissions.map((submission) => (
            <>
              <Submission submission={ submission }/>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
