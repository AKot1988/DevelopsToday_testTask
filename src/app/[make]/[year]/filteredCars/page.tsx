import { FC } from 'react';
import { FilteredCarsProps, carResponse } from './helper';


const FilterdCarsPage: FC<{ params: FilteredCarsProps }> = async({params}) => {
  const { make, year } = params as FilteredCarsProps;
  console.log ('filteredCarPage', make, year);
  return <div>Filtered Cars Page</div>;
};

export default FilterdCarsPage;

export async function generateStaticParams() {
  const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
  const posts = await fetch(
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
  ).then((res) => res.json());

  const params = posts.Results.flatMap((post: carResponse) => {
    if (!post.MakeName) {

    }
    return years.map((year) => ({
      make: post.MakeName.toLowerCase(), // Переводимо make до нижнього регістру (для URL)
      year: year.toString(),
    }));
  });

  return params;
}