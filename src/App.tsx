import { SContainer, SDescription, SHeader } from './SApp.styled';
import { RadioGroup } from './RadioGroup';

function App() {
  return (
    <SContainer>
      <SHeader>Easy Turn-Key Integration</SHeader>
      <SDescription>
        Increase job satisfaction, improve engagement, decrease burnout and
        lower payroll liability by reimagining what employees can do with their
        PTO.
      </SDescription>
      <RadioGroup />
    </SContainer>
  );
}

export default App;
