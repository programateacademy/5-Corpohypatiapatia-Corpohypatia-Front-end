import React from "react";
import "@testing-library/jest-dom/extend-expect"
import {render} from "@testing-library/react"
import Home from "../pages/home/Home"

test("render content", ()=>{
    const component = render(<Home/>)
    component.container.querySelector("h1")
    expect(heading).toBeInTheDocument();
})

describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
      expect(2 + 2).toBe(4);
    });
  });