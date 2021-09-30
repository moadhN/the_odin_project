const getTheTitles = function (books) {
    const array = []
    for (let i of books) {
        array.push(i.title)
    };
    return array
}
// Do not edit below this line
module.exports = getTheTitles;
