import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";



it('render NavBar correctly', () => {
    const {getByRole} = render( 
        <Router>
         <NavBar />
        </Router>);
        expect(getByRole("navigation")).toMatchSnapshot()
    })