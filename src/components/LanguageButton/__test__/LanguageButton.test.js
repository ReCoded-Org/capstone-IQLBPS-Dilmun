import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LanguageButton from '../LanguageButton';
import UsFlag from '../../../assets/img/us-flag.svg';
import IraqFlag from '../../../assets/img/iraq-flag.svg';

test('should render LanguageButton component ', () => {
  render(<LanguageButton />);
  const LanguageButtonElement = screen.getByTestId('language-button');
  expect(LanguageButtonElement).toBeInTheDocument();
});

test('Language Button components shloud has 2 options', async () => {
  const user = userEvent.setup();
  render(<LanguageButton />);

  await user.click(screen.getByTestId('language-botton-toggle'));

  const options = screen.getAllByTestId('language-button-option');
  expect(options).toHaveLength(2);
});

test('option 1 shloud has English title and Us Flag', async () => {
  const user = userEvent.setup();
  render(<LanguageButton />);

  await user.click(screen.getByTestId('language-botton-toggle'));

  const options = screen.getAllByTestId('language-button-option');
  await user.click(options[0]);
  const languageFromLocalStorage = localStorage.getItem('language');
  expect(languageFromLocalStorage).toBe('en');
  expect(options[0].getElementsByTagName('h3')[0]).toHaveTextContent('English');
  expect(options[0].getElementsByTagName('img')[0]).toHaveAttribute(
    'src',
    UsFlag
  );
});

test('option 1 OnClick Function shloud set the language (en) into localStorage', async () => {
  const user = userEvent.setup();
  render(<LanguageButton />);

  await user.click(screen.getByTestId('language-botton-toggle'));

  const options = screen.getAllByTestId('language-button-option');
  await user.click(options[0]);
  const languageFromLocalStorage = localStorage.getItem('language');
  expect(languageFromLocalStorage).toBe('en');
});

test('option 2 shloud has Arabic title and Iraq Flag', async () => {
  const user = userEvent.setup();
  render(<LanguageButton />);

  await user.click(screen.getByTestId('language-botton-toggle'));

  const options = screen.getAllByTestId('language-button-option');
  expect(options[1].getElementsByTagName('h3')[0]).toHaveTextContent('Arabic');
  expect(options[1].getElementsByTagName('img')[0]).toHaveAttribute(
    'src',
    IraqFlag
  );
});

test('option 2 OnClick Function shloud set the language (ar) into localStorage', async () => {
  const user = userEvent.setup();
  render(<LanguageButton />);

  await user.click(screen.getByTestId('language-botton-toggle'));

  const options = screen.getAllByTestId('language-button-option');
  await user.click(options[1]);
  const languageFromLocalStorage = localStorage.getItem('language');
  expect(languageFromLocalStorage).toBe('ar');
});
