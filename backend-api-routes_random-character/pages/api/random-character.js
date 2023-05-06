import Chance from "chance";

const chance = new Chance();

export default function Handler (request, response) {
    const character = {
        firstName: chance.first(),
        lastName: chance.last(),
        twitterName: chance.twitter(),
        geoHash: chance.geohash(),
    };

    response.status(200).json({character});
}



/*
- Create the file structure `pages/api/random-character.js`.
- Switch to `pages/api/random-character.js`; write a handler function which
  - responds with a `200` status code and
  - with a character object containing random information (see example below);
  - parses the character object with the .json() method.
- To create random values, use `chance`:
  - import via `import Chance from "chance";`
  - create a new instance with `const chance = new Chance();`
  - create a `character` object and use the methods of `chance` like in the example below;
  - feel free to add keys as you wish: every character should have a [twitter name](https://chancejs.com/web/twitter.html) and a [geohash](https://chancejs.com/location/geohash.html), right?

```js
// example character object with random values
const character = {
  firstName: chance.first(),
  lastName: chance.last(),
  // ... some more keys here ...
};
*/