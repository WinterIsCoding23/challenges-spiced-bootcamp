import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render (
    <GameForm 
      onCreateGame
    />)  
  const inputFields = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(inputFields).toHaveLength(2);
  expect(button).toBeInTheDocument();
});


test("renders a form with the accessible name 'Create a new game'", () => {
  render (
    <GameForm 
      onCreateGame
    />)
  const gameForm = screen.getByRole("form");
  expect(gameForm).toBeInTheDocument();

  const header = screen.getByText("Create a new game");
  expect(header).toBeInTheDocument();
});


test("submits the correct form data when every field is filled out", async () => {
  const mockHandleSubmit = jest.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={mockHandleSubmit} />)    

  const gameName = screen.getByLabelText("Name of game");
  const playerNames = screen.getByLabelText("Player names, separated by comma"); //getAllByText returns an array
  const createGameButton = screen.getByRole("button");

  await user.type(gameName, "Dodelido");
  await user.type(playerNames, "John Doe, Jane Doe");
  await user.click(createGameButton);

  expect(mockHandleSubmit).toHaveBeenCalledWith({
    nameOfGame:"Dodelido",
    playerNames: ["John Doe", "Jane Doe"],
  });
});

test("does not submit form if one input field is left empty", async () => {
  const mockHandleSubmit = jest.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={mockHandleSubmit} />)  

  const gameName = screen.getByLabelText("Name of game");
  const playerNames = screen.getByLabelText("Player names, separated by comma"); 
  const createGameButton = screen.getByRole("button");

  await user.type(gameName, "Dodelido");
  await user.click(createGameButton);

  expect(mockHandleSubmit).not.toHaveBeenCalled();
});


/*
- To check for the accessible name of the `GameForm` component, note that the accessible role of the HTML `form` component is "form".
- To check the submitted form data, make sure to
  - mock the submit handle function first;
  - `await` all `userEvent`s
  - expect the mocked submit function `toHaveBeenCalledWith(submittedDataObject)`.
- To find the correct form of the submitted data you are expecting, you might have to check the call of `onCreateGame` in the [`GameForm.js`](components/GameForm/index.js) file.
*/