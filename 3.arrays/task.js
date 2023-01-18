function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((number, index) => number === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(element => element.gender === gender).reduce((accumulator, item, index, array) => {
        accumulator += item.age;
        if(index === array.length - 1) {
            return accumulator / array.length;
        }
        return accumulator;
    }, 0);
    return result;
}