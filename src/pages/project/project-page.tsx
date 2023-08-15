import { useParams } from "react-router-dom";
import { projectPages } from "./project-data";
import "./project-page.css";
import ErrorPage from "../404";

const ProjectPage = () => {
    const { projectName } = useParams();

    const project = projectPages.find(
        (project) => project.name === projectName
    );

    if (!project) {
        return <ErrorPage />;
    }

    return (
        <div className="page-container project-page">
            <div className="hero-section limit-width">
                <div className="project-details">
                    <div>
                        <h5>Project Name</h5>
                        <h1>{project.title}</h1>
                    </div>
                    <div>
                        <h5>Role</h5>
                        <h3>Front-End Development</h3>
                        <h3>UX / UI Design</h3>
                    </div>
                    <div>
                        <h5>Technologies Used</h5>
                        <div className="technologies">
                            {project.technologies.map((tech) => (
                                <h3>{tech}</h3>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h5>Client</h5>
                        <h3>Entrego</h3>
                    </div>
                    <div>
                        <h5>Year</h5>
                        <h3>{project.year}</h3>
                    </div>
                </div>
                <div className="project-description">
                    {project.details.map((text) => (
                        <h3>{text}</h3>
                    ))}
                </div>
            </div>
            <div className="limit-width" style={{ marginTop: "5rem" }}>
                <img
                    style={{ width: "100%", marginBottom: "3rem" }}
                    src={project.backgroundImgUrl}
                    alt=""
                />
            </div>
        </div>
    );
};

export default ProjectPage;
