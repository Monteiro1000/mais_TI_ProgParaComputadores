let a = 10;
let b = 7;
let c = 3;


function media (x, y, z){
    let media = (a + b + c) / 3;

    if (a > media && b > media) {
        return `Os valores ${a} e ${b} são maiores que a média? ${media}`
    }else if(b > media || c > media ) {
        return `Os valores ${b} e ${c} são maiores que a média? ${media}`

    }

}

console.log(media(a, b, c));
