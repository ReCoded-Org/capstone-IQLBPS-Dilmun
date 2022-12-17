import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {store} from '../../../app/store';
import LanguageButton from '../LanguageButton';
import UsFlag from '../../../assets/img/us-flag.svg'
import IraqFlag from '../../../assets/img/iraq-flag.svg';

const MOCK_LANGUAGES = [
  {
    name: 'English',
    code: 'en',
    flag: UsFlag,
    direction: 'ltr',
  },
  {
    name: 'العربية',
    code: 'ar',
    flag: IraqFlag,
    direction: 'rtl',
  }]

test('should render LanguageButton component ', () => {
  render(
    <Provider store={store}>
      <LanguageButton languages={ MOCK_LANGUAGES} />
    </Provider>
  );
  expect(screen.getByTestId('language-button')).toMatchSnapshot();
});
