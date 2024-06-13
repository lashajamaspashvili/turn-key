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

export enum ProjectsSectionEnum {
  hr = 'HR Management',
  emp = 'Employers Base',
  sal = 'Salary Management'
}

export type TurnKeyItem = {
  id: string;
  title: BusinessEnum;
  active: boolean;
  projects: {
    id: string;
    title: ProjectsEnum;
    section: ProjectsSectionEnum;
    active: boolean;
  }[];
};
