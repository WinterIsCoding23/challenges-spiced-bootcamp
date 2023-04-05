export function getAnimal(animal) {

    if (animal.endsWith("s")) {
        return `I like ${animal}!`;
    } else if (animal) {
        return `I totally love ${animal}s!`;
    } else if (animal === undefined) {
        return "I do not like animals at all!"; 
    }
}

console.log(getAnimal("mantis"));
