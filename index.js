// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(name){
    return name.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(name) {
    const first = name.split(' ')[0];
    const last = name.split(' ')[1];

    return {firstName: first, lastName: last};
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
