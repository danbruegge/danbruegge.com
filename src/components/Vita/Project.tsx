import React, { FC } from "react";

import { Project as Props } from "./types";

export const Project: FC<Props> = ({ name, info }) => (
  <img src={`../images/projects/${name}.svg`} alt={info} />
);
