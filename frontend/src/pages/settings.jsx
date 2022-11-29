import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/api"

export function Settings(account, setAccount) {
    const navigate = useNavigate();

    const [athleteEmail, setAthleteEmail] = useState(account.email);
    const [school, setSchool] = useState(account.school_name);
    const [name, setName] = useState(account.name);
    const [height, setHeight] = useState(account.height);
    const [wingspan, setWingspan] = useState(account.wingspan);
    const [gender, setGender] = useState(account.gender);
    const [sport, setSport] = useState(account.sport);
    const [year, setYear] = useState(account.year);
    const [stats, setStats] = useState(account.stat);
    const [twitter, setTwitter] = useState(account.twitter);
    const [instagram, setInstagram] = useState(account.instagram);
    const [athletePassword, setAthletePassword] = useState('');
    const [confirmAthletePassword, setConfirmAthletePassword] = useState("");

    const [companyEmail, setCompanyEmail] = useState("");
    const [companyPassword, setCompanyPassword] = useState("");
    const [confirmCompanyPassword, setConfirmCompanyPassword] = useState("");
    const [companyName, setCompanyName] = useState("");

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
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="height">Height:</label>
                <input
                    type="text"
                    name="height"
                    id="height"
                    className="form-control"
                    value={height}
                    onChange={(event) => setHeight(event.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="wingspan">Wingspan:</label>
                <input
                    type="text"
                    name="wingspan"
                    id="wingspan"
                    className="form-control"
                    value={wingspan}
                    onChange={(event) => setWingspan(event.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="gender">Gender:</label>
                <input
                    type="text"
                    name="gender"
                    id="gender"
                    className="form-control"
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="sport">Sport:</label>
                <input
                    type="text"
                    name="sport"
                    id="sport"
                    className="form-control"
                    value={sport}
                    onChange={(event) => setSport(event.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="year">Year:</label>
                <input
                    type="number"
                    name="year"
                    id="year"
                    className="form-control"
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="stat">Enter any stats:</label>
                <input
                    type="text"
                    name="stats"
                    id="stats"
                    className="form-control"
                    value={stats}
                    onChange={(event) => setStats(event.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="twitter">Twitter:</label>
                <input
                    type="text"
                    name="twitter"
                    id="twitter"
                    className="form-control"
                    value={twitter}
                    onChange={(event) => setTwitter(event.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="instagram">Instagram:</label>
                <input
                    type="text"
                    name="instagram"
                    id="instagram"
                    className="form-control"
                    value={instagram}
                    onChange={(event) => setInstagram(event.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="school">School Name:</label>
                <input
                    type="text"
                    name="school"
                    id="school"
                    className="form-control"
                    value={school}
                    onChange={(event) => setSchool(event.target.value)}
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
            <div className="form-group mb-3">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="text"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="form-control"
                    value={confirmAthletePassword}
                    onChange={(event) => setConfirmAthletePassword(event.target.value)}
                />
            </div>
            <button type="button"
                onClick={() => {
                    if (athleteEmail != '' && athletePassword != '' && confirmAthletePassword != '') {
                        navigate("/Home");
                    }
                }}
            >Athlete Register</button>
            <div className="form-group mb-3 mt-5">
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
                <label htmlFor="Name">Company Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={companyName}
                    onChange={(event) => setCompanyName(event.target.value)}
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
            <div className="form-group mb-3">
                <label htmlFor="confirm">Confirm Password:</label>
                <input
                    type="text"
                    name="confirm"
                    id="confirm"
                    className="form-control"
                    value={confirmCompanyPassword}
                    onChange={(event) => setConfirmCompanyPassword(event.target.value)}
                />
            </div>
            <button
                type="button"
                onClick={() => {
                    navigate("/Home");
                }}
            >
                Submit
            </button>
        </div>
    );
}
