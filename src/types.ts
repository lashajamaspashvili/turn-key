export enum BusinessEnum {
  smallBusiness = 'Small Business',
  mediumBusiness = 'Medium Business',
  enterprise = 'Enterprice'
}

export enum ProjectsEnum {
  sapling = 'Sapling',
  workday = 'Workday',
  xero = 'Xero',
  rippling = 'Rippling',
  expensify = 'Expensify',
  zenefits = 'Zenefits'
}

export type TurnKeyItem = {
  id: string;
  title: BusinessEnum;
  active: boolean;
  projects: {
    id: string;
    title: ProjectsEnum;
    active: boolean;
  }[];
};
