// Code your solution here
function findMatching(arrayOfNames, string) {
    const filteredArray = arrayOfNames.filter(name => name.toLowerCase() === string.toLowerCase())
    return filteredArray
};

function fuzzyMatch(array, string) {
    const filter = array.filter(name => name.indexOf(string) === 0)
    return filter
};

function matchName(arrayObj, string) {
    const filter = arrayObj.filter(objName => objName.name === string) 
    return filter;
}