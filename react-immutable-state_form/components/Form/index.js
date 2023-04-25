import { useState } from "react";
import { StyledForm, StyledInputContainer } from "./Form.styled";

export default function Form() {
  const [mountain, setMountain] = useState({
    name: "Mount Everest",
    values: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });

  function handleNameChange(event) {
    //console.log(event.target.value);
    setMountain({
      ...mountain, name: event.target.value,
    })
  }

  function handleAltitudeChange(event) {
    //console.log(event.target.value);
    setMountain({
      ...mountain, 
        values: {
          ...mountain.values, 
            altitude: event.target.value,
        } 
    })
  }

  function handleMountainRangeChange(event) {
    setMountain({
      ...mountain, 
        values: {
          ...mountain.values, 
          mountainRange: event.target.value,
        }
    })
  }

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input id="name" value={mountain.name} onChange={handleNameChange} />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={handleAltitudeChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={handleMountainRangeChange}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}


/*
### Updating with Spread Syntax

Write the logic for `handleNameChange`, `handleAltitudeChange`, and `handleMountainRangeChange`.

- Check the structure of the `mountain` object in state. It contains two keys: the `name` as string and the `values` object.
- Use `setMountain` to assign `event.target.value` to its corresponding key in the state. Make sure to create a copy of the `mountain` object when setting a new state.
- Note that the `altitude` and `mountainRange` keys are not at the top level of the `mountain` object; looks like you need to make a copy of this second level as well before you assign any new value.

> ✨ You should now be able to change the values of the input fields and see these changes in the output area at the bottom.
*/