function manipulatedString(inputString,callback){
    const manipulatedString= inputString.toUpperCase();
    callback(manipulatedString)
}

function logString(manipulatedString){
    console.log(`The manupulated string is :${manipulatedString}`)
}
manipulatedString("hello world",logString)