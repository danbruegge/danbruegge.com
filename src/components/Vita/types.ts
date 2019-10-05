export interface VitaProps {
  keySkills: string[];
}

export interface VitaPageProps {
  vita: VitaProps & {
    title: string;
  };
}
