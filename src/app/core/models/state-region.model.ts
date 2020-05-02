export interface RegionModel {
    districtData: DistrictDataModel[];
    statecode: string;
}

export interface DistrictDataModel {
    recovered: number;   
    confirmed: number;
    active: number;
    deceased: number;
    notes: string;
    name: string; 
    delta: DeltaModel[]; 
}

export interface DeltaModel {
    confirmed: number;
    deceased: number;
    recovered: number;
}
