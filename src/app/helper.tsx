export type carData = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
};

export type fechedCarData = {
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


export const YearsRange = (startYear: number, endYear: number) => {
  let years: string[] = [];
  for (let i = startYear; i <= endYear; i++) {
    years.push(i.toString());
  }
  return years;
}

export enum MainPageErrors {
  NOT_FOUND = 'not_found',
}
