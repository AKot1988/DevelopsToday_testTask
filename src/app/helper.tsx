export type carData = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
};
type fechedCarData = {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: carData[];
};

export const fechedDataMapper = (data: fechedCarData) => {
  let MakeNameArray: string[] = [];
  data.Results.forEach((item) => {
    if (!MakeNameArray.includes(item.MakeName)) {
      MakeNameArray.push(item.MakeName);
    }
  });
  MakeNameArray.sort((a, b) => a.localeCompare(b));
  return MakeNameArray;
};
