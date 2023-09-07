import { AssetCategory } from "./Asset-Categories";
import { Warehouse, Stockroom, Bin } from "./Location";

export type Asset = {
    //Identity
    uuid: string;
    assetTag: string;
    serialNumber: string;
    model: AssetModel;
    quantity?: number;

    //Location
    warehouse: Warehouse;
    stockroom: Stockroom;
    bin: Bin;

    //Status
}

export type AssetModel = {
    uuid: string;
    manufacturer: String;
    modelNumber: String;
    modelName: String;
    category: AssetCategory;
    stackable: boolean;
}