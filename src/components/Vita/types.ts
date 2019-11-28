export interface Project {
  name: string;
  info: string;
}

export interface VitaProps {
  keySkills: string[];
  projects: Project[];
}

export interface VitaPageProps {
  vita: VitaProps & {
    title: string;
  };
}
