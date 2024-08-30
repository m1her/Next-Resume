export type ProjectsHeaderInputs = {
  projectName: string;
  aboutProject: string;
  finishDate: string;
};

export type ProjectsBullitPoints = {
  prjBullitPoints: { text: string }[];
};

export type ProjectTechs = {
  prjTech: string;
};

export type ProjectCard = ProjectsHeaderInputs &
  ProjectsBullitPoints &
  ProjectTechs;
