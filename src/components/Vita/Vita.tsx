import React, { FC } from "react";

import { Article } from "components/Article";
import { Section } from "components/Section";

import { Skill } from "./Skill";
import { VitaProps } from "./types";

export const Vita: FC<VitaProps> = ({ keySkills }) => (
  <main>
    <Article>
      <Section>
        <p>Welcome to page 2</p>
      </Section>
      <Section>
        <h2>Key Skills</h2>
        <p>
          {keySkills.map(name => (
            <Skill key={name}>{name}</Skill>
          ))}
        </p>
      </Section>
      <Section>
        <h2>References</h2>
        <p>Welcome to page 2</p>
      </Section>
      <Section>
        <h2>Professional Experience</h2>
        <p>Welcome to page 2</p>
      </Section>
    </Article>
  </main>
);
