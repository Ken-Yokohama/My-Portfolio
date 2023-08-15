export interface AwardsSectionProps {
    setModalImgSrc: React.Dispatch<React.SetStateAction<string>>;
    handleOpenModal: () => void;
}

export interface EducationSectionProps {
    handleOpenModal: () => void;
    setModalImgSrc: React.Dispatch<React.SetStateAction<string>>;
}
