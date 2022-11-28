
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

export function Login() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
      <div>
        <h1 className="border">Log in</h1>

        <div className="form-group mb-3">
            <label htmlFor="email">Email:</label>
            <input type="text"
                name="email"
                id="email"
                className="form-control"
                value={email}
                onChange={event => setEmail(event.target.value)} />
        </div>

        <div className="form-group mb-3">
            <label htmlFor="password">Password:</label>
            <input type="text"
                name="password"
                id="password"
                className="form-control"
                value={password}
                onChange={event => setPassword(event.target.value)} />
        </div>

        <button type='button'>Log in</button> 
      </div>
    );
  }