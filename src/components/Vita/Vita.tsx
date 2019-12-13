import React, { FC } from "react";

import { Article } from "components/Article";
import { Section } from "components/Section";

import { Skill } from "./Skill";
import { Projects } from "./Projects";
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
        <Projects>
          {projects.map(project => (
            <Project
              key={project.name}
              name={project.name}
              info={project.info}
              size={project.size}
            />
          ))}
        </Projects>
      </Section>
    </Article>
  </main>
);
