import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const [savedSpells, setSavedSpells] = useState([]);

  useEffect(() => {
    savedSpells.length > 0 && localStorage.setItem('spells', JSON.stringify(savedSpells));
  }, [savedSpells]);

  useEffect(() => {
    const spells = localStorage.getItem('spells');
    spells && setSavedSpells(JSON.parse(spells));
  }, []);

  return <GlobalContext.Provider value={{ savedSpells, setSavedSpells }}>{children}</GlobalContext.Provider>;
}
