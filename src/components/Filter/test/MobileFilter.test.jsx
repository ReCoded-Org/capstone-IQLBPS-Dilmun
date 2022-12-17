import { render } from '@testing-library/react';
import MobileFilter from '../MobileFilter';

const MOCK_CHECK_FILTER = [
  {
    id: 'category',
    name: 'category',
    options: [{ value: 'man', label: 'men', checked: 'false' }],
  },
  {
    id: 'category',
    name: 'category',
    options: [{ value: 'man', label: 'men', checked: 'false' }],
  },
];

const MOCK_RADIO_FILTER = [
  {
    id: 'price',
    name: 'price',
    options: [
      { value: { min: 1, max: 25 }, label: '1$ - 25$', checked: false },
    ],
  },
  {
    id: 'price',
    name: 'price',
    options: [
      { value: { min: 1, max: 25 }, label: '1$ - 25$', checked: false },
    ],
  },
];
const show = false;

test('render mobile filter correctly', () => {
  const container = render(
    <MobileFilter
      mobileFiltersOpen={show}
      checkFilters={MOCK_CHECK_FILTER}
      radioFilters={MOCK_RADIO_FILTER}
    />
  );
  expect(container).toMatchSnapshot();
});
