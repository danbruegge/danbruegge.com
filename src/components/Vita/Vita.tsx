import React, { FC } from "react";

import { Article } from "components/Article";
import { Section } from "components/Section";

import { Skill } from "./Skill";
import { Project } from "./Project";
import { VitaProps } from "./types";

export const Vita: FC<VitaProps> = ({ keySkills, projects }) => (
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
        <h2>Professional Experience</h2>
        <p>
          {projects.map(project => (
            <Project
              key={project.name}
              name={project.name}
              info={project.info}
            />
          ))}
        </p>
      </Section>
    </Article>
  </main>
);
