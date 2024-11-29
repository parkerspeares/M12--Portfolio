import "../App.css";
import Projects from "./Projects";

// import BackImg from "../assets/images.jpg";
import CandidateSearch from "../assets/CandidateSearch.jpg";
import BookSearch from "../assets/BookSearch.jpg";
import VehicalBuilder from "../assets/VehicleBuilder.jpg";
import EmployeeTracker from "../assets/EmployeeTracker.png";
import WeatherApp from "../assets/WeatherApp.png";

export default function Portfolio() {
    return (
        <>
            <h2 className="portfolio">Portfolio</h2>
            <div className="projects">
                <Projects
                    title="Candidate-Search"
                    backgroundImg={CandidateSearch}
                    link="https://github.com/parkerspeares/Module--13--Candidate--Search--App.git"
                />
                <Projects
                    title="Book-Search"
                    backgroundImg={BookSearch}
                    link="https://github.com/parkerspeares/Module--18--Book--Search.git"
                />
                <Projects
                    title="Vehicle-Builder"
                    backgroundImg={VehicalBuilder}
                    link="https://github.com/parkerspeares/Module--8--Vehicle-Builder.git"
                />
                <Projects
                    title="Employee-Tracker"
                    backgroundImg={EmployeeTracker}
                    link="https://github.com/parkerspeares/Module--10--Employee-Tracker.git"
                />
                <Projects
                    title="Weather-App"
                    backgroundImg={WeatherApp}
                    link="https://github.com/parkerspeares/Module--9--Weather--Dashboard--App.git"
                />
            </div>
        </>
    );
}