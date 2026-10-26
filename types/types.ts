//! Tipo predefinido para crear los enlacess
export type NavLink = {
    name: string;
    link: string;
}

export type IconsLink= {
    name: string;
    link: string;
}

export type ObjectExperience = {
    job: string;
    enterprise: string;
    dates: string;
    description: string[];
    status: boolean;
    hits?: string[];
    skills?: IconsLink[];
}