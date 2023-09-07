export type AssetCategory = {
    name: string;
    friendlyName: string;
    stackable: boolean;
    audience: string;
};

export const AssetCategories: AssetCategory[] = [
    {name: "Laptop", friendlyName: "Laptop", stackable: false, audience: "Users"},
    {name: "Monitor", friendlyName: "Monitor", stackable: false, audience: "Users"},
    {name: "Keyboard", friendlyName: "Keyboard", stackable: true, audience: "Users"},
    {name: "Mouse", friendlyName: "Mouse", stackable: true, audience: "Users"},
    {name: "DockingStation", friendlyName: "Docking Station", stackable: false, audience: "Users"},
    {name: "Headset", friendlyName: "Headset", stackable: true,audience: "Users"},
    {name: "Phone", friendlyName: "Phone", stackable: false, audience: "Users"},
    {name: "Tablet", friendlyName: "Tablet", stackable: false, audience: "Users"},
    {name: "Printer", friendlyName: "Printer", stackable: false, audience: "Users"},
    {name: "Scanner", friendlyName: "Scanner", stackable: false, audience: "Users"},
    {name: "Server", friendlyName: "Server", stackable: false, audience: "Infrastructure"},
    {name: "Switch", friendlyName: "Switch", stackable: false, audience: "Infrastructure"},
    {name: "SecurityToken", friendlyName: "Security Token", stackable: true, audience: "Users"}, //Yubikey, RSA, etc.
    {name: "CellularModem", friendlyName: "Cellular Modem", stackable: false, audience: "Equipment"},
    {name: "Router", friendlyName: "Router", stackable: false, audience: "Infrastructure"},
    {name: "USB Camera", friendlyName: "USB Camera", stackable: true, audience: "Users"},

];