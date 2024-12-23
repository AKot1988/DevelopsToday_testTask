export type carData = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
};
export type filteredCarData = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
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

export const yearsRange = YearsRange(2015, new Date().getFullYear());

export enum MainPageErrors {
  NOT_FOUND = 'not_found',
}
