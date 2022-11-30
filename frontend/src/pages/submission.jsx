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
      <div className="card ps-2">
        <div>Applicant: {athlete.name}</div>
        <div>Sport: {athlete.sport}</div>
        <div>Gender: {athlete.gender}</div>
        <div>Email: {submission.athlete}</div>
        <div>Height: {athlete.height} Wingspan: {athlete.wingspan}</div>
        {athlete && <>
        <div>{athlete.school_name} class of {athlete.year}</div>
        <div>Stats: {athlete.stat}</div>
        <div>Instagram: {athlete.instagram} || Twitter: {athlete.twitter}</div>
        </>}
        <button
          type="button"
          onClick={() => {
          }}
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => {
          }}
        >
          Decline
        </button>
        <div>Submitted on {date.getMonth()}-{date.getDate()}-{date.getFullYear()} at {date.getHours() % 12}:{date.getMinutes()}</div>
      </div>
    </>
  );
};
