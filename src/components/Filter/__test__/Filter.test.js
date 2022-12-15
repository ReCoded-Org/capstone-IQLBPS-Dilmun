import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../../app/store';
import FilterPage from '../../../Pages/FilterPage/FilterPage';

const MOCK_CHECK_FILTER = {
  id: 'category',
  name: 'category',
  options: [
   { value: 'man', label:'men', checked: 'false'} 
  ]
}

const MOCK_RADIO_FILTER = {
  id: 'price',
  name: 'price',
  options: [
    {value: {min: 1, max: 25}, label: '1$ - 25$', checked: false}
  ]
}

test('Filter Component Renders Correctly', () => {
  render(
    <Provider store={store}>
      <Router>
        <FilterPage checkFilterS={MOCK_CHECK_FILTER} radioFilters={MOCK_RADIO_FILTER}/>
      </Router>
    </Provider>
  );
  expect(screen.getByTestId('filter')).toMatchSnapshot();
});
