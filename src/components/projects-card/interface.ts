export interface FeaturedProjectCardProps {
    year: string;
    month: string;
    name: string;
    title: string;
    description: string;
    technologies: string[];
    liveSiteLink?: string;
    githubRepoLink?: string;
    hasProjectPage?: boolean;
    backgroundImg: string;
}

export interface ProjectCardProps {
    title: string;
    technologies: string[];
    description: string;
    liveSiteLink?: string;
    githubRepoLink?: string;
}

export interface FeaturedProjectPlaceholderProps {
    backgroundImg: string;
}

export interface HoverPromptProps {
    isDark: boolean;
    isVisible: boolean;
}
