export interface FilteredCarsProps {
    make: string;
    year: string;
}

export type carResponse = {
  MakeId: number;
  MakeName?: string;
  VehicleTypeId?: number;
  VehicleTypeName?: string;
};
