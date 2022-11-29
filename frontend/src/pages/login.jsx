import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAthleteByEmail, login } from "../api/api"

export function Login({ setAccount }) {
  const navigate = useNavigate();

  const [athleteEmail, setAthleteEmail] = useState("");
  const [athletePassword, setAthletePassword] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPassword, setCompanyPassword] = useState("");

  return (
    <div>
      <div className="form-group mb-3">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-control"
          value={athleteEmail}
          onChange={(event) => setAthleteEmail(event.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          id="password"
          className="form-control"
          value={athletePassword}
          onChange={(event) => setAthletePassword(event.target.value)}
        />
      </div>
      <button type="button"
        onClick={() => {
          console.log(getAthleteByEmail(athleteEmail));
          if (athleteEmail != '' && athletePassword != '') {
            setAccount({ email: athleteEmail, password: athletePassword, isAthlete: true });
            navigate('/Home');
          }
        }}>Athlete Log in</button>
      <div className="form-group mb-3">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-control"
          value={companyEmail}
          onChange={(event) => setCompanyEmail(event.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          id="password"
          className="form-control"
          value={companyPassword}
          onChange={(event) => setCompanyPassword(event.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={() => {
          if (companyEmail != '' && companyPassword != '') {
            setAccount({ email: companyEmail, password: companyPassword, isAthlete: false });
            navigate("/Home");
          }
        }}
      >
        Company Log in
      </button>
    </div>
  );
}
