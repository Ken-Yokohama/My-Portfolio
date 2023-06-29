import { useParams } from "react-router-dom";
import { projectPages } from "./project-data";

const ProjectPage = () => {
    const { projectName } = useParams();

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
