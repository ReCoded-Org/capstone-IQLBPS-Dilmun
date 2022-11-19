import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {store} from '../../../app/store';

import LanguageButton from '../LanguageButton';

test('should render LanguageButton component ', () => {
  render(
    <Provider store={store}>
      <LanguageButton />
    </Provider>
  );
  expect(screen.getByTestId('language-button')).toMatchSnapshot();
});
