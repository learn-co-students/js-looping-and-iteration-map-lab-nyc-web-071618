// Code your solution in this file.
function lowerCaseDrivers(drivers){
    function lowercaseDriver(driver){
        return driver.toLowerCase();
    }
    return drivers.map(lowercaseDriver);
}

function nameToAttributes(drivers){
    function makeAttributes(driver){
        const firstAndLast = driver.split(" ")
        return Object.assign({},{'firstName':firstAndLast[0],'lastName':firstAndLast[1]});
    }
    return drivers.map(makeAttributes);
}

function attributesToPhrase(drivers){
    function makeString(driver){
        return `${driver.name} is from ${driver.hometown}`;
    }
    return drivers.map(makeString);
}