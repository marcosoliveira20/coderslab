interface IAllInterestsDTO {
    id: string;
    subject_label: string;
    level: string; 
}

interface IIdInterestDTO {
    id: string;
}

interface IIdLevelInterestDTO {
    id: string;
    level: string;
}

export { IAllInterestsDTO, IIdInterestDTO, IIdLevelInterestDTO };