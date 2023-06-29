import { useParams } from "react-router-dom";
import { featuredProjects } from "./project-data";

const ProjectPage = () => {
    const { projectName } = useParams();

    const projectPages = featuredProjects.filter(
        (project) => project.hasProjectPage
    );

    const project = projectPages.find(
        (project) => project.name === projectName
    );

    if (!project) {
        return (
            <div>
                <div>{/* Need to Add 404 Page, Then Link here */}</div>
            </div>
        );
    }

    return (
        <div>
            <div>Project Page {projectName}</div>
        </div>
    );
};

export default ProjectPage;
