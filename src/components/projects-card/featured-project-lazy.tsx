import { FeaturedProjectCardProps } from "./interface";
import { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import "./css/featured-project.css";

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
            <Suspense>
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
                    <div
                        ref={ref}
                        style={{
                            backgroundColor: "red",
                            opacity: "0",
                        }}
                    >
                        <div
                            style={{
                                aspectRatio: "1/1.25",
                            }}
                        ></div>
                    </div>
                )}
            </Suspense>
        </>
    );
};

export default FeaturedProjectLazy;
