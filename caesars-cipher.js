function rot13(str) {
  //(A-Z) == (65-90)
  let arr = str.split('')

  function conversor (algo) {
    let numero = algo.charCodeAt()
    if (numero - 13 > 64) {
      numero = numero - 13
    } else if (numero - 13 < 91){
      numero = numero + 13
    }
    return String.fromCodePoint(numero)
    
  } 

  let cesar = []
  arr.forEach(elem => {
    if (/\w/.test(elem)) {
      cesar.push(conversor(elem))
    } else {
      cesar.push(elem)
    }
  })

  let recod = cesar.join("")

  //console.log(cesar)
  console.log(recod)
  return recod;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!")