// Your code here
function mapToNegativize(srcArray) {
    const newArr = srcArray.map(x => x * -1)
    return newArr
}

function mapToNoChange(srcArray) {
    const newArr = srcArray.map(x => x)
    return newArr
}

function mapToDouble(srcArray) {
    const newArr = srcArray.map(x => x * 2)
    return newArr
}

function mapToSquare(srcArray) {
    const newArr = srcArray.map(x => x * x)
    return newArr
}

function reduceToTotal(srcArray, startingPoint) {
    const reducer = (acc, currentValue) => acc + currentValue;
    if (startingPoint) {
        const newTotal = srcArray.reduce(reducer, startingPoint)
        return newTotal
    }
    else {
        const newTotal = srcArray.reduce(reducer)
        return newTotal
    }
}

function reduceToAllTrue(srcArray) {
    return srcArray.reduce((acc, value) => acc && Boolean(value), true)
}

function reduceToAnyTrue(srcArray) {
    const result = srcArray.reduce((acc, value) => {if (acc === true) {return acc;}
    return Boolean(value);
    }, false)
    return result
}