import "../App.css";

import headshot from "../assets/headshot.jpg";

export default function Author() {
    return (
        <div className="author-container">
            <img src={headshot} alt="Parker Speares" />
            <div className="author-info">
                <h2>Author: Parker Speares</h2>
                <p>Full Stack Developer</p>
                <p>
                    Parker Speares is a full stack developer with a passion for creativity & problem solving. He has experience with JavaScript, React, Node.js, MERN Stack, and typescript. He is currently attending a coding Bootcamp from the University of Utah in the hopes of getting a full-time position as a software developer.</p>
                <p>
                    He is working on graduating from the University of Oregon Coding Bootcamp and has a Bachelors degree in International Studies from the University of North Texas.</p>
                <p>
                    Parker has worked his early years of his career in medical administration & ophthalmology. As a Portland resident, he enjoys hiking & camping, is an avid skier, and writes original music, primarily Bass Guitar across multiple bands.
                </p>
            </div>
        </div>
    );
}