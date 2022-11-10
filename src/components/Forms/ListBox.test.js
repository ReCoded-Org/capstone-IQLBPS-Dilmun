import renderer from 'react-test-renderer';
import { ListBox } from '.'

const options = [
    'test',
    'test1',
    'test2',
    'test3',
];

test('ListBox renders correctly', () => {
    const tree = renderer.create(<ListBox options={options} />).toJSON();
    expect(tree).toMatchSnapshot();
});
