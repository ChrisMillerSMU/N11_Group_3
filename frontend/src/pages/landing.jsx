import { useState } from "react";

//import "./styles.css";
import { useNavigate } from 'react-router-dom';

export const Landing = () => {


  const navigate = useNavigate();



  return (
    <>
      <div className="landing">
        <h2 className="Recruiter-logo">Recruiter</h2>
        <nav>
          <ul>
            <li>
              <button type="button"
                onClick={() => {
                  navigate('/Login');
                }}>Log in</button>
              <button type="button"
                onClick={() => {
                  navigate('/Register');
                }}>Register</button>
            </li>
          </ul>
        </nav>

      
        <section className="opening">
          <div className="crop">
            <img src="https://static01.nyt.com/images/2021/10/23/business/23DB-NOCERA/23DB-NOCERA-superJumbo.jpg?quality=75&auto=webp"></img>
          </div>
          <h2 className="landing-title">Endorsing made easy</h2>
          <p className="landing-subtitle">
            Recruiter matches student athletes with companies looking to partner and sponsor
          </p>
        </section>
      

        
        <section className="howTo">
          <h3 className="howTo-titles">Create a profile</h3>
          <p className="mt-2">(as a company or an athlete)</p>
          
          <hr />

          <h3 className="howTo-titles mt-3">As a company: Find the right athlete for your brand</h3>
          <ul>
            <li>set filters (by sport, school, year, etc.) on postings</li>
            <li>send requests to athletes you're interested in to apply</li>
          </ul>
          
          <hr />

          <h3 className="howTo-titles mt-5" >As an athlete: Find endorsment opportunites</h3>
          <ul>
            <li>See posts in your feed that match your profile</li>
            <li>Instantly apply to positions through the posts</li>
          </ul>
        </section>
      </div>
    </>
  );
};
