// 5. // reverse - Reverses the given string (yes, using the built in reverse function is cheating).
// reverse('')                         // ''
// reverse('abcdef')                   // 'fedcba'


let inString = "AniLoraK"

console.log(isMirror(inString))

function isMirror(reverseStr) {

    let arr = reverseStr.split("")

    reverseStr = arr.reverse().toString().replace(/\,/g,"")

    return reverseStr
}

console.log(inString.split("").reverse().toString().replace(/\,/g,""))