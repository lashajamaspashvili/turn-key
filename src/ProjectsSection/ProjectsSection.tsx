import { Project } from 'src/Project';
import {
  Expensify,
  Left,
  Right,
  RipplingEnd,
  RipplingStart,
  SProjectsContainer,
  SProjectsSection,
  SaplingEnd,
  SaplingStart,
  Workday,
  XeroEnd,
  XeroStart,
  ZenefitsEnd,
  ZenefitsStart
} from './SProjectsSectino.styled';
import { Card } from 'src/Card';
import { useContext, useMemo } from 'react';
import { TurnKeyContext } from 'src/context';
import { extractProjects } from './utils/extractProjects.utils';

export function ProjectsSection() {
  const { items } = useContext(TurnKeyContext);

  const windowSize = useMemo(() => window.innerWidth, [window]);

  const current = extractProjects(
    items?.find((item) => item?.active)?.projects || []
  );

  return (
    <SProjectsSection>
      {windowSize > 750 ? (
        <>
          <SProjectsContainer>
            <Project project={current?.sapling} />
            <Project project={current?.workday} />
            <Project project={current?.xero} />
          </SProjectsContainer>
          <Left>
            <SaplingStart active={current?.sapling?.active} />
            <SaplingEnd active={current?.sapling?.active} />
            <Workday active={current?.workday?.active} />
            <XeroEnd active={current?.xero?.active} />
            <XeroStart active={current?.xero?.active} />
          </Left>
        </>
      ) : null}
      <Card />
      {windowSize > 750 ? (
        <>
          <Right>
            <RipplingStart active={current?.rippling?.active} />
            <RipplingEnd active={current?.rippling?.active} />
            <Expensify active={current?.expensify?.active} />
            <ZenefitsEnd active={current?.zenefits?.active} />
            <ZenefitsStart active={current?.zenefits?.active} />
          </Right>
          <SProjectsContainer>
            <Project project={current?.rippling} />
            <Project project={current?.expensify} />
            <Project project={current?.zenefits} />
          </SProjectsContainer>
        </>
      ) : (
        <SProjectsContainer>
          <Project project={current?.sapling} />
          <Project project={current?.workday} />
          <Project project={current?.xero} />
          <Project project={current?.rippling} />
          <Project project={current?.expensify} />
          <Project project={current?.zenefits} />
        </SProjectsContainer>
      )}
    </SProjectsSection>
  );
}
