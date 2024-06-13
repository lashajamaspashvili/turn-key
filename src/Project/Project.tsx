import { TurnKeyItem } from 'src/types';
import {
  LeftContent,
  SDescription,
  SPhotoContainer,
  SProject,
  STitle
} from './SProject.styled';
import { Switch } from 'antd';
import { useContext } from 'react';
import { TurnKeyContext } from 'src/context';

export function Project({
  project
}: {
  project?: TurnKeyItem['projects'][number];
}) {
  const { items, setItems } = useContext(TurnKeyContext);

  function handleSwitch(value: boolean) {
    const activeIndex = items?.findIndex((item) => item?.active);
    const projIndex = items[activeIndex].projects?.findIndex(
      (proj) => proj?.id === project?.id
    );

    const newItems = [...items];
    newItems[activeIndex].projects[projIndex].active = value;

    setItems(newItems);
  }

  return (
    <SProject active={project?.active}>
      <LeftContent>
        <SPhotoContainer>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROilTPHDFFMUm0eETL8ENzSJNdsTpGqGpPug&s'
            alt='Gigi Hadid'
          />
        </SPhotoContainer>
        <div>
          <STitle>{project?.title}</STitle>
          <SDescription>{project?.section}</SDescription>
        </div>
      </LeftContent>
      <Switch
        size='small'
        checked={project?.active}
        onChange={(val) => handleSwitch(val)}
      />
    </SProject>
  );
}
