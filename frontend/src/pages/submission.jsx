import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAthleteByEmail } from "../api/api";

export const Submission = ({ submission }) => {
  const date = new Date(submission.date_time);
  const navigate = useNavigate();

  const [athlete, setAthlete] = useState(undefined);

  useEffect(() => {
    getAthleteByEmail(submission.athlete).then((x) => {
      setAthlete(x[0]);
    });
  }, []);

  return (
    <>
      {athlete &&
        <div className="card mt-3">
          <div className="card-header">Email: {submission.athlete}</div>
          <div className="card-body">
            <div className="row card-text">
              <div className="col">
                <div>Applicant: {athlete.name}</div>
                <div>Sport: {athlete.sport}</div>
                <div>Gender: {athlete.gender}</div>
                <div>Height: {athlete.height}</div>
                <div>Wingspan: {athlete.wingspan}</div>
              </div>

              <div className="col">
                {athlete && <>
                  <div>{athlete.school_name} class of {athlete.year}</div>
                  <div>Stats: {athlete.stat}</div>
                  <div>Instagram: {athlete.instagram} || Twitter: {athlete.twitter}</div>
                </>}
              </div>

            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary me-2"
                onClick={() => {
                }}
              >
                Accept
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                }}
              >
                Decline
              </button>
            </div>
          </div>

          <div className="card-footer text-muted">Submitted on {date.getMonth()}-{date.getDate()}-{date.getFullYear()} at {date.getHours() % 12}:{date.getMinutes()}</div>
        </div>
      }
    </>
  );
};
