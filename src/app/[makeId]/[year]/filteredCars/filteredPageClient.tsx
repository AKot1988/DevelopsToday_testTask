'use client';

import { FC } from 'react';
import { filteredCarData } from '../../../helper';

type filteredPageClientProps = {
  data: filteredCarData;
};

const FilteredPageClient: FC<filteredPageClientProps> = ({
  data,
}: filteredPageClientProps) => {
  return (
    <div>
      <p>
        Car Manufacturer: {data.Make_Name} <br />
        details:
      </p>
      <p>Model name: {data.Model_Name}</p>
      <p>Model ID: {data.Model_ID}</p>
      <p>Manufacturer ID: {data.Make_ID}</p>
    </div>
  );
};

export default FilteredPageClient;
