import { useParams } from "react-router-dom";
import { projectPages } from "./project-data";
import "./project-page.css";
import { ErrorPage } from "..";

const ProjectPage = () => {
    const { projectName } = useParams();

    const project = projectPages.find(
        (project) => project.name === projectName
    );

    if (!project) {
        return <ErrorPage />;
    }

    return (
        <div>
            <div>Project Page {projectName}</div>
        </div>
    );
};

export default ProjectPage;
