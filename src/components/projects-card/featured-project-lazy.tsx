import { FeaturedProjectCardProps } from "./interface";
import { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import "./css/featured-project.css";
import FeaturedProjectPlaceholder from "./featured-project-placeholder";

const FeaturedProjectCard = lazy(() => import("./featured-project"));

const FeaturedProjectLazy = ({
    year,
    month,
    name,
    title,
    description,
    technologies,
    liveSiteLink,
    githubRepoLink,
    hasProjectPage,
    backgroundImg,
}: FeaturedProjectCardProps) => {
    const [ref, inView] = useInView({ triggerOnce: true });

    return (
        <>
            <Suspense
                fallback={
                    <FeaturedProjectPlaceholder backgroundImg={backgroundImg} />
                }
            >
                {inView ? (
                    <FeaturedProjectCard
                        year={year}
                        month={month}
                        name={name}
                        title={title}
                        description={description}
                        technologies={technologies}
                        liveSiteLink={liveSiteLink}
                        githubRepoLink={githubRepoLink}
                        hasProjectPage={hasProjectPage}
                        backgroundImg={backgroundImg}
                    />
                ) : (
                    <FeaturedProjectPlaceholder
                        backgroundImg={backgroundImg}
                        ref={ref}
                    />
                )}
            </Suspense>
        </>
    );
};

export default FeaturedProjectLazy;
