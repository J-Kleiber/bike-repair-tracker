// src/features/repairs/RepairContext.tsx
import { createContext, useContext, useState  } from 'react';
import { v4 as uuidv4 } from 'uuid'; // we'll add this package next
import type {ReactNode} from 'react'
import type { Repair, RepairContextType } from './types.ts';

const RepairContext = createContext<RepairContextType | undefined>(undefined);

export function RepairProvider({ children }: { children: ReactNode }) {
  const [repairs, setRepairs] = useState<Repair[]>([]); // starts empty

  const addRepair = (newRepair: Omit<Repair, 'id'>) => {
    setRepairs((prev) => [
      ...prev,
      {
        ...newRepair,
        id: uuidv4(),                    // unique ID
        dateAdded: new Date().toISOString(),
      },
    ]);
  };

  return (
    <RepairContext.Provider value={{ repairs, addRepair }}>
      {children}
    </RepairContext.Provider>
  );
}

// Custom hook to use it safely (prevents undefined errors)
export function useRepairContext() {
  const context = useContext(RepairContext);
  if (!context) {
    throw new Error('useRepairContext must be used within a RepairProvider');
  }
  return context;
}