let resoult = abbreviation("internationalization")

function abbreviation (x) {
    if (x.length > 9) {
    let first = x.substring(0,1)
    let last = x.substring(x.length -1)
    let number = (x.substring(1,x.length -1)).length   

    return first+number+last
    }
return x
}

console.log(resoult)
