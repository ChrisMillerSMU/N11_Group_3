import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {} from "../api/api";

export const Submission = ({ submission }) => {
    const date = new Date(submission.date_time);
    console.log(date.getFullYear());
  const navigate = useNavigate();

  return (
    <>
      <div className="card">
        Athlete contact: {submission.athlete}
        <div className="ms-2">{date.getMonth()}-{date.getDate()}-{date.getFullYear()}    {date.getHours() % 12}:{date.getMinutes()}</div>
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
      </div>
    </>
  );
};
