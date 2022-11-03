import React from "react";
import { greetings } from "../Portfolio";

const Profile = () => {
  
  const ListItems = ({ i, data }) => {
    return (
      <li key={i}>
        <a href={data.url} target="_blank" rel="noreferrer" >
          {data.name} <i className={data.className}></i>
        </a>
      </li>
    )
  }

  return greetings && (
    <section className="profile-container">
      
      <nav className="social">
        <ul>
          {greetings.mediaIcons.map((data, i) => {
            return <ListItems key={i} data={data} />;
          })}
        </ul>
      </nav>
      <div className="profile-contents">
        <img src="https://drive.google.com/uc?export=view&id=1CVY9QS8jPvqtrEnteP5ahz7H325knpRS" alt="me" data-aos="slide-up" />
        <span>Hello, I'm</span>
        <h1>{greetings.name}</h1>
        <p>{greetings.professional}</p>
        <a href="https://github.com/skarthikeyandev" target="_blank" rel="noreferrer" className="main-btn">View my work</a>
      </div>
    </section>
  );
};

export default Profile;