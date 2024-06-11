import { Radio } from 'antd';
import { SRadioGroup } from './SRadioGroup.styled';

export function RadioGroup() {
  return (
    <SRadioGroup>
      <Radio.Group onChange={() => console.log('lasha')} value={'1'}>
        <Radio.Button value='1'>Horizontal</Radio.Button>
        <Radio.Button value='2'>Vertical</Radio.Button>
        <Radio.Button value='3'>Vertical</Radio.Button>
      </Radio.Group>
    </SRadioGroup>
  );
}
