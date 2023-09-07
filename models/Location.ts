export type Warehouse = {
    uuid: string;
    name: string;
}

export type Stockroom = {
    uuid: string;
    warehouse: Warehouse;
    name: string;
}

export type Bin = {
    uuid: string;
    stockroom: Stockroom;
    name: string;
}