// Code your solution in this file.
const lowerCaseDrivers = drivers => drivers.map(driver => driver.toLowerCase());

function nameToAttributes (list) {
  return list.map( driver => {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];
    return { firstName: driverFirst, lastName: driverLast };
  });
}

const attributesToPhrase = drivers => drivers.map(driver => `${driver.name} is from ${driver.hometown}`);
