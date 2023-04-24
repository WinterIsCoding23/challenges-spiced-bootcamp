import BoxWithStyledComponents from "../components/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <FlexBox >
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </FlexBox>
  );
}

const FlexBox = styled.div`
  display: flex;
`;


/*
- Switch to [`pages/index.js`](./pages/index.js):
  - import `BoxWithStyledComponents` and
  - below the two `BoxWithClassName` components, render two `BoxWithStyledComponents`, one green and one black.

  BONUS
  Using styled components, can you align the four boxes horizontally by only changing [`pages/index.js`](./pages/index.js)?
- Hint: Use `display: flex` to achieve this goal.
*/
