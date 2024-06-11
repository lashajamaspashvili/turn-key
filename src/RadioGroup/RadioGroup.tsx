import { Radio, RadioChangeEvent } from 'antd';
import { SRadioGroup } from './SRadioGroup.styled';
import { useContext } from 'react';
import { TurnKeyContext } from 'src/context';

export function RadioGroup() {
  const { items, setItems } = useContext(TurnKeyContext);

  function changeBusiness(e: RadioChangeEvent) {
    const beforeIndex = items?.findIndex((item) => item?.active);
    const newIndex = items?.findIndex((item) => item?.id === e?.target?.value);

    const newItems = [...items];
    newItems[beforeIndex].active = false;
    newItems[newIndex].active = true;

    setItems(newItems);
  }

  return (
    <SRadioGroup>
      <Radio.Group
        onChange={(e) => changeBusiness(e)}
        value={items?.filter((item) => item?.active)?.[0]?.id}
      >
        {items?.map((item) => (
          <Radio.Button key={item?.id} value={item?.id}>
            {item?.title}
          </Radio.Button>
        ))}
      </Radio.Group>
    </SRadioGroup>
  );
}
