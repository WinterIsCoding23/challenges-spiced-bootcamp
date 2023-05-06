import styled from "styled-components";

const StyledBox = styled.div`
        width: 100px;
        height: 100px;
        
        margin: 2rem;
       
        &:hover {
        background-color: red;
        }
        
        background-color: ${( {isBlack} ) => (isBlack ? "black" : "green")};
                
    `

export default function BoxWithStyledComponents({ isBlack }){
    return (
        <StyledBox isBlack={isBlack} />
    )
}

/*
- It should export a function which
  - accepts a prop `isBlack`
  - returns a `div` which accepts the `isBlack` prop.
- Inside of the same file, create a styled component called `StyledBox` which features a `div`.
  - Inside of the return statement of your function, replace the `div` with `StyledBox`.
  - `StyledBox` should have the same styling as the `BoxWithClassName` component.
  - Check whether the `isBlack` prop is true and set the correct `background-color` accordingly.
  - How could you set the styling for the hover effect again?

BONUS:
Did you notice you wrote a component `BoxWithStyledComponents` that has only the purpose to return an instance of `StyledBox` and passes props? This is not necessary! Such a wrapping component around a styled component would be required if you would return multiple child elements or would add logic to the component.

Try to refactor the code, so that `BoxWithStyledComponents.js` includes only one component, which is created with `styled-components` and is the default export.
*/
