import React from "react";
import DiffSection from "../DiffSection";
import { render } from "@testing-library/react";

//const Diff = require("../DiffSection");

test("DiffSection renders without crashing " , () => {
    const comp = render(<DiffSection /> );
    expect(comp).toBeTruthy();
    expect(comp).toMatchSnapshot;
    

})