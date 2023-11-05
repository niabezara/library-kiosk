import { createContext, useContext, useState } from "react";

interface LibraryContextProps {
  selectItem: (itemId: string) => void;
  selectedItemId: string;
}

const LibraryContext = createContext<LibraryContextProps>(
  {} as LibraryContextProps
);

export function UseLibrary() {
  return useContext(LibraryContext);
}

export function LibraryProvider({ children }: { children: React.ReactNode }) {
  const [selectedItemId, setSelectedItemId] = useState<string>("");

  const selectItem = (itemId: string) => {
    setSelectedItemId(itemId);
  };
  return (
    <LibraryContext.Provider value={{ selectItem, selectedItemId }}>
      {children}
    </LibraryContext.Provider>
  );
}
