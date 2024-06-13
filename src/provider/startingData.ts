import {
  BusinessEnum,
  ProjectsEnum,
  ProjectsSectionEnum,
  TurnKeyItem
} from 'src/types';

export const TurnKeyItems: TurnKeyItem[] = [
  {
    id: '1',
    title: BusinessEnum.smallBusiness,
    active: true,
    projects: [
      {
        id: 'a',
        active: false,
        title: ProjectsEnum.sapling,
        section: ProjectsSectionEnum.hr
      },
      {
        id: 'b',
        active: false,
        title: ProjectsEnum.workday,
        section: ProjectsSectionEnum.hr
      },
      {
        id: 'c',
        active: false,
        title: ProjectsEnum.xero,
        section: ProjectsSectionEnum.emp
      },
      {
        id: 'd',
        active: false,
        title: ProjectsEnum.rippling,
        section: ProjectsSectionEnum.sal
      },
      {
        id: 'e',
        active: false,
        title: ProjectsEnum.expensify,
        section: ProjectsSectionEnum.hr
      },
      {
        id: 'f',
        active: true,
        title: ProjectsEnum.zenefits,
        section: ProjectsSectionEnum.hr
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
        title: ProjectsEnum.sapling,
        section: ProjectsSectionEnum.hr
      },
      {
        id: 'h',
        active: true,
        title: ProjectsEnum.workday,
        section: ProjectsSectionEnum.hr
      },
      {
        id: 'i',
        active: false,
        title: ProjectsEnum.xero,
        section: ProjectsSectionEnum.emp
      },
      {
        id: 'j',
        active: false,
        title: ProjectsEnum.rippling,
        section: ProjectsSectionEnum.sal
      },
      {
        id: 'k',
        active: false,
        title: ProjectsEnum.expensify,
        section: ProjectsSectionEnum.hr
      },
      {
        id: 'l',
        active: false,
        title: ProjectsEnum.zenefits,
        section: ProjectsSectionEnum.hr
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
        title: ProjectsEnum.sapling,
        section: ProjectsSectionEnum.hr
      },
      {
        id: 'n',
        active: false,
        title: ProjectsEnum.workday,
        section: ProjectsSectionEnum.hr
      },
      {
        id: 'o',
        active: true,
        title: ProjectsEnum.xero,
        section: ProjectsSectionEnum.emp
      },
      {
        id: 'p',
        active: true,
        title: ProjectsEnum.rippling,
        section: ProjectsSectionEnum.sal
      },
      {
        id: 'q',
        active: false,
        title: ProjectsEnum.expensify,
        section: ProjectsSectionEnum.hr
      },
      {
        id: 'r',
        active: false,
        title: ProjectsEnum.zenefits,
        section: ProjectsSectionEnum.hr
      }
    ]
  }
];
