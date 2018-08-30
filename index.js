// Code your solution in this file.
function lowerCaseDrivers(driverArray) {
  const lowerCases = []
  for (element of driverArray) {
    lowerCases.push(element.toLowerCase());
  }
  return lowerCases;
}

function nameToAttributes(driverArray) {
  const objectArray = []
  for (element of driverArray) {
    lociOfSpace = element.indexOf(" ");
    let object = {firstName: element.slice(0, lociOfSpace), lastName: element.slice(lociOfSpace + 1, element.length)};
    objectArray.push(object);
  }
  return objectArray;
}

function attributesToPhrase(driverArray) {
  const phraseArray = []
  for (object of driverArray) {
    phraseArray.push(`${object.name} is from ${object.hometown}`)
  }
  return phraseArray;
}
