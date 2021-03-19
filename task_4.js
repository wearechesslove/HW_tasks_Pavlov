// 7. // isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
// isPalindrome('')                                // true
// isPalindrome('abcdcba')                         // true
// isPalindrome('abcd')                            // false
// isPalindrome('A man a plan a canal Panama')     // true

let str = 'A man a plan a canal Panama'
console.log(isPalindrome(str))

function isPalindrome (str) {

    let arr = str.split("")
    let strRev = arr.reverse().join("")

    return strRev === str
}