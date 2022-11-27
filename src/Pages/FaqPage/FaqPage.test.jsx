import renderer from 'react-test-renderer';
import FAQ from './FaqPage';

test('FAQ renders correctly', () => {
  const tree = renderer.create(<FAQ />).toJSON();
  expect(tree).toMatchSnapshot();
});
