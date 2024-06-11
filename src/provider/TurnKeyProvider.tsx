import { useState } from 'react';
import { TurnKeyItem } from 'src/types';
import { TurnKeyItems } from './startingData';
import { TurnKeyContext } from 'src/context';

export const TurnKeyProvider = ({ children }: React.PropsWithChildren) => {
  const [items, setItems] = useState<TurnKeyItem[]>(TurnKeyItems);

  return (
    <TurnKeyContext.Provider
      value={{
        items,
        setItems
      }}
    >
      {children}
    </TurnKeyContext.Provider>
  );
};
