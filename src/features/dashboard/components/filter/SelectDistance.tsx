import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';

import { selectDistance, changeDistance, allFilterType } from 'store/slices';
interface SelectDistanceProps {
  type: allFilterType;
}

const SelectDistance = ({ type }: SelectDistanceProps) => {
  const dispatch = useDispatch();
  const distance = useSelector(selectDistance(type));

  const getFilterValue = (value: number) => marks.filter((item) => item.filterValue === value);
  const getMarkValue = (value: number) => marks.filter((item) => item.value === value);

  return (
    <div className="flex flex-col w-[340px] h-40 rounded-3xl p-5 bg-white border border-primary">
      <h2>Distance</h2>
      <div className="m-2">
        <Slider
          size="small"
          value={getFilterValue(distance)[0].value}
          defaultValue={getFilterValue(distance)[0].value}
          color="primary"
          onChange={(_, newValue) => {
            console.log('distance ', _, newValue);
            dispatch(changeDistance({ type: type, value: getMarkValue(Number(newValue))[0].filterValue }));
          }}
          step={null}
          min={0}
          max={40}
          marks={marks}
          aria-label="Custom marks"
        />
      </div>
    </div>
  );
};

export default SelectDistance;

const marks = [
  {
    value: 0,
    label: '1 km',
    filterValue: 1,
  },
  {
    value: 10,
    label: '5 km',
    filterValue: 5,
  },
  {
    value: 20,
    label: '10 km',
    filterValue: 10,
  },
  {
    value: 30,
    label: '20 km',
    filterValue: 20,
  },
  {
    value: 40,
    label: '50 km',
    filterValue: 50,
  },
];
