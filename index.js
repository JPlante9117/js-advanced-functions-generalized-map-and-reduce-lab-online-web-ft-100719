// Add your functions here
function map(array, func){
    const newArr = []
    array.forEach(item =>{newArr.push(func(item))})
    return newArr
}

function reduce(array, func, startingVal){
    let returnVal = startingVal ? startingVal : array[0]
    let i = startingVal ? 0 : 1
    for(; i < array.length; i++){
        returnVal = func(array[i], returnVal)
    }
    return returnVal
}