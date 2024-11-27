export interface FilteredCarsProps {
    makeId: string;
    year: string;
}

export type carResponse = {
  MakeId: number;
  MakeName?: string;
  VehicleTypeId?: number;
  VehicleTypeName?: string;
};
