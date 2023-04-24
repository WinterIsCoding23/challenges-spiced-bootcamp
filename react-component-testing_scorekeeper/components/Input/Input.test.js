import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
    render(<Input 
        labelText="Name of game" 
        placeholder="e.g. Dodelido"
        name="nameOfGame"
        required 
        />);

    const nameOfGameInput = screen.getByLabelText("Name of game");
    //const nameOfGameInput = screen.getByRole("input", {name: /nameOfGame/i});
    //const nameOfGameInput = screen.getByText(/name of game/i);
    //const nameOfGameInput = screen.queryByText(/name of game/i);
    expect (nameOfGameInput).toBeInTheDocument();

    expect (nameOfGameInput).toHaveAttribute("placeholder", "e.g. Dodelido");
    expect (nameOfGameInput).toHaveAttribute("name", "nameOfGame");
    expect (nameOfGameInput).toHaveAttribute("type", "text");
    expect (nameOfGameInput).toHaveAttribute("required");
    
    
});

test("calls callback on every user input", async () => {
    const handleUserInput = jest.fn();
    //const user = userEvent.setup();

    render (<Input onChange={handleUserInput} />);
    const inputHandler = screen.getByRole("textbox");

    await userEvent.type(inputHandler, "hello");   

    expect(handleUserInput).toHaveBeenCalledTimes(5);
});



// - To check for attributes like `placeholder` or `name`, you can use the matcher `toHaveAttribute(attributeName, value)`.
// - The `Input` component receives an `onChange` callback; in order to test it, remember that you have to mock if first.
// - You can check how often a function has been called with `toHaveBeenCalledTimes(numberOfExpectedCalls)`.
