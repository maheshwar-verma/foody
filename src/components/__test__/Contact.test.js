import { render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"
import { screen } from "@testing-library/react";
describe("tests for Contact component",()=>{

     it("Should load contact us component",()=>{
          render(<Contact/>);
          const heading=screen.getByRole("heading");
          expect(heading).toBeInTheDocument();
     });
     it("should load button inside Contact component",()=>{
         render(<Contact/>);
         //Qureying
         const button=screen.getByPlaceholderText("name");
           //Assertion
           expect(button).toBeInTheDocument();
     });
     it("should load all input boxes inside Contact component",()=>{
          render(<Contact/>);
          const input=screen.getAllByRole("textbox");
        //  console.log(input);
          expect(input.length).toBe(2);
     });
});