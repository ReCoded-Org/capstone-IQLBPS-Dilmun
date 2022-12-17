import { render } from "@testing-library/react";
import Filter from '../Filter'

const show = false;
const handleFilter = () => {
    const filter = 'category'
    return filter
}
const setItem = () => {
    const item = 'car'
    return item
}

test('render filter correctly', () => {
    const container = render(
      <Filter mobileFiltersOpen={show} handleFilter={handleFilter} setItems={setItem} />
    );
    expect(container).toMatchSnapshot()
})