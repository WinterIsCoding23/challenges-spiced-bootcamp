import { getAllByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
    render (
        <Player 
            name="PlayerNames"
        />);
    
    const player = screen.getByText("PlayerNames");
    const buttons = screen.getAllByRole("button");

    expect(player).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
    const handleIncreaseScore = jest.fn();
    const handleDecreaseScore = jest.fn();

    const user = userEvent.setup();

    render(<Player onDecreasePlayerScore={handleDecreaseScore} onIncreasePlayerScore={handleIncreaseScore} />);

    const decreaseScoreButton = screen.getByRole("button", {
        name: "Decrease Score",
      });
    const increaseScoreButton = screen.getByRole("button", {
        name: "Increase Score",
      });
    
      await user.click(decreaseScoreButton);
      await user.click(increaseScoreButton);

      expect(handleDecreaseScore).toHaveBeenCalledTimes(1);
      expect(handleIncreaseScore).toHaveBeenCalledTimes(1);
});


/*
- To find all buttons at once, there is `getAllByRole` which returns an array; you can then expect a specific `toHaveLength(expectedNumber)`.
- To check the callback functions of a component, remember to mock them first and then pass the mocked function to the rendered component.
- Your `user.click` does not call the mocked functions properly? Don't forget to use `await`.
*/