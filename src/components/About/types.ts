export interface SocialLink {
  name: string;
  url: string;
}

export interface AboutProps {
  socialLinks: SocialLink[];
}

export interface AboutPageProps {
  about: AboutProps & {
    title: string;
  };
}
