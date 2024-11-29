import "../App.css";

export default function Resume() {
    return (
        <>
            <div className="resume">
                <a className="download" href="/resume.png" download="resume.png">Click Here to Download My Resume</a>
            </div>
            <div className="skillsList">
                <h2>Front End Technologies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>

                <h2>Back End Technologies</h2>
                <ul>
                    <li>APIs</li>
                    <li>NodeJS</li>
                    <li>Python</li>
                    <li>PostgresSQL</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                </ul>
                <h2>Dev Tools</h2>
                <ul>
                    <li>Git</li>
                    <li>Continuous Integration & Continuous Development</li>
                </ul>

            </div>
        </>
    );
}