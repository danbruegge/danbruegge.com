import { AnyStyledComponent } from "styled-components";

export interface Link {
  name: string;
  url: string;
}

export type Links = Link[];

export interface Navigation {
  links: Links;
  linkElement?: AnyStyledComponent;
}
