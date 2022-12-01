import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAthleteByEmail, findInterest, updateInterest, delSubmission } from "../api/api";

export const Submission = ({ submission, account }) => {
  const date = new Date(submission.date_time);
  const navigate = useNavigate();

  const [athlete, setAthlete] = useState(undefined);
  const [interest, setInterest] = useState(undefined);
  const [accept, setAccept] = useState("Accept");
  const [decline, setDecline] = useState("Decline");

  useEffect(() => {
    getAthleteByEmail(submission.athlete).then((x) => {
      setAthlete(x[0]);
    });
    findInterest(submission.athlete, account.email).then((x) => {
      setInterest(x[0]);
      if(x[0].mutual == 1){
        setAccept("Accepted!");
      }
      if(x[0].mutual == 2){
        setDecline("Declined!");
      }
    });
  }, []);

  return (
    <>
      {athlete && interest &&
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
                  if(accept == "Accept"){
                    interest.mutual = 1;
                    updateInterest(interest);
                    setDecline("Decline");
                    setAccept("Accepted!");
                  }
                }}>{accept}</button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  if(decline == "Decline"){
                    interest.mutual = 2;
                    updateInterest(interest);
                    setDecline("Declined!");
                    setAccept("Accept");
                  }
                }}>{decline}</button>
            </div>
          </div>

          <div className="card-footer text-muted">Submitted on {date.getMonth()}-{date.getDate()}-{date.getFullYear()} at {date.getHours() % 12}:{date.getMinutes()}</div>
        </div>
      }
    </>
  );
};
