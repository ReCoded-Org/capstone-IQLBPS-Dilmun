import { render , cleanup } from "@testing-library/react";

import NavBar from "./NavBar";

describe('NavBar',()=>{
    afterEach(()=> cleanup());

    test('navigation rendering',()=>{
        const{getByTestId} = render(<NavBar />)
        const navigation = getByTestId('validation');
        expect(navigation).toBeInTheDocument();
    })
})