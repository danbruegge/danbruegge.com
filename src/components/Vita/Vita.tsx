import React, { FC } from "react";

import { Article } from "components/Article";
import { Section } from "components/Section";

import { Skill } from "./Skill";
import { VitaProps } from "./types";

export const Vita: FC<VitaProps> = ({ keySkills }) => (
  <main>
    <Article>
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
        <p>List of projects i created.</p>
      </Section>
      <Section>
        <h2>Professional Experience</h2>
        <p>List of companies i worked for.</p>
      </Section>
    </Article>
  </main>
);
