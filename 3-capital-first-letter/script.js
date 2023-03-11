const capitalFirstLetter = (string) => {
    let firstLetter = string.charCodeAt(0);
    if(firstLetter >= 97 && firstLetter <= 122) {
        firstLetter - 32
    }

    let capitalCharCode = String.fromCharCode(firstLetter);
    for(let i = 1; i < string.length; i++){
        capitalCharCode += string[i]
    }

    return capitalCharCode
}

console.log(capitalFirstLetter('6 hello world'));


//? number bug !!!!!!!