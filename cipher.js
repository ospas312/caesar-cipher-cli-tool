function encode(arr, num){
    let text = arr.map(i => {
        if (i >= 65 && i <= 90) {
            return (65 + (i - 65 + num) % 26)
        }else if (i >= 97 && i <= 122) {
            return (97 + (i - 97 + num) % 26)
        }
        return i 
    })
    return text;
}

function decode(arr, num){
    let text = arr.map(i => {
        if (i >= 65 && i <= 90) {
            return (90 + (i - 90 - num) % 26)
        }else if (i >= 97 && i <= 122) {
            return (122 + (i - 122 - num) % 26)
        }
        return i 
    })
    return text;
}

module.exports = {
    encode,
    decode
}