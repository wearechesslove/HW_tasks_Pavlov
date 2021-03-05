let resoult = parseSentence("wHY DO wE NEED cAPS lOCK?")
// console.log(input.value);

function parseSentence (sentence) {
let wordArr = sentence.split(' ')

let resoultSentence = ''

for (let i = 0; i < wordArr.length; i++) {
  resoultSentence = resoultSentence + ' ' + checkCase(wordArr[i])

}

return resoultSentence
}

function checkCase(x) {

  let first
  let other
  let strArr = x.split('')

  first = isUpperCase(strArr[0])

  for (let i = 0; i < strArr.length; i++) {
    if (i !== 0) {
      if (isUpperCase(strArr[i])) {
        other = isUpperCase(strArr[i])
      }
      else {
        other = isUpperCase(strArr[i])
        break
      }

    }
  }
  if (other) {
   return changeCase(x, first)
  }
  return x
}

function changeCase (str, firstSymbol) {
  if (!firstSymbol){
    let lowerCaseStr = str.toLowerCase() 
    let head = lowerCaseStr.substring(0, 1).toUpperCase()
    let body = lowerCaseStr.substring(1, lowerCaseStr.length)
    return head+body
  }
return str.toLowerCase()
}

function isUpperCase(ch) {
  if (ch === ch.toUpperCase()) {
    return true
  } else {
    return false
  }
}

console.log(resoult)
