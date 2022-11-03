import { useState } from "react";
import "./styles.css";


export const Homepage = () => {
  return (
    <>
      <h1>Recruiter</h1>
      <nav>
        <ul>
          <li>
            <button type="button">Log in</button>
          </li>
        </ul>
      </nav>

      <section id="opening">
        <div class="crop">
          <img src="https://static01.nyt.com/images/2021/10/23/business/23DB-NOCERA/23DB-NOCERA-superJumbo.jpg?quality=75&auto=webp"></img>
        </div>
        <h2>Endorsing made easy</h2>
        <p>
          Recruiter matches student athletes with companies looking to partner and sponsor
        </p>
      </section>
      
     

      <section id="howTo">
        <h3>Create a profile</h3>
        <p>(as a company or an athlete)</p>
        <img src= "https://via.placeholder.com/150"></img>

        <hr/>

        <h3>As a company: </h3>
        <h3 id="textWrap">Find the right athlete </h3>
        <h3 id="textWrap">for your brand</h3>
        <ul>
          <li>set filters (by sport, school, year, etc.) on postings</li>
          <li>send requests to athletes you're interested in to apply</li>
        </ul>
        <img src= "https://via.placeholder.com/150"></img>

        <hr/>

        <h3>As an athlete: </h3>
        <h3 id="textWrap">Find endorsment</h3>
        <h3 id="textWrap">opportunites</h3>
        <ul>
          <li>See posts in your feed that match your profile</li>
          <li>Instantly apply to positions through the posts</li>
        </ul>
        <img src= "https://via.placeholder.com/150"></img>

      </section>         
    </>
  );
};
