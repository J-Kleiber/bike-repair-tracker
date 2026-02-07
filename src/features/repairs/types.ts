// like in C# an interface defines a contract, what has to be defined
// but Objects can be created right away from that interface withour creating one 
export interface Repair{
    id: string;
    partname: string;
    cost: number;
    kmAtInstall: number;
    dateAdded?: string
}

// this interface takes an RepairArray and has a function which takes an parameter from type Repair
// without an id 
export interface RepairContextType {
    repairs: Repair[];
    addRepair: (repair: Omit<Repair,'id'>) => void;
}