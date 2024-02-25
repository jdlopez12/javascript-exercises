const removeFromArray = function(arr, ...toRemove) {

    let removedArr = arr.filter(item => !toRemove.includes(item));
    return removedArr;
};

// Do not edit below this line
module.exports = removeFromArray;
