import { ProjectsEnum, TurnKeyItem } from 'src/types';

export function extractProjects(projects: TurnKeyItem['projects']) {
  return {
    sapling: projects?.find(
      (project) => project?.title === ProjectsEnum.sapling
    ),
    workday: projects?.find(
      (project) => project?.title === ProjectsEnum.workday
    ),
    xero: projects?.find((project) => project?.title === ProjectsEnum.xero),
    rippling: projects?.find(
      (project) => project?.title === ProjectsEnum.rippling
    ),
    expensify: projects?.find(
      (project) => project?.title === ProjectsEnum.expensify
    ),
    zenefits: projects?.find(
      (project) => project?.title === ProjectsEnum.zenefits
    )
  };
}
