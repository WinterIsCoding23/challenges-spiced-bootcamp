export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`);
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age === age);
}

export function getPeopleNamesOlderThan(people, age) {
  const filteredPeople = people.filter((person) => person.age > age);
  const result = filteredPeople.map((person) => `${person.firstName} ${person.lastName}`);
  return result;
}

export function getPeopleByLastName(people, lastName) {
  const filteredPeople = people.filter((person) => person.lastName === lastName);
  return filteredPeople;
}

export function findPersonById(people, id) {
  const filteredPeople = people.find((person) => person.id === id);
  return filteredPeople;
}

export function isAnyoneOlderThan(people, age) {
  const filteredPeople = people.some((person) => person.age > age);
  return filteredPeople;
}

export function getFullNamesSortedByAge(people) {
  const filteredPeople = people.sort((person1, person2) => person1.age - person2.age);
  const result = filteredPeople.map((person) => `${person.lastName}`);
  return result;
}
