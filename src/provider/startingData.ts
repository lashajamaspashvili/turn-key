import { BusinessEnum, ProjectsEnum, TurnKeyItem } from 'src/types';

export const TurnKeyItems: TurnKeyItem[] = [
  {
    id: '1',
    title: BusinessEnum.smallBusiness,
    active: true,
    projects: [
      {
        id: 'a',
        active: false,
        title: ProjectsEnum.sapling
      },
      {
        id: 'b',
        active: false,
        title: ProjectsEnum.workday
      },
      {
        id: 'c',
        active: false,
        title: ProjectsEnum.xero
      },
      {
        id: 'd',
        active: false,
        title: ProjectsEnum.rippling
      },
      {
        id: 'e',
        active: false,
        title: ProjectsEnum.expensify
      },
      {
        id: 'f',
        active: true,
        title: ProjectsEnum.zenefits
      }
    ]
  },
  {
    id: '2',
    title: BusinessEnum.mediumBusiness,
    active: false,
    projects: [
      {
        id: 'g',
        active: true,
        title: ProjectsEnum.sapling
      },
      {
        id: 'h',
        active: true,
        title: ProjectsEnum.workday
      },
      {
        id: 'i',
        active: false,
        title: ProjectsEnum.xero
      },
      {
        id: 'j',
        active: false,
        title: ProjectsEnum.rippling
      },
      {
        id: 'k',
        active: false,
        title: ProjectsEnum.expensify
      },
      {
        id: 'l',
        active: false,
        title: ProjectsEnum.zenefits
      }
    ]
  },
  {
    id: '3',
    title: BusinessEnum.enterprise,
    active: false,
    projects: [
      {
        id: 'm',
        active: false,
        title: ProjectsEnum.sapling
      },
      {
        id: 'n',
        active: false,
        title: ProjectsEnum.workday
      },
      {
        id: 'o',
        active: true,
        title: ProjectsEnum.xero
      },
      {
        id: 'p',
        active: true,
        title: ProjectsEnum.rippling
      },
      {
        id: 'q',
        active: false,
        title: ProjectsEnum.expensify
      },
      {
        id: 'r',
        active: false,
        title: ProjectsEnum.zenefits
      }
    ]
  }
];
