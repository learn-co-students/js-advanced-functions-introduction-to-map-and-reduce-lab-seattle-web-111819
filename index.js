// Your code here
const mapToNegativize = (sourceArray) => {
    let arr = []
    for (let i = 0; i < sourceArray.length; i++){
            arr.push(sourceArray[i] *= -1)
    }
    return arr
}

const mapToNoChange = (sourceArray) => {
    let arr = []
    for (let i = 0; i < sourceArray.length; i++){
            arr.push(sourceArray[i])
    }
    return arr

}

const mapToDouble = sourceArray => {
    let arr = []
    for (let i = 0; i < sourceArray.length; i++){
            arr.push(sourceArray[i] * 2)
    }
    return arr
}

const mapToSquare = sourceArray => {
    let arr = []
    for (let i = 0; i < sourceArray.length; i++){
            arr.push(sourceArray[i] * sourceArray[i] )
    }
    return arr
}

const reduceToTotal = (sourceArray, startingPoint=0) => { 
    for (let i = 0; i < sourceArray.length; i++){
            startingPoint += sourceArray[i]
    }
    return startingPoint
}

const reduceToAllTrue = sourceArray => {
    for (let i = 0; i < sourceArray.length; i++){
        if (!sourceArray[i]) return false
    }
    return true 
}

const reduceToAnyTrue = sourceArray => {
    for (let i = 0; i < sourceArray.length; i++ ) {
      if (sourceArray[i]) return true
    }
    return false
  }