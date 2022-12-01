import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { findSubmission } from "../api/api";
import { Submission } from "./submission";
import { useParams } from "react-router-dom";

export const PostDetails = ({ account }) => {
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
      <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="navbar-brand">Recruiter</div>
            <div className="bg-dark text-white fs-5 font-weight-bold p-2 text-center">
              Applications
            </div>
            <div className="d-grid gap-2 d-md-block">
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => {
                  navigate("/home");
                }}
              >
                Back
              </button>
            </div>
          </div>
        </nav>
        <div className="mt-5">
          {submissions.length == 0 ? (
            <div className="text-black">No Applications!</div>
          ) : (
            submissions.map((submission) => (
              <>
                <Submission submission={submission} account={account} />
              </>
            ))
          )}
        </div>
      </div>
    </>
  );
};
