import { createContext } from 'react';
import { TurnKeyItem } from 'src/types';

export type TurnKeyContextProps = {
  items: TurnKeyItem[];
  setItems: React.Dispatch<React.SetStateAction<TurnKeyItem[]>>;
};

export const TurnKeyContext = createContext<TurnKeyContextProps>({
  items: [],
  setItems: () => {}
});
