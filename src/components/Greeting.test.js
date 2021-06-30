import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting Component (Test Suite)", () => {
  test("renders Hello World as a text (Test)", () => {
    //Arrange
    render(<Greeting />);
    //Act

    //Assert
    const helloWorldElement = screen.getByText("Welcome", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders Welcome is the button is clicked (Test)", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByText("Change Text", { exact: false });
    userEvent.click(buttonElement);

    //Assert
    const helloWorldElement = screen.getByText("Changed", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("not renders Welcome is the button is clicked (Test)", () => {
    //Arrange
    render(<Greeting />);
    //Act

    //Assert
    const outputElement = screen.queryByText("Changed", { exact: false });
    expect(outputElement).toBeNull();
  });
});
