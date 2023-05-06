import { useState } from "react";
import { StyledForm, StyledInputContainer } from "./Form.styled";

import { useImmer } from "use-immer";

export default function Form() {
  const [mountain, updateMountain] = useImmer({
    name: "Mount Everest",
    values: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });

  function handleNameChange(event) {
    //console.log(event.target.value);
    updateMountain((draft)=>{
      draft.name = event.target.value;
    })
  }

  function handleAltitudeChange(event) {
    //console.log(event.target.value);
    updateMountain((draft)=>{
      draft.values.altitude = event.target.value;
      }) 
  }

  function handleMountainRangeChange(event) {
    updateMountain((draft)=>{
      draft.values.mountainRange = event.target.value;
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
### Bonus: Updating with the `useImmer` hook

Updating complex states can quickly become difficult. This is where the `useImmer` hook comes in handy.

Refactor the `handle` functions with the help of the `useImmer` hook.

You can use the following hints as guideline:

- `immer` and `useImmer` are already installed, so you just have to import the `useImmer` hook into the [`Form`](components/Form/index.js) component.
- Update the state declaration: change `setMountain` to `updateMountain` and `useState({...})` to `useImmer({...})`.
- Rewrite the `handle` functions: use the `draft` object and dot-notation to reach the keys to which you want to assign a new value.


### Updating with Spread Syntax

Write the logic for `handleNameChange`, `handleAltitudeChange`, and `handleMountainRangeChange`.

- Check the structure of the `mountain` object in state. It contains two keys: the `name` as string and the `values` object.
- Use `setMountain` to assign `event.target.value` to its corresponding key in the state. Make sure to create a copy of the `mountain` object when setting a new state.
- Note that the `altitude` and `mountainRange` keys are not at the top level of the `mountain` object; looks like you need to make a copy of this second level as well before you assign any new value.

> ✨ You should now be able to change the values of the input fields and see these changes in the output area at the bottom.
*/