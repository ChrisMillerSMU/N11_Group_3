import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/api"

export function Login({ setAccount }) {
  const navigate = useNavigate();

  const [athleteEmail, setAthleteEmail] = useState("");
  const [athletePassword, setAthletePassword] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPassword, setCompanyPassword] = useState("");

  const athleteSuccess = () => {
    setAccount({ email: athleteEmail, password: athletePassword, isAthlete: true });
    navigate('/home');
  }
  const companySuccess = () => {
    setAccount({ email: companyEmail, password: companyPassword, isAthlete: false });
    navigate('/home');
  }

  return (
    <div>
      <header className="bg-dark text-white fs-4 font-weight-bold p-2 text-center">Log in</header>
      <div className="form-group mt-3 mb-3">
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
        className="btn btn-primary col-2"
        onClick={() => {
          if (athleteEmail != '' && athletePassword != '') {
            login({email:athleteEmail, password:athletePassword}, athleteSuccess, 'true');
          }
        }}>Athlete Log in</button>
      <div className="form-group mt-3 mb-3">
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
        className="btn btn-primary col-2"
        onClick={() => {
          if (companyEmail != '' && companyPassword != '') {
            login({ email: companyEmail, password: companyPassword }, companySuccess, 'false');
            navigate("/Home");
          }
        }}
      >
        Company Log in
      </button>
    </div>
  );
}
