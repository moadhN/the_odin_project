const date = new Date;
const currentYear = date.getFullYear()


const findTheOldest = function ([person, ...array], oldestPerson = { name: '', age: 0 }) {
    return person === undefined ? oldestPerson : findTheOldest(array, ageCalc(person) > oldestPerson.age ? { name: person.name, age: ageCalc(person) } : oldestPerson)
};

function ageCalc(list) {
    const year = list.yearOfDeath ? list.yearOfDeath : currentYear;

    let result = year - list.yearOfBirth
    return result
}



// Do not edit below this line
module.exports = findTheOldest;
